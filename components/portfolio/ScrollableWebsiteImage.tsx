"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ScrollableWebsiteImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  viewportHeight?: number;
  priority?: boolean;
  sizes?: string;
};

/** How many px the auto-scroll advances per millisecond. */
const AUTO_SCROLL_SPEED = 0.05;
const PAUSE_MS = 1400;
const RESUME_DELAY_MS = 1100;

export default function ScrollableWebsiteImage({
  src,
  alt,
  width,
  height,
  viewportHeight = 420,
  priority = false,
  sizes = "(max-width: 1160px) 100vw, 1160px",
}: ScrollableWebsiteImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    let lastTime = performance.now();
    let phase: "pause-top" | "down" | "pause-bottom" | "up" = "pause-top";
    let pauseUntil = lastTime + PAUSE_MS;

    const step = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      if (pausedRef.current) {
        raf = requestAnimationFrame(step);
        return;
      }

      const maxScroll = el.scrollHeight - el.clientHeight;

      if (phase === "pause-top" || phase === "pause-bottom") {
        if (time >= pauseUntil) {
          phase = phase === "pause-top" ? "down" : "up";
        }
      } else if (phase === "down") {
        el.scrollTop += AUTO_SCROLL_SPEED * dt;
        if (el.scrollTop >= maxScroll - 1) {
          el.scrollTop = maxScroll;
          phase = "pause-bottom";
          pauseUntil = time + PAUSE_MS;
        }
      } else if (phase === "up") {
        el.scrollTop -= AUTO_SCROLL_SPEED * dt;
        if (el.scrollTop <= 1) {
          el.scrollTop = 0;
          phase = "pause-top";
          pauseUntil = time + PAUSE_MS;
        }
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const scheduleResume = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY_MS);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onPointerEnter={pause}
        onPointerLeave={scheduleResume}
        onTouchStart={pause}
        onTouchEnd={scheduleResume}
        onWheel={() => {
          pause();
          scheduleResume();
        }}
        className="overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ height: viewportHeight }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-auto w-full"
          sizes={sizes}
          priority={priority}
          draggable={false}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-7 bg-gradient-to-b from-black/12 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-black/12 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
