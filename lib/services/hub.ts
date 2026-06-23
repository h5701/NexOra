import type { ServiceHubGroup } from "./types";
import { heroImage } from "./content/helpers";

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

export const hubHeroImage = heroImage(
  "1504639725590-34d0984388bd",
  "Macro photograph of code on a dark screen",
  "Markus Spiske",
  "https://unsplash.com/@markusspiske",
);

export const hubOverview = {
  eyebrow: "Overview",
  title: "What we build",
  lead: "Structured services for real product work — every engagement scoped around usable systems, not disconnected deliverables.",
  paragraphs: [
    "We work with founders and businesses to design, build, and scale digital products. From early-stage MVPs to production-ready platforms, NexOra focuses on clarity, execution, and long-term scalability.",
    "As a UK software studio, we structure every engagement around building real systems — not one-off deliverables. Product work, platform rebuilds, and practical AI integration follow the same rule: define it clearly, build it properly, ship it on time.",
  ],
  image: hubHeroImage,
};

export const advancedAiCallout = {
  tag: "Selective partnerships",
  title: "Advanced / Custom AI",
  body: "Custom AI work for teams with a defined problem and room to experiment. We take on a small number of partnerships at a time.",
  tierLabel: "Opening soon · limited partnerships",
  href: "/contact?type=Advanced%20%2F%20Custom%20AI",
  linkText: "Express interest",
};
