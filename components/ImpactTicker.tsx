"use client";

import { useEffect, useRef, useState } from "react";
import type { Stats } from "@/data/types";

/**
 * Counters below this never animate, and counters above it never start below
 * it. A crawler or screenshot bot that catches the first frame of a count-up
 * would otherwise read "0+", which looks like an unfinished template — Google
 * Ad Grants review flagged exactly that. The number on screen is always a real
 * number, at every frame, with or without JavaScript.
 */
const ANIMATE_ABOVE = 25;

/**
 * Counts up to `to` when scrolled into view. Previously framer-motion; this
 * does the same job with rAF and an IntersectionObserver and ships no library.
 * The final value is rendered server-side, so it is present for crawlers and
 * for anyone with JavaScript disabled.
 */
function Counter({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Small figures are shown as-is: a count-up over four chapters is not worth
    // the risk of a bot reading a partial value as the real one.
    if (to <= ANIMATE_ABOVE) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let settle = 0;
    const from = Math.max(1, Math.round(to * 0.4));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast start, gentle settle
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setValue(Math.round(from + (to - from) * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setValue(from);
        raf = requestAnimationFrame(tick);
        // rAF is throttled or suspended in headless and background tabs, which
        // would freeze the counter mid-animation. Land on the true value either
        // way.
        settle = window.setTimeout(() => setValue(to), duration + 400);
      },
      { rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(settle);
    };
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactTicker({ stats }: { stats: Stats }) {
  /** `suffix` is "+" where the figure is a floor rather than an exact count. */
  const items = [
    {
      label: "Students Taught",
      value: stats.studentsTaught,
      suffix: "+",
      detail: "Through a free SAIL workshop since 2024.",
    },
    {
      label: "Active Chapters",
      // No "+": this one is an exact count derived from data/chapters.ts, and
      // a reviewer who counts the pins on the /chapters map gets the same
      // number. Padding an exact figure is the kind of small overclaim that
      // undermines the honest ones next to it.
      value: stats.activeChapters,
      detail: "Ohio high schools running their own programming.",
    },
    {
      label: "Engagement Hours",
      value: stats.engagementHours,
      suffix: "+",
      detail: "In classroom and community sessions, all free to host.",
    },
  ];

  return (
    <section className="bg-primary py-section-gap text-on-primary">
      <div className="mx-auto max-w-content px-margin-mobile md:px-gutter">
        <div className="mx-auto mb-stack-lg max-w-2xl text-center">
          <p className="font-body text-label-caps font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
            Our impact so far
          </p>
        </div>

        <div className="grid grid-cols-1 gap-stack-lg text-center sm:grid-cols-3 sm:gap-0">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center justify-start px-4 ${
                i > 0 ? "sm:border-l sm:border-primary-container/40" : ""
              }`}
            >
              <div className="font-display text-6xl font-bold md:text-[76px]">
                <Counter to={item.value} suffix={item.suffix} />
              </div>
              <div className="mt-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary-fixed-dim">
                {item.label}
              </div>
              <p className="mt-3 max-w-xs font-body text-body-md text-primary-fixed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
