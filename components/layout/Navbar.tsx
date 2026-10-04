"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ServicesMegaMenu, {
  ServicesNavTrigger,
} from "@/components/layout/ServicesMegaMenu";
import Logo from "@/components/ui/Logo";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { NAV_LINKS, NAV_SERVICE_GROUPS } from "@/lib/constants";
import { LINK_NAV_CLASS } from "@/lib/styles";

function NavLink({
  href,
  label,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${LINK_NAV_CLASS} ${className}`}
    >
      {label}
    </Link>
  );
}

export default function Navbar({
  alwaysLight = false,
}: {
  /** Skip the dark-hero text flip for pages whose top section is light, so the logo/links stay visible before scrolling. */
  alwaysLight?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServicesMenu = () => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
    setServicesOpen(true);
  };

  const closeServicesMenu = () => {
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  useEffect(() => {
    return () => {
      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[100] border-b px-[clamp(24px,5vw,80px)] transition-[background,backdrop-filter,border-color,padding,box-shadow] duration-300 ease ${
          scrolled || mobileOpen || servicesOpen
            ? "border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-page)_72%,transparent)] py-3 shadow-[0_10px_34px_-18px_rgba(22,24,43,0.22)] backdrop-blur-[18px] backdrop-saturate-150 md:py-[14px]"
            : alwaysLight
              ? "!bg-transparent border-transparent py-4 md:py-[22px]"
              : "surface-dark !bg-transparent border-transparent py-4 md:py-[22px]"
        }`}
      >
        <div className="relative flex items-center justify-between gap-4">
          <Logo onClick={closeMobile} />

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}
                >
                  <ServicesNavTrigger open={servicesOpen} />
                </div>
              ) : (
                <NavLink key={link.href} href={link.href} label={link.label} />
              )
            )}
          </nav>

          <div className="hidden md:block">
            <PrimaryButton href="/contact" size="nav">
              Start a project
            </PrimaryButton>
          </div>

          <button
            type="button"
            className="-mr-2 flex h-10 w-10 shrink-0 items-center justify-center text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cyan)] md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 6H17M3 10H17M3 14H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        <ServicesMegaMenu
          open={servicesOpen}
          onOpen={openServicesMenu}
          onClose={closeServicesMenu}
        />
      </header>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[98] bg-[rgba(22,24,43,0.35)] backdrop-blur-[2px] md:hidden"
            aria-label="Close menu"
            onClick={closeMobile}
          />
          <div
            id="mobile-nav"
            className="fixed top-[64px] right-0 left-0 z-[99] flex max-h-[calc(100vh-64px)] flex-col gap-8 overflow-y-auto border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-page)_96%,transparent)] px-[clamp(24px,5vw,80px)] py-10 backdrop-blur-[18px] md:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              <NavLink href="/" label="Home" onClick={closeMobile} className="text-md" />
              <NavLink href="/about" label="About" onClick={closeMobile} className="text-md" />

              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-md text-sm font-normal leading-none text-[var(--color-text-muted)]"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  Services
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-300 motion-safe:origin-center ${
                      mobileServicesOpen ? "rotate-180" : ""
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
                </button>
                {mobileServicesOpen && (
                  <div className="nav-mobile-services mt-4 flex flex-col gap-5 pl-3">
                    {NAV_SERVICE_GROUPS.map((group, groupIndex) => (
                      <div
                        key={group.label}
                        className="nav-mobile-services-group"
                        style={{ animationDelay: `${groupIndex * 50}ms` }}
                      >
                        <p className="text-xs font-medium tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
                          {group.label}
                        </p>
                        <ul className="mt-2 flex flex-col gap-2">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <NavLink
                                href={link.href}
                                label={link.label}
                                onClick={closeMobile}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <NavLink
                      href="/services"
                      label="View all services"
                      onClick={closeMobile}
                      className="font-semibold text-[var(--color-cyan)]"
                    />
                  </div>
                )}
              </div>

              <NavLink href="/labs" label="NexOra Labs" onClick={closeMobile} className="text-md" />
              <NavLink href="/contact" label="Contact" onClick={closeMobile} className="text-md" />
            </nav>
            <PrimaryButton
              href="/contact"
              onClick={closeMobile}
              className="self-start"
              size="nav"
            >
              Start a project
            </PrimaryButton>
          </div>
        </>
      )}
    </>
  );
}
