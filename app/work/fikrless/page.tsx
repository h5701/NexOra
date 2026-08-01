import type { Metadata } from "next";
import CaseStudyPage from "@/components/work/CaseStudyPage";

export const metadata: Metadata = {
  title: "FikrLess — Case Study | NexOra Digital Studio",
  description:
    "How NexOra built a culturally-aware mental health platform for Pakistan — discreet, privacy-first, and live on Google Play.",
};

const content = {
  eyebrow: "Mental Health Platform · Live on Google Play",
  title: "FikrLess - Mobile App",
  subtitle:
    "FikrLess reimagines digital mental healthcare with a thoughtfully designed mobile experience. Built with accessibility, privacy, and user engagement at its core, the app helps users monitor their wellbeing, access expert support, and develop positive habits through an intuitive, feature-rich platform.",
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
      headline: "A mental health platform built for Pakistan, not adapted to it",
      body: "Mental health support in Pakistan comes with unique cultural, social, and privacy challenges. FikrLess was created to address these realities from the ground up, rather than adapting a product designed for Western audiences. The goal was to build a trusted, accessible platform where users could confidently seek support, connect with licensed mental health professionals, and access wellbeing resources in a way that respects local attitudes toward mental health.",
    },
    built: {
      eyebrow: "What we built",
      headline: "A complete digital wellbeing ecosystem",
      listIntro:
        "We designed and developed a comprehensive mobile platform that brings together mental health support, self-care tools, and professional services in one seamless experience.",
      listItems: [
        "Secure onboarding designed to reduce friction while protecting user privacy",
        "Personalised mood tracking, journaling, wellness goals, and daily habit-building tools",
        "Appointment booking and secure communication with licensed psychologists",
        "Educational resources, guided audio content, and wellbeing exercises",
        "Community features, moderated discussions, and motivational content",
        "Integrated activity tracking including water intake, step counting, weight tracking, and a virtual wellness companion",
        "Privacy-first architecture designed to encourage trust, confidentiality, and long-term engagement",
      ],
    },
    approach: {
      eyebrow: "The approach",
      headline: "Designed around people, not assumptions",
      body: "Every aspect of the experience was shaped by extensive consideration of how mental health is viewed and accessed in Pakistan. Rather than simply translating an existing product, we designed interactions, onboarding, navigation, and trust-building mechanisms specifically for local users.",
      listIntro:
        "The result is an experience that feels approachable, respectful, and easy to use while balancing accessibility, discretion, and professional credibility. Every design decision focused on reducing barriers to seeking support and creating an environment where users feel safe engaging with mental health services.",
    },
    stands: {
      eyebrow: "Where it stands",
      headline: "Available on Google Play",
      body: "FikrLess is now live on Google Play, providing users across Pakistan with access to licensed mental health professionals, wellbeing tools, educational resources, and a growing digital support ecosystem. Built with scalability in mind, the platform is positioned for future expansion through additional languages, new wellbeing services, and continuous feature development.",
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
