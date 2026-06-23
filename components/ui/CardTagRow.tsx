export default function CardTagRow({
  tag,
  badge,
  className = "",
  onDark = false,
}: {
  tag: string;
  badge?: React.ReactNode;
  className?: string;
  /** Light text for image overlays on dark backgrounds. */
  onDark?: boolean;
}) {
  const tagClass = onDark
    ? "text-xs font-medium tracking-[0.08em] text-white/85 uppercase"
    : "text-xs font-medium tracking-[0.1em] text-[var(--color-text-muted)] uppercase";

  return (
    <div
      className={`mb-[22px] flex items-center justify-between gap-3 ${className}`}
    >
      <div className={`flex min-w-0 items-center gap-2 ${tagClass}`}>
        {!onDark && <span className="service-tag-rule" aria-hidden="true" />}
        <span className="min-w-0 truncate">{tag}</span>
      </div>
      {badge ? <div className="shrink-0">{badge}</div> : null}
    </div>
  );
}
