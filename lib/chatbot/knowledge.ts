import { CONTACT_EMAIL, CONTACT_PROJECT_TYPES } from "@/lib/constants";
import { CASE_STUDY_SUMMARIES, STUDIO_POSITIONING } from "@/lib/content/site-copy";
import { FOUNDERS } from "@/lib/content/founders";
import { getAllServices } from "@/lib/services/index";
import { advancedAiCallout, serviceHubGroups } from "@/lib/services/hub";
import { serializeAllServicesForKnowledge } from "@/lib/services/toKnowledge";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    body: "Start with the problem. Align on what success actually looks like.",
  },
  {
    step: "02",
    title: "Architect",
    body: "Define scope, technical approach, and delivery plan. Clear on what you're getting and when.",
  },
  {
    step: "03",
    title: "Build",
    body: "Clean architecture. Weekly updates. Full visibility. No black boxes.",
  },
  {
    step: "04",
    title: "Launch",
    body: "On time. As scoped. Full documentation and support for what comes next.",
  },
] as const;

const CASE_STUDY_EXTERNAL_URLS: Record<string, string> = {
  "FikrLess - Mobile App":
    "https://play.google.com/store/apps/details?id=com.fikerless",
  "FikrLess - Website": "https://fikrless.com",
};

export function buildChatKnowledge() {
  return {
    studio: {
      name: "NexOra Digital Studio",
      tagline: "Digital product studio · UK",
      description: STUDIO_POSITIONING,
      voice:
        "Clear, confident, honest, no hype. Concise and helpful — like a senior studio member.",
      location: "United Kingdom",
      email: CONTACT_EMAIL,
      contactPath: "/contact",
      servicesHubPath: "/services",
      pricingNote:
        "Projects typically start from £750. Exact scope and budget are confirmed in the first response — do not quote specific prices beyond this unless asked about the starting point.",
      responseTime:
        "We respond to project inquiries within 2 business days with clarity on scope, direction, and next steps.",
    },
    process: PROCESS_STEPS,
    founders: FOUNDERS.map((founder) => ({
      name: founder.name,
      role: founder.role,
      focus: founder.focus,
      linkedin: founder.linkedin,
    })),
    serviceGroups: serviceHubGroups.map((group) => ({
      id: group.id,
      label: group.label,
      description: group.description,
    })),
    services: serializeAllServicesForKnowledge(getAllServices()),
    advancedAi: {
      title: advancedAiCallout.title,
      tierLabel: advancedAiCallout.tierLabel,
      summary: advancedAiCallout.body,
      contactPath: advancedAiCallout.href,
    },
    caseStudies: CASE_STUDY_SUMMARIES.map((study) => ({
      title: study.title,
      path: study.href,
      status: study.liveTag,
      summary: study.body,
      externalUrl: CASE_STUDY_EXTERNAL_URLS[study.title],
    })),
    contact: {
      email: CONTACT_EMAIL,
      formPath: "/contact",
      projectTypes: [...CONTACT_PROJECT_TYPES],
      howItWorks: [
        "Clear feedback on feasibility",
        "Suggested approach or structure",
        "Rough scope direction",
      ],
    },
    pages: {
      home: "/",
      about: "/about",
      services: "/services",
      contact: "/contact",
      work: {
        fikrless: "/work/fikrless",
        fikrlessWebsite: "/work/fikrless-website",
      },
    },
  };
}

export type ChatKnowledge = ReturnType<typeof buildChatKnowledge>;

export function getKnowledgeJson(): string {
  return JSON.stringify(buildChatKnowledge(), null, 2);
}
