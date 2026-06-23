import ServiceImageFigure from "@/components/services/ServiceImageFigure";
import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import type { ServiceImageRef } from "@/lib/services/types";
import { MT_SPACE_SECTION, SECTION_TINT_CLASS } from "@/lib/styles";

type ApproachProps = {
  intro: string;
  points: string[];
  image: ServiceImageRef;
  imageOnLeft: boolean;
};

function PracticeList({ intro, points }: { intro: string; points: string[] }) {
  return (
    <div className="space-y-5">
      <p className="text-sm font-light leading-body text-[var(--color-text-secondary)]">
        {intro}
      </p>
      <ul className="space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm font-light leading-body text-[var(--color-text-secondary)]"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Approach({
  intro,
  points,
  image,
  imageOnLeft,
}: ApproachProps) {
  return (
    <section className={`section-py ${SECTION_TINT_CLASS}`}>
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
          <div className={imageOnLeft ? "lg:order-2" : undefined}>
            <SectionHeader
              eyebrow="Engineering approach"
              title="How we approach it"
            />
            <div className={MT_SPACE_SECTION}>
              <PracticeList intro={intro} points={points} />
            </div>
          </div>

          <div className={imageOnLeft ? "lg:order-1" : undefined}>
            <ServiceImageFigure image={image} />
          </div>
        </div>
      </div>
    </section>
  );
}
