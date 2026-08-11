"use client";

import { useEffect, useRef, useState } from "react";
import type { Stats } from "@/data/types";

/**
 * Counts up to `to` when scrolled into view. Previously framer-motion; this
 * does the same job with rAF and an IntersectionObserver and ships no library.
 * The final value is rendered server-side, so it is present for crawlers and
 * for anyone with JavaScript disabled.
 */
function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
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
          setValue(Math.floor(eased * to));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setValue(0);
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
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
  const items = [
    { label: "Students Taught", value: stats.studentsTaught },
    { label: "Active Chapters", value: stats.activeChapters },
    { label: "Workshops Hosted", value: stats.workshopsHosted },
  ];

  return (
    <section className="bg-primary py-stack-lg text-on-primary">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-stack-lg px-margin-mobile text-center sm:grid-cols-3 sm:gap-0 md:px-gutter">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center ${
              i > 0 ? "sm:border-l sm:border-primary-container/40" : ""
            }`}
          >
            <div className="font-display text-6xl font-bold md:text-[76px]">
              <Counter to={item.value} />
            </div>
            <div className="mt-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary-fixed-dim">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
