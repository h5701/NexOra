import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { MT_SPACE_SECTION, SECTION_DARK_CLASS } from "@/lib/styles";

type TechToolsProps = {
  tools: string[];
};

function ToolChips({ tools }: TechToolsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((tool) => (
        <span
          key={tool}
          className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-xs font-medium tracking-[0.02em] text-[var(--color-text-secondary)]"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

export default function TechTools({ tools }: TechToolsProps) {
  return (
    <section className={`section-py ${SECTION_DARK_CLASS}`}>
      <div className={PAGE_CONTAINER_CLASS}>
        <SectionHeader eyebrow="Stack" title="Tech & tools" />
        <div className={MT_SPACE_SECTION}>
          <ToolChips tools={tools} />
        </div>
      </div>
    </section>
  );
}
