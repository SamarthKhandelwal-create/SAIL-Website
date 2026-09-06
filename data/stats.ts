import type { Stats } from "./types";
import { chapters } from "./chapters";

/**
 * Impact numbers shown in the rolling ticker.
 *
 * - `activeChapters` is derived automatically from data/chapters.ts.
 * - `studentsTaught`, `statesReached`, and `engagementHours` are edited by hand
 *   — update them after each outreach event. Keep them honest; grant reviewers
 *   check, and they compare these against what your grant applications claim.
 */

const manual = {
  studentsTaught: 800,
  statesReached: 1,
  /**
   * Volunteer and participant hours across every session we have run, chapter
   * workshops included. Reported instead of a session count because the count
   * understates the work: sessions vary from a single period to a full day.
   */
  engagementHours: 1300,
};

const uniqueStates = new Set(
  chapters.map((c) => c.location.split(",").pop()?.trim()).filter(Boolean)
);

export const stats: Stats = {
  studentsTaught: manual.studentsTaught,
  activeChapters: chapters.length,
  statesReached: Math.max(manual.statesReached, uniqueStates.size),
  engagementHours: manual.engagementHours,
};
