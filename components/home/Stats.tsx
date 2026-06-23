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
};

const stats: Stat[] = [
  { target: 2, suffix: "", label: "Live products in market" },
  { target: null, text: "End-to-end", label: "From architecture to deploy" },
  {
    target: null,
    text: "2 business days",
    label: "Typical response to briefs",
  },
  { target: null, text: "Founder-led", label: "Start to ship" },
];

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
      className="stats-band surface-tint scroll-mt-[100px] border-b border-[var(--color-border)]"
      aria-label="Studio at a glance"
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stats-grid__item">
              <p className="stat-value">
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
              <p className="stat-caption text-balance">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
