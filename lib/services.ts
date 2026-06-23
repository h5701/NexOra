import type { ServiceItem } from "./services/types";
import { getAllServices } from "./services/index";
import { advancedAiCallout } from "./services/hub";

const bySlug = Object.fromEntries(
  getAllServices().map((service) => [service.slug, service]),
);

/** Homepage service cards — six honest entry points, derived from service registry where possible. */
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
    tag: advancedAiCallout.tag,
    title: advancedAiCallout.title,
    body: "Custom AI work for teams with a defined problem and room to experiment. Limited slots.",
    tier: "soon",
    tierLabel: advancedAiCallout.tierLabel,
    href: advancedAiCallout.href,
    linkText: advancedAiCallout.linkText,
    dimmed: true,
  },
];

export type {
  ServiceCategory,
  ServiceContent,
  ServiceImageRef,
  ServiceItem,
  ServiceTier,
} from "./services/types";
export {
  getAllServices,
  getService,
  getServiceIndex,
  getServiceSlugs,
  getServicesByCategory,
} from "./services/index";
export {
  advancedAiCallout,
  hubHeroImage,
  hubOverview,
  serviceHubGroups,
} from "./services/hub";
