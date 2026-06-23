import ServiceImage from "@/components/services/ServiceImage";
import type { ServiceImage as ServiceImageType } from "@/lib/services/types";

function ImageCredit({ image }: { image: ServiceImageType }) {
  if (!image.credit) return null;

  return (
    <p className="text-right text-xs text-[var(--color-text-muted)]">
      Photo by{" "}
      {image.creditUrl ? (
        <a
          href={image.creditUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[var(--color-border)] underline-offset-2 transition-colors hover:text-[var(--color-text-secondary)]"
        >
          {image.credit}
        </a>
      ) : (
        image.credit
      )}{" "}
      on{" "}
      <a
        href="https://unsplash.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-[var(--color-border)] underline-offset-2 transition-colors hover:text-[var(--color-text-secondary)]"
      >
        Unsplash
      </a>
    </p>
  );
}

export default function ServiceOverviewFigure({
  image,
  priority = false,
}: {
  image: ServiceImageType;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)] lg:sticky lg:top-[120px]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ServiceImage
          image={image}
          variant="body"
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="px-4 py-3">
        <ImageCredit image={image} />
      </figcaption>
    </figure>
  );
}
