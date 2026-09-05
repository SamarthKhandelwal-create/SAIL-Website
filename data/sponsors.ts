import type { Sponsor } from "./types";

/**
 * The funders and businesses behind SAIL's programming.
 *
 * TO ADD A SPONSOR: append an entry here — every page that renders <Sponsors />
 * picks it up with no other change.
 *
 * Logos live in /public/sponsors as <id>.png or <id>.svg. `logo` is
 * deliberately optional: a sponsor with no artwork yet renders as a
 * typographic wordmark card instead of a broken image, so the section is never
 * blocked on chasing a logo file. Google is intentionally left as a wordmark —
 * their brand assets carry usage restrictions we would rather not test.
 */
export const sponsors: Sponsor[] = [
  {
    id: "google",
    name: "Google for Nonprofits",
    note: "Google Workspace for our team's email and files, and an Ad Grant that puts SAIL in front of teachers searching for AI literacy resources.",
    url: "https://www.google.com/nonprofits/",
  },
  {
    id: "esfc",
    name: "Engineers and Scientists Foundation of Cincinnati",
    note: "The Lee Hite Grant, which put our AI literacy curriculum in front of Cincinnati-area classrooms.",
    logo: "/sponsors/esfc.png",
  },
  {
    id: "pollination-project",
    name: "The Pollination Project",
    note: "Seed funding that underwrote our chapter expansion beyond the first school.",
    logo: "/sponsors/pollination-project.png",
    url: "https://thepollinationproject.org/",
  },
  {
    id: "karma-for-cara",
    name: "Karma for Cara Foundation",
    note: "Youth-service funding for the workshops we run outside of school settings.",
    logo: "/sponsors/karma-for-cara.svg",
    url: "https://karmaforcara.org/",
  },
  {
    id: "contribution-project",
    name: "The Contribution Project",
    note: "The seed grant SAIL started on — our first classroom session was funded here.",
    url: "https://contributionproject.org/",
  },
  {
    id: "texas-roadhouse",
    name: "Texas Roadhouse",
    note: "Materials our student instructors hand out at every workshop.",
    logo: "/sponsors/texas-roadhouse.png",
    url: "https://www.texasroadhouse.com/",
  },
];
