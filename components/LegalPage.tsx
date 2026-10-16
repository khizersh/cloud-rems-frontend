import type { ReactNode } from "react";
import { PageHero, Section } from "@/components/Section";
import { SITE_LAST_UPDATED } from "@/lib/site";

export type LegalSection = { heading: string; body: ReactNode };

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={intro} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p
            role="note"
            className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900"
          >
            Draft template: have this document reviewed by a qualified legal professional and
            replace bracketed placeholders before launch.
          </p>
          <p className="mt-6 text-sm text-slate-600">Last updated: {SITE_LAST_UPDATED}</p>
          <div className="mt-8 space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-semibold text-navy-900">{s.heading}</h2>
                <div className="mt-3 space-y-3 leading-7 text-slate-700">{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
