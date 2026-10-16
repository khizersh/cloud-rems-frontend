import type { ReactNode } from "react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
  as: Tag = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-wider ${
            dark ? "text-aqua-300" : "text-aqua-700"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-4 text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function Section({
  id,
  tone = "white",
  children,
  labelledBy,
}: {
  id?: string;
  tone?: "white" | "muted" | "dark";
  children: ReactNode;
  labelledBy?: string;
}) {
  const tones = {
    white: "bg-white",
    muted: "bg-slate-50",
    dark: "on-dark bg-navy-900",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="on-dark relative overflow-hidden bg-navy-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgb(20_184_166/0.25),transparent),radial-gradient(50%_70%_at_0%_100%,rgb(47_111_237/0.3),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          description={description}
          tone="dark"
          align="left"
        />
      </div>
    </div>
  );
}
