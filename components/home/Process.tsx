import DepthCard from "@/components/ui/DepthCard";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Discover",
    body: "We start with the problem, not the features. We align on what success actually looks like.",
  },
  {
    number: "02",
    title: "Architect",
    body: "We define scope, technical approach, and delivery plan. You see exactly what you're getting and when.",
  },
  {
    number: "03",
    title: "Build",
    body: "Clean architecture. Weekly updates. Full visibility throughout. No black boxes.",
  },
  {
    number: "04",
    title: "Launch",
    body: "On time. As scoped. With full documentation and a team ready to support what comes next.",
  },
];

export default function Process() {
  return (
    <section className="section-py scroll-mt-[100px] overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-void)]">
      <div className={PAGE_CONTAINER_CLASS}>
        <EyebrowLabel>The process</EyebrowLabel>

        <h2 className="text-headline-section mt-[14px] text-left font-[family-name:var(--font-display)] font-bold leading-[1.02] tracking-[-0.03em] text-[var(--color-text-primary)]">
          From brief to live product. No surprises.
        </h2>

        <div className="mt-[52px] overflow-hidden">
          <DepthCard interactive={false}>
            <div className="grid grid-cols-1 md:grid-cols-4">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className={`group relative cursor-pointer px-6 py-8 transition-colors duration-200 hover:bg-[var(--color-card-hover)] md:px-[30px] md:py-9 ${
                    index !== steps.length - 1
                      ? "border-b border-[var(--color-border)] md:border-r md:border-b-0"
                      : ""
                  }`}
                >
                  <span
                    className="pointer-events-none absolute top-0 right-[30px] left-[30px] h-[2px] rounded-b-[2px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ background: "var(--gradient-step-hover)" }}
                    aria-hidden="true"
                  />

                  <p className="mb-[18px] font-[family-name:var(--font-display)] text-[56px] font-extrabold leading-none tracking-[-0.05em] text-[rgba(255,255,255,0.05)]">
                    {step.number}
                  </p>

                  <h3 className="mb-[10px] font-[family-name:var(--font-display)] text-[16px] font-semibold tracking-[-0.01em] text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>

                  <p className="text-[12px] font-light leading-[1.65] text-[var(--color-text-secondary)]">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </DepthCard>
        </div>
      </div>
    </section>
  );
}
