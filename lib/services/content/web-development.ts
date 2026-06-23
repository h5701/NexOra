import type { ServiceContent } from "../types";
import { bodyImage, cardImage, heroImage } from "./helpers";

export const webDevelopment: ServiceContent = {
  slug: "web-development",
  category: "product-web",
  tag: "Built for performance",
  title: "Web Development",
  tier: "available",
  tierLabel: "Available now",
  seoTitle: "Web Development — NexOra Digital Studio",
  seoDescription:
    "High-performance websites built for speed, clarity, and conversion — premium UI, scalable code, and no template shortcuts.",
  hero: {
    outcomeLine:
      "High-performance websites built for speed, clarity, and conversion — scalable code, no template shortcuts.",
    image: heroImage(
      "1498050108023-c5249f4df085",
      "Laptop with code editor open in a clean workspace",
      "Christina Morillo",
      "https://unsplash.com/@christina1",
    ),
  },
  hub: {
    oneLiner: "Fast, conversion-focused websites with premium UI and clean code.",
    cardImage: cardImage(
      "1498050108023-c5249f4df085",
      "Laptop displaying code in a modern workspace",
      "Christina Morillo",
      "https://unsplash.com/@christina1",
    ),
  },
  whatThisIs: [
    "Your website is a revenue asset, not a brochure. We build sites that load fast, rank well, convert visitors, and scale as your business grows — with code your team can maintain and extend.",
    "Every project starts with performance budgets and accessibility requirements before visual design. We write semantic HTML, optimise assets, implement proper SEO foundations, and design UI that communicates clearly on every screen size.",
    "Marketing sites, product landing pages, and content-driven platforms — all built to production standard.",
  ],
  deliverables: [
    "Responsive, accessible UI built to WCAG AA standards",
    "Performance-optimised build — Core Web Vitals targets defined upfront",
    "SEO foundation — metadata, structured data, sitemap, and semantic markup",
    "CMS integration or static content workflow, depending on your needs",
    "Analytics and conversion tracking setup",
    "Deployment with CDN, SSL, and caching configured",
  ],
  approach: {
    intro:
      "A fast website is a designed outcome, not an afterthought. We optimise at every layer.",
    points: [
      "Mobile-first responsive design with tested breakpoints",
      "Image optimisation, lazy loading, and font subsetting",
      "Semantic HTML and ARIA attributes for screen reader compatibility",
      "Lighthouse performance budgets enforced in CI",
      "Clean component architecture for maintainability",
      "Visible focus states and keyboard navigation throughout",
    ],
  },
  supportingImage: bodyImage(
    "1460925895917-afdab827c52f",
    "Modern web interface displayed on a screen",
    "Carlos Muza",
    "https://unsplash.com/@kmuza",
  ),
  techToolGroups: [
    {
      label: "Frontend",
      tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      label: "Content",
      tools: ["Sanity / MDX"],
    },
    {
      label: "Infra",
      tools: ["Vercel / AWS", "Google Analytics"],
    },
  ],
  cta: {
    label: "Start a project →",
    projectType: "Web Development",
  },
};
