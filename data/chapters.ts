import type { Chapter } from "./types";

/**
 * SAIL chapters — the single source of truth for the interactive map.
 *
 * TO ADD A CHAPTER: copy a block below, fill in the name, location, email and
 * coordinates, then commit. The map and the "Active Chapters" stat update
 * automatically (the stat is derived from this list — see data/stats.ts).
 *
 * Find coordinates by searching the school on Google Maps, right-clicking the
 * pin, and copying the "lat, lng" pair.
 */
export const chapters: Chapter[] = [
  {
    id: "walnut-hills",
    name: "Walnut Hills High School",
    location: "Cincinnati, OH",
    lat: 39.1402,
    lng: -84.4733,
    email: "sail.national.youth@gmail.com",
    founded: 2024,
    flagship: true,
  },
  {
    id: "william-mason",
    name: "William Mason High School",
    location: "Mason, OH",
    lat: 39.3536,
    lng: -84.3025,
    founded: 2025,
  },
  {
    id: "ottawa-glandorf",
    name: "Ottawa-Glandorf High School",
    location: "Ottawa, OH",
    lat: 41.0156,
    lng: -84.0533,
    founded: 2025,
  },
  {
    id: "lakota-west",
    name: "Lakota West High School",
    location: "West Chester, OH",
    lat: 39.3284,
    lng: -84.4419,
    founded: 2025,
  },
  {
    id: "alliance",
    name: "Alliance High School",
    location: "Alliance, OH",
    // 400 Glamorgan St, Alliance, OH 44601 — the school building itself.
    lat: 40.9113,
    lng: -81.1114,
    founded: 2026,
  },
];
