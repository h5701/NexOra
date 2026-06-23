import type { ServiceItem } from "./services/types";
import { servicePages } from "./services/content";

const bySlug = Object.fromEntries(servicePages.map((s) => [s.slug, s]));

/** Homepage service cards — six honest entry points, derived from servicePages where possible. */
export const homeBuildServices: ServiceItem[] = [
  {
    tag: bySlug["product-development"].tag,
    title: bySlug["product-development"].title,
    body: "MVPs, SaaS platforms, and internal tools — architecture through deployment, including mobile when the product needs it.",
    href: "/services/product-development",
    linkText: "Learn more",
  },
  {
    tag: bySlug["web-development"].tag,
    title: bySlug["web-development"].title,
    body: bySlug["web-development"].hub.oneLiner,
    href: "/services/web-development",
    linkText: "Learn more",
  },
  {
    tag: bySlug["ai-integration"].tag,
    title: "AI Integration",
    body: bySlug["ai-integration"].hub.oneLiner,
    tier: "available",
    tierLabel: "Available now",
    href: "/services/ai-integration",
    linkText: "Learn more",
  },
  {
    tag: bySlug["rag-knowledge-assistants"].tag,
    title: "RAG & Knowledge Assistants",
    body: bySlug["rag-knowledge-assistants"].hub.oneLiner,
    tier: "available",
    tierLabel: "Available now",
    href: "/services/rag-knowledge-assistants",
    linkText: "Learn more",
  },
  {
    tag: bySlug["ai-agents-automation"].tag,
    title: "AI Agents & Automation",
    body: bySlug["ai-agents-automation"].hub.oneLiner,
    tier: "available",
    tierLabel: "Available now",
    href: "/services/ai-agents-automation",
    linkText: "Learn more",
  },
  {
    tag: "Selective partnerships",
    title: "Advanced / Custom AI",
    body: "Custom AI work for teams with a defined problem and room to experiment. Limited slots.",
    tier: "soon",
    tierLabel: "Opening soon · limited partnerships",
    href: "/contact?type=Advanced%20%2F%20Custom%20AI",
    linkText: "Express interest",
    dimmed: true,
  },
];

export type { ServicePageContent, ServiceCategory, ServiceImage, ServiceItem, ServiceTier } from "./services/types";
export { servicePages, servicePagesBySlug, hubHeroImage } from "./services/content";
export {
  serviceHubGroups,
  getServicesByCategory,
  advancedAiCallout,
} from "./services/hub";
