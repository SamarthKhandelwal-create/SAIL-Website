import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Outreach from "@/components/Outreach";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";

import { events } from "@/data/events";

const description =
  "Hands-on AI literacy sessions from Students For AI Literacy — where we've been and what we taught.";

export const metadata: Metadata = {
  title: "Outreach",
  description,
  openGraph: {
    title: "Outreach · SAIL",
    description,
    type: "website",
  },
};

export default function OutreachPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          id="outreach"
          size="page"
          words={["RECENT", "OUTREACH"]}
          subtitle="Meeting students where they already are."
        />
        <Outreach events={events} showHeading={false} />
        <SectionCTA
          eyebrow="Get involved"
          title="Want a session like this at your school?"
          href="/chapters"
          label="Start a chapter"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
