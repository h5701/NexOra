import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import type { ServiceContent } from "@/lib/services/types";
import { SECTION_DARK_CLASS } from "@/lib/styles";

type ServiceCTAProps = {
  title: ServiceContent["title"];
  cta: ServiceContent["cta"];
};

export default function ServiceCTA({ title, cta }: ServiceCTAProps) {
  const contactHref = `/contact?type=${encodeURIComponent(cta.projectType)}`;

  return (
    <section
      className={`section-py ${SECTION_DARK_CLASS} border-t border-[var(--color-border)]`}
    >
      <div
        className={`${PAGE_CONTAINER_CLASS} flex flex-col items-center text-center`}
      >
        <h2 className="text-headline-cta max-w-[480px] font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]">
          Ready to start?
        </h2>
        <p className="mt-4 max-w-[440px] text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]">
          Tell us about your {title.toLowerCase()} project. We&apos;ll respond
          within 2 business days with scope direction and next steps.
        </p>
        <PrimaryButton href={contactHref} className="mt-8">
          {cta.label}
        </PrimaryButton>
        <Link
          href="/services"
          className="mt-5 text-sm font-medium text-[var(--color-text-muted)] no-underline transition-colors hover:text-[var(--color-cyan)]"
        >
          ← All services
        </Link>
      </div>
    </section>
  );
}
