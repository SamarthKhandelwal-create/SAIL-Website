import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Challenge from "@/components/Challenge";
import Pillars from "@/components/Pillars";
import Origin from "@/components/Origin";
import ImpactTicker from "@/components/ImpactTicker";
import WaysToHelp from "@/components/WaysToHelp";
import SponsorStrip from "@/components/SponsorStrip";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";

import { stats } from "@/data/stats";
import { sponsors } from "@/data/sponsors";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero
          ctas={[
            { label: "Start a chapter", href: "/chapters" },
            { label: "See our workshops", href: "/outreach" },
          ]}
        />
        {/* Order is deliberate: what SAIL is, proof it is running, the problem
            it addresses, what it teaches, where it came from — then the ask. */}
        <Mission />
        <ImpactTicker stats={stats} />
        <Challenge />
        <Pillars />
        <Origin />
        {/* Funders sit just before the ask: they are the proof that other
            people already back this. Footer-only was too deep for the one
            page most visitors ever see. */}
        <SponsorStrip sponsors={sponsors} />
        {/* The ask is last. WaysToHelp already carries a "start a chapter"
            card, so the trailing SectionCTA that used to follow it was the
            same button twice in one scroll. */}
        <WaysToHelp />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
