import ServiceImageFigure from "@/components/services/ServiceImageFigure";
import SectionHeaderReveal from "@/components/ui/SectionHeaderReveal";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import type { ServiceImageRef } from "@/lib/services/types";
import { MT_SPACE_SECTION, SECTION_TINT_CLASS } from "@/lib/styles";

type WhatThisIsProps = {
  paragraphs: string[];
  image: ServiceImageRef;
};

export default function WhatThisIs({ paragraphs, image }: WhatThisIsProps) {
  return (
    <section className={`section-py ${SECTION_TINT_CLASS}`}>
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
          <div>
            <SectionHeaderReveal eyebrow="Overview" title="What this is" />
            <div
              className={`${MT_SPACE_SECTION} space-y-5 text-sm font-light leading-body text-[var(--color-text-secondary)]`}
            >
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ServiceImageFigure image={image} priority />
        </div>
      </div>
    </section>
  );
}
