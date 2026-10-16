import type { MetadataRoute } from "next";
import { SITE_LAST_UPDATED, SITE_URL } from "@/lib/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/features", priority: 0.9 },
  { path: "/solutions", priority: 0.8 },
  { path: "/product-tour", priority: 0.8 },
  { path: "/request-demo", priority: 0.9 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-and-conditions", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: "monthly",
    priority,
  }));
}
