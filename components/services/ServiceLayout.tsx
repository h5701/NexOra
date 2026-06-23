import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Approach from "@/components/services/Approach";
import Deliverables from "@/components/services/Deliverables";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceHero from "@/components/services/ServiceHero";
import TechTools from "@/components/services/TechTools";
import WhatThisIs from "@/components/services/WhatThisIs";
import { getServiceIndex } from "@/lib/services/index";
import type { ServiceContent } from "@/lib/services/types";

type ServiceLayoutProps = {
  content: ServiceContent;
};

export default function ServiceLayout({ content }: ServiceLayoutProps) {
  const imageOnLeft = getServiceIndex(content.slug) % 2 === 1;

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          tag={content.tag}
          title={content.title}
          tier={content.tier}
          tierLabel={content.tierLabel}
          outcomeLine={content.hero.outcomeLine}
          cta={content.cta}
        />

        <WhatThisIs paragraphs={content.whatThisIs} image={content.hero.image} />

        <Deliverables items={content.deliverables} />

        <Approach
          intro={content.approach.intro}
          points={content.approach.points}
          image={content.supportingImage}
          imageOnLeft={imageOnLeft}
        />

        <TechTools groups={content.techToolGroups} />

        <ServiceCTA title={content.title} cta={content.cta} />

        <Footer />
      </main>
    </>
  );
}
