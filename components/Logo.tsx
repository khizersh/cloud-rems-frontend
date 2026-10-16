import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-navy-900" : "text-white";
  return (
    <Link
      href="/"
      aria-label="CloudREMS home"
      className="inline-flex items-center gap-2.5 rounded-md"
    >
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-label="CloudREMS logo"
      >
        <defs>
          <linearGradient id={`logo-grad-${tone}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2f6fed" />
            <stop offset="1" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill={`url(#logo-grad-${tone})`} />
        <path
          d="M12 28h16a4 4 0 0 0 .6-7.95A6 6 0 0 0 17 18.5 4.6 4.6 0 0 0 12 28z"
          fill="#fff"
          fillOpacity=".95"
        />
        <path d="M17 28v-5h6v5" stroke="#0b1f3a" strokeWidth="1.6" fill="none" />
      </svg>
      <span className={`text-xl font-bold tracking-tight ${text}`}>
        Cloud<span className="text-brand-500">REMS</span>
      </span>
    </Link>
  );
}
