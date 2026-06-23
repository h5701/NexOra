import EyebrowLabel from "@/components/ui/EyebrowLabel";

import { MT_SPACE_4 } from "@/lib/styles";

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
      <TitleTag className={`text-headline-section ${MT_SPACE_4} text-left font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]`}>
        {title}
      </TitleTag>
      {lead && (
        <p className="mt-5 max-w-[480px] text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]">
          {lead}
        </p>
      )}
    </div>
  );
}
