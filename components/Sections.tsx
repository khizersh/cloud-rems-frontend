import { Icon } from "@/components/Icons";
import {
  featureCategories,
  features,
  processSteps,
  solutions,
  type Feature,
} from "@/lib/content";

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <li className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={feature.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">{feature.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
    </li>
  );
}

export function FeatureGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <FeatureCard key={f.title} feature={f} />
      ))}
    </ul>
  );
}

export function FeatureCategories() {
  return (
    <div className="space-y-14">
      {featureCategories.map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold text-navy-900">{category}</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features
              .filter((f) => f.category === category)
              .map((f) => (
                <FeatureCard key={f.title} feature={f} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function HowItWorks() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step, i) => (
        <li
          key={step.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aqua-400 text-sm font-bold text-navy-950">
            {i + 1}
          </span>
          <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function SolutionGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {solutions.map((s) => (
        <li
          key={s.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-50 text-aqua-700">
            <Icon name={s.icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-navy-900">{s.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>
          {detailed && (
            <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
              {s.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
