import type { ServiceContent } from "./types";

/** Compact, structured serialization of a service for chatbot context. */
export type ServiceKnowledgeEntry = {
  slug: string;
  title: string;
  tag: string;
  category: ServiceContent["category"];
  tier: ServiceContent["tier"];
  tierLabel: string;
  path: string;
  oneLiner: string;
  whatThisIs: string[];
  deliverables: string[];
  approachIntro: string;
  approachPoints: string[];
  techTools: string[];
  contactPath: string;
};

export function serializeServiceForKnowledge(
  service: ServiceContent,
): ServiceKnowledgeEntry {
  return {
    slug: service.slug,
    title: service.title,
    tag: service.tag,
    category: service.category,
    tier: service.tier,
    tierLabel: service.tierLabel,
    path: `/services/${service.slug}`,
    oneLiner: service.hub.oneLiner,
    whatThisIs: service.whatThisIs,
    deliverables: service.deliverables,
    approachIntro: service.approach.intro,
    approachPoints: service.approach.points,
    techTools: service.techTools,
    contactPath: `/contact?type=${encodeURIComponent(service.cta.projectType)}`,
  };
}

export function serializeAllServicesForKnowledge(
  services: ServiceContent[],
): ServiceKnowledgeEntry[] {
  return services.map(serializeServiceForKnowledge);
}
