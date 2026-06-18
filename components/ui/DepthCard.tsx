import CardTopLine from "@/components/ui/CardTopLine";
import {
  CARD_DEPTH_CLASS,
  CARD_DEPTH_INTERACTIVE_CLASS,
} from "@/lib/styles";

type DepthCardProps = {
  children: React.ReactNode;
  className?: string;
  topGradient?: string;
  interactive?: boolean;
};

export default function DepthCard({
  children,
  className = "",
  topGradient,
  interactive = true,
}: DepthCardProps) {
  const surfaceClass = interactive
    ? CARD_DEPTH_INTERACTIVE_CLASS
    : CARD_DEPTH_CLASS;

  return (
    <div className={`${surfaceClass} ${className}`}>
      <CardTopLine gradient={topGradient} />
      {children}
    </div>
  );
}

