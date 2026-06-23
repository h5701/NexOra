"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { NAV_SERVICE_GROUPS } from "@/lib/constants";
import { STUDIO_POSITIONING } from "@/lib/content/site-copy";
import { getService } from "@/lib/services/index";
import { IMAGE_BLUR_DATA_URL } from "@/lib/services/images";

type ServicesMegaMenuProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onNavigate?: () => void;
};

function slugFromHref(href: string) {
  return href.replace("/services/", "");
}

export function ServicesNavTrigger({ open }: { open: boolean }) {
  return (
    <Link
      href="/services"
      className={`nav-services-trigger inline-flex items-center gap-1.5 text-sm font-normal leading-none no-underline transition-colors duration-200 ${
        open
          ? "text-[var(--color-text-primary)]"
          : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
      }`}
      aria-expanded={open}
      aria-haspopup="true"
    >
      Services
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        className={`nav-services-chevron transition-transform duration-300 ease-out motion-safe:origin-center ${
          open ? "rotate-180" : ""
        }`}
      >
        <path
          d="M2.5 4.5L6 8L9.5 4.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export default function ServicesMegaMenu({
  open,
  onOpen,
  onClose,
  onNavigate,
}: ServicesMegaMenuProps) {
  const close = () => {
    onClose();
    onNavigate?.();
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="nav-mega-panel absolute top-full right-0 left-0 z-[108] border-t border-[var(--color-border)]"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      role="menu"
      aria-label="Services"
    >
      <div className="nav-mega-panel-inner bg-[color-mix(in_srgb,white_96%,transparent)] px-[clamp(24px,5vw,80px)] py-7 shadow-[0_28px_60px_-28px_rgba(22,24,43,0.45)] backdrop-blur-[18px]">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 md:grid-cols-3">
          {NAV_SERVICE_GROUPS.map((group, groupIndex) => (
            <div
              key={group.label}
              className="nav-mega-column"
              style={{ animationDelay: `${groupIndex * 60}ms` }}
            >
              <p className="nav-mega-column-label text-xs font-medium tracking-[0.12em] text-[var(--color-text-muted)] uppercase">
                {group.label}
              </p>

              <ul className="mt-4 flex flex-col gap-1.5" role="none">
                {group.links.map((link, linkIndex) => {
                  const slug = slugFromHref(link.href);
                  const service = getService(slug);
                  const thumb = service?.hub.cardImage;

                  return (
                    <li key={link.href} role="none">
                      <Link
                        href={link.href}
                        role="menuitem"
                        onClick={close}
                        className="nav-mega-link group/item flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 no-underline transition-[background,border-color,transform,box-shadow] duration-200 hover:border-[var(--color-border)] hover:bg-[color-mix(in_srgb,white_72%,var(--color-tint))] hover:shadow-[0_8px_24px_-16px_rgba(22,24,43,0.28)] motion-safe:hover:-translate-y-px"
                        style={{ animationDelay: `${groupIndex * 60 + linkIndex * 40}ms` }}
                      >
                        {thumb && (
                          <span className="relative mt-0.5 h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-tint)]">
                            <Image
                              src={thumb.src}
                              alt=""
                              width={thumb.width}
                              height={thumb.height}
                              className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover/item:scale-105"
                              sizes="44px"
                              placeholder="blur"
                              blurDataURL={IMAGE_BLUR_DATA_URL}
                            />
                          </span>
                        )}
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-[var(--color-text-primary)] transition-colors group-hover/item:text-[var(--color-cyan)]">
                            {link.label}
                          </span>
                          {service?.hub.oneLiner && (
                            <span className="mt-0.5 block text-xs font-light leading-snug text-[var(--color-text-muted)]">
                              {service.hub.oneLiner}
                            </span>
                          )}
                        </span>
                        <span
                          className="ml-auto mt-1 shrink-0 text-[var(--color-text-muted)] opacity-0 transition-[opacity,transform] duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="nav-mega-footer mx-auto mt-7 flex max-w-[1160px] items-center justify-between border-t border-[var(--color-border)] pt-5">
          <p className="text-xs font-light text-[var(--color-text-muted)]">
            {STUDIO_POSITIONING}
          </p>
          <Link
            href="/services"
            role="menuitem"
            onClick={close}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-cyan)] no-underline transition-[gap,opacity] duration-200 hover:gap-2.5 hover:opacity-90"
          >
            View all services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
