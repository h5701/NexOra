export const STUDIO_POSITIONING =
  "Engineering-led product development, AI integration, and cloud infrastructure — scoped honestly, built to ship.";

export const PORTFOLIO_HEADLINE = "Real products. Real clients. Real outcomes.";

export const PORTFOLIO_LEAD =
  "Live in users' hands, running a real business.";

export const FIKRLESS_WEBSITE_SCROLL_IMAGE = {
  src: "/portfolio/fikrless-website/full-page.webp",
  alt: "Scrolling through the FikrLess website homepage — hero, services, webinars, team, internships, articles, and testimonials",
  width: 1440,
  height: 6678,
};

export type CaseStudySummary = {
  href: string;
  preview: "fikrless" | "fikrless-website";
  tags: string[];
  liveTag: string;
  title: string;
  body: string;
};

export const LABS_HEADLINE = "NexOra Labs";

export const LABS_LEAD =
  "Experimental products and concepts built by NexOra to explore what's possible.";

export type LabsProject = {
  slug: string;
  name: string;
  description: string;
  href: string;
  external?: boolean;
  tag: string;
};

export const LABS_PROJECTS: LabsProject[] = [
  {
    slug: "aiforge",
    name: "AIForge",
    description:
      "An experimental AI workspace for prototyping agentic workflows and testing product ideas — a sandbox for exploring how AI-driven tools could work before they reach production.",
    href: "https://aiforge.nexoradigitalstudio.uk",
    external: true,
    tag: "Concept Project",
  },
];

export const LABS_INTRO_QUOTE = "Ideas we build to explore what's possible.";

export type LabsShowcaseProject = {
  slug: string;
  category: string;
  name: string;
  description: string;
  tag: string;
  ctaLabel: string;
  href: string;
  external?: boolean;
  previewUrl: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const LABS_SHOWCASE_PROJECTS: LabsShowcaseProject[] = [
  {
    slug: "aiforge",
    category: "AI Knowledge Workspace",
    name: "AIForge",
    description:
      "Connects a team's documents, wikis, and internal knowledge into one AI workspace — grounded, cited answers instead of generic chat.",
    tag: "Concept Project",
    ctaLabel: "Explore Project",
    href: "https://aiforge.nexoradigitalstudio.uk",
    external: true,
    previewUrl: "aiforge.nexoradigitalstudio.uk/app/dashboard",
    image: {
      src: "/labs/aiforge/dashboard.webp",
      alt: "AIForge dashboard — questions answered, documents indexed, active users, knowledge coverage score, weekly AI usage chart, popular topics, and recent activity",
      width: 1800,
      height: 1172,
    },
  },
];

export const CASE_STUDY_SUMMARIES: CaseStudySummary[] = [
  {
    href: "/work/fikrless-website",
    preview: "fikrless-website",
    tags: ["Mental health platform", "Live website"],
    liveTag: "Live website",
    title: "FikrLess - Website",
    body: "A modern, scalable website designed to make mental wellbeing more accessible. We created a trusted digital platform that connects visitors with professional services, educational resources, community initiatives, and events through a seamless user experience.",
  },
  {
    href: "/work/fikrless",
    preview: "fikrless",
    tags: ["Mental health app", "Live on Play Store"],
    liveTag: "Live on Play Store",
    title: "FikrLess - Mobile App",
    body: "FikrLess reimagines digital mental healthcare with a thoughtfully designed mobile experience. Built with accessibility, privacy, and user engagement at its core, the app helps users monitor their wellbeing, access expert support, and develop positive habits through an intuitive, feature-rich platform.",
  },
];
