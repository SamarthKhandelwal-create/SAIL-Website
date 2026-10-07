"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import EventCover from "./EventCover";
import type { OutreachEvent } from "@/data/types";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parseISO(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return { y, m: m - 1, day };
}

function longDate(d: string) {
  const { y, m, day } = parseISO(d);
  return `${MONTHS[m]} ${day}, ${y}`;
}

/** Local-midnight "YYYY-MM-DD" — compared as a string against event dates. */
function todayISO() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(
    n.getDate()
  ).padStart(2, "0")}`;
}

/**
 * Self-contained month calendar of SAIL outreach events. Event days are marked
 * and link straight to that event's article.
 *
 * The calendar used to open on the most recent event's month and had no notion
 * of a future session, so once a term ended the page silently presented itself
 * as months out of date — which is what Ad Grants review reads as abandoned
 * content. It now distinguishes upcoming from past sessions, opens on the next
 * upcoming one when there is one, and says so explicitly when there is not.
 */
export default function EventCalendar({ events }: { events: OutreachEvent[] }) {
  const byDate = useMemo(() => {
    const map = new Map<string, OutreachEvent>();
    for (const e of events) map.set(e.date, e);
    return map;
  }, [events]);

  const latest = useMemo(
    () => events.reduce((a, b) => (a.date > b.date ? a : b)),
    [events]
  );

  /* `today` stays null through SSR and the first client render so both produce
     the same HTML — the page is statically prerendered, so a build-time date
     would be baked in and go stale. It is filled on mount, and the view jumps
     to the next upcoming session if one exists. */
  const [today, setToday] = useState<string | null>(null);
  const start = parseISO(latest.date);
  const [view, setView] = useState({ year: start.y, month: start.m });

  const nextUp = useMemo(() => {
    if (!today) return null;
    return (
      events
        .filter((e) => e.date >= today)
        .sort((a, b) => a.date.localeCompare(b.date))[0] ?? null
    );
  }, [events, today]);

  useEffect(() => setToday(todayISO()), []);

  useEffect(() => {
    if (!nextUp) return;
    const p = parseISO(nextUp.date);
    setView({ year: p.y, month: p.m });
  }, [nextUp]);

  const firstWeekday = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const iso = (d: number) =>
    `${view.year}-${String(view.month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const monthEvents = events
    .filter((e) => {
      const p = parseISO(e.date);
      return p.y === view.year && p.m === view.month;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  const go = (delta: number) =>
    setView((v) => {
      const m = v.month + delta;
      return {
        year: v.year + Math.floor(m / 12),
        month: ((m % 12) + 12) % 12,
      };
    });

  const navBtn =
    "flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/60 text-primary transition-colors hover:border-primary hover:bg-surface-container-low";

  const listed = monthEvents.length ? monthEvents : events;
  const isUpcoming = (d: string) => Boolean(today) && d >= today!;

  return (
    <div className="grid gap-8 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 md:grid-cols-2 md:p-8">
      {/* Month grid.
          `min-w-0`: a grid item defaults to min-width:auto, so this column
          refused to shrink below the natural width of the seven day cells and
          pushed the whole page to 609px on a 390px phone — which scrolled every
          page sideways, the fixed nav included. */}
      <div className="min-w-0">
        <div className="mb-6 flex items-center justify-between">
          <button type="button" onClick={() => go(-1)} aria-label="Previous month" className={navBtn}>
            ‹
          </button>
          <p className="font-display text-2xl text-primary">
            {MONTHS[view.month]} {view.year}
          </p>
          <button type="button" onClick={() => go(1)} aria-label="Next month" className={navBtn}>
            ›
          </button>
        </div>

        <div
          key={`${view.year}-${view.month}`}
          className="animate-fade grid grid-cols-7 gap-1 text-center"
        >
          {WEEKDAYS.map((w, i) => (
            <div
              key={i}
              className="pb-2 font-body text-label-caps font-bold uppercase tracking-[0.05em] text-secondary"
            >
              {w}
            </div>
          ))}
          {cells.map((d, i) => {
            if (d === null) return <div key={i} aria-hidden />;
            const ev = byDate.get(iso(d));
            if (ev) {
              const upcoming = isUpcoming(ev.date);
              const marker = `flex aspect-square items-center justify-center rounded-full font-body text-body-md font-bold shadow-sm ${
                upcoming
                  ? "border-2 border-primary bg-primary-container/20 text-primary"
                  : "bg-primary text-on-primary"
              }`;
              /* A scheduled session with no recap yet is marked but not
                 clickable — there is no page behind it. */
              if (ev.calendarOnly) {
                return (
                  <div key={i} title={`${ev.title} (upcoming)`} className={marker}>
                    {d}
                  </div>
                );
              }
              return (
                <Link
                  key={i}
                  href={`/outreach/${ev.id}`}
                  title={`${ev.title}${upcoming ? " (upcoming)" : ""}`}
                  className={`${marker} transition-transform hover:scale-105`}
                >
                  {d}
                </Link>
              );
            }
            return (
              <div
                key={i}
                className="flex aspect-square items-center justify-center font-body text-body-md text-on-surface-variant"
              >
                {d}
              </div>
            );
          })}
        </div>
      </div>

      {/* Events for the shown month (or all events if none this month).
          `min-w-0` for the same reason as the month grid: without it the
          event titles set this column's floor and it would not shrink. */}
      <div className="flex min-w-0 flex-col">
        <p className="mb-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
          {monthEvents.length ? `In ${MONTHS[view.month]}` : "All sessions"}
        </p>
        <ul className="flex flex-col gap-3">
          {listed.map((e) => {
            const row = (
              <>
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
                  <EventCover
                    src={e.cover}
                    alt=""
                    quality={60}
                    sizes="56px"
                    small
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
                    {longDate(e.date)}
                    {isUpcoming(e.date) && (
                      <span className="ml-2 text-primary">· Upcoming</span>
                    )}
                  </span>
                  <span className="block truncate font-display text-lg text-primary transition-colors group-hover:text-surface-tint">
                    {e.title}
                  </span>
                </span>
              </>
            );
            const base =
              "flex items-center gap-4 rounded-lg border border-outline-variant/40 p-4";
            /* No recap yet: show the session, but do not offer a link to a
               page that does not exist. */
            if (e.calendarOnly) {
              return (
                <li key={e.id}>
                  <div className={base}>{row}</div>
                </li>
              );
            }
            return (
              <li key={e.id}>
                <Link
                  href={`/outreach/${e.id}`}
                  className={`group ${base} transition-colors hover:border-primary/50 hover:bg-surface-container-low`}
                >
                  {row}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
