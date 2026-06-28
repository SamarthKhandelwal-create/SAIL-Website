"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { Chapter } from "@/data/types";
import Reveal from "./Reveal";

// Leaflet touches `window`, so the map must be client-only (no SSR).
const ChapterMapInner = dynamic(() => import("./ChapterMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-surface-variant">
      <span className="font-body text-label-caps uppercase tracking-[0.1em] text-secondary">
        Loading map…
      </span>
    </div>
  ),
});

export default function ChaptersMap({ chapters }: { chapters: Chapter[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
      <div className="mx-auto max-w-content">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                The Network
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-on-surface">
                Join a growing coalition
              </h2>
              <p className="mb-8 font-body text-body-lg text-secondary">
                Our reach is expanding rapidly. Explore the chapters already
                driving AI literacy at the grassroots level — and put your school
                on the map.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="flex flex-wrap gap-3">
                {chapters.map((c) => (
                  <button
                    key={c.id}
                    onMouseEnter={() => setActiveId(c.id)}
                    onFocus={() => setActiveId(c.id)}
                    onClick={() => setActiveId(c.id)}
                    className={`inline-flex items-center rounded border px-3 py-1.5 font-body text-label-caps font-bold uppercase tracking-[0.1em] transition-colors ${
                      activeId === c.id
                        ? "border-primary bg-primary text-on-primary"
                        : "border-outline-variant/50 bg-surface-container text-on-surface-variant hover:border-primary/50"
                    }`}
                  >
                    {c.name.replace(/ High School$/, "")}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={1} className="md:col-span-7">
            <div className="relative h-[460px] overflow-hidden rounded-xl border border-outline-variant/30 md:h-[520px]">
              <ChapterMapInner chapters={chapters} activeId={activeId} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
