import type { ServiceHubGroup } from "./types";
import { servicePages } from "./content";

export const serviceHubGroups: ServiceHubGroup[] = [
  {
    id: "product-web",
    label: "Product & Web",
    description:
      "From MVP to production — products and websites built to ship and scale.",
  },
  {
    id: "ai",
    label: "AI",
    description:
      "Practical AI integration and automation — grounded in your data, scoped honestly.",
  },
  {
    id: "cloud-infrastructure",
    label: "Cloud & Infrastructure",
    description:
      "Cloud architecture, IoT pipelines, and DevOps — engineered for reliability.",
  },
];

export function getServicesByCategory(category: ServiceHubGroup["id"]) {
  return servicePages.filter((service) => service.category === category);
}

export const advancedAiCallout = {
  tag: "Selective partnerships",
  title: "Advanced / Custom AI",
  body: "Custom AI work for teams with a defined problem and room to experiment. We take on a small number of partnerships at a time.",
  tierLabel: "Opening soon · limited partnerships",
  href: "/contact?type=Advanced%20%2F%20Custom%20AI",
  linkText: "Express interest",
};
