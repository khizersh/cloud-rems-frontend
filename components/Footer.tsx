import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  PORTAL_URL,
  footerCompany,
  footerProduct,
  siteConfig,
  socialLinks,
} from "@/lib/site";

const linkClass = "text-sm text-slate-300 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="on-dark bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              {siteConfig.tagline} A cloud-based Real Estate ERP for developers,
              builders, housing societies, and property management companies.
            </p>
            <h2 className="sr-only">Social media</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <li key={s.name}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/10"
                    >
                      {s.name}
                    </a>
                  ) : (
                    <span
                      className="inline-block cursor-not-allowed rounded-full border border-dashed border-white/20 px-3 py-1.5 text-xs font-medium text-slate-400"
                      title="Link coming soon"
                    >
                      {s.name}
                      <span className="sr-only"> (link coming soon)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Product">
            <h2 className="text-sm font-semibold text-white">Product</h2>
            <ul className="mt-4 space-y-3">
              {footerProduct.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className={linkClass}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <ul className="mt-4 space-y-3">
              {footerCompany.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className={linkClass}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Portal">
            <h2 className="text-sm font-semibold text-white">Portal</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={PORTAL_URL} className={linkClass}>
                  Customer Login
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          &copy; 2026 CloudREMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
