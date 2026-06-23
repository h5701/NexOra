import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTAStrip from "@/components/home/CTAStrip";
import ServiceOverviewFigure from "@/components/services/ServiceOverviewFigure";
import DarkPageHero, { GradientHeroTitle } from "@/components/ui/DarkPageHero";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import type { ServicePageContent } from "@/lib/services/types";
import {
  SECTION_DARK_CLASS,
  SECTION_TINT_CLASS,
} from "@/lib/styles";

function TierBadge({
  tier,
  label,
}: {
  tier: ServicePageContent["tier"];
  label: string;
}) {
  if (tier === "available") {
    return (
      <span className="rounded-full border border-[color-mix(in_srgb,var(--color-cyan)_45%,transparent)] bg-[color-mix(in_srgb,var(--color-cyan)_8%,transparent)] px-2.5 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-cyan)]">
        {label}
      </span>
    );
  }

  return (
    <span className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-text-muted)]">
      {label}
    </span>
  );
}

function DeliverableList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-[7px] block h-px w-3 shrink-0 bg-[var(--color-cyan)]"
            aria-hidden="true"
          />
          <span className="text-sm font-light leading-body text-[var(--color-text-secondary)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PracticeList({ intro, practices }: { intro: string; practices: string[] }) {
  return (
    <div className="space-y-5">
      <p className="text-sm font-light leading-body text-[var(--color-text-secondary)]">
        {intro}
      </p>
      <ul className="space-y-3">
        {practices.map((practice) => (
          <li
            key={practice}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm font-light leading-body text-[var(--color-text-secondary)]"
          >
            {practice}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToolChips({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((tool) => (
        <span
          key={tool}
          className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-xs font-medium tracking-[0.02em] text-[var(--color-text-secondary)]"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

export default function ServicePage({ content }: { content: ServicePageContent }) {
  const contactHref = `/contact?type=${encodeURIComponent(content.contactProjectType)}`;

  return (
    <>
      <Navbar />
      <main>
        <DarkPageHero
          pill={
            <div className="flex flex-wrap items-center gap-3">
              <div className="hero-pill">
                <span className="hero-pill-dot" aria-hidden="true" />
                {content.tag}
              </div>
              <TierBadge tier={content.tier} label={content.tierLabel} />
            </div>
          }
          title={<GradientHeroTitle text={content.title} />}
          lead={content.outcome}
          footer={
            <PrimaryButton href={contactHref}>Start a project →</PrimaryButton>
          }
        />

        <section className={`section-py ${SECTION_TINT_CLASS}`}>
          <div className={PAGE_CONTAINER_CLASS}>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
              <div>
                <SectionHeader eyebrow="Overview" title="What this is" />
                <div className="mt-[52px] space-y-5 text-sm font-light leading-body text-[var(--color-text-secondary)]">
                  {content.whatThisIs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <ServiceOverviewFigure image={content.heroImage} priority />
            </div>
          </div>
        </section>

        <section className={`section-py ${SECTION_DARK_CLASS}`}>
          <div className={PAGE_CONTAINER_CLASS}>
            <SectionHeader
              eyebrow="Deliverables"
              title="What we deliver"
              lead="Concrete artifacts — not adjectives."
            />
            <div className="mt-[52px] max-w-[640px]">
              <DeliverableList items={content.deliverables} />
            </div>
          </div>
        </section>

        <section className={`section-py ${SECTION_TINT_CLASS}`}>
          <div className={PAGE_CONTAINER_CLASS}>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
              <div>
                <SectionHeader
                  eyebrow="Engineering approach"
                  title="How we approach it"
                />
                <div className="mt-[52px]">
                  <PracticeList
                    intro={content.approach.intro}
                    practices={content.approach.practices}
                  />
                </div>
              </div>

              <ServiceOverviewFigure image={content.bodyImage} />
            </div>
          </div>
        </section>

        <section className={`section-py ${SECTION_DARK_CLASS}`}>
          <div className={PAGE_CONTAINER_CLASS}>
            <SectionHeader eyebrow="Stack" title="Tech & tools" />
            <div className="mt-[52px]">
              <ToolChips tools={content.tools} />
            </div>
          </div>
        </section>

        <section className={`section-py ${SECTION_DARK_CLASS} border-t border-[var(--color-border)]`}>
          <div
            className={`${PAGE_CONTAINER_CLASS} flex flex-col items-center text-center`}
          >
            <h2 className="text-headline-cta max-w-[480px] font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
              Ready to start?
            </h2>
            <p className="mt-4 max-w-[440px] text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]">
              Tell us about your {content.title.toLowerCase()} project. We&apos;ll
              respond within 2 business days with scope direction and next steps.
            </p>
            <PrimaryButton href={contactHref} className="mt-8">
              Start a project →
            </PrimaryButton>
            <Link
              href="/services"
              className="mt-5 text-sm font-medium text-[var(--color-text-muted)] no-underline transition-colors hover:text-[var(--color-cyan)]"
            >
              ← All services
            </Link>
          </div>
        </section>

        <CTAStrip />
        <Footer />
      </main>
    </>
  );
}
