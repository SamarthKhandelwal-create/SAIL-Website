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
  /** Optional contact link (mailto: or https://). */
  link?: string;
  /** Layout weight on the board grid: feature spans wider. */
  feature?: boolean;
};

export type Stats = {
  studentsTaught: number;
  activeChapters: number;
  statesReached: number;
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
  /** Card / hero image path under /public. */
  cover: string;
  /** Full write-up: each string is a paragraph. */
  article: string[];
  /** Photo gallery for the article + home page. */
  photos: OutreachPhoto[];
};
