import Link from "next/link";
import AlidaCarePreview from "@/components/home/AlidaCarePreview";
import FikrLessPreview from "@/components/home/FikrLessPreview";
import CardTopLine from "@/components/ui/CardTopLine";
import Reveal from "@/components/ui/Reveal";
import { CASE_STUDY_SUMMARIES } from "@/lib/content/site-copy";
import { CARD_DEPTH_INTERACTIVE_CLASS, GAP_CARD_GRID } from "@/lib/styles";

function CaseStudyCard({
  item,
}: {
  item: (typeof CASE_STUDY_SUMMARIES)[number];
}) {
  return (
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

        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-[var(--color-cyan)]">
          View case study
          <span className="transition-transform duration-150 motion-safe:group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function PortfolioGrid({
  animated = false,
  className = "",
}: {
  animated?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[1.65fr_1fr] ${GAP_CARD_GRID} ${className}`}
    >
      {CASE_STUDY_SUMMARIES.map((item, index) =>
        animated ? (
          <Reveal key={item.title} delay={index * 0.08} className="flex">
            <CaseStudyCard item={item} />
          </Reveal>
        ) : (
          <CaseStudyCard key={item.title} item={item} />
        ),
      )}
    </div>
  );
}
