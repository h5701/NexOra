export default function EyebrowLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[10px] font-medium tracking-[0.14em] text-[var(--color-text-muted)] uppercase ${className}`}
    >
      {children}
    </p>
  );
}
