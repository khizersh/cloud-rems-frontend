import { CtaBand } from "@/components/CtaBand";
import { ProductTourGallery } from "@/components/ProductTourGallery";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { VideoGallery } from "@/components/VideoGallery";
import { tourScreens, videos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Product Tour",
  description:
    "Take a visual tour of CloudREMS: dashboard, inventory, customers, bookings, installments, payments, ledgers, construction, accounting, and financial reports.",
  path: "/product-tour",
});

export default function ProductTourPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Tour"
        title="See how CloudREMS works"
        description="Browse screens from across the platform and watch walkthrough videos. Placeholders will be replaced with actual CloudREMS portal screenshots and videos."
      />
      <Section labelledBy="screens-heading">
        <SectionHeading
          id="screens-heading"
          align="left"
          title="Screenshots"
          description="Select any screen to open a larger view."
        />
        <div className="mt-10">
          <ProductTourGallery screens={tourScreens} />
        </div>
      </Section>
      <Section tone="muted" labelledBy="videos-heading">
        <SectionHeading
          id="videos-heading"
          align="left"
          title="Videos"
          description="Short walkthroughs of the key workflows."
        />
        <div className="mt-10">
          <VideoGallery videos={videos} />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
