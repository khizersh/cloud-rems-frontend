import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { SoftwareApplicationJsonLd } from "@/components/JsonLd";
import { ProductTourGallery } from "@/components/ProductTourGallery";
import { Section, SectionHeading } from "@/components/Section";
import { FeatureGrid, HowItWorks, SolutionGrid } from "@/components/Sections";
import { tourScreens } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CloudREMS | Cloud-Based Real Estate ERP",
  description:
    "Manage property inventory, customers, bookings, installments, recovery, construction, and double-entry accounting with CloudREMS, a complete cloud-based Real Estate ERP.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section tone="muted" labelledBy="features-heading">
        <SectionHeading
          id="features-heading"
          eyebrow="Features"
          title="Everything your real estate business runs on"
          description="From property inventory to double-entry accounting, CloudREMS connects sales, collections, construction, and finance in one platform."
        />
        <div className="mt-12">
          <FeatureGrid />
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/features" variant="outline">
            Explore all features
          </ButtonLink>
        </div>
      </Section>

      <Section tone="dark" labelledBy="how-heading">
        <SectionHeading
          id="how-heading"
          eyebrow="How It Works"
          title="From inventory to financial reports in seven steps"
          description="CloudREMS follows the way real estate businesses actually operate."
          tone="dark"
        />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </Section>

      <Section labelledBy="solutions-heading">
        <SectionHeading
          id="solutions-heading"
          eyebrow="Solutions"
          title="Built for the teams who run real estate"
          description="Whether you develop, build, manage, collect, or account, CloudREMS gives each team the tools it needs."
        />
        <div className="mt-12">
          <SolutionGrid />
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/solutions" variant="outline">
            See all solutions
          </ButtonLink>
        </div>
      </Section>

      <Section tone="muted" labelledBy="tour-heading">
        <SectionHeading
          id="tour-heading"
          eyebrow="Product Tour"
          title="A look inside CloudREMS"
          description="Select any preview to enlarge it. Placeholder images will be replaced with actual portal screenshots."
        />
        <div className="mt-12">
          <ProductTourGallery screens={tourScreens.slice(0, 6)} />
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/product-tour">Open the full product tour</ButtonLink>
        </div>
      </Section>

      <CtaBand />
      <SoftwareApplicationJsonLd />
    </>
  );
}
