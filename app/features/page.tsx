import { CtaBand } from "@/components/CtaBand";
import { HowItWorks, FeatureCategories } from "@/components/Sections";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Features",
  description:
    "Explore CloudREMS features: property inventory, customers, bookings, installments, recovery, customer ledgers, double-entry accounting, construction, vendors, reports, and role-based access.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="One platform for sales, collections, construction, and accounts"
        description="CloudREMS brings every part of your real estate operation into a single, connected system, so teams work from the same data."
      />
      <Section>
        <FeatureCategories />
      </Section>
      <Section tone="dark" labelledBy="how-heading">
        <SectionHeading
          id="how-heading"
          eyebrow="How It Works"
          title="A workflow that mirrors your business"
          tone="dark"
        />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
