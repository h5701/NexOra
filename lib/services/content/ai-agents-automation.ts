import type { ServiceContent } from "../types";
import { bodyImage, cardImage, heroImage } from "./helpers";

export const aiAgentsAutomation: ServiceContent = {
  slug: "ai-agents-automation",
  category: "ai",
  tag: "Practical automation",
  title: "AI Agents & Automation",
  tier: "available",
  tierLabel: "Available now",
  seoTitle: "AI Agents & Automation — NexOra Digital Studio",
  seoDescription:
    "Practical workflow automation and internal tools powered by AI — human-in-the-loop, deterministic guardrails, and scoped tool access. No autonomous-agent theatre.",
  hero: {
    outcomeLine:
      "Workflow automation and internal tools that remove real friction — scoped, monitored, and human-supervised.",
    image: heroImage(
      "1620712943543-bcc4688e7485",
      "Robotic arm representing precise automated workflow execution",
      "Possessed Photography",
      "https://unsplash.com/@possessedphotography",
    ),
  },
  hub: {
    oneLiner:
      "Workflow agents and internal tools for real ops work — scoped, supervised, production-grade.",
    cardImage: cardImage(
      "1620712943543-bcc4688e7485",
      "Minimal robotic arm in an industrial setting",
      "Possessed Photography",
      "https://unsplash.com/@possessedphotography",
    ),
  },
  whatThisIs: [
    "We build automation that replaces repetitive operational work — triaging inbound requests, drafting responses from templates, routing tasks between systems, and generating reports from structured data. The goal is fewer manual steps, not a fully autonomous agent making unsupervised decisions.",
    "Every automation we ship has a defined scope: which tools it can call, which data it can read, what actions require human approval, and what happens when something goes wrong. We document what the system cannot do.",
    "Pipelines are versioned, testable, and observable — the same standards we apply to any backend service.",
  ],
  deliverables: [
    "Workflow automation design mapped to your existing tools and APIs",
    "Agent orchestration with scoped tool access and permission boundaries",
    "Human-in-the-loop approval steps for high-impact actions",
    "Deterministic guardrails — regex, schema validation, and output constraints",
    "Failure handling with dead-letter queues and operator notifications",
    "Monitoring dashboards for run success rates, latency, and error patterns",
  ],
  approach: {
    intro:
      "Automation should be boring in production — predictable, auditable, and easy to roll back.",
    points: [
      "Human-in-the-loop for any action that changes external state or sends communications",
      "Guardrails enforced in code and schema validation, alongside prompt design",
      "Scoped tool access — agents only reach the APIs and data they need",
      "Idempotent steps so retries do not cause duplicate side effects",
      "Run-level logging with full input/output traces for debugging",
      "Circuit breakers when downstream services degrade",
    ],
  },
  supportingImage: bodyImage(
    "1555949963-aa79dcee981c",
    "Code on a screen representing automation logic",
    "AltumCode",
    "https://unsplash.com/@altumcode",
  ),
  techToolGroups: [
    {
      label: "AI / Data",
      tools: ["OpenAI / Anthropic tool use"],
    },
    {
      label: "Backend",
      tools: [
        "Temporal / BullMQ",
        "Webhooks",
        "REST / GraphQL APIs",
        "TypeScript / Python",
      ],
    },
    {
      label: "Integrations",
      tools: ["Slack / email integrations"],
    },
  ],
  cta: {
    label: "Start a project →",
    projectType: "AI Agents & Automation",
  },
};
