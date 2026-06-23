import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CTAStrip from "@/components/home/CTAStrip";
import ServiceHubCard from "@/components/services/ServiceHubCard";
import ServiceOverviewFigure from "@/components/services/ServiceOverviewFigure";
import CardTopLine from "@/components/ui/CardTopLine";
import DarkPageHero, { GradientHeroTitle } from "@/components/ui/DarkPageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import {
  PORTFOLIO_HEADLINE,
  PORTFOLIO_LEAD,
  STUDIO_POSITIONING,
} from "@/lib/content/site-copy";
import { hubHeroImage } from "@/lib/services/content";
import { advancedAiCallout, serviceHubGroups, getServicesByCategory } from "@/lib/services/hub";
import {
  CARD_BODY_PADDING_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
  GAP_CARD_GRID,
  MT_SPACE_SECTION,
  SECTION_DARK_CLASS,
  SECTION_LIGHT_CLASS,
  SECTION_TINT_CLASS,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "Services — NexOra Digital Studio",
  description:
    "Engineering-led services for product development, AI integration, cloud architecture, IoT systems, and DevOps — built by a UK digital product studio.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
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
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
              <div>
                <SectionHeader
                  eyebrow="Overview"
                  title="What we build"
                  lead="Structured services for real product work — every engagement scoped around usable systems, not disconnected deliverables."
                />
                <div className={`${MT_SPACE_SECTION} max-w-[640px] space-y-5 text-sm font-light leading-body text-[var(--color-text-secondary)]`}>
                  <p>
                    We work with founders and businesses to design, build, and scale
                    digital products. From early-stage MVPs to production-ready
                    platforms, NexOra focuses on clarity, execution, and long-term
                    scalability.
                  </p>
                  <p>
                    As a UK software studio, we structure every engagement around
                    building real systems — not one-off deliverables. Product work,
                    platform rebuilds, and practical AI integration follow the same
                    rule: define it clearly, build it properly, ship it on time.
                  </p>
                </div>
              </div>

              <ServiceOverviewFigure image={hubHeroImage} priority />
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
              <SectionHeader
                eyebrow="Services"
                title={group.label}
                lead={group.description}
              />

              <div className={`${MT_SPACE_SECTION} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${GAP_CARD_GRID}`}>
                {getServicesByCategory(group.id).map((service) => (
                  <ServiceHubCard key={service.slug} service={service} />
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
                <div className="mb-[22px] flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
                  <span className="service-tag-rule" aria-hidden="true" />
                  <span>{advancedAiCallout.tag}</span>
                  <span className="ml-auto shrink-0 rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-text-muted)]">
                    {advancedAiCallout.tierLabel}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-heading tracking-[-0.015em] text-[var(--color-text-primary)]">
                  {advancedAiCallout.title}
                </h2>
                <p className="mt-3 text-sm font-light leading-body text-[var(--color-text-secondary)]">
                  {advancedAiCallout.body}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-cyan)]">
                  {advancedAiCallout.linkText}
                  <span className="ml-1 transition-transform duration-150 motion-safe:group-hover/link:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </section>

        <section className={`section-py ${SECTION_LIGHT_CLASS}`}>
          <div className={PAGE_CONTAINER_CLASS}>
            <SectionHeader
              eyebrow="Our work"
              title={PORTFOLIO_HEADLINE}
              lead={PORTFOLIO_LEAD}
            />

            <PortfolioGrid className={MT_SPACE_SECTION} />
          </div>
        </section>

        <CTAStrip />
        <Footer />
      </main>
    </>
  );
}
