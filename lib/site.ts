export const SITE_URL = "https://www.cloudrems.com";
export const PORTAL_URL = "https://app.cloudrems.com";
export const SITE_LAST_UPDATED = "2026-10-12";

export const siteConfig = {
  name: "CloudREMS",
  tagline: "Manage Properties. Simplify Operations. Grow Smarter.",
  description:
    "Manage property inventory, customers, bookings, installments, recovery, construction, and double-entry accounting with CloudREMS, a complete cloud-based Real Estate ERP.",
  locale: "en_US",
} as const;

// Set a value to replace a placeholder. A null value renders a clearly labelled placeholder.
export const contactInfo = {
  email: null as string | null,
  emailPlaceholder: "Business email to be provided",
  phone: null as string | null,
  phonePlaceholder: "Phone number to be provided",
  whatsapp: null as string | null,
  whatsappPlaceholder: "WhatsApp number to be provided",
  address: null as string | null,
  addressPlaceholder: "Office address to be provided",
};

// Set an href to activate a social link. A null href renders a "coming soon" placeholder.
export const socialLinks: { name: string; href: string | null }[] = [
  { name: "Facebook", href: null },
  { name: "Instagram", href: null },
  { name: "LinkedIn", href: null },
  { name: "YouTube", href: null },
  { name: "TikTok", href: null },
];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Product Tour", href: "/product-tour" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerProduct = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Product Tour", href: "/product-tour" },
  { label: "Book a Demo", href: "/request-demo" },
] as const;

export const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
] as const;
