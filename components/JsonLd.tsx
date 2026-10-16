import { PORTAL_URL, SITE_URL, siteConfig } from "@/lib/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: SITE_URL,
        description: siteConfig.description,
      }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Real Estate ERP",
        operatingSystem: "Web",
        description: siteConfig.description,
        url: SITE_URL,
        installUrl: PORTAL_URL,
      }}
    />
  );
}
