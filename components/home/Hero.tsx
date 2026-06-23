import Link from "next/link";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import HeroOrbs from "@/components/ui/HeroOrbs";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { MT_SPACE_SECTION } from "@/lib/styles";

export default function Hero() {
  return (
    <section className="surface-dark relative scroll-mt-[100px] overflow-hidden">
      <HeroBackdrop priority />
      <HeroOrbs />

      {/* Focal glow directly behind the headline — anchors the eye. */}
      <div
        className="hero-orb hero-glow pointer-events-none left-1/2 top-[42%] h-[460px] w-[680px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(123,94,167,0.16) 0%, rgba(45,212,191,0.05) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className={`page-hero-py relative ${PAGE_CONTAINER_CLASS}`}>
        <Reveal delay={0}>
          <div className="hero-pill mb-9">
            <span className="hero-pill-dot" aria-hidden="true" />
            Digital product studio · UK
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-headline-hero max-w-full font-[family-name:var(--font-display)] font-extrabold tracking-[-0.04em] md:tracking-[-0.045em]">
            <span className="block text-[var(--color-text-primary)]">
              We build digital
            </span>
            <span className="gradient-hero-text block">products that work.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <div className={`${MT_SPACE_SECTION} flex flex-col items-start justify-between gap-8 md:flex-row md:items-end`}>
            <p className="max-w-[440px] text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]">
              Platforms, web apps, and AI systems for UK founders — scoped
              clearly, built to hold up in production.
            </p>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <PrimaryButton href="/contact">Start a project →</PrimaryButton>
              <Link
                href="#work"
                className="group/link inline-flex items-center gap-[5px] border-0 bg-transparent text-sm font-normal text-[var(--color-text-muted)] no-underline transition-colors duration-150 hover:text-[var(--color-cyan)]"
              >
                <span>See our work</span>
                <span className="transition-transform duration-150 group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className="h-px w-full"
        style={{ background: "var(--gradient-line)" }}
        aria-hidden="true"
      />
    </section>
  );
}
