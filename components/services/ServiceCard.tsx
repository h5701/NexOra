import Link from "next/link";
import CardTopLine from "@/components/ui/CardTopLine";
import type { ServiceItem } from "@/lib/services";
import {
  CARD_BODY_PADDING_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
} from "@/lib/styles";

function TierBadge({
  tier,
  label,
}: {
  tier: NonNullable<ServiceItem["tier"]>;
  label: string;
}) {
  if (tier === "available") {
    return (
      <span className="ml-auto shrink-0 rounded-full border border-[color-mix(in_srgb,var(--color-cyan)_45%,transparent)] bg-[color-mix(in_srgb,var(--color-cyan)_8%,transparent)] px-2 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-cyan)]">
        {label}
      </span>
    );
  }

  return (
    <span className="ml-auto shrink-0 rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-text-muted)]">
      {label}
    </span>
  );
}

export default function ServiceCard({
  tag,
  title,
  body,
  tier,
  tierLabel,
  href,
  linkText,
  dimmed = false,
  interactive = true,
}: ServiceItem & { interactive?: boolean }) {
  const cardClass = interactive
    ? CARD_DEPTH_INTERACTIVE_CLASS
    : "card-depth relative";

  const content = (
    <>
      <CardTopLine />

      <div className="mb-[22px] flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
        <span className="service-tag-rule" aria-hidden="true" />
        <span className="min-w-0 truncate">{tag}</span>
        {tier && tierLabel && <TierBadge tier={tier} label={tierLabel} />}
      </div>

      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-heading tracking-[-0.015em] text-[var(--color-text-primary)]">
        {title}
      </h3>

      <p className="mt-3 text-sm font-light leading-body text-[var(--color-text-secondary)]">
        {body}
      </p>

      {href && linkText && (
        <span className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-cyan)]">
          {linkText}
          <span className="ml-1 transition-transform duration-150 group-hover/link:translate-x-1">
            →
          </span>
        </span>
      )}
    </>
  );

  const className = `${cardClass} ${CARD_BODY_PADDING_CLASS} group/link ${
    dimmed ? "border-dashed opacity-90" : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={`${className} block no-underline`}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
