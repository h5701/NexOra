import Link from "next/link";
import AlidaCarePreview from "@/components/home/AlidaCarePreview";
import FikrLessPreview from "@/components/home/FikrLessPreview";
import Testimonial from "@/components/home/Testimonial";
import CardTopLine from "@/components/ui/CardTopLine";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Reveal from "@/components/ui/Reveal";
import {
  CASE_STUDY_SUMMARIES,
  PORTFOLIO_HEADLINE,
  PORTFOLIO_LEAD,
} from "@/lib/content/site-copy";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { CARD_DEPTH_INTERACTIVE_CLASS } from "@/lib/styles";

export default function Portfolio() {
  return (
    <section
      id="work"
      className="section-py surface-light scroll-mt-[100px] overflow-hidden"
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <EyebrowLabel>Our work</EyebrowLabel>

        <h2 className="text-headline-section mt-[14px] max-w-[640px] text-left font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
          {PORTFOLIO_HEADLINE}
        </h2>

        <p className="mt-4 max-w-[480px] text-md font-light leading-body text-[var(--color-text-secondary)]">
          {PORTFOLIO_LEAD}
        </p>

        <div className="mt-[52px]">
          <div className="grid grid-cols-1 gap-[14px] md:grid-cols-[1.65fr_1fr]">
            {CASE_STUDY_SUMMARIES.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="flex"
              >
                <Link
                  href={item.href}
                  aria-label={`View the ${item.title} case study`}
                  className={`group ${CARD_DEPTH_INTERACTIVE_CLASS} flex w-full flex-col no-underline`}
                >
                  <CardTopLine />

                  {item.preview === "alida" ? (
                    <AlidaCarePreview />
                  ) : (
                    <FikrLessPreview />
                  )}

                  <div className="flex flex-1 flex-col bg-[var(--color-card)] px-6 py-6 md:px-7 md:py-[26px]">
                    <div className="mb-[13px] flex flex-wrap gap-[6px]">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-[10px] py-1 text-xs font-medium tracking-[0.07em] uppercase ${
                            tag === item.liveTag
                              ? "border-[rgba(45,212,191,0.3)] text-[var(--color-cyan)]"
                              : "border-[var(--color-border)] text-[var(--color-text-muted)]"
                          }`}
                        >
                          {tag === item.liveTag && (
                            <span className="live-dot" aria-hidden="true" />
                          )}
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
                      {item.title}
                    </h3>

                    <p className="mt-[10px] text-sm font-light leading-body text-[var(--color-text-secondary)]">
                      {item.body}
                    </p>

                    <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-cyan)]">
                      View case study
                      <span className="transition-transform duration-150 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Testimonial />
        </div>
      </div>
    </section>
  );
}
