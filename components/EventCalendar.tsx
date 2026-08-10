"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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

/**
 * Self-contained month calendar of SAIL outreach events. Event days are marked
 * and link straight to that event's article. Opens on the most recent event's
 * month; arrows browse other months.
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
  const start = parseISO(latest.date);
  const [view, setView] = useState({ year: start.y, month: start.m });

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

  return (
    <div className="grid gap-8 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 md:grid-cols-2 md:p-8">
      {/* Month grid */}
      <div>
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

        <motion.div
          key={`${view.year}-${view.month}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-7 gap-1 text-center"
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
              return (
                <Link
                  key={i}
                  href={`/outreach/${ev.id}`}
                  title={ev.title}
                  className="flex aspect-square items-center justify-center rounded-full bg-primary font-body text-body-md font-bold text-on-primary shadow-sm transition-transform hover:scale-105"
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
        </motion.div>
      </div>

      {/* Events for the shown month (or all events if none this month) */}
      <div className="flex flex-col">
        <p className="mb-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
          {monthEvents.length ? `In ${MONTHS[view.month]}` : "All sessions"}
        </p>
        <ul className="flex flex-col gap-3">
          {listed.map((e) => (
            <li key={e.id}>
              <Link
                href={`/outreach/${e.id}`}
                className="group flex items-center gap-4 rounded-lg border border-outline-variant/40 p-4 transition-colors hover:border-primary/50 hover:bg-surface-container-low"
              >
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={e.cover}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
                    {longDate(e.date)}
                  </span>
                  <span className="block truncate font-display text-lg text-primary transition-colors group-hover:text-surface-tint">
                    {e.title}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
