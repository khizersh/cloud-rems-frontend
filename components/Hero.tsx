import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="on-dark relative overflow-hidden bg-navy-900"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_0%,rgb(20_184_166/0.28),transparent),radial-gradient(50%_60%_at_0%_100%,rgb(47_111_237/0.35),transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="animate-fade-up">
          <p className="inline-block rounded-full border border-aqua-400/40 bg-aqua-400/10 px-3 py-1 text-sm font-medium text-aqua-300">
            Cloud-Based Real Estate ERP
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Manage Your Entire Real Estate Business in One Place
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            CloudREMS helps builders, developers, and housing societies manage
            properties, customers, bookings, installments, construction,
            recovery, and double-entry accounting from one secure cloud-based
            platform.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/request-demo" size="lg">
              Book a Free Demo
            </ButtonLink>
            <ButtonLink href="/product-tour" variant="outline-light" size="lg">
              Watch Product Tour
            </ButtonLink>
          </div>
          <p className="mt-8 max-w-xl border-l-2 border-leaf-500 pl-4 text-sm leading-6 text-slate-300">
            Built for Real Estate Developers, Builders, Housing Societies, and
            Property Management Companies.
          </p>
        </div>

        <figure className="animate-fade-up [animation-delay:150ms]">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-800 shadow-2xl ring-1 ring-black/10">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy-950/60 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            </div>
            <Image
              src="/screenshots/dashboard.svg"
              alt="Placeholder preview of the CloudREMS dashboard. Replace with an actual portal screenshot."
              width={1280}
              height={800}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs text-slate-400">
            Dashboard preview placeholder. Actual screenshot to be added.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
