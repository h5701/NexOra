"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import BrowserFrame from "@/components/portfolio/BrowserFrame";
import {
  LABS_SHOWCASE_PROJECTS,
  type LabsShowcaseProject,
} from "@/lib/content/site-copy";

const CARD_WIDTH_CLASS = "w-[min(880px,84vw)] shrink-0";

function ConceptTag() {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(123,94,167,0.35)] px-[10px] py-1 text-xs font-medium tracking-[0.07em] text-[var(--color-purple)] uppercase">
      <span
        className="h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--color-purple)]"
        aria-hidden="true"
      />
      Concept Project
    </span>
  );
}

function FeaturedProjectCard({
  project,
  index,
}: {
  project: LabsShowcaseProject;
  index: number;
}) {
  const linkProps = project.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className={`${CARD_WIDTH_CLASS} group relative snap-start`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[36px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(123,94,167,0.22), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <motion.div
          className="w-full md:w-[58%]"
          whileHover={{ y: -6, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <BrowserFrame
            images={[project.image]}
            url={project.previewUrl}
            priority={index === 0}
            sizes="(max-width: 768px) 84vw, 620px"
          />
        </motion.div>

        <div className="flex w-full flex-col md:w-[42%]">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text-muted)]">
              {number}
            </span>
            <span
              className="h-px w-8 bg-[var(--color-border-bright)]"
              aria-hidden="true"
            />
            <span className="text-xs font-medium tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
              {project.category}
            </span>
          </div>

          <div className="mt-5">
            <ConceptTag />
          </div>

          <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] text-[var(--color-text-primary)] md:text-4xl">
            {project.name}
          </h3>

          <p className="mt-4 max-w-[46ch] text-base font-light leading-body-relaxed text-[var(--color-text-secondary)]">
            {project.description}
          </p>

          <a
            href={project.href}
            {...linkProps}
            className="btn-primary group/cta mt-8 inline-flex w-fit items-center gap-2 border-0 no-underline"
          >
            {project.ctaLabel}
            <span
              className="transition-transform duration-150 group-hover/cta:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ComingSoonCard() {
  return (
    <div className={`${CARD_WIDTH_CLASS} snap-start`}>
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-[20px] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-10 py-20 text-center">
        <span className="text-xs font-medium tracking-[0.14em] text-[var(--color-text-muted)] uppercase">
          Coming soon
        </span>
        <p className="max-w-[34ch] font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
          More Labs experiments are brewing.
        </p>
        <p className="max-w-[38ch] text-sm font-light leading-body text-[var(--color-text-secondary)]">
          We&apos;re always prototyping. The next concept project will land right here.
        </p>
      </div>
    </div>
  );
}

const ARROW_BUTTON_CLASS =
  "flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-lg text-[var(--color-text-primary)] transition-[transform,border-color,color] duration-150 hover:-translate-y-px hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] disabled:pointer-events-none disabled:opacity-30";

export default function LabsShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startScroll: number } | null>(null);
  const draggedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 760) * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = { startX: event.clientX, startScroll: el.scrollLeft };
    draggedRef.current = false;
    setIsDragging(true);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const state = dragRef.current;
    const el = trackRef.current;
    if (!state || !el) return;
    const dx = event.clientX - state.startX;
    if (Math.abs(dx) > 4) draggedRef.current = true;
    if (draggedRef.current) el.scrollLeft = state.startScroll - dx;
  };

  const endDrag = () => {
    dragRef.current = null;
    setIsDragging(false);
  };

  const onClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (draggedRef.current) {
      event.preventDefault();
      event.stopPropagation();
      draggedRef.current = false;
    }
  };

  return (
    <div className="relative">
      <div className="mb-6 hidden items-center justify-end gap-3 md:flex">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous project"
          className={ARROW_BUTTON_CLASS}
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          disabled={!canScrollNext}
          aria-label="Next project"
          className={ARROW_BUTTON_CLASS}
        >
          →
        </button>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className={`flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pl-[clamp(24px,5vw,80px)] pr-[clamp(24px,5vw,80px)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {LABS_SHOWCASE_PROJECTS.map((project, index) => (
          <FeaturedProjectCard key={project.slug} project={project} index={index} />
        ))}
        <ComingSoonCard />
      </div>
    </div>
  );
}
