/**
 * Central place for outward-facing links and contact details.
 * Update here and it changes everywhere on the site.
 */
export const site = {
  name: "Students For AI Literacy",
  short: "SAIL",
  /** Canonical origin. The apex domain 308-redirects here, so links and
   *  metadata must use the www host to avoid pointing at a redirect. */
  url: "https://www.studentsforailiteracy.org",
  /** Google Analytics 4 measurement ID (Ad Grants conversion tracking). */
  gaMeasurementId: "G-LY323NYB3Y",
  ein: "42-3520807",
  applyUrl: "https://form.jotform.com/261485414985064",
  /**
   * Hosted donation page. Leave empty until the giving partner is live —
   * /donate falls back to an email path rather than showing a dead button.
   * Every.org and PayPal Giving Fund are both free for 501(c)(3)s and keep
   * card data off this site entirely.
   */
  donateUrl: "" as string,
  contact: {
    founder: "Samarth Khandelwal",
    email: "sail.national.youth@gmail.com",
    phone: "+1 (513) 953-6153",
    phoneHref: "tel:+15139536153",
  },
  socials: {
    instagram: "https://www.instagram.com/students.for.ai.literacy/",
    linkedin: "https://www.linkedin.com/company/students-for-ai-literacy",
  },
  /** Nav labels stay short — the bar also carries a wordmark and an Apply
   *  button, and long labels overflow at the md breakpoint. */
  nav: [
    { label: "About", href: "/about" },
    { label: "Outreach", href: "/outreach" },
    { label: "Chapters", href: "/chapters" },
    { label: "Leadership", href: "/leadership" },
    { label: "Donate", href: "/donate" },
  ],
} as const;
