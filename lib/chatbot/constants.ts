/** Verified on Groq docs (console.groq.com/docs/models) — change here to swap models. */
export const GROQ_CHAT_MODEL = "llama-3.3-70b-versatile";

export const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

/** Max characters per user message. */
export const CHAT_MAX_MESSAGE_LENGTH = 2000;

/** Max messages sent to Groq per request (user + assistant pairs). */
export const CHAT_MAX_HISTORY_MESSAGES = 20;

/** Rate limit: requests per window per IP+session key. */
export const CHAT_RATE_LIMIT_MAX = 24;
export const CHAT_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

export const CHAT_STARTER_PROMPTS = [
  "What do you build?",
  "Do you do AI integration?",
  "How do I start a project?",
  "Which service fits my idea?",
] as const;
