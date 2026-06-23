import type { CSSProperties } from "react";
import Image from "next/image";
import AlidaCareBrowserFrame from "@/components/portfolio/AlidaCareBrowserFrame";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTAStrip from "@/components/home/CTAStrip";
import CardTopLine from "@/components/ui/CardTopLine";
import HeroOrbs from "@/components/ui/HeroOrbs";
import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import {
  CARD_DEPTH_CLASS,
  SECTION_DARK_CLASS,
  SECTION_TINT_CLASS,
} from "@/lib/styles";

type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type CaseStudySection = {
  eyebrow: string;
  headline: string;
  body?: string;
  listIntro?: string;
  listItems?: string[];
};

export type CaseStudyContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  accentColor: string;
  hero:
    | {
        type: "browser";
        images: CaseStudyImage[];
        url: string;
        topGradient: string;
        scrollable?: boolean;
        showScrollHint?: boolean;
        viewportHeights?: string;
      }
    | {
        type: "phones";
        images: CaseStudyImage[];
      };
  sections: {
    brief: CaseStudySection;
    built: CaseStudySection;
    approach: CaseStudySection;
    stands: CaseStudySection;
  };
  externalLink: {
    href: string;
    label: string;
  };
};

function PhoneScreenshot({
  image,
  className = "",
  priority = false,
  topGradient,
}: {
  image: CaseStudyImage;
  className?: string;
  priority?: boolean;
  topGradient: string;
}) {
  return (
    <div className={`${CARD_DEPTH_CLASS} ${className}`}>
      <CardTopLine gradient={topGradient} />
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="block h-auto w-full"
        sizes="(max-width: 768px) 200px, 240px"
        priority={priority}
      />
    </div>
  );
}

function HeroVisual({
  hero,
  phoneTopGradient,
}: {
  hero: CaseStudyContent["hero"];
  phoneTopGradient: string;
}) {
  if (hero.type === "browser") {
    return (
      <div className="mt-10">
        <AlidaCareBrowserFrame
          images={hero.images}
          url={hero.url}
          topGradient={hero.topGradient}
          scrollable={hero.scrollable ?? false}
          showScrollHint={hero.showScrollHint ?? false}
          viewportHeights={hero.viewportHeights}
          priority
          sizes="(max-width: 1160px) 100vw, 1160px"
        />
      </div>
    );
  }

  return (
    <div className="mt-10 -mx-[clamp(24px,5vw,80px)] px-[clamp(24px,5vw,80px)] md:mx-0 md:px-0">
      <div className="flex items-start gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 [scrollbar-width:none] [-ms-overflow-style:none] md:grid md:grid-cols-3 md:overflow-visible [&::-webkit-scrollbar]:hidden">
        {hero.images.map((image) => (
          <PhoneScreenshot
            key={image.src}
            image={image}
            topGradient={phoneTopGradient}
            className="w-[min(200px,68vw)] shrink-0 md:w-full"
            priority
          />
        ))}
      </div>
    </div>
  );
}

function CaseStudySectionBlock({
  section,
  background,
}: {
  section: CaseStudySection;
  background: "void" | "tint";
}) {
  const proseBlock = (
    <div className="space-y-5 text-sm font-light leading-body text-[var(--color-text-secondary)]">
      {section.body && <p>{section.body}</p>}
      {section.listIntro && <p>{section.listIntro}</p>}
      {section.listItems && section.listItems.length > 0 && (
        <ul className="space-y-4">
          {section.listItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-[7px] block h-px w-3 shrink-0 bg-[var(--case-accent)]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section
      className={`section-py scroll-mt-[100px] border-t border-[var(--color-border)] ${
        background === "void" ? SECTION_DARK_CLASS : SECTION_TINT_CLASS
      }`}
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <SectionHeader eyebrow={section.eyebrow} title={section.headline} />
        <div className="mt-[52px] max-w-[640px]">{proseBlock}</div>
      </div>
    </section>
  );
}

export default function CaseStudyPage({ content }: { content: CaseStudyContent }) {
  const sectionBackgrounds: Array<"void" | "tint"> = [
    "tint",
    "void",
    "tint",
    "void",
  ];

  const phoneTopGradient = `linear-gradient(90deg, ${content.accentColor}, var(--color-cyan))`;

  const accentStyle = {
    "--case-accent": content.accentColor,
  } as CSSProperties;

  return (
    <>
      <Navbar />
      <main style={accentStyle}>
        <section className={`relative scroll-mt-[100px] overflow-hidden ${SECTION_DARK_CLASS} border-t-0`}>
          <HeroOrbs />

          <div className={`relative ${PAGE_CONTAINER_CLASS} pb-14 pt-[calc(3.5rem+65px)] md:pb-24 md:pt-[calc(96px+65px)]`}>
            <div
              className="hero-pill mb-0"
              style={{
                borderColor: `color-mix(in srgb, ${content.accentColor} 35%, transparent)`,
              }}
            >
              <span
                className="h-[6px] w-[6px] shrink-0 rounded-full"
                style={{
                  background: content.accentColor,
                  boxShadow: `0 0 10px color-mix(in srgb, ${content.accentColor} 80%, transparent)`,
                }}
                aria-hidden="true"
              />
              {content.eyebrow}
            </div>

            <h1 className="text-headline-section mt-[14px] text-left font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
              {content.title}
            </h1>
            <p className="mt-5 max-w-[560px] text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]">
              {content.subtitle}
            </p>

            <HeroVisual hero={content.hero} phoneTopGradient={phoneTopGradient} />
          </div>

          <div
            className="h-px w-full bg-[var(--color-border)]"
            aria-hidden="true"
          />
        </section>

        <CaseStudySectionBlock
          section={content.sections.brief}
          background={sectionBackgrounds[0]}
        />
        <CaseStudySectionBlock
          section={content.sections.built}
          background={sectionBackgrounds[1]}
        />
        <CaseStudySectionBlock
          section={content.sections.approach}
          background={sectionBackgrounds[2]}
        />
        <CaseStudySectionBlock
          section={content.sections.stands}
          background={sectionBackgrounds[3]}
        />

        <section className={`section-py scroll-mt-[100px] border-t border-[var(--color-border)] ${SECTION_TINT_CLASS}`}>
          <div className={`${PAGE_CONTAINER_CLASS} flex justify-center`}>
            <a
              href={content.externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[9px] border border-[var(--color-card-border)] bg-transparent px-[26px] py-[13px] text-sm font-medium text-[var(--color-text-primary)] no-underline transition-[border-color,color,transform] duration-150 hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--case-accent)_55%,transparent)] hover:text-[var(--case-accent)]"
            >
              {content.externalLink.label}
            </a>
          </div>
        </section>

        <CTAStrip />
        <Footer />
      </main>
    </>
  );
}
