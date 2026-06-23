import Image from "next/image";

/**
 * Decorative abstract backdrop for dark hero / CTA sections.
 * Real optimized image (next/image) behind a dark gradient scrim so text stays
 * AA-legible. Parent must be `position: relative`. Purely decorative (alt="").
 */
export default function HeroBackdrop({
  src = "/textures/hero-mesh.webp",
  priority = false,
  /** Scrim strength: "soft" lets more image through, "strong" mutes it more. */
  scrim = "soft",
}: {
  src?: string;
  priority?: boolean;
  scrim?: "soft" | "strong";
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover opacity-[0.55]"
      />
      <div
        className={`absolute inset-0 ${
          scrim === "strong"
            ? "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-void)_72%,transparent),color-mix(in_srgb,var(--color-void)_92%,transparent))]"
            : "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-void)_55%,transparent),color-mix(in_srgb,var(--color-void)_85%,transparent))]"
        }`}
      />
    </div>
  );
}
