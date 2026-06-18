import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CTAStrip() {
  return (
    <section className="section-py scroll-mt-[100px] border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
      <div className="mx-auto flex max-w-[600px] flex-col items-center px-[clamp(24px,5vw,80px)] text-center">
        <p className="text-[10px] font-medium tracking-[0.14em] text-[var(--color-text-muted)] uppercase">
          What&apos;s next
        </p>

        <h2 className="text-headline-cta mx-auto mt-[14px] w-full max-w-[520px] font-[family-name:var(--font-display)] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--color-text-primary)]">
          <span className="block">We&apos;re selective about</span>
          <span className="block">the projects we take on.</span>
        </h2>

        <p className="mt-4 text-base font-light leading-[1.72] text-[var(--color-text-secondary)]">
          If you have something worth building, let&apos;s talk.
        </p>

        <PrimaryButton href="/contact" className="mt-8">
          Start a project →
        </PrimaryButton>
      </div>
    </section>
  );
}
