import CardTopLine from "@/components/ui/CardTopLine";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Reveal from "@/components/ui/Reveal";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import {
  CARD_BODY_PADDING_COMPACT_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
  GAP_CARD_GRID,
  MT_SPACE_4,
  MT_SPACE_SECTION,
} from "@/lib/styles";

const cards = [
  {
    index: "01",
    title: "We don't overpromise",
    body: "We'd rather decline a project than underdeliver. Scope, timeline, and budget agreed up front — then held to.",
  },
  {
    index: "02",
    title: "Full studio. One team.",
    body: "Strategy, design, and build under one roof. No outsourcing, no handoff gaps.",
  },
  {
    index: "03",
    title: "Speed without shortcuts",
    body: "We move fast because we plan properly. Architecture and scope agreed before build starts.",
  },
];

export default function WhyNexOra({
  surface = "light",
}: {
  surface?: "light" | "tint";
}) {
  const bgClass = surface === "tint" ? "surface-tint" : "surface-light";

  return (
    <section
      className={`section-py scroll-mt-[100px] overflow-hidden ${bgClass}`}
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <Reveal>
          <EyebrowLabel>Why NexOra</EyebrowLabel>

          <h2 className={`text-headline-section ${MT_SPACE_4} max-w-[640px] text-left font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-balance text-[var(--color-text-primary)]`}>
            Small team. Full stack. No handoffs.
          </h2>
        </Reveal>

        <div className={MT_SPACE_SECTION}>
          <div className={`grid grid-cols-1 md:grid-cols-3 ${GAP_CARD_GRID}`}>
            {cards.map((card, index) => (
              <Reveal
                as="article"
                key={card.index}
                delay={index * 0.06}
                className={`${CARD_DEPTH_INTERACTIVE_CLASS} ${CARD_BODY_PADDING_COMPACT_CLASS}`}
              >
                <CardTopLine />

                <p className="mb-[18px] font-[family-name:var(--font-display)] text-caption font-semibold tracking-[0.12em] text-[rgba(123,94,167,0.5)] uppercase">
                  {card.index}
                </p>

                <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-semibold leading-heading tracking-[-0.01em] text-[var(--color-text-primary)]">
                  {card.title}
                </h3>

                <p className="text-sm font-light leading-body text-[var(--color-text-secondary)]">
                  {card.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
