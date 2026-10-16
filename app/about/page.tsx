import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "CloudREMS is a cloud-based Real Estate ERP that connects property inventory, sales, collections, construction, and double-entry accounting.",
  path: "/about",
});

const principles = [
  {
    icon: "layout",
    title: "One connected system",
    text: "Inventory, bookings, collections, construction, and accounts share the same data instead of living in separate spreadsheets.",
  },
  {
    icon: "scale",
    title: "Accounting built in",
    text: "Every booking, receipt, and expense is backed by integrated double-entry accounting.",
  },
  {
    icon: "shield",
    title: "Controlled access",
    text: "Role-based permissions give each employee access to the modules and operations they need.",
  },
  {
    icon: "cloud",
    title: "Cloud-based",
    text: "Access CloudREMS securely from the browser, without installing or maintaining local software.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About CloudREMS"
        description="CloudREMS is a cloud-based Real Estate ERP designed for the way developers, builders, housing societies, and property management companies actually work."
      />

      <Section labelledBy="what-heading">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="what-heading" className="text-3xl font-bold tracking-tight text-navy-900">
              What CloudREMS does
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Real estate businesses manage inventory, customers, installment plans, collections,
              construction, and accounts, often across disconnected tools. CloudREMS brings these
              into one platform so every team works from a single source of truth.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From the first booking to the final financial report, each step is recorded once and
              flows through to ledgers, reports, and accounts.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
              Placeholder
            </p>
            <h3 className="mt-2 text-lg font-semibold text-navy-900">Company story</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Company background, team, and mission details will be added here once provided.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="principles-heading">
        <SectionHeading
          id="principles-heading"
          title="What guides the product"
          description="Principles that shape how CloudREMS is designed."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <li key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-50 text-aqua-700">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
