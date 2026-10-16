import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
  secondary: "bg-white text-navy-900 shadow-sm hover:bg-brand-50",
  outline: "border border-slate-300 bg-white text-navy-900 hover:border-brand-500 hover:text-brand-700",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
  ghost: "text-navy-900 hover:bg-slate-100",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
