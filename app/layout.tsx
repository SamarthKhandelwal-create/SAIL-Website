import type { Metadata, Viewport } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased">
        {children}

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
