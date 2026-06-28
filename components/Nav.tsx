"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import Magnetic from "./Magnetic";

const sectionIds = ["home", "chapters", "board"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/10 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-margin-mobile py-5 md:px-gutter">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-tight text-primary md:text-3xl"
        >
          SAIL
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`font-body text-label-caps font-bold uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`mt-1 block h-px origin-left bg-primary transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <Magnetic className="hidden md:block" strength={0.5}>
          <a
            href={site.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded bg-primary px-6 py-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary transition-colors hover:bg-surface-tint"
          >
            Start a Chapter
          </a>
        </Magnetic>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-primary md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-primary/10 bg-white/95 backdrop-blur-xl transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-margin-mobile py-4">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary"
            >
              Apply Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
