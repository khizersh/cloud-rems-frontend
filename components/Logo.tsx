import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="CloudREMS home"
      className={`inline-flex items-center rounded-md ${
        tone === "light" ? "bg-white px-2 py-1" : ""
      }`}
    >
      <Image
        src="/logo.png"
        alt="CloudREMS - Real Estate Management Solution"
        width={600}
        height={120}
        priority
        className="h-12 w-auto"
      />
    </Link>
  );
}