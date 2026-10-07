/**
 * Shared content types for the SAIL site.
 * These describe the shape of the data served by the /api/* routes.
 */

export type Chapter = {
  /** Stable slug, used as a React key and in URLs. */
  id: string;
  /** School / chapter display name. */
  name: string;
  /** City, State. */
  location: string;
  /** Latitude in decimal degrees. */
  lat: number;
  /** Longitude in decimal degrees. */
  lng: number;
  /** Contact email for the chapter (optional). */
  email?: string;
  /**
   * Chapter lead's name, for display only.
   *
   * Chapter leads are minors. Never add their personal email, phone number, or
   * any other contact detail to this type — everything here is published on the
   * public map and served by /api/chapters. Route all chapter inquiries to the
   * organization address instead.
   */
  lead?: string;
  /** Year the chapter was founded (optional). */
  founded?: number;
  /** Marks the founding / flagship chapter. */
  flagship?: boolean;
};

export type BoardMember = {
  id: string;
  name: string;
  role: string;
  /** Public-facing photo URL. Swap with hosted headshots when available. */
  photo: string;
  /** Optional short bio shown on hover / expand. */
  bio?: string;
  /**
   * Board address on the org domain, firstname.lastname@studentsforailiteracy.org.
   * Shown on the member's card and used as the card's mailto: link.
   */
  email?: string;
  /** Layout weight on the board grid: feature spans wider. */
  feature?: boolean;
};

/**
 * An adult advisor to the student board. Distinct from BoardMember: advisors
 * counsel the organization but do not govern it.
 */
export type Advisor = {
  /** Stable slug, used as a React key. */
  id: string;
  name: string;
  /** Advisory role at SAIL, e.g. "Education Advisor". */
  role: string;
  /** Professional title and employer, as the advisor states it publicly. */
  affiliation: string;
  /** What they advise SAIL on. */
  bio?: string;
  /**
   * Headshot under /public/board. Optional: the card falls back to the
   * advisor's initials, so someone can be listed before (or without) supplying
   * a picture of themselves.
   */
  photo?: string;
  /**
   * Contact address, shown on the card as a mailto: link.
   *
   * Institutional addresses only — an @studentsforailiteracy.org alias or the
   * advisor's work address. Never a personal one: this is published.
   */
  email?: string;
};

export type Sponsor = {
  /** Stable slug, used as a React key and as the logo filename. */
  id: string;
  /** Full name, as the sponsor writes it. */
  name: string;
  /** One sentence on what they funded. Keep it specific and true. */
  note: string;
  /**
   * Logo path under /public/sponsors. Omit until we have the sponsor's own
   * artwork — the card then falls back to a typographic wordmark, which reads
   * as deliberate rather than as a broken image.
   */
  logo?: string;
  /** Sponsor's website, if they have one. */
  url?: string;
};

export type Stats = {
  studentsTaught: number;
  activeChapters: number;
  statesReached: number;
  /** Volunteer and participant hours across every session we have run. */
  engagementHours: number;
};

export type OutreachPhoto = {
  /** Path under /public (e.g. "/outreach/img-8340.jpg"). */
  src: string;
  /** Descriptive alt text / caption. */
  alt: string;
};

export type OutreachEvent = {
  /** Stable slug, used as the article URL (/outreach/[slug]) and React key. */
  id: string;
  /** Headline for the event. */
  title: string;
  /** ISO date the event took place, "YYYY-MM-DD". Drives the calendar. */
  date: string;
  /** Where it happened. */
  location: string;
  /** One-sentence teaser shown on the home-page card. */
  summary: string;
  /**
   * Card / hero image path under /public. Omit when the host has not cleared
   * photos for publication (e.g. sessions with youth in foster care) — the
   * site then shows a plain branded panel. Never borrow another event's photo.
   */
  cover?: string;
  /** Full write-up: each string is a paragraph. Empty for a calendar-only entry. */
  article: string[];
  /** Photo gallery for the article + home page. */
  photos: OutreachPhoto[];
  /**
   * A scheduled session with no write-up yet: it appears on the calendar and in
   * the "Next session" banner, but gets no article page and no recap card.
   *
   * This is the right shape for an upcoming date. A recap written in the future
   * tense is a page that describes things that have not happened, which reads
   * as padding to a reader and as thin content to a crawler.
   *
   * After the session runs, write `article`, add real photos, and delete this
   * flag — the article page and recap card then appear on their own.
   */
  calendarOnly?: boolean;
};
