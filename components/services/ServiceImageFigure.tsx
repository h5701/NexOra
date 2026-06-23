import ServiceImage from "@/components/services/ServiceImage";
import type { ServiceImageRef } from "@/lib/services/types";

export default function ServiceImageFigure({
  image,
  priority = false,
}: {
  image: ServiceImageRef;
  priority?: boolean;
}) {
  return (
    <figure className="w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)] lg:sticky lg:top-[120px]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ServiceImage
          image={image}
          variant="body"
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
    </figure>
  );
}
