"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/** A nav item owns its route and, for /outreach, the article pages beneath it. */
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * `solid` forces the opaque treatment for pages that open on a light
 * background instead of a dark hero — the transparent state renders white
 * text and would be invisible there.
 */
export default function Nav({ solid = false }: { solid?: boolean }) {
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = solid || !atTop;

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on any route change, including back/forward.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/10 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-margin-mobile py-5 md:px-gutter">
        <Link
          href="/"
          className={`font-display text-2xl font-bold tracking-tight transition-colors md:text-3xl ${
            scrolled ? "text-primary" : "text-white"
          }`}
        >
          SAIL
        </Link>

        <ul className="hidden items-center gap-5 md:flex lg:gap-8">
          {site.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-body text-label-caps font-bold uppercase tracking-[0.1em] transition-colors ${
                    scrolled
                      ? active
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                      : active
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`mt-1 block h-px origin-left transition-transform duration-300 ${
                      scrolled ? "bg-primary" : "bg-white"
                    } ${active ? "scale-x-100" : "scale-x-0"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {/* Renders only once site.donateUrl is set — see DonateButton. */}
          {site.donateUrl && (
            <a
              href={site.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-donate
              className={`inline-flex items-center justify-center whitespace-nowrap rounded border px-5 py-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] transition-colors lg:px-6 ${
                scrolled
                  ? "border-primary/40 text-primary hover:border-primary hover:bg-primary/5"
                  : "border-white/60 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              Donate
            </a>
          )}
          <a
            href={site.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded bg-primary px-5 py-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary transition-colors hover:bg-surface-tint lg:px-6"
          >
            Apply
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center transition-colors md:hidden ${
            scrolled || open ? "text-primary" : "text-white"
          }`}
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
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-margin-mobile py-4">
          {site.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block py-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] ${
                    active ? "text-primary" : "text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          {site.donateUrl && (
            <li>
              <a
                href={site.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                data-donate
                className="mt-2 inline-flex w-full items-center justify-center rounded border border-primary/40 px-6 py-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary"
              >
                Donate
              </a>
            </li>
          )}
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
