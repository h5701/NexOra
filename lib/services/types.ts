export type ServiceTier = "available" | "soon";

export type ServiceItem = {
  tag: string;
  title: string;
  body: string;
  tier?: ServiceTier;
  tierLabel?: string;
  href?: string;
  linkText?: string;
  dimmed?: boolean;
};

export type ServiceCategory =
  | "product-web"
  | "ai"
  | "cloud-infrastructure";

export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Unsplash photographer credit */
  credit?: string;
  creditUrl?: string;
};

export type ServicePageContent = {
  slug: string;
  category: ServiceCategory;
  tag: string;
  title: string;
  /** Sharp outcome line under the title in the hero */
  outcome: string;
  tier: ServiceTier;
  tierLabel: string;
  contactProjectType: string;
  meta: {
    title: string;
    description: string;
  };
  hub: {
    oneLiner: string;
    cardImage: ServiceImage;
  };
  heroImage: ServiceImage;
  bodyImage: ServiceImage;
  whatThisIs: string[];
  deliverables: string[];
  approach: {
    intro: string;
    practices: string[];
  };
  tools: string[];
};

export type ServiceHubGroup = {
  id: ServiceCategory;
  label: string;
  description: string;
};
