import type { Metadata } from "next";
import CaseStudyPage from "@/components/work/CaseStudyPage";

export const metadata: Metadata = {
  title: "FikrLess — Case Study | NexOra Digital Studio",
  description:
    "How NexOra built a culturally-aware mental health platform for Pakistan — discreet, privacy-first, and live on Google Play.",
};

const content = {
  eyebrow: "Mental Health Platform · Live on Google Play",
  title: "FikrLess",
  subtitle:
    "A mental health platform built for Pakistan \u2014 discreet, culturally-aware, and designed around stigma and privacy from the first screen.",
  accentColor: "#00E5D4",
  hero: {
    type: "phones" as const,
    images: [
      {
        src: "/portfolio/fikrless/fikrless-1.jpeg",
        alt: "FikrLess app onboarding screen",
        width: 921,
        height: 2048,
      },
      {
        src: "/portfolio/fikrless/fikrless-2.jpeg",
        alt: "FikrLess app activity screen",
        width: 921,
        height: 2048,
      },
      {
        src: "/portfolio/fikrless/fikrless-3.jpeg",
        alt: "FikrLess app specialist screen",
        width: 921,
        height: 2048,
      },
    ],
  },
  sections: {
    brief: {
      eyebrow: "The brief",
      headline: "A product that couldn\u2019t be a Western import",
      body: "Mental health platforms built for Western markets don\u2019t transfer directly to Pakistan. Stigma around seeking psychological support is real and significant, privacy concerns run deeper, and trust in a digital platform has to be earned differently. FikrLess needed a product that understood this from the first screen \u2014 not a localized copy of an existing app.",
    },
    built: {
      eyebrow: "What we built",
      headline: "Support that meets people where they are",
      listIntro:
        "A culturally-aware mental health platform connecting users with licensed therapists and wellness resources:",
      listItems: [
        "A discreet, low-friction entry experience that doesn\u2019t ask users to over-expose themselves before they\u2019re ready",
        "Dual-path flows for users seeking support and specialists providing it",
        "Therapist matching and structured support resources built around the realities of access in Pakistan, not assumptions imported from other markets",
        "A privacy-first design approach throughout, recognising that anonymity and discretion are often the difference between someone using the platform or not",
      ],
    },
    approach: {
      eyebrow: "The approach",
      headline: "Culture shaped every product decision",
      body: "Cultural context shaped every product decision, not just the copy. How someone in this market wants to be approached about mental health, what level of disclosure feels safe, and how trust gets built digitally all needed to be designed for directly \u2014 not assumed from a Western mental health app template.",
    },
    stands: {
      eyebrow: "Where it stands",
      headline: "Live on Google Play",
      body: "FikrLess is live and available on Google Play today, serving users across Pakistan.",
    },
  },
  externalLink: {
    href: "https://play.google.com/store/apps/details?id=com.fikerless&pcampaignid=web_share",
    label: "Available on Google Play \u2192",
  },
};

export default function FikrLessCaseStudyPage() {
  return <CaseStudyPage content={content} />;
}
