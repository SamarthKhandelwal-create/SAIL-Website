import type { Metadata, Viewport } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

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

const siteUrl = "https://studentsforailiteracy.org";

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
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
