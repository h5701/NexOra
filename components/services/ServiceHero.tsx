import DarkPageHero, { GradientHeroTitle } from "@/components/ui/DarkPageHero";
import PrimaryButton from "@/components/ui/PrimaryButton";
import TierBadge from "@/components/services/TierBadge";
import type { ServiceContent } from "@/lib/services/types";

type ServiceHeroProps = {
  tag: ServiceContent["tag"];
  title: ServiceContent["title"];
  tier: ServiceContent["tier"];
  tierLabel: ServiceContent["tierLabel"];
  outcomeLine: ServiceContent["hero"]["outcomeLine"];
  cta: ServiceContent["cta"];
};

export default function ServiceHero({
  tag,
  title,
  tier,
  tierLabel,
  outcomeLine,
  cta,
}: ServiceHeroProps) {
  const contactHref = `/contact?type=${encodeURIComponent(cta.projectType)}`;

  return (
    <DarkPageHero
      pill={
        <div className="flex flex-wrap items-center gap-3">
          <div className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true" />
            {tag}
          </div>
          <TierBadge tier={tier} label={tierLabel} />
        </div>
      }
      title={<GradientHeroTitle text={title} />}
      lead={outcomeLine}
      footer={<PrimaryButton href={contactHref}>{cta.label}</PrimaryButton>}
    />
  );
}
