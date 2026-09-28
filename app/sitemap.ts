import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { site } from "@/lib/site";

const BASE = site.url;

/**
 * Evaluated once per build rather than per request. `/outreach` revalidates
 * daily, which re-ran this route and stamped every static page with a new
 * `lastModified` each day — a sitemap that claims the privacy policy changed
 * this morning teaches Google to ignore the field. Content changes ship with a
 * deploy, so build time is the honest answer for the hand-listed routes;
 * outreach articles still use their own event date below.
 */
const BUILT_AT = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: BUILT_AT,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...[
      "/about",
      "/outreach",
      "/chapters",
      "/join",
      "/leadership",
      "/advisors",
      "/donate",
      "/sponsors",
      "/contact",
    ].map((path) => ({
      url: `${BASE}${path}`,
      lastModified: BUILT_AT,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/privacy`,
      lastModified: BUILT_AT,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    /* Calendar-only entries have no article page to list. */
    ...events.filter((e) => !e.calendarOnly).map((e) => ({
      url: `${BASE}/outreach/${e.id}`,
      lastModified: new Date(e.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
