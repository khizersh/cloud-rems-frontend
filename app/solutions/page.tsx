import { CtaBand } from "@/components/CtaBand";
import { PageHero, Section } from "@/components/Section";
import { SolutionGrid } from "@/components/Sections";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "CloudREMS supports real estate developers, builders, housing societies, property management companies, finance and accounts teams, and recovery teams.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions for every team in your real estate business"
        description="Each team sees the modules and reports relevant to its work, backed by the same accurate data."
      />
      <Section>
        <SolutionGrid detailed />
      </Section>
      <CtaBand
        title="Not sure which modules fit your business?"
        description="Tell us how you work and we will show you how CloudREMS can support it."
      />
    </>
  );
}
