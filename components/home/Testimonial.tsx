import Reveal from "@/components/ui/Reveal";
import CardTopLine from "@/components/ui/CardTopLine";
import { CARD_DEPTH_CLASS } from "@/lib/styles";

/**
 * Set to true once real client testimonial data is supplied below.
 * Until then, this section does not render on the homepage.
 */
export const SHOW_TESTIMONIAL = false;

/**
 * TODO: Replace with a real, verifiable client testimonial before enabling SHOW_TESTIMONIAL.
 *
 * Required shape:
 * {
 *   metricValue: string;   // e.g. "6 weeks" — a real, attributable outcome
 *   metricLabel: string;   // e.g. "MVP to production"
 *   quote: string;         // ~2 short sentences, client's words
 *   name: string;          // e.g. "Jane Smith"
 *   role: string;          // e.g. "Founder, Company Name"
 * }
 */
const testimonial = {
  metricValue: "",
  metricLabel: "",
  quote: "",
  name: "",
  role: "",
};

export default function Testimonial() {
  if (!SHOW_TESTIMONIAL) {
    return null;
  }

  return (
    <Reveal className="mt-[14px]">
      <figure
        className={`${CARD_DEPTH_CLASS} relative grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:px-12 md:py-11`}
      >
        <CardTopLine />

        <div className="flex flex-col items-start border-b border-[var(--color-border)] pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-12">
          <span className="stat-accent font-[family-name:var(--font-display)] text-quote-metric font-extrabold leading-none tracking-[-0.04em]">
            {testimonial.metricValue}
          </span>
          <span className="mt-3 max-w-[200px] text-caption font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
            {testimonial.metricLabel}
          </span>
        </div>

        <div>
          <span
            className="text-gradient block font-[family-name:var(--font-display)] text-quote-deco leading-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote className="-mt-2 text-base font-light leading-body text-[var(--color-text-primary)]">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <span
              className="h-9 w-9 shrink-0 rounded-full border border-[var(--color-card-border)] bg-[color-mix(in_srgb,var(--color-purple)_15%,transparent)]"
              aria-hidden="true"
            />
            <span className="text-sm leading-tight">
              <span className="block font-medium text-[var(--color-text-primary)]">
                {testimonial.name}
              </span>
              <span className="block text-[var(--color-text-secondary)]">
                {testimonial.role}
              </span>
            </span>
          </figcaption>
        </div>
      </figure>
    </Reveal>
  );
}
