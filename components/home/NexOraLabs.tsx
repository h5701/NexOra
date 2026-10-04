import Link from "next/link";
import LabsProjectCard from "@/components/labs/LabsProjectCard";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Reveal from "@/components/ui/Reveal";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { LABS_HEADLINE, LABS_LEAD, LABS_PROJECTS } from "@/lib/content/site-copy";
import { MT_SPACE_4, MT_SPACE_SECTION, MT_LEAD } from "@/lib/styles";

export default function NexOraLabs() {
  return (
    <section
      id="labs"
      className="section-py surface-tint scroll-mt-[100px] overflow-hidden border-t border-[var(--color-border)]"
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <EyebrowLabel>Labs</EyebrowLabel>

        <h2
          className={`text-headline-section ${MT_SPACE_4} max-w-[640px] text-left font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]`}
        >
          {LABS_HEADLINE}
        </h2>

        <p className={`${MT_LEAD} max-w-[480px] text-base font-light leading-body text-[var(--color-text-secondary)]`}>
          {LABS_LEAD}
        </p>

        <div className={MT_SPACE_SECTION}>
          <Reveal className="max-w-[420px]">
            <LabsProjectCard project={LABS_PROJECTS[0]} />
          </Reveal>

          <Reveal delay={0.08}>
            <Link href="/labs" className="link-cta mt-8 text-base">
              Explore NexOra Labs
              <span className="link-cta-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
