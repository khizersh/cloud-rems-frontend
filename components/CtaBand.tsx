import { ButtonLink } from "@/components/ButtonLink";

export function CtaBand({
  title = "See CloudREMS in action",
  description = "Book a free demo and we will walk you through the platform using your real estate workflow.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="on-dark bg-navy-950 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white">
          {title}
        </h2>
        <p className="mt-4 text-lg text-slate-300">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/request-demo" size="lg">
            Book a Free Demo
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline-light" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
