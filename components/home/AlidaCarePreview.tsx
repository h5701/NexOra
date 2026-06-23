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

export default function AlidaCarePreview() {
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 md:px-6 md:py-6">
      <AlidaCareBrowserFrame
        images={alidaImages}
        scrollable
        showScrollHint
        viewportHeights="h-[260px] sm:h-[330px] md:h-[390px]"
      />
    </div>
  );
}
