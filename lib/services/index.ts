import { aiAgentsAutomation } from "./content/ai-agents-automation";
import { aiIntegration } from "./content/ai-integration";
import { cloudSolutions } from "./content/cloud-solutions";
import { devops } from "./content/devops";
import { iotSystems } from "./content/iot-systems";
import { productDevelopment } from "./content/product-development";
import { ragKnowledgeAssistants } from "./content/rag-knowledge-assistants";
import { webDevelopment } from "./content/web-development";
import type { ServiceContent } from "./types";

/** Stable display order — append new services here when content files are added. */
const ALL_SERVICES: ServiceContent[] = [
  aiIntegration,
  ragKnowledgeAssistants,
  aiAgentsAutomation,
  cloudSolutions,
  iotSystems,
  devops,
  productDevelopment,
  webDevelopment,
];

const servicesBySlug = Object.fromEntries(
  ALL_SERVICES.map((service) => [service.slug, service]),
) as Record<string, ServiceContent>;

export function getAllServices(): ServiceContent[] {
  return ALL_SERVICES;
}

export function getService(slug: string): ServiceContent | undefined {
  return servicesBySlug[slug];
}

export function getServiceSlugs(): string[] {
  return ALL_SERVICES.map((service) => service.slug);
}

export function getServiceIndex(slug: string): number {
  return ALL_SERVICES.findIndex((service) => service.slug === slug);
}

export function getServicesByCategory(
  category: ServiceContent["category"],
): ServiceContent[] {
  return ALL_SERVICES.filter((service) => service.category === category);
}
