import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import HeroOrbs from "@/components/ui/HeroOrbs";
import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import {
  GAP_CARD_GRID,
  MT_SPACE_4,
  MT_SPACE_SECTION,
  SECTION_HERO_DARK_CLASS,
  SECTION_TINT_CLASS,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "Contact — NexOra Digital Studio",
  description:
    "Tell us what you're building. We'll respond within 2 business days with clarity on scope, direction, and next steps.",
};

const howItWorks = [
  "Clear feedback on feasibility",
  "Suggested approach or structure",
  "Rough scope direction",
];

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const resolvedSearchParams = React.use(searchParams);
  const defaultProjectType = resolvedSearchParams.type
    ? decodeURIComponent(resolvedSearchParams.type)
    : "Web Platform";

  return (
    <>
      <Navbar />
      <main>
        <section className={SECTION_HERO_DARK_CLASS}>
          <HeroOrbs />

          <div className={`page-hero-py relative ${PAGE_CONTAINER_CLASS}`}>
            <SectionHeader
              eyebrow="Project intake"
              title="Start a Project"
              titleAs="h1"
              lead="Tell us what you're building. We'll respond within 2 business days with clarity on scope, direction, and next steps."
            />
          </div>

          <div
            className="h-px w-full bg-[var(--color-border)]"
            aria-hidden="true"
          />
        </section>

        <section className={`section-py ${SECTION_TINT_CLASS}`}>
          <div className={`${PAGE_CONTAINER_CLASS} mx-auto max-w-[760px]`}>
            <div>
              <EyebrowLabel className="text-center sm:text-left">
                How it works
              </EyebrowLabel>

              <ol
                className={`${MT_SPACE_4} grid grid-cols-1 sm:grid-cols-3 ${GAP_CARD_GRID}`}
              >
                {howItWorks.map((item, index) => (
                  <li
                    key={item}
                    className="flex h-full min-h-[148px] flex-col rounded-[var(--radius-lg)] border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)]"
                  >
                    <span className="mb-4 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--accent-primary)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent-primary)_10%,transparent)] font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.02em] text-[var(--accent-primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base font-light leading-body text-[var(--color-text-secondary)]">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className={MT_SPACE_SECTION}>
              <ContactForm defaultProjectType={defaultProjectType} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
