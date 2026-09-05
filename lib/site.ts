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
  /**
   * Exact tax-status sentence Google Ad Grants review expects to find in the
   * site footer on every page. Keep the wording and punctuation as-is —
   * reviewers look for the literal "registered 501(c)(3) organization" phrase
   * next to the EIN.
   */
  taxStatusLine:
    "Students For AI Literacy is a registered 501(c)(3) organization (EIN: 42-3520807).",
  /**
   * Open roles. Each is a JotForm application.
   *
   * TO ADD A ROLE: append an entry here — /join renders the list, so the new
   * role appears with no other change. `id` is used as the anchor on /join.
   */
  roles: [
    {
      id: "chapter-lead",
      title: "Chapter Lead",
      blurb:
        "Start and run a SAIL chapter at your school. You recruit a small team, run workshops for younger students, and get the Chapter-in-a-Box curriculum, slide decks, and operational support to do it.",
      commitment: "4–8 hours/week · High school students",
      responsibilities: [
        "Run AI literacy workshops at your school or in your community",
        "Recruit and coordinate a small team of student volunteers",
        "Adapt our curriculum to the students you are teaching",
      ],
      url: "https://form.jotform.com/261485414985064",
    },
    {
      id: "marketing",
      title: "Marketing Team",
      blurb:
        "Help more students find SAIL. You will work on our social presence, outreach materials, and the way we tell the story of what student-led AI literacy actually looks like.",
      commitment: "2–3 hours/week · Remote",
      responsibilities: [
        "Create content for Instagram and LinkedIn",
        "Design outreach materials for schools and community partners",
        "Help shape how SAIL presents itself to students and funders",
      ],
      url: "https://form.jotform.com/262176945755066",
    },
    {
      id: "finance",
      title: "Finance Team",
      blurb:
        "Keep a nonprofit's books honest. You will help track our budget, prepare grant reporting, and make sure every dollar we raise is accounted for and spent on programming.",
      commitment: "2–3 hours/week · Remote",
      responsibilities: [
        "Maintain the expense ledger and reconcile receipts",
        "Help prepare budgets and reporting for grant applications",
        "Track spending against programming so we can show funders where money went",
      ],
      url: "https://form.jotform.com/262225270463149",
    },
  ],
  /** Chapter Lead application — the site's default "Apply" destination. */
  applyUrl: "https://form.jotform.com/261485414985064",
  /**
   * Hosted donation page. Every.org and PayPal Giving Fund are both free for
   * 501(c)(3)s and keep card data off this site entirely.
   *
   * While this is empty, /donate is a "Support Our Work" page describing
   * non-cash ways to help, and every <DonateButton /> renders nothing. Ad
   * Grants policy treats a donate link that cannot take a donation as a broken
   * donation link, so we show one only once it works.
   *
   * TO TURN GIVING ON: set this URL. Nothing else to change — the nav button,
   * the /donate band, and the /sponsors ask all read from here.
   *
   * every.org is the usual pick: free for 501(c)(3)s, verifies off the EIN,
   * and keeps card data off this site entirely.
   */
  donateUrl: "" as string,
  /**
   * Hosted contact / workshop-request form, embedded on /contact.
   *
   * Ad Grants review treats a `mailto:` as a weak call to action: it depends on
   * the visitor having a mail client configured, it cannot confirm receipt, and
   * it produces no measurable conversion. While this is empty, /contact renders
   * the direct contact routes instead — which is honest, but a real form
   * converts far better and is what review expects to find.
   *
   * TO TURN THE FORM ON: create a JotForm (the same account already hosts the
   * three role applications), set its URL here, and /contact embeds it. Set a
   * thank-you page on the form itself so submissions get a confirmation.
   */
  contactFormUrl: "" as string,
  contact: {
    founder: "Samarth Khandelwal",
    email: "samarth.khandelwal@studentsforailiteracy.org",
    phone: "+1 (513) 953-6153",
    phoneHref: "tel:+15139536153",
  },
  socials: {
    instagram: "https://www.instagram.com/students.for.ai.literacy/",
    linkedin: "https://www.linkedin.com/company/students-for-ai-literacy",
  },
  /** Nav labels stay short — the bar also carries a wordmark and an Apply
   *  button, and long labels overflow at the md breakpoint.
   *
   *  Deliberately five items. /leadership and /sponsors are reachable from
   *  /about and /donate respectively, and from the footer; promoting them here
   *  makes the bar overflow and buries the two routes that actually convert. */
  nav: [
    { label: "About", href: "/about" },
    { label: "Outreach", href: "/outreach" },
    { label: "Chapters", href: "/chapters" },
    { label: "Join", href: "/join" },
    { label: "Support", href: "/donate" },
  ],
} as const;
