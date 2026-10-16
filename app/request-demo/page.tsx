import { Icon } from "@/components/Icons";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
import { PageHero, Section } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request a Demo",
  description:
    "Book a free CloudREMS demo and see how the cloud-based Real Estate ERP can manage your inventory, bookings, installments, recovery, construction, and accounting.",
  path: "/request-demo",
});

const expectations = [
  "A walkthrough focused on your type of business",
  "Property inventory, bookings, and installment management",
  "Collections, recovery, and customer ledgers",
  "Double-entry accounting and financial reports",
  "Answers to your questions about the platform",
];

export default function RequestDemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Demo"
        title="Book a free CloudREMS demo"
        description="Tell us about your business and our team will contact you to arrange a demo."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <DemoRequestForm />
          </div>
          <aside className="lg:col-span-2" aria-labelledby="expect-heading">
            <h2 id="expect-heading" className="text-2xl font-bold text-navy-900">
              What to expect
            </h2>
            <ul className="mt-6 space-y-4">
              {expectations.map((e) => (
                <li key={e} className="flex items-start gap-3 text-slate-700">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-leaf-600" />
                  {e}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
