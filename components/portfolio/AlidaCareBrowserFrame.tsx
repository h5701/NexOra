import Image from "next/image";
import CardTopLine from "@/components/ui/CardTopLine";
import { CARD_DEPTH_CLASS } from "@/lib/styles";

type FrameImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type AlidaCareBrowserFrameProps = {
  images: FrameImage[];
  url?: string;
  topGradient?: string;
  scrollable?: boolean;
  showScrollHint?: boolean;
  priority?: boolean;
  sizes?: string;
  viewportHeights?: string;
};

export default function AlidaCareBrowserFrame({
  images,
  url = "alidacare.com",
  topGradient,
  scrollable = false,
  showScrollHint = false,
  priority = false,
  sizes = "(max-width: 1160px) 100vw, 1160px",
  viewportHeights = "h-[220px] sm:h-[260px] md:h-[300px]",
}: AlidaCareBrowserFrameProps) {
  return (
    <div className={CARD_DEPTH_CLASS}>
      <CardTopLine gradient={topGradient} />

      <div className="relative z-0 flex items-center gap-[5px] border-b border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5">
        <span className="h-[6px] w-[6px] rounded-full bg-[color-mix(in_srgb,var(--color-text-primary)_22%,transparent)]" />
        <span className="h-[6px] w-[6px] rounded-full bg-[color-mix(in_srgb,var(--color-text-primary)_22%,transparent)]" />
        <span className="h-[6px] w-[6px] rounded-full bg-[color-mix(in_srgb,var(--color-text-primary)_22%,transparent)]" />
        <span className="ml-2 truncate text-xs text-[var(--color-text-muted)]">
          {url}
        </span>
      </div>

      {scrollable ? (
        <>
          <div className="p-2">
            <div
              className={`relative overflow-hidden rounded-b-[12px] border border-[var(--color-border)] border-t-0 bg-white ${viewportHeights}`}
            >
              <div className="h-full touch-pan-y overflow-y-auto overscroll-contain scroll-smooth [scrollbar-width:thin] [scrollbar-color:rgba(45,110,98,0.45)_transparent] [-webkit-overflow-scrolling:touch]">
                {images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="block h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                ))}
              </div>

              <div
                className="pointer-events-none absolute right-0 bottom-0 left-0 h-14 bg-gradient-to-t from-white/95 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {showScrollHint && (
            <p className="py-3 text-center text-xs font-medium tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
              Scroll to explore
            </p>
          )}
        </>
      ) : (
        <div className="overflow-hidden rounded-b-[16px] bg-white">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={images[0].width}
            height={images[0].height}
            className="block h-auto w-full"
            sizes={sizes}
            priority={priority}
          />
        </div>
      )}
    </div>
  );
}
