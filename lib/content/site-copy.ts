export const STUDIO_POSITIONING =
  "Engineering-led product development, AI integration, and cloud infrastructure — scoped honestly, built to ship.";

export const PORTFOLIO_HEADLINE = "Real products. Real clients. Real outcomes.";

export const PORTFOLIO_LEAD =
  "Live in users' hands, running a real business.";

export type CaseStudySummary = {
  href: string;
  preview: "fikrless" | "fikrless-website";
  tags: string[];
  liveTag: string;
  title: string;
  body: string;
};

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
