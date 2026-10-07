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
  command: "event" | "config",
  target: string,
  params?: Record<string, unknown>
) => void;

/**
 * Google Ads tag for the Ad Grants account (customer 665-272-0688).
 *
 * GA4 imports already bring contact_email and donate_start into Ads. These two
 * are the site's main conversions, so they are also reported to Ads directly
 * with their own conversion actions, and keep counting even if the GA4 import
 * or key-event setup changes.
 */
const GOOGLE_ADS_ID = "AW-18483727833";
const ADS_CONVERSIONS: Partial<Record<string, string>> = {
  apply_start: "AW-18483727833/-_-BCNC08ZMdENmb3e1E",
  contact_submit: "AW-18483727833/3V6ICNO08ZMdENmb3e1E",
};
let adsConfigured = false;

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

  const sendTo = ADS_CONVERSIONS[event];
  if (!sendTo) return;
  if (!adsConfigured) {
    // Configured on first use rather than in the layout: gtag queues commands
    // in order, so this always runs before the conversion below.
    window.gtag("config", GOOGLE_ADS_ID);
    adsConfigured = true;
  }
  window.gtag("event", "conversion", { send_to: sendTo });
}
