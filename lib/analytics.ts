/**
 * Google Analytics 4 conversion events.
 *
 * WHY THIS EXISTS: the Google Ad Grants program policy requires an account to
 * record at least one conversion per month, and an account that reports none
 * is suspended. GA4 was installed on this site but nothing ever called it, so
 * every conversion count was zero no matter how many people applied.
 *
 * AFTER DEPLOYING, mark these as key events in GA4 (Admin → Events → "Mark as
 * key event") and import them into Google Ads as conversions
 * (Tools → Conversions → Import → Google Analytics 4). Until that import
 * happens, Ads still counts nothing — the events alone are not enough.
 */
export const EVENTS = {
  /** Opened one of the JotForm applications (chapter lead, marketing, finance). */
  applyStart: "apply_start",
  /** Clicked a mailto: link — workshop requests, partnerships, general contact. */
  contactEmail: "contact_email",
  /**
   * Submitted the /contact form and the server confirmed delivery.
   *
   * The strongest conversion the site has: unlike the click events around it,
   * this fires on a completed action rather than an intent to leave, so it is
   * the one to mark as the primary key event in GA4.
   */
  contactSubmit: "contact_submit",
  /** Clicked the phone number. */
  contactPhone: "contact_phone",
  /** Clicked through to the hosted donation page, once one exists. */
  donateStart: "donate_start",
} as const;

export type ConversionEvent = (typeof EVENTS)[keyof typeof EVENTS];

type Gtag = (
  command: "event",
  eventName: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/**
 * Fire a GA4 event. No-ops when gtag has not loaded (ad blockers, the script
 * still in flight, server rendering) — analytics must never break a link.
 */
export function track(event: ConversionEvent, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
