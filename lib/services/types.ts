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

/** Serializable next/image ref — used in content data files. */
export type ServiceImageRef = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  creditUrl?: string;
};

export type ServiceContent = {
  slug: string;
  category: ServiceCategory;
  tag: string;
  title: string;
  tier: ServiceTier;
  tierLabel: string;
  seoTitle: string;
  seoDescription: string;
  hero: {
    outcomeLine: string;
    image: ServiceImageRef;
  };
  hub: {
    oneLiner: string;
    cardImage: ServiceImageRef;
  };
  whatThisIs: string[];
  deliverables: string[];
  approach: {
    intro: string;
    points: string[];
  };
  supportingImage: ServiceImageRef;
  techTools: string[];
  cta: {
    label: string;
    projectType: string;
  };
};

export type ServiceHubGroup = {
  id: ServiceCategory;
  label: string;
  description: string;
};
