import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Board from "@/components/Board";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";

import { board } from "@/data/board";

const description =
  "Meet the students leading Students For AI Literacy — the board bridging complex technology and accessible education.";

export const metadata: Metadata = {
  title: "Leadership",
  description,
  openGraph: {
    title: "Leadership · SAIL",
    description,
    type: "website",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          id="board"
          size="page"
          words={["OUR", "LEADERSHIP"]}
          subtitle="The students leading the charge in AI literacy."
        />
        <Board board={board} showHeading={false} />
        <SectionCTA
          eyebrow="In the community"
          title="See the work these students are doing."
          href="/outreach"
          label="See our outreach"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
