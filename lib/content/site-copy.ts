export const STUDIO_POSITIONING =
  "Engineering-led product development, AI integration, and cloud infrastructure — scoped honestly, built to ship.";

export const PORTFOLIO_HEADLINE = "Real products. Real clients. Real outcomes.";

export const PORTFOLIO_LEAD =
  "Two products in market. Live in users' hands, running real businesses.";

export type CaseStudySummary = {
  href: string;
  preview: "alida" | "fikrless";
  tags: string[];
  liveTag: string;
  title: string;
  body: string;
};

export const CASE_STUDY_SUMMARIES: CaseStudySummary[] = [
  {
    href: "/work/alida-care",
    preview: "alida",
    tags: ["Healthcare platform", "Live product"],
    liveTag: "Live product",
    title: "Alida Care",
    body: "A live UK care platform connecting families with vetted, CQC-compliant providers — booking, caregiver verification, and the operational backend the business runs on.",
  },
  {
    href: "/work/fikrless",
    preview: "fikrless",
    tags: ["Mental health app", "Live on Play Store"],
    liveTag: "Live on Play Store",
    title: "FikrLess",
    body: "A mental health platform for Pakistan, built for a market where seeking support carries real stigma. Connects users with licensed therapists through a discreet, culturally-aware app — live on Google Play.",
  },
];
