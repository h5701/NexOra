import { NextResponse } from "next/server";
import {
  CHAT_MAX_HISTORY_MESSAGES,
  CHAT_MAX_MESSAGE_LENGTH,
  CHAT_RATE_LIMIT_MAX,
  CHAT_RATE_LIMIT_WINDOW_MS,
  GROQ_API_URL,
  GROQ_CHAT_MODEL,
} from "@/lib/chatbot/constants";
import { buildSystemPrompt } from "@/lib/chatbot/prompt";
import { checkRateLimit, pruneRateLimitBuckets } from "@/lib/chatbot/rate-limit";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
  sessionId?: string;
};

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function sanitizeMessages(messages: ChatMessage[]): ChatMessage[] {
  return messages
    .filter(
      (message) =>
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string"
    )
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, CHAT_MAX_MESSAGE_LENGTH),
    }))
    .filter((message) => message.content.length > 0)
    .slice(-CHAT_MAX_HISTORY_MESSAGES);
}

export async function POST(request: Request) {
  pruneRateLimitBuckets();

  try {
    const body = (await request.json()) as ChatRequestBody;
    const sessionId =
      typeof body.sessionId === "string" ? body.sessionId.slice(0, 64) : "anon";
    const ip = getClientIp(request);
    const rateKey = `${ip}:${sessionId}`;

    const rate = checkRateLimit(
      rateKey,
      CHAT_RATE_LIMIT_MAX,
      CHAT_RATE_LIMIT_WINDOW_MS
    );

    if (!rate.allowed) {
      return NextResponse.json(
        {
          error: "Too many messages in a short time. Please wait a moment and try again.",
        },
        {
          status: 429,
          headers: rate.retryAfterSec
            ? { "Retry-After": String(rate.retryAfterSec) }
            : undefined,
        }
      );
    }

    const messages = sanitizeMessages(body.messages ?? []);
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json(
        { error: "A user message is required." },
        { status: 400 }
      );
    }

    if (lastMessage.content.length > CHAT_MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be under ${CHAT_MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chat is temporarily unavailable. Please use the contact form." },
        { status: 503 }
      );
    }

    const groqResponse = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_CHAT_MODEL,
        stream: true,
        temperature: 0.5,
        max_tokens: 1024,
        messages: [
          { role: "system", content: buildSystemPrompt() },
          ...messages,
        ],
      }),
    });

    if (!groqResponse.ok || !groqResponse.body) {
      return NextResponse.json(
        { error: "Assistant is temporarily unavailable. Please try again or email us." },
        { status: 502 }
      );
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = groqResponse.body!.getReader();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() ?? "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed.startsWith("data:")) continue;

              const data = trimmed.slice(5).trim();
              if (data === "[DONE]") {
                controller.close();
                return;
              }

              try {
                const parsed = JSON.parse(data) as {
                  choices?: Array<{ delta?: { content?: string } }>;
                };
                const token = parsed.choices?.[0]?.delta?.content;
                if (token) controller.enqueue(encoder.encode(token));
              } catch {
                // Skip malformed SSE chunks
              }
            }
          }

          controller.close();
        } catch {
          controller.enqueue(
            encoder.encode(
              "\n\nSorry — I hit a snag. Email us at hello@nexoradigitalstudio.uk or use the contact form."
            )
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
