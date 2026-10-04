import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTAStrip from "@/components/home/CTAStrip";
import LabsShowcase from "@/components/labs/LabsShowcase";
import Reveal from "@/components/ui/Reveal";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { LABS_INTRO_QUOTE } from "@/lib/content/site-copy";
import { SECTION_LIGHT_CLASS } from "@/lib/styles";

export const metadata: Metadata = {
  title: "NexOra Labs — NexOra Digital Studio",
  description:
    "NexOra Labs showcases experimental products, concepts, and technical explorations built by NexOra outside of client work.",
};

export default function LabsPage() {
  return (
    <>
      <Navbar alwaysLight />
      <main>
        <section className={`page-hero-py pb-16 md:pb-20 ${SECTION_LIGHT_CLASS} border-t-0`}>
          <div className={`${PAGE_CONTAINER_CLASS} mb-14 md:mb-20`}>
            <Reveal>
              <h1 className="text-headline-hero font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-[var(--color-text-primary)]">
                NexOra <span className="text-gradient">Labs</span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-[560px] text-lg font-light italic leading-body-relaxed text-[var(--color-text-secondary)]">
                “{LABS_INTRO_QUOTE}”
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 text-sm font-light text-[var(--color-text-muted)]">
                Concept work, not client work.{" "}
                <Link href="/#work" className="link-accent">
                  See Our Work
                </Link>{" "}
                for what we ship for real businesses.
              </p>
            </Reveal>
          </div>

          <LabsShowcase />
        </section>

        <CTAStrip />
        <Footer />
      </main>
    </>
  );
}
