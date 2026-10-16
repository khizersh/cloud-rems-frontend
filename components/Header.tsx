"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { PORTAL_URL, mainNav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (href: string) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      active ? "text-brand-700" : "text-slate-700 hover:text-brand-700"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={
                    (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={PORTAL_URL} variant="outline">
            Customer Login
          </ButtonLink>
          <ButtonLink href="/request-demo">Book a Free Demo</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-900 hover:bg-slate-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-slate-200 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(item.href)} text-base`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <ButtonLink
              href={PORTAL_URL}
              variant="outline"
              className="sm:flex-1"
              onClick={() => setOpen(false)}
            >
              Customer Login
            </ButtonLink>
            <ButtonLink
              href="/request-demo"
              className="sm:flex-1"
              onClick={() => setOpen(false)}
            >
              Book a Free Demo
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
