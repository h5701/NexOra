"use client";

import HeroBackdrop from "@/components/ui/HeroBackdrop";
import HeroOrbs from "@/components/ui/HeroOrbs";
import Reveal from "@/components/ui/Reveal";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { SECTION_HERO_DARK_CLASS, MT_SPACE_SECTION } from "@/lib/styles";

type DarkPageHeroProps = {
  pill: React.ReactNode;
  title: React.ReactNode;
  lead: string;
  footer?: React.ReactNode;
};

export default function DarkPageHero({
  pill,
  title,
  lead,
  footer,
}: DarkPageHeroProps) {
  return (
    <section className={SECTION_HERO_DARK_CLASS}>
      <HeroBackdrop priority />
      <HeroOrbs />

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
          <div className="mb-9">{pill}</div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-headline-hero max-w-[14ch] font-[family-name:var(--font-display)] font-extrabold tracking-[-0.04em] md:max-w-[18ch] md:tracking-[-0.045em]">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className={`${MT_SPACE_SECTION} max-w-[560px] text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]`}>
            {lead}
          </p>
          {footer && <div className="mt-8">{footer}</div>}
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

function splitTitle(title: string) {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) {
    return { lead: null as string | null, accent: title };
  }

  const accent = words.pop()!;
  return { lead: words.join(" "), accent };
}

export function GradientHeroTitle({ text }: { text: string }) {
  const { lead, accent } = splitTitle(text);

  if (!lead) {
    return <span className="gradient-hero-text block">{accent}</span>;
  }

  return (
    <>
      <span className="block text-balance text-[var(--color-text-primary)]">
        {lead}
      </span>
      <span className="gradient-hero-text mt-1 block text-balance">{accent}</span>
    </>
  );
}
