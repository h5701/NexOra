import Testimonial from "@/components/home/Testimonial";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import {
  PORTFOLIO_HEADLINE,
  PORTFOLIO_LEAD,
} from "@/lib/content/site-copy";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { MT_SPACE_4, MT_SPACE_SECTION } from "@/lib/styles";

export default function Portfolio() {
  return (
    <section
      id="work"
      className="section-py surface-light scroll-mt-[100px] overflow-hidden"
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <EyebrowLabel>Our work</EyebrowLabel>

        <h2
          className={`text-headline-section ${MT_SPACE_4} max-w-[640px] text-left font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]`}
        >
          {PORTFOLIO_HEADLINE}
        </h2>

        <p className="mt-4 max-w-[480px] text-md font-light leading-body text-[var(--color-text-secondary)]">
          {PORTFOLIO_LEAD}
        </p>

        <div className={MT_SPACE_SECTION}>
          <PortfolioGrid animated />

          <Testimonial />
        </div>
      </div>
    </section>
  );
}
