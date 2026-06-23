"use client";

import { useEffect, useRef, useState } from "react";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";

type Stat = {
  /** Numeric target to count up to, or null for a text stat. */
  target: number | null;
  text?: string;
  prefix?: string;
  suffix?: string;
  label: string;
  accent: boolean;
};

const stats: Stat[] = [
  { target: 2, suffix: "", label: "Live products in market", accent: false },
  {
    target: null,
    text: "End-to-end",
    label: "From architecture to deploy",
    accent: true,
  },
  {
    target: null,
    text: "2 business days",
    label: "Typical response to briefs",
    accent: false,
  },
  { target: null, text: "Founder-led", label: "Start to ship", accent: true },
];

function statValueClass(stat: Stat) {
  if (stat.target !== null) return "stat-value stat-value--numeric";
  if (stat.text && stat.text.length > 12) return "stat-value stat-value--text-long";
  return "stat-value stat-value--text";
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [values, setValues] = useState<number[]>(() => stats.map(() => 0));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const setFinal = () =>
      setValues(stats.map((s) => (s.target === null ? 0 : s.target)));

    if (reduce) {
      setFinal();
      return;
    }

    let rafId = 0;
    const run = () => {
      const duration = 1800;
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValues(
          stats.map((s) => (s.target === null ? 0 : Math.round(eased * s.target)))
        );
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-py surface-light scroll-mt-[100px] border-b border-[var(--color-border)]"
      aria-label="Studio at a glance"
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative flex min-h-[7.75rem] flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[8.25rem] sm:px-6 sm:py-9 md:min-h-[9rem] md:px-10 md:py-10 ${
                index % 2 === 0
                  ? "border-r border-[var(--color-border)]"
                  : "max-md:border-r-0"
              } ${
                index < 2
                  ? "border-b border-[var(--color-border)] md:border-b-0"
                  : ""
              } ${
                index !== stats.length - 1
                  ? "md:border-r md:border-[var(--color-border)]"
                  : ""
              } ${index === stats.length - 1 ? "md:border-r-0" : ""}`}
            >
              <p
                className={`${statValueClass(stat)} ${
                  stat.accent ? "stat-accent" : "text-[var(--color-text-primary)]"
                }`}
              >
                {stat.target === null ? (
                  stat.text
                ) : (
                  <>
                    {stat.prefix}
                    {values[index]}
                    {stat.suffix}
                  </>
                )}
              </p>
              <p className="stat-caption mt-3 max-w-[18ch] text-balance">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
