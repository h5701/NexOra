import Image from "next/image";
import CardTopLine from "@/components/ui/CardTopLine";
import { CARD_DEPTH_CLASS } from "@/lib/styles";

type FrameImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type BrowserFrameProps = {
  images?: FrameImage[];
  url?: string;
  topGradient?: string;
  priority?: boolean;
  sizes?: string;
};

function WebsitePlaceholder() {
  return (
    <div className="flex flex-col gap-4 bg-[linear-gradient(180deg,rgba(0,229,212,0.05),transparent)] p-6 md:p-8">
      <div className="h-3 w-24 rounded-full bg-[color-mix(in_srgb,var(--color-text-primary)_14%,transparent)]" />
      <div className="h-8 w-2/3 rounded-lg bg-[color-mix(in_srgb,var(--color-text-primary)_10%,transparent)]" />
      <div className="h-4 w-1/2 rounded-md bg-[color-mix(in_srgb,var(--color-text-primary)_8%,transparent)]" />
      <div className="mt-2 grid grid-cols-3 gap-3">
        <div className="h-20 rounded-lg bg-[color-mix(in_srgb,var(--color-text-primary)_8%,transparent)]" />
        <div className="h-20 rounded-lg bg-[color-mix(in_srgb,var(--color-text-primary)_8%,transparent)]" />
        <div className="h-20 rounded-lg bg-[color-mix(in_srgb,var(--color-text-primary)_8%,transparent)]" />
      </div>
      <div className="mt-2 flex items-center justify-center py-6 text-xs font-medium tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
        Website preview coming soon
      </div>
    </div>
  );
}

export default function BrowserFrame({
  images,
  url = "fikrless.com",
  topGradient,
  priority = false,
  sizes = "(max-width: 1160px) 100vw, 1160px",
}: BrowserFrameProps) {
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

      <div className="overflow-hidden rounded-b-[16px] bg-white">
        {images && images.length > 0 ? (
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={images[0].width}
            height={images[0].height}
            className="block h-auto w-full"
            sizes={sizes}
            priority={priority}
          />
        ) : (
          <WebsitePlaceholder />
        )}
      </div>
    </div>
  );
}
