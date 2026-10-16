import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-aqua-700">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy-900">Page not found</h1>
      <p className="mt-4 text-lg text-slate-600">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href="/">Back to Home</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact Us
        </ButtonLink>
      </div>
    </div>
  );
}
