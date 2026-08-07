import type { MetadataRoute } from "next";
import { events } from "@/data/events";

const BASE = "https://studentsforailiteracy.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["/outreach", "/chapters", "/leadership"].map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...events.map((e) => ({
      url: `${BASE}/outreach/${e.id}`,
      lastModified: new Date(e.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
