import CardTopLine from "@/components/ui/CardTopLine";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import {
  CARD_BODY_PADDING_COMPACT_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
} from "@/lib/styles";

const cards = [
  {
    index: "01",
    title: "We don't overpromise",
    body: "We'd rather decline a project than take it and underdeliver. Before we start, we align on scope, timeline, and budget — and we hold to it.",
  },
  {
    index: "02",
    title: "Full studio. One team.",
    body: "Strategy, design, and development under one roof. No outsourcing, no handoff gaps, no miscommunication between moving parts.",
  },
  {
    index: "03",
    title: "Speed without shortcuts",
    body: "We move fast because we plan properly — not because we cut corners. Every product we ship is built to last and built to scale.",
  },
];

export default function WhyNexOra({
  background = "surface-alt",
}: {
  background?: "void" | "surface-alt";
}) {
  const bgClass =
    background === "void"
      ? "bg-[var(--color-void)]"
      : "bg-[var(--color-surface-alt)]";

  return (
    <section
      className={`section-py scroll-mt-[100px] overflow-hidden border-t border-[var(--color-border)] ${bgClass}`}
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <EyebrowLabel>Why NexOra</EyebrowLabel>

        <h2 className="text-headline-section mt-[14px] text-left font-[family-name:var(--font-display)] font-bold leading-[1.02] tracking-[-0.03em] text-[var(--color-text-primary)]">
          A studio that treats your product like it&apos;s our own.
        </h2>

        <div className="mt-[52px]">
          <div className="grid grid-cols-1 gap-[14px] md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.index}
                className={`${CARD_DEPTH_INTERACTIVE_CLASS} ${CARD_BODY_PADDING_COMPACT_CLASS}`}
              >
                <CardTopLine />

                <p className="mb-[18px] font-[family-name:var(--font-display)] text-[11px] font-semibold tracking-[0.12em] text-[rgba(123,94,167,0.5)] uppercase">
                  {card.index}
                </p>

                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[17px] font-semibold leading-[1.2] tracking-[-0.01em] text-[var(--color-text-primary)]">
                  {card.title}
                </h3>

                <p className="text-[12px] font-light leading-[1.7] text-[var(--color-text-secondary)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
