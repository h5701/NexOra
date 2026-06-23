import type { ServiceContent } from "../types";
import { bodyImage, cardImage, heroImage } from "./helpers";

export const aiIntegration: ServiceContent = {
  slug: "ai-integration",
  category: "ai",
  tag: "Systems & APIs",
  title: "AI Integration",
  tier: "available",
  tierLabel: "Available now",
  seoTitle: "AI Integration — NexOra Digital Studio",
  seoDescription:
    "Embed LLM features, semantic search, real-time data pipelines, and API integration into existing products — built with eval-driven development and production guardrails.",
  hero: {
    outcomeLine:
      "Ship LLM features, semantic search, and real-time AI pipelines inside the products you already run.",
    image: heroImage(
      "1639322537228-f710d846310a",
      "Abstract interconnected network nodes representing AI system integration",
      "Shubham Dhage",
      "https://unsplash.com/@theshubhamdhage",
    ),
  },
  hub: {
    oneLiner:
      "LLM features, semantic search, and real-time pipelines wired into your existing stack.",
    cardImage: cardImage(
      "1639322537228-f710d846310a",
      "Abstract network nodes on a dark background",
      "Shubham Dhage",
      "https://unsplash.com/@theshubhamdhage",
    ),
  },
  whatThisIs: [
    "AI integration is not a chatbot bolted onto a landing page. It is the work of connecting language models, embeddings, and inference pipelines to the systems your business already depends on — CRMs, internal databases, product UIs, and operational workflows.",
    "We build features that belong in production: semantic search across your content, summarisation and classification endpoints, streaming responses in your app, and event-driven pipelines that keep AI outputs in sync with live data.",
    "Every integration is scoped around your constraints — latency budgets, data residency, existing auth, and what your team can maintain after handover.",
  ],
  deliverables: [
    "LLM feature design and API contracts aligned to your product",
    "Embedding pipelines and vector search wired to your data stores",
    "Streaming inference endpoints with timeout and fallback handling",
    "Integration adapters for third-party APIs and internal services",
    "Evaluation harnesses and regression checks before production rollout",
    "Observability setup — logging, tracing, and cost monitoring dashboards",
  ],
  approach: {
    intro:
      "We treat AI features like any other production system: measurable, observable, and safe to ship incrementally.",
    points: [
      "Eval-driven development — define success criteria before writing integration code",
      "Input/output guardrails and content filtering at the API boundary",
      "Cost and latency budgets enforced per endpoint before go-live",
      "Graceful fallbacks when models time out, rate-limit, or return low-confidence output",
      "Structured logging and tracing with enough context to debug production issues",
    ],
  },
  supportingImage: bodyImage(
    "1551288049-bebda4e38f71",
    "Analytics dashboard showing real-time data metrics",
    "Luke Chesser",
    "https://unsplash.com/@lukechesser",
  ),
  techToolGroups: [
    {
      label: "AI / Data",
      tools: [
        "OpenAI API",
        "Anthropic API",
        "pgvector",
        "Pinecone",
      ],
    },
    {
      label: "Backend",
      tools: ["Redis / queues", "Server-sent events", "TypeScript / Python"],
    },
  ],
  cta: {
    label: "Start a project →",
    projectType: "AI Integration",
  },
};
