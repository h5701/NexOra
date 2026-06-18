export default function CardTopLine({
  gradient,
}: {
  gradient?: string;
}) {
  return (
    <span
      className="card-top-line"
      style={gradient ? { background: gradient } : undefined}
      aria-hidden="true"
    />
  );
}
