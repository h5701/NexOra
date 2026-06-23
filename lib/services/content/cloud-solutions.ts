import type { ServiceContent } from "../types";
import { bodyImage, cardImage, heroImage } from "./helpers";

export const cloudSolutions: ServiceContent = {
  slug: "cloud-solutions",
  category: "cloud-infrastructure",
  tag: "Scale-ready architecture",
  title: "Cloud Solutions",
  tier: "available",
  tierLabel: "Available now",
  seoTitle: "Cloud Solutions — NexOra Digital Studio",
  seoDescription:
    "Cloud architecture, deployment, and scaling on AWS — well-architected principles, infrastructure as code, autoscaling, and production observability.",
  hero: {
    outcomeLine:
      "Cloud architecture, deployment, and scaling — designed for reliability, cost control, and teams that need to operate it.",
    image: heroImage(
      "1558494949-ef010cbdcc31",
      "Server room with network cables and infrastructure hardware",
      "Alexandre Debiève",
      "https://unsplash.com/@freezydreamin",
    ),
  },
  hub: {
    oneLiner:
      "Architecture, deployment, and scaling built on well-architected principles.",
    cardImage: cardImage(
      "1558494949-ef010cbdcc31",
      "Server room with network infrastructure",
      "Alexandre Debiève",
      "https://unsplash.com/@freezydreamin",
    ),
  },
  whatThisIs: [
    "Cloud work at NexOra means designing systems that survive real traffic, real failures, and real budget constraints. We architect on AWS (and compatible stacks) with a bias toward simplicity — the fewest moving parts that meet your reliability and scale requirements.",
    "Whether you are migrating from a monolith, standing up a new platform, or fixing an architecture that cannot handle growth, we start with your actual constraints: team size, traffic patterns, compliance needs, and monthly spend targets.",
    "Deployment is not a one-off event. We set up infrastructure as code, CI/CD pipelines, and observability so your team can ship and operate confidently after handover.",
  ],
  deliverables: [
    "Architecture diagrams and decision records for key design choices",
    "Infrastructure as code (Terraform / CDK) with version-controlled environments",
    "Containerised services with orchestration on ECS or Kubernetes",
    "Autoscaling policies tuned to your traffic patterns and cost targets",
    "CI/CD pipelines for staging and production deployments",
    "Monitoring, alerting, and runbooks for on-call operations",
  ],
  approach: {
    intro:
      "We follow well-architected principles as practical constraints — design choices that keep systems maintainable under real load.",
    points: [
      "Design for failure — multi-AZ deployments, health checks, and graceful degradation",
      "Cost optimisation from day one — right-sized instances, reserved capacity where it makes sense",
      "Autoscaling driven by measured load patterns",
      "Infrastructure as code so environments are reproducible and auditable",
      "Least-privilege IAM — every service gets only the permissions it needs",
      "High availability patterns with tested failover procedures",
    ],
  },
  supportingImage: bodyImage(
    "1544197150-b99a580bb7a8",
    "Abstract cloud infrastructure visualization",
    "Adrien Converse",
    "https://unsplash.com/@adrienconverse",
  ),
  techToolGroups: [
    {
      label: "Infra",
      tools: [
        "AWS",
        "Docker",
        "Kubernetes / ECS",
        "Terraform",
        "GitHub Actions",
        "CloudWatch",
        "RDS / Aurora",
      ],
    },
  ],
  cta: {
    label: "Start a project →",
    projectType: "Cloud Solutions",
  },
};
