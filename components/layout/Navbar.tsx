"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { NAV_LINKS } from "@/lib/constants";

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
      className={`text-[13px] font-normal leading-none text-[var(--color-text-muted)] transition-colors duration-150 hover:text-[var(--color-text-primary)] ${className}`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[100] border-b px-[clamp(24px,5vw,80px)] py-4 transition-[background,backdrop-filter,border-color] duration-300 ease md:py-[22px] ${
          scrolled || mobileOpen
            ? "border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-void)_88%,transparent)] backdrop-blur-[14px]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Logo onClick={closeMobile} />

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="hidden md:block">
            <PrimaryButton href="/contact" size="nav">
              Start a project
            </PrimaryButton>
          </div>

          <button
            type="button"
            className="-mr-2 flex h-10 w-10 shrink-0 items-center justify-center text-[var(--color-text-primary)] md:hidden"
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
      </header>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[98] bg-[rgba(4,6,26,0.6)] backdrop-blur-[2px] md:hidden"
            aria-label="Close menu"
            onClick={closeMobile}
          />
          <div
            id="mobile-nav"
            className="fixed top-[65px] right-0 left-0 z-[99] flex max-h-[calc(100vh-65px)] flex-col gap-8 overflow-y-auto border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-void)_97%,transparent)] px-[clamp(24px,5vw,80px)] py-10 backdrop-blur-[14px] md:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={closeMobile}
                  className="text-[15px]"
                />
              ))}
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
