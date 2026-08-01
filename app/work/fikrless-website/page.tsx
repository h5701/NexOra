import type { Metadata } from "next";
import CaseStudyPage from "@/components/work/CaseStudyPage";

export const metadata: Metadata = {
  title: "FikrLess Website — Case Study | NexOra Digital Studio",
  description:
    "How NexOra built a modern, scalable website for FikrLess — connecting visitors with mental health services, resources, and community initiatives.",
};

const content = {
  eyebrow: "Mental Health Platform · Live Website",
  title: "FikrLess - Website",
  subtitle:
    "A modern, scalable website designed to make mental wellbeing more accessible. We created a trusted digital platform that connects visitors with professional services, educational resources, community initiatives, and events through a seamless user experience.",
  accentColor: "#8B5CF6",
  hero: {
    type: "browser" as const,
    url: "fikrless.com",
  },
  sections: {
    brief: {
      eyebrow: "The brief",
      headline: "Building a trusted digital home for mental wellbeing",
      body: "As FikrLess expanded beyond its mobile application, it needed a website that would do more than introduce the brand. The platform required a modern, scalable website that could educate visitors, showcase services, support community initiatives, and make it easier for users to access mental health resources and professional support. The challenge was to create a digital experience that felt welcoming, trustworthy, and accessible while reflecting the mission of improving mental wellbeing across Pakistan.",
    },
    built: {
      eyebrow: "What we built",
      headline: "A scalable platform designed for growth",
      listIntro:
        "We designed and developed a modern multi-page website that serves as the central hub for the FikrLess ecosystem.",
      listItems: [
        "Responsive website designed for accessibility across desktop, tablet, and mobile",
        "Clear user journeys connecting visitors to services, events, resources, and support",
        "Dedicated pages for psychologists, internships, webinars, blogs, and educational content",
        "Dynamic filtering for members, resources, and content discovery",
        "Service-oriented architecture built to support future API integration and platform growth",
        "Optimised navigation, performance, and SEO to improve discoverability and user engagement",
        "Flexible content management structure designed to scale alongside the organisation",
      ],
    },
    approach: {
      eyebrow: "The approach",
      headline: "Designed to educate, engage, and build trust",
      body: "The website was designed with clarity and credibility at its core. Every page was structured to help visitors quickly understand the platform, explore available services, and access valuable mental health information without unnecessary complexity.",
      listIntro:
        "Behind the scenes, we implemented a modular architecture that separates the user interface from the data layer, allowing the platform to evolve from static content to fully integrated backend services without requiring a complete rebuild. This ensures the website remains maintainable, scalable, and ready for future growth.",
    },
    stands: {
      eyebrow: "Where it stands",
      headline: "Supporting the FikrLess ecosystem",
      body: "The FikrLess website now serves as the organisation's primary digital platform, bringing together educational resources, community initiatives, professional services, webinars, and internship opportunities within a seamless user experience. Built with scalability in mind, the platform is ready to support future integrations, multilingual expansion, and continued growth as FikrLess evolves.",
    },
  },
  externalLink: {
    href: "https://fikrless.com",
    label: "Visit FikrLess →",
  },
};

export default function FikrLessWebsiteCaseStudyPage() {
  return <CaseStudyPage content={content} />;
}
