import type { Sponsor } from "./types";

/**
 * The funders and businesses behind SAIL's programming.
 *
 * TO ADD A SPONSOR: append an entry here — every page that renders <Sponsors />
 * picks it up with no other change.
 *
 * Logos live in /public/sponsors as <id>.png, <id>.jpg or <id>.svg. `logo` is
 * deliberately optional: a sponsor with no artwork yet renders as a
 * typographic wordmark card instead of a broken image, so the section is never
 * blocked on chasing a logo file.
 *
 * google.svg is Google's official full-color mark, served from their own
 * branding CDN. Use it only for factual attribution of support we actually
 * receive — never recolored, restretched, or in a way that implies Google
 * endorses SAIL.
 *
 * KEEP THE GOOGLE NOTE STRICTLY TRUE. It previously claimed "an Ad Grant that
 * puts SAIL in front of teachers searching for AI literacy resources" while
 * SAIL's Ad Grants application was still being rejected. A reviewer assessing
 * that application lands on this page and reads the applicant claiming the
 * grant it is asking for, beside Google's own trademark. Workspace for
 * Nonprofits is real and verifiable (the domain's MX records point at Google);
 * the Ad Grant is not, and must not be listed until it is approved.
 */
export const sponsors: Sponsor[] = [
  {
    id: "google",
    name: "Google for Nonprofits",
    note: "Google Workspace for Nonprofits, which runs our team's email, shared files, and the calendars our chapters schedule workshops on.",
    logo: "/sponsors/google.svg",
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
    logo: "/sponsors/contribution-project.png",
    url: "https://contributionproject.org/",
  },
  {
    id: "voa-museum",
    name: "National Voice of America Museum of Broadcasting",
    note: "A grant toward our workshop materials, and a permanent display introducing SAIL to the museum's visitors.",
    logo: "/sponsors/voa-museum.jpg",
    url: "https://www.voamuseum.org/",
  },
  {
    id: "texas-roadhouse",
    name: "Texas Roadhouse",
    note: "Materials our student instructors hand out at every workshop.",
    logo: "/sponsors/texas-roadhouse.png",
    url: "https://www.texasroadhouse.com/",
  },
];
