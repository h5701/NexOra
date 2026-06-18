"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollProgressLine() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const pct =
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        updateProgress();
        rafRef.current = null;
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-20 right-8 z-[90] hidden h-[calc(100vh-160px)] w-[3px] md:block"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[3px] bg-[rgba(255,255,255,0.1)]" />

      <div
        className="absolute top-0 right-0 left-0 rounded-[3px] transition-[height] duration-100 ease-linear"
        style={{
          height: `${progress}%`,
          background: "var(--color-purple)",
        }}
      >
        <span
          className="absolute bottom-0 left-1/2 h-[10px] w-[10px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--color-cyan)]"
        />
      </div>
    </div>
  );
}
