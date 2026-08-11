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
  alternates: { canonical: "/leadership" },
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
          subtitle="The high school students building SAIL — and teaching every workshop we run."
          ctas={[
            { label: "Join the team", href: "/join" },
            { label: "See our workshops", href: "/outreach" },
          ]}
        />
        <Board board={board} showHeading={false} />
        <SectionCTA
          eyebrow="Open roles"
          title="We're looking for students to join this team."
          href="/join"
          label="See open roles"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
