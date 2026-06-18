import Image from "next/image";
import Link from "next/link";

export default function Logo({
  onClick,
  iconClassName = "mr-2 h-8 w-auto",
}: {
  onClick?: () => void;
  iconClassName?: string;
}) {
  return (
    <Link
      href="/"
      className="flex items-center font-[family-name:var(--font-display)] text-[17px] font-bold leading-none tracking-normal"
      onClick={onClick}
    >
      <Image
        src="/logo-icon.png"
        alt=""
        width={650}
        height={740}
        className={iconClassName}
        priority
      />
      <span className="text-[var(--color-text-primary)]">Nex</span>
      <span className="gradient-logo-text inline-block">O</span>
      <span className="text-[var(--color-text-primary)]">ra</span>
    </Link>
  );
}
