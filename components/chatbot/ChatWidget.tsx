"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
import { CHAT_STARTER_PROMPTS } from "@/lib/chatbot/constants";
import type { ChatMessage } from "@/components/chatbot/types";

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createSessionId() {
  return `sess-${Math.random().toString(36).slice(2, 12)}`;
}

/** Render assistant markdown links as Next.js links. */
function MessageContent({ content }: { content: string }) {
  const parts = content.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <span className="whitespace-pre-wrap break-words">
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <span key={index}>{part}</span>;

        const [, label, href] = match;
        const isExternal = href.startsWith("http");

        if (isExternal) {
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--color-cyan)] underline decoration-[color-mix(in_srgb,var(--color-cyan)_35%,transparent)] underline-offset-2"
            >
              {label}
            </a>
          );
        }

        return (
          <Link
            key={index}
            href={href}
            className="font-medium text-[var(--color-cyan)] underline decoration-[color-mix(in_srgb,var(--color-cyan)_35%,transparent)] underline-offset-2"
          >
            {label}
          </Link>
        );
      })}
    </span>
  );
}

function TypingIndicator() {
  return (
    <div className="chat-typing flex items-center gap-1 px-1" aria-hidden="true">
      <span className="chat-typing-dot" />
      <span className="chat-typing-dot" />
      <span className="chat-typing-dot" />
    </div>
  );
}

export default function ChatWidget() {
  const panelId = useId();
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId] = useState(createSessionId);

  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    if (open) scrollToBottom();
  }, [messages, open, streaming, scrollToBottom]);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(focusTimer);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        launcherRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    panel.addEventListener("keydown", onTab as unknown as EventListener);
    return () =>
      panel.removeEventListener("keydown", onTab as unknown as EventListener);
  }, [open, messages.length]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;

    setError(null);
    setInput("");

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: trimmed,
    };

    const assistantId = createId();
    const history = [...messages, userMessage];

    setMessages([
      ...history,
      { id: assistantId, role: "assistant", content: "" },
    ]);
    setStreaming(true);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error ?? "Assistant unavailable right now.");
      }

      if (!response.body) throw new Error("No response stream.");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        assistantText += decoder.decode(value, { stream: true });
        const snapshot = assistantText;

        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId
              ? { ...message, content: snapshot }
              : message
          )
        );
      }

      if (!assistantText.trim()) {
        throw new Error("Empty response.");
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;

      const fallback = `Sorry — I'm having trouble right now. Email us at ${CONTACT_EMAIL} or [start a project](/contact).`;
      setMessages((current) =>
        current.map((message) =>
          message.id === assistantId
            ? {
                ...message,
                content:
                  err instanceof Error && err.message
                    ? `${err.message} You can also email ${CONTACT_EMAIL}.`
                    : fallback,
              }
            : message
        )
      );
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const onInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  };

  const showStarters = messages.length === 0 && !streaming;

  return (
    <>
      <div className="chat-widget-root pointer-events-none fixed inset-0 z-[90]">
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="NexOra AI assistant"
          aria-hidden={!open}
          className={`chat-panel pointer-events-auto fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(5.5rem,calc(1.5rem+env(safe-area-inset-bottom)))] flex w-[min(100vw-2rem,400px)] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,white_97%,transparent)] shadow-[0_24px_64px_-24px_rgba(22,24,43,0.45)] backdrop-blur-[16px] motion-safe:transition-[opacity,transform] motion-safe:duration-300 motion-safe:ease-out md:bottom-[max(1.5rem,env(safe-area-inset-bottom))] ${
            open
              ? "chat-panel-open translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          }`}
          style={{ maxHeight: "min(72vh, 640px)" }}
        >
          <header className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-tint)]">
              <Image
                src="/logo-icon.png"
                alt=""
                width={36}
                height={36}
                className="h-6 w-auto"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text-primary)]">
                NexOra
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">AI assistant</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                launcherRef.current?.focus();
              }}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-tint)] hover:text-[var(--color-text-primary)]"
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 4L12 12M12 4L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </header>

          <div
            className="flex-1 overflow-y-auto px-4 py-4"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {showStarters && (
              <div className="mb-4">
                <p className="text-sm font-light leading-body text-[var(--color-text-secondary)]">
                  Hi — I can help with our services, process, and how to start a project.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {CHAT_STARTER_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => void sendMessage(prompt)}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[color-mix(in_srgb,var(--color-purple)_35%,transparent)] hover:text-[var(--color-text-primary)]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <ul className="flex flex-col gap-3">
              {messages.map((message) => (
                <li
                  key={message.id}
                  className={`chat-message flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-body ${
                      message.role === "user"
                        ? "bg-[linear-gradient(135deg,#7b5ea7,#5b4080)] text-white"
                        : "border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {message.role === "assistant" && !message.content && streaming ? (
                      <TypingIndicator />
                    ) : message.role === "assistant" ? (
                      <MessageContent content={message.content} />
                    ) : (
                      <span className="whitespace-pre-wrap break-words">
                        {message.content}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={onSubmit}
            className="border-t border-[var(--color-border)] px-3 py-3"
          >
            {error && (
              <p className="mb-2 text-xs text-[var(--color-error)]" role="alert">
                {error}
              </p>
            )}
            <div className="flex items-end gap-2">
              <label htmlFor={inputId} className="sr-only">
                Message NexOra assistant
              </label>
              <textarea
                ref={inputRef}
                id={inputId}
                rows={1}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onInputKeyDown}
                disabled={streaming}
                placeholder="Ask about our services…"
                className="max-h-28 min-h-[42px] flex-1 resize-none rounded-xl border border-[var(--color-border-bright)] bg-[var(--color-field)] px-3 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-[border-color,box-shadow] focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_18%,transparent)] disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={streaming || !input.trim()}
                aria-label="Send message"
                className="chat-send-btn flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl border-0 text-white transition-[opacity,transform] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3.5 9H14.5M14.5 9L9.5 4M14.5 9L9.5 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-[var(--color-text-muted)]">
              Powered by Groq · Answers based on NexOra site content
            </p>
          </form>
        </div>

        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close NexOra assistant" : "Open NexOra assistant"}
          className={`chat-launcher pointer-events-auto fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-[91] flex h-14 w-14 items-center justify-center rounded-full border-0 text-white shadow-[0_12px_40px_-8px_rgba(123,94,167,0.55)] motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-8px_rgba(123,94,167,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cyan)] ${
            open ? "chat-launcher-active scale-95" : "chat-launcher-idle"
          }`}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M5 5L17 17M17 5L5 17"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M4 6.5C4 5.12 5.12 4 6.5 4h9c1.38 0 2.5 1.12 2.5 2.5v6c0 1.38-1.12 2.5-2.5 2.5H9l-4.5 3v-3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8.25" cy="10" r="0.85" fill="currentColor" />
              <circle cx="11.5" cy="10" r="0.85" fill="currentColor" />
              <circle cx="14.75" cy="10" r="0.85" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
