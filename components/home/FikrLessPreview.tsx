"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import CardTopLine from "@/components/ui/CardTopLine";
import { CARD_DEPTH_CLASS } from "@/lib/styles";

const fikrlessImages = [
  {
    src: "/portfolio/fikrless/fikrless-1.jpeg",
    alt: "FikrLess app onboarding screen",
    width: 921,
    height: 2048,
  },
  {
    src: "/portfolio/fikrless/fikrless-2.jpeg",
    alt: "FikrLess app activity screen",
    width: 921,
    height: 2048,
  },
  {
    src: "/portfolio/fikrless/fikrless-3.jpeg",
    alt: "FikrLess app specialist screen",
    width: 921,
    height: 2048,
  },
];

function CarouselDots({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex justify-center gap-1.5">
      {fikrlessImages.map((image, index) => (
        <button
          key={image.src}
          type="button"
          aria-label={`Go to screen ${index + 1}`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onSelect(index);
          }}
          className={`h-1.5 rounded-full transition-all duration-200 ${
            index === activeIndex
              ? "w-5 bg-[var(--color-cyan)]"
              : "w-1.5 bg-[rgba(255,255,255,0.25)]"
          }`}
        />
      ))}
    </div>
  );
}

export default function FikrLessPreview({ compact = false }: { compact?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth;
    if (slideWidth === 0) return;

    const index = Math.round(container.scrollLeft / slideWidth);
    setActiveIndex(Math.min(fikrlessImages.length - 1, Math.max(0, index)));
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({
      left: container.offsetWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  }, []);

  return (
    <div
      className={`flex w-full flex-col items-center ${compact ? "px-3 py-4 md:py-5" : "px-4 py-6 md:py-8"}`}
    >
        <div
          className={`surface-dark relative rounded-[32px] !bg-transparent ${
            compact
              ? "w-[min(210px,68vw)] md:w-[220px]"
              : "w-[min(248px,74vw)] md:w-[230px]"
          }`}
        >
          <div className={`${CARD_DEPTH_CLASS} rounded-[32px] p-[7px]`}>
            <CardTopLine />

            <div className="overflow-hidden rounded-[26px] bg-black">
              <div className="flex items-center justify-between px-4 pb-1 pt-2">
                <span className="text-2xs font-medium text-[rgba(255,255,255,0.55)]">
                  12:38
                </span>
                <span className="h-[18px] w-[72px] rounded-full bg-[var(--color-void)]" />
                <span className="flex items-center gap-[3px]">
                  <span className="h-[6px] w-[10px] rounded-sm border border-[rgba(255,255,255,0.35)]" />
                  <span className="h-[6px] w-[3px] rounded-sm bg-[rgba(255,255,255,0.35)]" />
                </span>
              </div>

              <div
                ref={scrollRef}
                onScroll={updateActiveIndex}
                className="flex aspect-[9/18.5] snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {fikrlessImages.map((image) => (
                  <div
                    key={image.src}
                    className="h-full w-full shrink-0 snap-center"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="h-full w-full object-cover object-top"
                      sizes="(max-width: 768px) 248px, 230px"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center pb-2 pt-1">
                <span className="h-1 w-24 rounded-full bg-[rgba(255,255,255,0.2)]" />
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full ${compact ? "mt-3" : "mt-4"}`}>
          <CarouselDots activeIndex={activeIndex} onSelect={scrollToSlide} />
        </div>

        {!compact && (
          <p className="mt-3 text-xs font-medium tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
            Swipe to explore
          </p>
        )}
    </div>
  );
}
