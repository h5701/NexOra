import EyebrowLabel from "@/components/ui/EyebrowLabel";

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  titleAs = "h2",
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  titleAs?: "h1" | "h2";
  className?: string;
}) {
  const TitleTag = titleAs;

  return (
    <div className={className}>
      <EyebrowLabel>{eyebrow}</EyebrowLabel>
      <TitleTag className="text-headline-section mt-[14px] text-left font-[family-name:var(--font-display)] font-bold leading-[1.02] tracking-[-0.03em] text-[var(--color-text-primary)]">
        {title}
      </TitleTag>
      {lead && (
        <p className="mt-5 max-w-[480px] text-base font-light leading-[1.72] text-[var(--color-text-secondary)]">
          {lead}
        </p>
      )}
    </div>
  );
}
