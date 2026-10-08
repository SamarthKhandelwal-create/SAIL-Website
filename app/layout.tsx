import type { Metadata, Viewport } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site, ogImages } from "@/lib/site";
import { chapters } from "@/data/chapters";
import ConversionTracking from "@/components/ConversionTracking";
import { GOOGLE_ADS_ID } from "@/lib/analytics";

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
    "Students For AI Literacy (SAIL) is a student-led 501(c)(3) nonprofit that runs free, hands-on workshops teaching middle and high school students how AI works, when it is wrong, and how to use it responsibly.",
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
      "A student-led 501(c)(3) nonprofit running free workshops that teach middle and high school students how AI works and how to use it responsibly.",
    url: siteUrl,
    siteName: "Students For AI Literacy",
    type: "website",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "SAIL — Students For AI Literacy",
    description:
      "A student-led 501(c)(3) nonprofit running free workshops that teach middle and high school students how AI works and how to use it responsibly.",
    images: ogImages,
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
  /* Top-level `address`, not just `foundingLocation` — this is the property
     Google reads for a verifiable organization address, and its absence was
     cited in the Google for Nonprofits rejection. */
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.line1,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.region,
    postalCode: site.contact.address.postalCode,
    addressCountry: site.contact.address.country,
  },
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

/**
 * WebSite schema, paired with the Organization block above. Organization
 * describes the nonprofit; this describes the site itself, which is what
 * Google reads to associate the domain with the "Students For AI Literacy"
 * entity and to render a site name rather than a bare domain in results.
 *
 * Deliberately no `potentialAction`/SearchAction — the site has no search
 * endpoint, and declaring one that 404s is worse than declaring none.
 */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: site.short,
  url: site.url,
  publisher: { "@type": "NGO", name: site.name, url: site.url },
  inLanguage: "en-US",
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
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- static, server-built object
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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

        {/* Google tag (gtag.js) — Ad Grants conversion tracking. Configures both
            GA4 and the Google Ads tag on every page, so Google Ads can verify
            the tag is installed and attribute conversions to ad clicks. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaMeasurementId}');
gtag('config', '${GOOGLE_ADS_ID}');`}
        </Script>
      </body>
    </html>
  );
}
