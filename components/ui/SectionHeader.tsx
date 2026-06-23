import EyebrowLabel from "@/components/ui/EyebrowLabel";

import { MT_SPACE_4, MT_SPACE_SECTION, MT_LEAD } from "@/lib/styles";

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
      <TitleTag className={`text-headline-section ${MT_SPACE_4} max-w-[640px] text-left font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-balance text-[var(--color-text-primary)]`}>
        {title}
      </TitleTag>
      {lead && (
        <p className={`${MT_LEAD} max-w-[480px] text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]`}>
          {lead}
        </p>
      )}
    </div>
  );
}
