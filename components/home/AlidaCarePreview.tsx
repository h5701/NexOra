import AlidaCareBrowserFrame from "@/components/portfolio/AlidaCareBrowserFrame";

const alidaImages = [
  {
    src: "/portfolio/alida-care/alida-care.webp",
    alt: "Alida Care website homepage",
    width: 2542,
    height: 1496,
  },
  {
    src: "/portfolio/alida-care/image2.webp",
    alt: "Alida Care services section",
    width: 2880,
    height: 1554,
  },
];

type AlidaCarePreviewProps = {
  compact?: boolean;
};

export default function AlidaCarePreview({ compact = false }: AlidaCarePreviewProps) {
  return (
    <div
      className={`w-full ${compact ? "px-3 py-3 md:px-4 md:py-4" : "px-4 py-5 md:px-6 md:py-6"}`}
    >
      <AlidaCareBrowserFrame
        images={alidaImages}
        scrollable={!compact}
        showScrollHint={!compact}
        viewportHeights={
          compact
            ? "h-[200px] sm:h-[220px] md:h-[230px]"
            : "h-[260px] sm:h-[330px] md:h-[390px]"
        }
      />
    </div>
  );
}
