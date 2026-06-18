import Link from "next/link";
import AlidaCarePreview from "@/components/home/AlidaCarePreview";
import FikrLessPreview from "@/components/home/FikrLessPreview";
import CardTopLine from "@/components/ui/CardTopLine";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";
import { CARD_DEPTH_INTERACTIVE_CLASS } from "@/lib/styles";

const portfolioItems = [
  {
    href: "/work/alida-care",
    preview: "alida" as const,
    tags: ["Healthcare platform", "Live product"],
    liveTag: "Live product",
    title: "Alida Care",
    body: "A live UK platform connecting families with vetted, CQC-compliant care providers. Built end-to-end — booking flow, caregiver verification, and the operational backend a real care business runs on.",
  },
  {
    href: "/work/fikrless",
    preview: "fikrless" as const,
    tags: ["Mental health app", "Live on Play Store"],
    liveTag: "Live on Play Store",
    title: "FikrLess",
    body: "A live mental health platform for Pakistan, built to navigate a market where seeking support carries real stigma. Connects users with licensed therapists through a discreet, culturally-aware experience — now live on Google Play.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="section-py scroll-mt-[100px] overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]"
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <EyebrowLabel>Our work</EyebrowLabel>

        <h2 className="text-headline-section mt-[14px] text-left font-[family-name:var(--font-display)] font-bold leading-[1.02] tracking-[-0.03em] text-[var(--color-text-primary)]">
          Real products. Real clients. Real outcomes.
        </h2>

        <div className="mt-[52px]">
          <div className="grid grid-cols-1 gap-[14px] md:grid-cols-[1.65fr_1fr]">
            {portfolioItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group ${CARD_DEPTH_INTERACTIVE_CLASS} block no-underline`}
              >
                <CardTopLine />

                {item.preview === "alida" ? (
                  <AlidaCarePreview />
                ) : (
                  <FikrLessPreview />
                )}

                <div className="bg-[var(--color-card)] px-6 py-6 md:px-7 md:py-[26px]">
                  <div className="mb-[13px] flex flex-wrap gap-[6px]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-[10px] py-1 text-[10px] font-medium tracking-[0.07em] uppercase ${
                          tag === item.liveTag
                            ? "border-[rgba(45,212,191,0.25)] text-[var(--color-cyan)]"
                            : "border-[rgba(255,255,255,0.07)] text-[rgba(237,233,248,0.28)]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-[19px] font-semibold text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-[10px] text-[13px] font-light leading-[1.68] text-[var(--color-text-secondary)]">
                    {item.body}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--color-cyan)]">
                    View case study
                    <span className="transition-transform duration-150 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
