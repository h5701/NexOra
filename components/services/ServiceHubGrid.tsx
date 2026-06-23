import Link from "next/link";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import ServiceHubCard from "@/components/services/ServiceHubCard";
import ServiceImageFigure from "@/components/services/ServiceImageFigure";
import CardTopLine from "@/components/ui/CardTopLine";
import DarkPageHero, { GradientHeroTitle } from "@/components/ui/DarkPageHero";
import CardTagRow from "@/components/ui/CardTagRow";
import Reveal from "@/components/ui/Reveal";
import SectionHeaderReveal from "@/components/ui/SectionHeaderReveal";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { STUDIO_POSITIONING, PORTFOLIO_HEADLINE, PORTFOLIO_LEAD } from "@/lib/content/site-copy";
import { getServicesByCategory } from "@/lib/services/index";
import {
  advancedAiCallout,
  hubOverview,
  serviceHubGroups,
} from "@/lib/services/hub";
import {
  CARD_BODY_PADDING_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
  GAP_CARD_GRID,
  LINK_CTA_CLASS,
  MT_SPACE_SECTION,
  SECTION_DARK_CLASS,
  SECTION_LIGHT_CLASS,
  SECTION_TINT_CLASS,
} from "@/lib/styles";

export default function ServiceHubGrid() {
  return (
    <>
      <DarkPageHero
        pill={
          <div className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true" />
            Software studio
          </div>
        }
        title={<GradientHeroTitle text="Services" />}
        lead={STUDIO_POSITIONING}
      />

      <section className={`section-py ${SECTION_TINT_CLASS}`}>
        <div className={PAGE_CONTAINER_CLASS}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
            <div>
              <SectionHeaderReveal
                eyebrow={hubOverview.eyebrow}
                title={hubOverview.title}
                lead={hubOverview.lead}
              />
              <div
                className={`${MT_SPACE_SECTION} max-w-[640px] space-y-5 text-sm font-light leading-body text-[var(--color-text-secondary)]`}
              >
                {hubOverview.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <ServiceImageFigure image={hubOverview.image} priority />
          </div>
        </div>
      </section>

      {serviceHubGroups.map((group, index) => (
        <section
          key={group.id}
          className={`section-py ${
            index % 2 === 0 ? SECTION_DARK_CLASS : SECTION_TINT_CLASS
          }`}
        >
          <div className={PAGE_CONTAINER_CLASS}>
            <SectionHeaderReveal
              eyebrow="Services"
              title={group.label}
              lead={group.description}
            />

            <div
              className={`${MT_SPACE_SECTION} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${GAP_CARD_GRID}`}
            >
              {getServicesByCategory(group.id).map((service, serviceIndex) => (
                <Reveal
                  key={service.slug}
                  delay={serviceIndex * 0.06}
                  className="h-full"
                >
                  <ServiceHubCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className={`section-py ${SECTION_TINT_CLASS}`}>
        <div className={PAGE_CONTAINER_CLASS}>
          <Link
            href={advancedAiCallout.href}
            className={`group/link ${CARD_DEPTH_INTERACTIVE_CLASS} block border-dashed no-underline opacity-90`}
          >
            <CardTopLine />
            <div className={CARD_BODY_PADDING_CLASS}>
              <CardTagRow
                tag={advancedAiCallout.tag}
                badge={
                  <span className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-text-muted)]">
                    {advancedAiCallout.tierLabel}
                  </span>
                }
              />
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-heading tracking-[-0.015em] text-[var(--color-text-primary)]">
                {advancedAiCallout.title}
              </h2>
              <p className="mt-3 text-sm font-light leading-body text-[var(--color-text-secondary)]">
                {advancedAiCallout.body}
              </p>
              <span className={`${LINK_CTA_CLASS} mt-5`}>
                {advancedAiCallout.linkText}
                <span className="link-cta-arrow" aria-hidden="true">
                  {" "}
                  →
                </span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className={`section-py ${SECTION_LIGHT_CLASS}`}>
        <div className={PAGE_CONTAINER_CLASS}>
          <SectionHeaderReveal
            eyebrow="Our work"
            title={PORTFOLIO_HEADLINE}
            lead={PORTFOLIO_LEAD}
          />

          <PortfolioGrid animated className={MT_SPACE_SECTION} />
        </div>
      </section>
    </>
  );
}
