import Link from "next/link";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "default" | "nav";
};

export default function PrimaryButton({
  href,
  children,
  className = "",
  onClick,
  size = "default",
}: PrimaryButtonProps) {
  const sizeClass = size === "nav" ? "btn-primary-nav" : "btn-primary";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${sizeClass} inline-flex items-center gap-2 border-0 no-underline ${className}`}
    >
      {children}
    </Link>
  );
}
