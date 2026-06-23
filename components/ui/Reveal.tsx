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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
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
