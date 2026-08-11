import type { Stats } from "./types";
import { chapters } from "./chapters";
import { events } from "./events";

/**
 * Impact numbers shown in the rolling ticker.
 *
 * - `activeChapters` is derived automatically from data/chapters.ts.
 * - `studentsTaught` and `statesReached` are edited by hand — update them after
 *   each outreach event. Keep them honest; grant reviewers check.
 */

const manual = {
  studentsTaught: 300,
  statesReached: 1,
};

const uniqueStates = new Set(
  chapters.map((c) => c.location.split(",").pop()?.trim()).filter(Boolean)
);

export const stats: Stats = {
  studentsTaught: manual.studentsTaught,
  activeChapters: chapters.length,
  statesReached: Math.max(manual.statesReached, uniqueStates.size),
  workshopsHosted: events.length,
};
