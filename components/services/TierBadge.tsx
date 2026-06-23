import type { ServiceTier } from "@/lib/services/types";

export default function TierBadge({
  tier,
  label,
}: {
  tier: ServiceTier;
  label: string;
}) {
  if (tier === "available") {
    return (
      <span className="rounded-full border border-[color-mix(in_srgb,var(--color-cyan)_45%,transparent)] bg-[color-mix(in_srgb,var(--color-cyan)_8%,transparent)] px-2.5 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-cyan)]">
        {label}
      </span>
    );
  }

  return (
    <span className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs font-medium tracking-[0.06em] text-[var(--color-text-muted)]">
      {label}
    </span>
  );
}
