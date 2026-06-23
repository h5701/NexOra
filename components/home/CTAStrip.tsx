import HeroBackdrop from "@/components/ui/HeroBackdrop";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";

export default function CTAStrip() {
  return (
    <section className="section-py surface-dark relative scroll-mt-[100px] overflow-hidden">
      <HeroBackdrop src="/textures/grain-violet.webp" scrim="strong" />

      {/* Soft brand glow centered behind the closing ask. */}
      <div
        className="hero-orb hero-glow pointer-events-none left-1/2 top-1/2 h-[320px] w-[560px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(123,94,167,0.18) 0%, rgba(45,212,191,0.05) 50%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <Reveal className="relative mx-auto flex max-w-[600px] flex-col items-center px-[clamp(24px,5vw,80px)] text-center">
        <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-text-muted)] uppercase">
          What&apos;s next
        </p>

        <h2 className="text-headline-cta mx-auto mt-[14px] w-full max-w-[520px] font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
          <span className="block">We&apos;re selective about</span>
          <span className="block">the projects we take on.</span>
        </h2>

        <p className="mt-4 text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]">
          If you have something worth building, let&apos;s talk.
        </p>

        <PrimaryButton href="/contact" className="mt-8">
          Start a project →
        </PrimaryButton>
      </Reveal>
    </section>
  );
}
