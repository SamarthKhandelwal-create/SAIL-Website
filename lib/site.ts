/**
 * Central place for outward-facing links and contact details.
 * Update here and it changes everywhere on the site.
 */
export const site = {
  name: "Students For AI Literacy",
  short: "SAIL",
  applyUrl: "https://form.jotform.com/261485414985064",
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
  nav: [
    { label: "Home", href: "#home" },
    { label: "Outreach", href: "#outreach" },
    { label: "Start a Chapter", href: "#chapters" },
    { label: "Leadership", href: "#board" },
  ],
} as const;
