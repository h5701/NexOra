import CardTopLine from "@/components/ui/CardTopLine";
import type { LabsProject } from "@/lib/content/site-copy";
import { CARD_BODY_PADDING_CLASS, CARD_DEPTH_INTERACTIVE_CLASS } from "@/lib/styles";

export default function LabsProjectCard({ project }: { project: LabsProject }) {
  const linkProps = project.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <article className={`${CARD_DEPTH_INTERACTIVE_CLASS} flex h-full flex-col`}>
      <CardTopLine gradient="linear-gradient(90deg, var(--color-purple) 0%, var(--color-cyan) 100%)" />

      <div className={`flex flex-1 flex-col ${CARD_BODY_PADDING_CLASS}`}>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(123,94,167,0.35)] px-[10px] py-1 text-xs font-medium tracking-[0.07em] text-[var(--color-purple)] uppercase">
          <span
            className="h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--color-purple)]"
            aria-hidden="true"
          />
          {project.tag}
        </span>

        <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
          {project.name}
        </h3>

        <p className="mt-[10px] text-sm font-light leading-body text-[var(--color-text-secondary)]">
          {project.description}
        </p>

        <a
          href={project.href}
          {...linkProps}
          className="link-cta mt-auto pt-5"
        >
          View Project
          <span className="link-cta-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
