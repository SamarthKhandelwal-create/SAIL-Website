import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ChapterFunnel from "@/components/ChapterFunnel";
import ChaptersMap from "@/components/ChaptersMap";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";

import { chapters } from "@/data/chapters";

const description =
  "Start a SAIL chapter at your school. Chapter-in-a-Box gives you the curriculum, network, and support — you bring the leadership.";

export const metadata: Metadata = {
  title: "Start a Chapter",
  description,
  openGraph: {
    title: "Start a Chapter · SAIL",
    description,
    type: "website",
  },
};

export default function ChaptersPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          id="chapters"
          size="page"
          words={["START A", "CHAPTER"]}
          subtitle="Everything you need to bring AI literacy to your school."
        />
        <ChapterFunnel showHeading={false} />
        <ChaptersMap chapters={chapters} />
        <SectionCTA
          eyebrow="See it in action"
          title="Here's what a chapter actually does."
          href="/outreach"
          label="See our outreach"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
