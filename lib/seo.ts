import type { Metadata } from "next";
import { SITE_URL, siteConfig } from "@/lib/site";

const OG_IMAGE = {
  url: "/og",
  width: 1200,
  height: 630,
  alt: "CloudREMS - Cloud-Based Real Estate ERP",
};

// Open Graph and Twitter objects replace (not merge with) the parent's, so every page sets them in full.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
