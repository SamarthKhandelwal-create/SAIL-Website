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
 *
 * PRIVACY: chapter leads are high school students, i.e. minors. `lead` holds a
 * name for display and nothing else. Their application emails and phone numbers
 * belong in our private records, never in this file — it is compiled into the
 * static site and served publicly by /api/chapters.
 */
export const chapters: Chapter[] = [
  {
    id: "walnut-hills",
    name: "Walnut Hills High School",
    location: "Cincinnati, OH",
    lat: 39.1402,
    lng: -84.4733,
    email: "samarth.khandelwal@studentsforailiteracy.org",
    founded: 2024,
    flagship: true,
  },
  {
    id: "william-mason",
    name: "William Mason High School",
    location: "Mason, OH",
    lat: 39.3536,
    lng: -84.3025,
    lead: "Kruthika Gadikota",
    founded: 2025,
  },
  {
    id: "ottawa-glandorf",
    name: "Ottawa-Glandorf High School",
    location: "Ottawa, OH",
    lat: 41.0156,
    lng: -84.0533,
    lead: "Noah Brinkman",
    founded: 2025,
  },
  {
    id: "lakota-west",
    name: "Lakota West High School",
    location: "West Chester, OH",
    lat: 39.3284,
    lng: -84.4419,
    // Two leads applied from Lakota West (Venkata Gaddam and Akshar Patel);
    // listed together until we know how they have split the role.
    lead: "Venkata Gaddam & Akshar Patel",
    founded: 2025,
  },
  {
    id: "alliance",
    name: "Alliance High School",
    location: "Alliance, OH",
    // 400 Glamorgan St, Alliance, OH 44601 — the school building itself.
    lat: 40.9113,
    lng: -81.1114,
    lead: "Gianna Phillips",
    founded: 2026,
  },
  {
    id: "vantage-career-center",
    name: "Vantage Career Center",
    location: "Van Wert, OH",
    // 818 N Franklin St, Van Wert, OH 45891.
    lat: 40.8804,
    lng: -84.5717,
    lead: "Peyton Pennell",
    founded: 2026,
  },
  {
    /* Our first chapter outside Ohio. `statesReached` is derived from these
       locations, so adding an out-of-state chapter raises it on its own. */
    id: "wellesley",
    name: "Wellesley High School",
    location: "Wellesley, MA",
    // 50 Rice St, Wellesley, MA 02481.
    lat: 42.302,
    lng: -71.2793,
    // Three students applied together from Wellesley (Rodean Ardakani, Saif
    // Ahmed, Theo Miles, Andrew Shirley); Rodean's application described the
    // group. Confirm who is the named lead before this is quoted anywhere.
    lead: "Rodean Ardakani",
    founded: 2026,
  },
  {
    id: "plano-west",
    name: "Plano West Senior High School",
    location: "Plano, TX",
    // 5601 W Parker Rd, Plano, TX 75093.
    lat: 33.0468,
    lng: -96.8141,
    lead: "Aarav Bansal",
    founded: 2026,
  },
];
