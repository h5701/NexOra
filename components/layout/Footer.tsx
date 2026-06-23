import Link from "next/link";
import Logo from "@/components/ui/Logo";
import {
  CONTACT_EMAIL,
  FOOTER_SERVICE_LINKS,
  NAV_LINKS,
  PAGE_CONTAINER_CLASS,
} from "@/lib/constants";

const columnHeadingClass =
  "text-caption font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)]";

const footerLinkClass =
  "text-sm text-[var(--color-text-secondary)] transition-colors duration-150 hover:text-[var(--color-text-primary)]";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5v.01" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M5 21h14a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="surface-dark border-t border-[var(--color-border)] pt-16 pb-10"
      style={{ background: "var(--color-void-deep)" }}
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Logo iconClassName="mr-2 h-7 w-auto" />
            <p className="mt-4 max-w-[260px] text-sm font-light leading-body text-[var(--color-text-secondary)]">
              We build digital products that work in the real world.
            </p>
          </div>

          <div>
            <p className={columnHeadingClass}>Navigate</p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnHeadingClass}>Services</p>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnHeadingClass}>Connect</p>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-[var(--color-cyan)] transition-colors duration-150 hover:text-[var(--color-text-primary)]"
              >
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/nexora.digital.studio.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] transition-colors duration-150 hover:text-[var(--color-cyan)]"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/nexoradigitalstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] transition-colors duration-150 hover:text-[var(--color-cyan)]"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="my-8 h-px w-full bg-[var(--color-border)]"
          aria-hidden="true"
        />

        <p className="text-center text-xs text-[var(--color-text-muted)]">
          © 2026 NexOra Digital Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
