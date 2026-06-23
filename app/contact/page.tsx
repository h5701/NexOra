import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import DepthCard from "@/components/ui/DepthCard";
import HeroOrbs from "@/components/ui/HeroOrbs";
import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import {
  CARD_BODY_PADDING_CLASS,
  MT_SPACE_4,
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
          <div className={PAGE_CONTAINER_CLASS}>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <DepthCard className={CARD_BODY_PADDING_CLASS} interactive={false}>
                <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-text-muted)] uppercase">
                  How it works
                </p>
                <ul className={`${MT_SPACE_4} space-y-5`}>
                  {howItWorks.map((item, index) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-purple)] bg-[rgba(123,94,167,0.15)] text-xs font-semibold tracking-[0.04em] text-[var(--color-purple)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-1 text-sm font-light leading-body text-[var(--color-text-secondary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </DepthCard>

              <ContactForm defaultProjectType={defaultProjectType} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
