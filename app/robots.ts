import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    /* /api/* serves raw JSON for the same content the pages render. Left
       crawlable it competes with those pages as thin, near-duplicate results. */
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
