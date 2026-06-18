"use client";

import { useEffect, useState } from "react";
import { PAGE_CONTAINER_CLASS } from "@/lib/constants";

const stats = [
  { target: 2, suffix: "", animate: true, label: "Products delivered", accent: false },
  { target: 100, suffix: "%", animate: true, label: "On-time delivery", accent: true },
  { target: 1, suffix: "", animate: true, label: "Studio. Full team.", accent: false },
  { target: 0, suffix: "", animate: false, label: "Scope creep. Ever.", accent: true },
];

export default function Stats() {
  const [values, setValues] = useState(() =>
    stats.map((stat) => (stat.animate ? 0 : stat.target))
  );

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(
        stats.map((stat) =>
          stat.animate ? Math.round(eased * stat.target) : stat.target
        )
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="scroll-mt-[100px] bg-[var(--color-void)] py-9 md:py-9">
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative flex flex-col items-center justify-center px-4 py-6 text-center md:px-[44px] md:py-9 ${
                index === 0 ? "stat-first-accent" : ""
              } ${
                index % 2 === 0
                  ? "border-r border-[var(--color-border)]"
                  : "max-md:border-r-0"
              } ${index < 2 ? "border-b border-[var(--color-border)] md:border-b-0" : ""} ${
                index !== stats.length - 1
                  ? "md:border-r md:border-[var(--color-border)]"
                  : ""
              } ${index === stats.length - 1 ? "md:border-r-0" : ""}`}
            >
              <p
                className={`mb-[7px] font-[family-name:var(--font-display)] text-[40px] font-extrabold leading-none tracking-[-0.05em] md:text-[54px] ${
                  stat.accent
                    ? "stat-accent"
                    : "text-[var(--color-text-primary)]"
                }`}
              >
                {values[index]}
                {stat.suffix}
              </p>
              <p className="text-[10px] font-normal tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
