import type { Sponsor } from "./types";

/**
 * The funders and businesses behind SAIL's programming.
 *
 * TO ADD A SPONSOR: append an entry here — every page that renders <Sponsors />
 * picks it up with no other change.
 *
 * Logos live in /public/sponsors as <id>.png. `logo` is deliberately optional:
 * a sponsor with no artwork yet renders as a typographic wordmark card instead
 * of a broken image, so the section is never blocked on chasing a logo file.
 */
export const sponsors: Sponsor[] = [
  {
    id: "esfc",
    name: "Engineers and Scientists Foundation of Cincinnati",
    note: "STEM grant funding that put AI literacy curriculum in front of Cincinnati-area classrooms.",
    logo: "/sponsors/esfc.png",
  },
  {
    id: "karama-4-csara",
    name: "Karama 4 Csara",
    note: "Community support for the workshops we run outside of school settings.",
  },
  {
    id: "contribution-project",
    name: "The Contribution Project",
    note: "The seed grant SAIL started on — the first classroom session we ever taught was funded here.",
    url: "https://contributionproject.org/",
  },
  {
    id: "pollination-project",
    name: "The Pollination Project",
    note: "Seed funding for grassroots changemakers, which underwrote our chapter expansion beyond the first school.",
    logo: "/sponsors/pollination-project.png",
    url: "https://thepollinationproject.org/",
  },
  {
    id: "texas-roadhouse",
    name: "Texas Roadhouse",
    note: "Local support for the materials our student instructors hand out at every workshop.",
    logo: "/sponsors/texas-roadhouse.png",
    url: "https://www.texasroadhouse.com/",
  },
];
