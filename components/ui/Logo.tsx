import Image from "next/image";
import Link from "next/link";

export default function Logo({
  onClick,
  /** Square chip size, e.g. "h-[30px] w-[30px]". */
  chipClassName = "h-[30px] w-[30px]",
}: {
  onClick?: () => void;
  chipClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="NexOra — home"
      className="group/logo flex items-center gap-2.5 font-[family-name:var(--font-display)] text-logo font-bold leading-none tracking-normal"
      onClick={onClick}
    >
      {/* The icon PNG has a dark background baked in, so we present it as a
          deliberate rounded "app icon" tile. The dark fill then reads as intended
          on both the white (scrolled) and dark (hero) navbar states. */}
      <span
        className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[9px] bg-[#04061a] shadow-[0_2px_10px_-3px_rgba(22,24,43,0.35)] ring-1 ring-[var(--color-border-bright)] transition-transform duration-200 group-hover/logo:-translate-y-px ${chipClassName}`}
      >
        <Image
          src="/logo-icon.png"
          alt=""
          width={650}
          height={740}
          className="h-[112%] w-auto object-contain"
          priority
        />
      </span>
      <span className="flex">
        <span className="text-[var(--color-text-primary)]">Nex</span>
        <span className="gradient-logo-text inline-block">O</span>
        <span className="text-[var(--color-text-primary)]">ra</span>
      </span>
    </Link>
  );
}
