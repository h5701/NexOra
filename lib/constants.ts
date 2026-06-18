export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "Platforms & Web Applications", href: "/services" },
  { label: "Mobile Applications", href: "/services" },
  { label: "High-Performance Websites", href: "/services" },
  { label: "AI Integration", href: "/services" },
] as const;

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@nexoradigitalstudio.uk";

export const PAGE_CONTAINER_CLASS =
  "mx-auto max-w-[1160px] px-[clamp(24px,5vw,80px)]";
