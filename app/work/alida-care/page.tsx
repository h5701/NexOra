import type { Metadata } from "next";
import CaseStudyPage from "@/components/work/CaseStudyPage";

export const metadata: Metadata = {
  title: "Alida Care — Case Study | NexOra Digital Studio",
  description:
    "How NexOra built a live UK care platform connecting families with vetted, CQC-compliant providers — end-to-end.",
};

const content = {
  eyebrow: "Healthcare Platform · Live Product",
  title: "Alida Care",
  subtitle:
    "A live UK platform connecting families with vetted care — built for trust, compliance, and decisions made under pressure.",
  accentColor: "#2D6E62",
  hero: {
    type: "browser" as const,
    images: [
      {
        src: "/portfolio/alida-care/alida-care.webp",
        alt: "Alida Care website homepage",
        width: 2542,
        height: 1496,
      },
      {
        src: "/portfolio/alida-care/image2.webp",
        alt: "Alida Care services and trust section",
        width: 2880,
        height: 1554,
      },
    ],
    url: "alidacare.com",
    topGradient: "linear-gradient(90deg, #2D6E62, #2DD4BF)",
    scrollable: true,
    showScrollHint: true,
    viewportHeights: "h-[280px] sm:h-[380px] md:h-[480px]",
  },
  sections: {
    brief: {
      eyebrow: "The brief",
      headline: "Why this wasn\u2019t a generic marketplace",
      body: "Alida Care needed to connect UK families searching for care with vetted, qualified caregivers \u2014 but the UK care sector isn\u2019t a generic marketplace problem. Trust, compliance, and timing all matter more than they do in most booking platforms. Families making care decisions are often doing so under emotional pressure, and the platform had to reflect that without feeling clinical or cold.",
    },
    built: {
      eyebrow: "What we built",
      headline: "A full platform, not a templated booking form",
      listIntro: "A full end-to-end platform, not a templated booking form:",
      listItems: [
        "A public-facing experience that leads with trust signals (CQC compliance, DBS checks, response times) rather than burying them in a footer",
        "Caregiver profile and verification system, built around the realities of care-sector vetting",
        "A booking flow designed for a family making a difficult decision, not a transactional purchase",
        "Backend management tools the Alida Care team uses to run day-to-day operations \u2014 scheduling, caregiver matching, and oversight",
      ],
    },
    approach: {
      eyebrow: "The approach",
      headline: "Process first, screens second",
      body: "We didn\u2019t start with screens. We started with the actual care-matching process Alida Care needed to support, then built the architecture to handle it \u2014 booking logic, caregiver data, and compliance signals all needed to work together correctly before any interface design happened.",
    },
    stands: {
      eyebrow: "Where it stands",
      headline: "Live in the UK today",
      body: "Alida Care is live in the UK today, handling real bookings between real families and real caregivers. It was built to scale as the platform grows \u2014 clean architecture, not a fast patch job.",
    },
  },
  externalLink: {
    href: "https://www.alidacare.com",
    label: "Visit alidacare.com \u2192",
  },
};

export default function AlidaCareCaseStudyPage() {
  return <CaseStudyPage content={content} />;
}
