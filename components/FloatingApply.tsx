"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/** Mobile-only floating "Apply" button; appears after scrolling past the hero. */
export default function FloatingApply() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={site.applyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Apply to start a chapter"
      className={`fixed bottom-6 right-6 z-40 flex h-14 items-center gap-2 rounded-full bg-primary px-5 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary shadow-lg transition-all duration-500 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      Apply
      <span>→</span>
    </a>
  );
}
