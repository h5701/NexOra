import Link from "next/link";
import CardTopLine from "@/components/ui/CardTopLine";
import CardTagRow from "@/components/ui/CardTagRow";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Reveal from "@/components/ui/Reveal";
import TierBadge from "@/components/services/TierBadge";
import { homeBuildServices } from "@/lib/services";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import {
  CARD_BODY_PADDING_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
  GAP_CARD_GRID,
  LINK_CTA_CLASS,
  LINK_UNDERLINE_MUTED_CLASS,
  MT_SPACE_4,
  MT_SPACE_SECTION,
} from "@/lib/styles";

export default function Services() {
  return (
    <section className="section-py surface-light scroll-mt-[100px] overflow-hidden border-t border-[var(--color-border)]">
      <div className={PAGE_CONTAINER_CLASS}>
        <Reveal>
          <EyebrowLabel>What we build</EyebrowLabel>

          <div className={`${MT_SPACE_4} flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between`}>
            <h2 className="text-headline-section max-w-[640px] text-left font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
              Platforms, AI, and infrastructure — shipped properly.
            </h2>
            <Link
              href="/services"
              className={`group/link ${LINK_UNDERLINE_MUTED_CLASS} shrink-0`}
            >
              <span>All services</span>
              <span className="link-underline-muted-arrow" aria-hidden="true">
                {" "}
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className={MT_SPACE_SECTION}>
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${GAP_CARD_GRID}`}>
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

                <CardTagRow
                  tag={service.tag}
                  badge={
                    service.tier && service.tierLabel ? (
                      <TierBadge tier={service.tier} label={service.tierLabel} />
                    ) : undefined
                  }
                />

                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-heading tracking-[-0.015em] text-[var(--color-text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm font-light leading-body text-[var(--color-text-secondary)]">
                  {service.body}
                </p>

                {service.href && service.linkText && (
                  <Link
                    href={service.href}
                    className={`${LINK_CTA_CLASS} mt-5`}
                  >
                    <span>{service.linkText}</span>
                    <span className="link-cta-arrow" aria-hidden="true">
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
