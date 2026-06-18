import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyNexOra from "@/components/home/WhyNexOra";
import CTAStrip from "@/components/home/CTAStrip";
import CardTopLine from "@/components/ui/CardTopLine";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import HeroOrbs from "@/components/ui/HeroOrbs";
import SectionHeader from "@/components/ui/SectionHeader";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import {
  CARD_BODY_PADDING_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "Services — NexOra Digital Studio",
  description:
    "We design and build software systems, digital products, and AI-powered tools for startups and businesses.",
};

const coreCapabilities = [
  {
    tag: "Idea to deployment",
    title: "Product Development",
    body: "We design and build full digital products including MVPs, SaaS platforms, and internal tools. From idea to deployment, we handle architecture, development, and execution — built for founders and teams who need a product development agency that ships.",
  },
  {
    tag: "Built for performance",
    title: "Website Development",
    body: "High-performance, modern websites built for speed, clarity, and conversion. Designed with scalable code and premium UI systems — the standard you'd expect from a web development studio in the UK.",
  },
  {
    tag: "Structure before visuals",
    title: "UX & Product Design",
    body: "User-focused design systems that turn complex ideas into simple, intuitive digital experiences. We focus on structure, flow, and clarity before visuals — so every interface serves a defined purpose.",
  },
];

const additionalServices = [
  {
    tag: "Scale-ready systems",
    title: "System Rebuilds & Optimization",
    body: "We improve or fully rebuild existing platforms to make them faster, cleaner, and more scalable. Ideal for products that have outgrown their current setup and need custom software development done properly.",
  },
  {
    tag: "Practical AI implementation",
    title: "AI Product Development",
    body: "We design and build AI-powered products and features — assistants, copilots, automation systems, smart workflows, AI-enhanced SaaS features, and custom integrations. Practical AI implementation built to solve real business problems, not experimental demos.",
  },
];

function ServiceCard({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <article className={`${CARD_DEPTH_INTERACTIVE_CLASS} ${CARD_BODY_PADDING_CLASS}`}>
      <CardTopLine />

      <div className="mb-[22px] flex items-center gap-2 text-[10px] font-medium tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
        <span className="service-tag-rule" aria-hidden="true" />
        {tag}
      </div>

      <h3 className="font-[family-name:var(--font-display)] text-[19px] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--color-text-primary)]">
        {title}
      </h3>

      <p className="mt-3 text-[13px] font-light leading-[1.68] text-[var(--color-text-secondary)]">
        {body}
      </p>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative scroll-mt-[100px] overflow-hidden bg-[var(--color-void)]">
          <HeroOrbs />

          <div className={`page-hero-py relative ${PAGE_CONTAINER_CLASS}`}>
            <SectionHeader
              eyebrow="Software studio"
              title="Services"
              titleAs="h1"
              lead="We design and build software systems, digital products, and AI-powered tools for startups and businesses."
            />
          </div>

          <div
            className="h-px w-full bg-[var(--color-border)]"
            aria-hidden="true"
          />
        </section>

        <section className="section-py scroll-mt-[100px] border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
          <div className={PAGE_CONTAINER_CLASS}>
            <SectionHeader
              eyebrow="What we do"
              title="End-to-end product and software development"
            />

            <div className="mt-[52px] max-w-[640px] space-y-5 text-[13px] font-light leading-[1.68] text-[var(--color-text-secondary)]">
              <p>
                We work with founders and businesses to design, build, and scale
                digital products. From early-stage MVPs to production-ready
                platforms, NexOra focuses on clarity, execution, and long-term
                scalability.
              </p>
              <p>
                As a software development studio in the UK, we structure every
                engagement around building real systems — not one-off
                deliverables. Whether you need a SaaS product, a custom
                platform, or AI software development integrated into your stack,
                the approach stays the same: define it clearly, build it
                properly, ship it on time.
              </p>
            </div>
          </div>
        </section>

        <section className="section-py scroll-mt-[100px] border-t border-[var(--color-border)] bg-[var(--color-void)]">
          <div className={PAGE_CONTAINER_CLASS}>
            <SectionHeader
              eyebrow="Core capabilities"
              title="Structured services for real product work"
              lead="Every engagement is scoped around building usable systems — not disconnected deliverables."
            />

            <div className="mt-[52px]">
              <div className="grid grid-cols-1 gap-[14px] md:grid-cols-3">
                {coreCapabilities.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-py scroll-mt-[100px] border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
          <div className={PAGE_CONTAINER_CLASS}>
            <EyebrowLabel>Additional services</EyebrowLabel>

            <div className="mt-[52px]">
              <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
                {additionalServices.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhyNexOra background="void" />
        <CTAStrip />
        <Footer />
      </main>
    </>
  );
}
