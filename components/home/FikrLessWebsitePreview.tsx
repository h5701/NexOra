import BrowserFrame from "@/components/portfolio/BrowserFrame";
import { FIKRLESS_WEBSITE_SCROLL_IMAGE } from "@/lib/content/site-copy";

export default function FikrLessWebsitePreview() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-8">
      <BrowserFrame
        url="fikrless.com"
        scrollImage={FIKRLESS_WEBSITE_SCROLL_IMAGE}
        viewportHeight={360}
        sizes="(max-width: 768px) 100vw, 700px"
      />
    </div>
  );
}
