import Link from "next/link";
import Image from "next/image";
import CardTopLine from "@/components/ui/CardTopLine";
import TierBadge from "@/components/services/TierBadge";
import { IMAGE_BLUR_DATA_URL } from "@/lib/services/images";
import type { ServiceContent } from "@/lib/services/types";
import {
  CARD_BODY_PADDING_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
} from "@/lib/styles";

export default function ServiceHubCard({ service }: { service: ServiceContent }) {
  const href = `/services/${service.slug}`;

  return (
    <Link
      href={href}
      className={`group/link ${CARD_DEPTH_INTERACTIVE_CLASS} flex flex-col overflow-hidden no-underline`}
    >
      <CardTopLine />

      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-surface-alt-dark)]">
        <Image
          src={service.hub.cardImage.src}
          alt={service.hub.cardImage.alt}
          width={service.hub.cardImage.width}
          height={service.hub.cardImage.height}
          className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover/link:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 360px"
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,30,0.55)] to-transparent"
          aria-hidden="true"
        />
        <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-3">
          <span className="min-w-0 truncate text-xs font-medium tracking-[0.08em] text-white/85 uppercase">
            {service.tag}
          </span>
          <TierBadge tier={service.tier} label={service.tierLabel} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${CARD_BODY_PADDING_CLASS}`}>
        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-heading tracking-[-0.015em] text-[var(--color-text-primary)]">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm font-light leading-body text-[var(--color-text-secondary)]">
          {service.hub.oneLiner}
        </p>
        <span className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-cyan)]">
          Learn more
          <span className="ml-1 transition-transform duration-150 motion-safe:group-hover/link:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
