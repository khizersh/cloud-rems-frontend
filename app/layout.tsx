import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { SITE_URL, siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CloudREMS | Cloud-Based Real Estate ERP",
    template: "%s | CloudREMS",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: SITE_URL,
    title: "CloudREMS | Cloud-Based Real Estate ERP",
    description: siteConfig.description,
    images: [{ url: "/og", width: 1200, height: 630, alt: "CloudREMS - Cloud-Based Real Estate ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudREMS | Cloud-Based Real Estate ERP",
    description: siteConfig.description,
    images: ["/og"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-white px-4 py-2 font-medium text-navy-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
