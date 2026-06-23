import type { ServiceContent } from "../types";
import { bodyImage, cardImage, heroImage } from "./helpers";

export const productDevelopment: ServiceContent = {
  slug: "product-development",
  category: "product-web",
  tag: "Idea to deployment",
  title: "Product Development",
  tier: "available",
  tierLabel: "Available now",
  seoTitle: "Product Development — NexOra Digital Studio",
  seoDescription:
    "End-to-end product development — MVPs, SaaS platforms, and internal tools from architecture through deployment, scoped for founders who need it shipped.",
  hero: {
    outcomeLine:
      "MVPs, SaaS platforms, and internal tools — scoped, architected, and shipped by engineers who own the full stack.",
    image: heroImage(
      "1504384308090-c894fdcc538d",
      "Minimal workspace setup for product design and development",
      "Avel Chuklanov",
      "https://unsplash.com/@chuklanov",
    ),
  },
  hub: {
    oneLiner: "MVPs and SaaS platforms from architecture through deployment.",
    cardImage: cardImage(
      "1504384308090-c894fdcc538d",
      "Minimal workspace with design tools",
      "Avel Chuklanov",
      "https://unsplash.com/@chuklanov",
    ),
  },
  whatThisIs: [
    "Product development at NexOra means taking an idea from scoped requirements to a deployed, usable system. We work with founders and teams who need an MVP validated in market, a SaaS platform built properly from the start, or an internal tool that replaces a spreadsheet workflow costing hours every week.",
    "We own the full stack — architecture, backend, frontend, database design, auth, deployment, and the operational basics your product needs on day one. No handoffs between agencies. One team, one codebase, one deployment.",
    "Scoping is honest. We tell you what fits a first release, what should wait, and what the architecture needs so you can grow without a full rewrite.",
  ],
  deliverables: [
    "Product scope document with phased release plan",
    "System architecture and data model design",
    "Backend APIs with authentication and authorisation",
    "Frontend application (web or cross-platform mobile)",
    "Database schema with migration strategy",
    "Deployment to production with monitoring and error tracking",
  ],
  approach: {
    intro:
      "We build products the way we would build our own — clear boundaries, tested code, architecture with room to scale.",
    points: [
      "Scope ruthlessly for v1 — ship the core loop, defer the rest",
      "Architecture decisions documented so future developers understand the why",
      "Typed APIs and validated inputs at every boundary",
      "Automated tests on critical paths — auth, payments, data integrity",
      "Staging environment that mirrors production configuration",
      "Handover documentation and codebase walkthrough for your team",
    ],
  },
  supportingImage: bodyImage(
    "1587620962725-abab7fe55159",
    "Wireframe and code on screen showing product design process",
    "Icons8 Team",
    "https://unsplash.com/@icons8",
  ),
  techTools: [
    "Next.js / React",
    "Node.js / TypeScript",
    "PostgreSQL",
    "Prisma / Drizzle",
    "AWS / Vercel",
    "React Native",
    "Stripe",
  ],
  cta: {
    label: "Start a project →",
    projectType: "Product Development",
  },
};
