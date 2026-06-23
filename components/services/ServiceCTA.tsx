import Link from "next/link";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import type { ServiceContent } from "@/lib/services/types";
import { MT_SPACE_4, MT_CTA, LINK_GHOST_CLASS } from "@/lib/styles";

type ServiceCTAProps = {
  title: ServiceContent["title"];
  cta: ServiceContent["cta"];
};

function serviceProjectLead(title: string) {
  return `Tell us about your ${title.toLowerCase()} project — we'll respond within 2 business days with scope direction and next steps.`;
}

export default function ServiceCTA({ title, cta }: ServiceCTAProps) {
  const contactHref = `/contact?type=${encodeURIComponent(cta.projectType)}`;

  return (
    <section className="section-py surface-dark relative scroll-mt-[100px] overflow-x-hidden border-t border-[var(--color-border)]">
      <HeroBackdrop src="/textures/grain-violet.webp" scrim="strong" />

      <div
        className="hero-orb hero-glow pointer-events-none left-1/2 top-1/2 h-[320px] w-[560px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(123,94,167,0.18) 0%, rgba(45,212,191,0.05) 50%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <Reveal
        className={`${PAGE_CONTAINER_CLASS} relative flex flex-col items-center text-center`}
      >
        <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-text-muted)] uppercase">
          What&apos;s next
        </p>

        <h2
          className={`text-headline-cta mx-auto ${MT_SPACE_4} w-full max-w-[560px] font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]`}
        >
          <span className="block text-balance">We&apos;re selective about</span>
          <span className="mt-1 block text-balance">the projects we take on.</span>
        </h2>

        <p className="mt-4 max-w-[480px] text-balance text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]">
          {serviceProjectLead(title)}
        </p>

        <PrimaryButton href={contactHref} className={MT_CTA}>
          {cta.label}
        </PrimaryButton>

        <Link href="/services" className={`${LINK_GHOST_CLASS} mt-5`}>
          ← All services
        </Link>
      </Reveal>
    </section>
  );
}
