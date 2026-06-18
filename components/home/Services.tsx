import Link from "next/link";
import CardTopLine from "@/components/ui/CardTopLine";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import {
  CARD_BODY_PADDING_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
} from "@/lib/styles";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";

const services = [
  {
    tag: "Built to scale",
    title: "Platforms & web applications",
    body: "Full-stack platforms built around your users and business logic. We architect it properly and build it to scale.",
    linkText: "Learn more →",
    href: "/services",
    dimmed: false,
  },
  {
    tag: "Native UX at the core",
    title: "Mobile applications",
    body: "iOS and Android built with clean architecture and real user experience at the core. Not templates. Not shortcuts.",
    linkText: "Learn more →",
    href: "/services",
    dimmed: false,
  },
  {
    tag: "Conversion-engineered",
    title: "High-performance websites",
    body: "Your website is a revenue asset, not a brochure. We build for businesses that understand the difference.",
    linkText: "Learn more →",
    href: "/services",
    dimmed: false,
  },
  {
    tag: "Expression of interest open",
    title: "AI integration (opening soon)",
    body: "A limited number of AI integration partnerships for businesses ready to embed intelligent automation.",
    linkText: "Express interest →",
    href: "/contact",
    dimmed: true,
  },
];

export default function Services() {
  return (
    <section className="section-py scroll-mt-[100px] overflow-hidden bg-[var(--color-void)]">
      <div className={PAGE_CONTAINER_CLASS}>
        <EyebrowLabel>What we build</EyebrowLabel>

        <div className="mt-[14px] flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-headline-section text-left font-[family-name:var(--font-display)] font-bold leading-[1.02] tracking-[-0.03em] text-[var(--color-text-primary)]">
            Built for founders. Built to last.
          </h2>
          <Link
            href="/services"
            className="group/link inline-flex shrink-0 items-center border-b border-[var(--color-text-muted)] pb-px text-[13px] font-semibold text-[var(--color-text-muted)] no-underline transition-[color,border-color,transform] duration-150 hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
          >
            <span>All services</span>
            <span className="transition-transform duration-150 group-hover/link:translate-x-1">
              {" "}
              →
            </span>
          </Link>
        </div>

        <div className="mt-[52px]">
          <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className={`group ${CARD_DEPTH_INTERACTIVE_CLASS} ${CARD_BODY_PADDING_CLASS} ${
                  service.dimmed ? "opacity-50" : ""
                }`}
              >
                <CardTopLine />

                <div className="mb-[22px] flex items-center gap-2 text-[10px] font-medium tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
                  <span className="service-tag-rule" aria-hidden="true" />
                  {service.tag}
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-[19px] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--color-text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[13px] font-light leading-[1.68] text-[var(--color-text-secondary)]">
                  {service.body}
                </p>

                <Link
                  href={service.href}
                  className="group/link mt-5 inline-flex items-center text-[13px] font-semibold text-[var(--color-cyan)] no-underline transition-colors duration-150"
                >
                  <span>{service.linkText.replace(" →", "")}</span>
                  <span className="transition-transform duration-150 group-hover/link:translate-x-1">
                    {" "}
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
