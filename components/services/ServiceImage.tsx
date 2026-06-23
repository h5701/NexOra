"use client";

import { useState } from "react";
import Image from "next/image";
import type { ServiceImage as ServiceImageType } from "@/lib/services/types";
import { IMAGE_BLUR_DATA_URL } from "@/lib/services/images";

type ServiceImageProps = {
  image: ServiceImageType;
  variant: "hero" | "body" | "card";
  priority?: boolean;
  className?: string;
};

const variantSizes: Record<ServiceImageProps["variant"], string> = {
  hero: "(max-width: 768px) 100vw, 1160px",
  body: "(max-width: 768px) 100vw, 640px",
  card: "(max-width: 768px) 100vw, 320px",
};

export default function ServiceImage({
  image,
  variant,
  priority = false,
  className = "",
}: ServiceImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`service-image-fallback ${className}`}
        role="img"
        aria-label={image.alt}
      />
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={className}
      sizes={variantSizes[variant]}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder="blur"
      blurDataURL={IMAGE_BLUR_DATA_URL}
      onError={() => setFailed(true)}
    />
  );
}
