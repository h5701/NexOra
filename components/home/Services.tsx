import Link from "next/link";
import CardTopLine from "@/components/ui/CardTopLine";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Reveal from "@/components/ui/Reveal";
import { homeBuildServices } from "@/lib/services";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import {
  CARD_BODY_PADDING_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
} from "@/lib/styles";

function TierBadge({
  tier,
  label,
}: {
  tier: "available" | "soon";
  label: string;
}) {
  if (tier === "available") {
    return (
      <span className="ml-auto shrink-0 rounded-full border border-[color-mix(in_srgb,var(--color-cyan)_45%,transparent)] bg-[color-mix(in_srgb,var(--color-cyan)_8%,transparent)] px-2 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-cyan)]">
        {label}
      </span>
    );
  }

  return (
    <span className="ml-auto shrink-0 rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-text-muted)]">
      {label}
    </span>
  );
}

export default function Services() {
  return (
    <section className="section-py surface-tint scroll-mt-[100px] overflow-hidden">
      <div className={PAGE_CONTAINER_CLASS}>
        <EyebrowLabel>What we build</EyebrowLabel>

        <div className="mt-[14px] flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-headline-section text-left font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
            Platforms, AI, and infrastructure — shipped properly.
          </h2>
          <Link
            href="/services"
            className="group/link inline-flex shrink-0 items-center border-b border-[var(--color-text-muted)] pb-px text-sm font-semibold text-[var(--color-text-muted)] no-underline transition-[color,border-color,transform] duration-150 hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
          >
            <span>All services</span>
            <span className="transition-transform duration-150 group-hover/link:translate-x-1">
              {" "}
              →
            </span>
          </Link>
        </div>

        <div className="mt-[52px]">
          <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            {homeBuildServices.map((service, index) => (
              <Reveal
                key={service.title}
                as="article"
                delay={index * 0.06}
                className={`group/link ${CARD_DEPTH_INTERACTIVE_CLASS} ${CARD_BODY_PADDING_CLASS} ${
                  service.dimmed ? "border-dashed" : ""
                }`}
              >
                <CardTopLine />

                <div className="mb-[22px] flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
                  <span className="service-tag-rule" aria-hidden="true" />
                  <span className="min-w-0 truncate">{service.tag}</span>
                  {service.tier && service.tierLabel && (
                    <TierBadge tier={service.tier} label={service.tierLabel} />
                  )}
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-heading tracking-[-0.015em] text-[var(--color-text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm font-light leading-body text-[var(--color-text-secondary)]">
                  {service.body}
                </p>

                {service.href && service.linkText && (
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-cyan)] no-underline transition-colors duration-150"
                  >
                    <span>{service.linkText}</span>
                    <span className="transition-transform duration-150 group-hover/link:translate-x-1">
                      {" "}
                      →
                    </span>
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
