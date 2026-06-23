"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Render element (defaults to div). Use "li", "article", etc. for semantics. */
  as?: ElementType;
  /** IntersectionObserver threshold. */
  threshold?: number;
};

/**
 * Scroll-reveal wrapper. Animates once when scrolled into view, then disconnects.
 * Motion itself is defined in globals.css (.reveal) and fully disabled under
 * prefers-reduced-motion, where content renders visible immediately.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the element is already in view on mount (e.g. above-the-fold hero),
    // reveal right away so nothing flashes empty waiting on the observer.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    // Safety fallback: never leave content hidden if the observer misbehaves.
    const fallback = window.setTimeout(() => setVisible(true), 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
          window.clearTimeout(fallback);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
