import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTAStrip from "@/components/home/CTAStrip";
import CardTopLine from "@/components/ui/CardTopLine";
import HeroOrbs from "@/components/ui/HeroOrbs";
import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { FOUNDERS } from "@/lib/content/founders";
import {
  CARD_BODY_PADDING_COMPACT_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
  GAP_CARD_GRID,
  MT_SPACE_4,
  MT_SPACE_SECTION,
  SECTION_DARK_CLASS,
  SECTION_HERO_DARK_CLASS,
  SECTION_TINT_CLASS,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "About — NexOra Digital Studio",
  description:
    "A modern software studio built for founders and businesses who want execution, not excuses.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={SECTION_HERO_DARK_CLASS}>
          <HeroOrbs />

          <div className={`page-hero-py relative ${PAGE_CONTAINER_CLASS}`}>
            <SectionHeader
              eyebrow="Software studio"
              title="About NexOra"
              titleAs="h1"
              lead="A modern software studio built for founders and businesses who want execution, not excuses."
            />
          </div>

          <div
            className="h-px w-full bg-[var(--color-border)]"
            aria-hidden="true"
          />
        </section>

        <section className={`section-py ${SECTION_TINT_CLASS}`}>
          <div className={PAGE_CONTAINER_CLASS}>
            <SectionHeader eyebrow="Our story" title="Why we built NexOra" />

            <div className={`${MT_SPACE_SECTION} max-w-[640px] space-y-5 text-sm font-light leading-body text-[var(--color-text-secondary)]`}>
              <p>
                NexOra was created from a simple frustration: most development
                studios either overpromise, underdeliver, or fail to understand
                what businesses actually need.
              </p>
              <p className="border-l-2 border-[var(--color-purple)] py-1 pl-5 text-base font-medium text-[var(--color-text-primary)]">
                We wanted to change that.
              </p>
              <p>
                Founded by Hina Ahmad and Ali Tariq, NexOra is a software studio
                built around clarity, execution, and product thinking. We
                don&apos;t just build websites or applications — we build
                systems that help businesses grow, scale, and operate more
                efficiently.
              </p>
              <p>
                From startups validating their first product to established
                businesses upgrading their digital infrastructure, NexOra exists
                to bridge the gap between ideas and real-world execution.
              </p>
            </div>
          </div>
        </section>

        <section className={`section-py ${SECTION_DARK_CLASS}`}>
          <div className={PAGE_CONTAINER_CLASS}>
            <SectionHeader
              eyebrow="Founders"
              title="The people behind NexOra"
            />

            <div className={`${MT_SPACE_SECTION} grid grid-cols-1 items-start md:grid-cols-2 ${GAP_CARD_GRID}`}>
              {FOUNDERS.map((founder) => (
                <article
                  key={founder.name}
                  className={`${CARD_DEPTH_INTERACTIVE_CLASS} ${CARD_BODY_PADDING_COMPACT_CLASS}`}
                >
                  <CardTopLine />

                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[rgba(123,94,167,0.3)] bg-[rgba(123,94,167,0.15)]">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
                        {founder.name}
                      </h3>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[var(--color-cyan)] no-underline transition-opacity hover:opacity-80"
                      >
                        LinkedIn
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-caption font-medium tracking-[0.1em] text-[var(--color-cyan)] uppercase">
                    {founder.role}
                  </p>

                  <p className="mt-4 text-sm font-light leading-body text-[var(--color-text-secondary)]">
                    {founder.body}
                  </p>

                  {founder.showStrengthsLabel && (
                    <p className="mt-6 text-xs font-medium tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
                      Key strengths
                    </p>
                  )}

                  <div
                    className={`flex flex-wrap gap-2 ${founder.showStrengthsLabel ? "mt-3" : "mt-6"}`}
                  >
                    {founder.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--color-border)] px-[10px] py-1 text-xs font-medium tracking-[0.07em] text-[var(--color-text-muted)] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`section-py ${SECTION_TINT_CLASS}`}>
          <div className={`${PAGE_CONTAINER_CLASS} max-w-[760px] text-center`}>
            <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-text-muted)] uppercase">
              Our mission
            </p>
            <p className={`text-headline-section ${MT_SPACE_4} font-[family-name:var(--font-display)] font-bold leading-headline tracking-[-0.03em] text-[var(--color-text-primary)]`}>
              We exist to bridge the gap between ideas and real-world execution.
            </p>
          </div>
        </section>

        <CTAStrip />
        <Footer />
      </main>
    </>
  );
}
