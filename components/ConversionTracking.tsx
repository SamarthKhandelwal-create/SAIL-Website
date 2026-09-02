"use client";

import { useEffect } from "react";
import { EVENTS, track, type ConversionEvent } from "@/lib/analytics";

/**
 * Records the site's conversions in GA4.
 *
 * This is one delegated listener on the document rather than an onClick on
 * every button. The CTAs are spread across a dozen server components — heroes,
 * cards, the footer, the floating mobile button — and making each one a client
 * component to attach a handler would ship far more JavaScript than this and
 * would silently miss any CTA added later. A capture-phase listener sees every
 * link on every page, including ones that do not exist yet.
 */
function classify(href: string): { event: ConversionEvent; method: string } | null {
  if (href.startsWith("mailto:")) {
    // The subject line is how we tell a workshop request from a sponsorship
    // offer — it is the only signal in a mailto: link about intent.
    const subject = decodeURIComponent(href.split("subject=")[1] ?? "");
    return { event: EVENTS.contactEmail, method: subject || "general" };
  }
  if (href.startsWith("tel:")) return { event: EVENTS.contactPhone, method: "phone" };
  if (href.includes("jotform.com")) return { event: EVENTS.applyStart, method: "jotform" };
  if (href.includes("every.org") || href.includes("paypal.com"))
    return { event: EVENTS.donateStart, method: "hosted_donation" };
  return null;
}

export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      if (!link) return;
      // getAttribute, not .href: the DOM property resolves relative URLs to
      // absolute, which would make every internal link look external.
      const href = link.getAttribute("href");
      if (!href) return;

      const hit = classify(href);
      if (!hit) return;

      track(hit.event, {
        method: hit.method,
        link_url: href,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
