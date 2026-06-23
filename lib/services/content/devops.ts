import type { ServiceContent } from "../types";
import { bodyImage, cardImage, heroImage } from "./helpers";

export const devops: ServiceContent = {
  slug: "devops",
  category: "cloud-infrastructure",
  tag: "Ship with confidence",
  title: "DevOps",
  tier: "available",
  tierLabel: "Available now",
  seoTitle: "DevOps — NexOra Digital Studio",
  seoDescription:
    "CI/CD pipelines, containerisation, infrastructure automation, and production reliability — zero-downtime deploys, monitoring, and rollback procedures.",
  hero: {
    outcomeLine:
      "CI/CD, containerisation, and infrastructure automation — so your team ships reliably without heroics.",
    image: heroImage(
      "1555066931-4365d14bab8c",
      "Code on a dark screen in a development environment",
      "Danial Igdery",
      "https://unsplash.com/@daniellifex",
    ),
  },
  hub: {
    oneLiner:
      "CI/CD, containerisation, and infra automation for reliable releases.",
    cardImage: cardImage(
      "1555066931-4365d14bab8c",
      "Code editor on a dark screen",
      "Danial Igdery",
      "https://unsplash.com/@daniellifex",
    ),
  },
  whatThisIs: [
    "DevOps is the practice of making software delivery repeatable, fast, and safe. We set up the pipelines, containers, and infrastructure automation that let your team deploy multiple times a day without crossing their fingers.",
    "Our work covers the full delivery lifecycle: source control workflows, automated testing in CI, container images, orchestration, environment management, monitoring, and the rollback procedures you need when something goes wrong at 2am.",
    "We do not build DevOps for its own sake. Every pipeline and automation is tied to a concrete reliability or velocity goal your team can measure.",
  ],
  deliverables: [
    "CI/CD pipeline design with automated test, build, and deploy stages",
    "Dockerfile and container image optimisation for your services",
    "Kubernetes or ECS orchestration with resource limits and health probes",
    "Infrastructure as code for staging and production environments",
    "Monitoring and alerting setup with actionable runbooks",
    "Zero-downtime deployment strategy with tested rollback procedures",
  ],
  approach: {
    intro: "Reliable delivery is a system. We design the workflow end to end.",
    points: [
      "Pipeline design with fast feedback — lint, test, and build in minutes, not hours",
      "Automated testing gates that block broken code from reaching production",
      "Container orchestration with resource limits, probes, and graceful shutdown",
      "Monitoring and alerting on the metrics that predict user-facing failures",
      "Zero-downtime deploys with rolling updates or blue-green strategies",
      "Documented rollback procedures tested before you need them",
    ],
  },
  supportingImage: bodyImage(
    "1517694712202-14dd9538aa97",
    "Developer laptop showing code and terminal output",
    "Christina Morillo",
    "https://unsplash.com/@christina1",
  ),
  techTools: [
    "Docker",
    "Kubernetes / ECS",
    "GitHub Actions",
    "Terraform",
    "Prometheus / Grafana",
    "ArgoCD",
    "AWS / GCP",
  ],
  cta: {
    label: "Start a project →",
    projectType: "DevOps",
  },
};
