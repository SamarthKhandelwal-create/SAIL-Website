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
