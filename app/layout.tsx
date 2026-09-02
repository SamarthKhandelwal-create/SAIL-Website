import type { Metadata, Viewport } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import { chapters } from "@/data/chapters";
import ConversionTracking from "@/components/ConversionTracking";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SAIL — Students For AI Literacy",
    template: "%s · SAIL",
  },
  description:
    "Students For AI Literacy (SAIL) is a non-profit created and led by students to promote AI literacy skills within youth. Empowering youth in AI.",
  keywords: [
    "AI literacy",
    "Students For AI Literacy",
    "SAIL",
    "nonprofit",
    "youth education",
    "artificial intelligence",
    "student chapters",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SAIL — Students For AI Literacy",
    description:
      "A non-profit created and led by students to promote AI literacy skills within youth.",
    url: siteUrl,
    siteName: "Students For AI Literacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAIL — Students For AI Literacy",
    description:
      "A non-profit created and led by students to promote AI literacy skills within youth.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#25637a",
  width: "device-width",
  initialScale: 1,
};

/**
 * Organization schema. Ad Grants review and Google's own crawlers both look for
 * a machine-readable statement of who the organization is, its nonprofit
 * status, and how to reach it — the same facts the footer states in prose.
 * Kept in the root layout so it is present on every page.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: site.short,
  url: site.url,
  logo: `${site.url}/favicon.svg`,
  email: site.contact.email,
  telephone: site.contact.phone,
  description:
    "A student-led 501(c)(3) nonprofit teaching young people to understand, question, and responsibly use artificial intelligence through free, hands-on workshops.",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cincinnati",
      addressRegion: "OH",
      addressCountry: "US",
    },
  },
  nonprofitStatus: "Nonprofit501c3",
  taxID: site.ein,
  sameAs: [site.socials.instagram, site.socials.linkedin],
  areaServed: [...new Set(chapters.map((c) => c.location))].map((l) => ({
    "@type": "Place",
    name: l,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "General enquiries",
    email: site.contact.email,
    telephone: site.contact.phone,
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${jakarta.variable}`}>
      <head>
        {/* The GA endpoints are third-party and on the critical path; opening
            the connections early measured ~280ms off mobile first paint. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- static, server-built object
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        {/* First tab stop on every page: the nav repeats on all 12 routes, and
            without this a keyboard or screen-reader user tabs through it before
            reaching content each time. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-primary focus:px-5 focus:py-3 focus:font-body focus:text-label-caps focus:font-bold focus:uppercase focus:tracking-[0.1em] focus:text-on-primary"
        >
          Skip to content
        </a>
        {children}
        <ConversionTracking />

        {/* Google tag (gtag.js) — Ad Grants conversion tracking. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaMeasurementId}');`}
        </Script>
      </body>
    </html>
  );
}
