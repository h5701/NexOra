import { getAllServices } from "@/lib/services/index";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/labs", label: "NexOra Labs" },
  { href: "/contact", label: "Contact" },
] as const;

export const NAV_SERVICE_GROUPS = [
  {
    label: "Product & Web",
    links: [
      { label: "Product Development", href: "/services/product-development" },
      { label: "Web Development", href: "/services/web-development" },
    ],
  },
  {
    label: "AI",
    links: [
      { label: "AI Integration", href: "/services/ai-integration" },
      { label: "RAG & Knowledge Assistants", href: "/services/rag-knowledge-assistants" },
      { label: "AI Agents & Automation", href: "/services/ai-agents-automation" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    links: [
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
      { label: "IoT Systems", href: "/services/iot-systems" },
      { label: "DevOps", href: "/services/devops" },
    ],
  },
] as const;

export const FOOTER_SERVICE_LINKS = getAllServices().map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@nexoradigitalstudio.uk";

export const PAGE_CONTAINER_CLASS =
  "mx-auto max-w-[1160px] px-[clamp(24px,5vw,80px)]";

export const CONTACT_PROJECT_TYPES = [
  "Web Platform",
  "Mobile App",
  "Website",
  "Product Development",
  "Web Development",
  "AI Integration",
  "RAG & Knowledge Assistants",
  "AI Agents & Automation",
  "Cloud Solutions",
  "IoT Systems",
  "DevOps",
  "Advanced / Custom AI",
  "Other",
] as const;
