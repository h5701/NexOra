import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { MT_SPACE_SECTION, SECTION_DARK_CLASS } from "@/lib/styles";

type DeliverablesProps = {
  items: string[];
};

function DeliverableList({ items }: DeliverablesProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-[7px] block h-px w-3 shrink-0 bg-[var(--color-cyan)]"
            aria-hidden="true"
          />
          <span className="text-sm font-light leading-body text-[var(--color-text-secondary)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Deliverables({ items }: DeliverablesProps) {
  return (
    <section className={`section-py ${SECTION_DARK_CLASS}`}>
      <div className={PAGE_CONTAINER_CLASS}>
        <SectionHeader
          eyebrow="Deliverables"
          title="What we deliver"
          lead="Concrete artifacts — not adjectives."
        />
        <div className={`${MT_SPACE_SECTION} max-w-[640px]`}>
          <DeliverableList items={items} />
        </div>
      </div>
    </section>
  );
}
