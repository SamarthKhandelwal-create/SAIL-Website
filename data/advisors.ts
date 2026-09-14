import type { Advisor } from "./types";

/**
 * SAIL Board of Advisors — the adults who advise the student board.
 *
 * Deliberately separate from data/board.ts. The executive board is students who
 * run the organization; advisors do not govern it, and conflating the two would
 * misrepresent how SAIL is structured to anyone reading the site.
 *
 * TO ADD AN ADVISOR: append a block. /advisors renders the list with no other
 * change; `photo` is optional and the card falls back to initials without one.
 *
 * Titles below are taken from each advisor's own public professional profile.
 * Confirm with the person before publishing a change — an out-of-date employer
 * on a public page is the kind of error a funder notices, and the advisor is
 * the one embarrassed by it.
 */
export const advisors: Advisor[] = [
  {
    id: "margo-fisher-bellman",
    name: "Margo Fisher-Bellman",
    role: "Education Advisor",
    affiliation: "Librarian, Walnut Hills High School",
    photo: "/board/margo.jpeg",
    // Her Cincinnati Public Schools work address, not a personal one.
    email: "bellmam@cpsboe.k12.oh.us",
    bio: "A 25-year veteran teacher and National Board Certified ELA 7–12 librarian at Walnut Hills High School, where SAIL's founding chapter is based. In 2026 she was selected as one of eight educators nationally for the Pulitzer Center's Information & Artificial Intelligence Teacher Advisory Council, and led students in drafting an AI policy for their school rooted in transparency and ethical use. She advises SAIL on what actually works in a classroom — and what a district will approve.",
  },
  {
    id: "manish-khandelwal",
    name: "Manish Khandelwal",
    role: "President of the Board of Advisors",
    affiliation: "GE90 Systems Leader, Service Engineering at GE Aerospace",
    photo: "/board/manish.jpeg",
    email: "manish.khandelwal@studentsforailiteracy.org",
    bio: "A systems engineering leader at GE Aerospace, where he leads service engineering for the GE90 engine program. He advises SAIL on the technical accuracy of what we teach, and on how complex engineered systems are actually built, tested, and held accountable in industry.",
  },
];
