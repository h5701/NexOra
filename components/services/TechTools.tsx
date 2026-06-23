import SectionHeaderReveal from "@/components/ui/SectionHeaderReveal";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import type { TechToolGroup } from "@/lib/services/types";
import { MT_SPACE_4, SECTION_DARK_CLASS } from "@/lib/styles";

type TechToolsProps = {
  groups: TechToolGroup[];
};

function ToolGroup({ label, tools }: TechToolGroup) {
  return (
    <div className="tech-tools-group">
      <p className="tech-tools-group__label">{label}</p>
      <div className="tech-tools-group__chips">
        {tools.map((tool) => (
          <span key={tool} className="tech-tool-chip">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechTools({ groups }: TechToolsProps) {
  return (
    <section
      className={`tech-tools-band ${SECTION_DARK_CLASS} border-t border-[var(--color-border)]`}
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <SectionHeaderReveal eyebrow="Stack" title="Tech & tools" />
        <div className={`tech-tools-grid ${MT_SPACE_4}`}>
          {groups.map((group) => (
            <ToolGroup key={group.label} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
