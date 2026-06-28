"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";
import type { Stats } from "@/data/types";

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function ImpactTicker({ stats }: { stats: Stats }) {
  const [data, setData] = useState<Stats>(stats);

  // Refresh from the API in case the numbers were updated server-side.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/stats")
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled && d?.stats) setData(d.stats);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const items = [
    { label: "Students Taught", value: data.studentsTaught },
    { label: "Active Chapters", value: data.activeChapters },
  ];

  return (
    <section className="bg-primary py-stack-lg text-on-primary">
      <div className="mx-auto flex max-w-content flex-col items-center justify-center gap-stack-lg px-margin-mobile text-center md:flex-row md:gap-0 md:px-gutter">
        {items.map((item, i) => (
          <div
            key={item.label}
            className="flex flex-1 items-center justify-center"
          >
            <div>
              <div className="font-display text-6xl font-bold md:text-[88px]">
                <Counter to={item.value} />
              </div>
              <div className="mt-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary-fixed-dim">
                {item.label}
              </div>
            </div>
            {i < items.length - 1 && (
              <span className="ml-12 mr-0 hidden h-20 w-px bg-primary-container md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
