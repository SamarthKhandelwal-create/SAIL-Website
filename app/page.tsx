import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Challenge from "@/components/Challenge";
import Pillars from "@/components/Pillars";
import Origin from "@/components/Origin";
import ImpactTicker from "@/components/ImpactTicker";
import WaysToHelp from "@/components/WaysToHelp";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";

import { stats } from "@/data/stats";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          ctas={[
            { label: "Start a chapter", href: "/chapters" },
            { label: "See our workshops", href: "/outreach" },
          ]}
        />
        {/* Order is deliberate: what SAIL is, proof it is running, what it
            actually teaches, then the ask. The founding story and the
            supporting research are context and sit below all of that. */}
        <Mission />
        <ImpactTicker stats={stats} />
        <Pillars />
        <Challenge />
        <WaysToHelp />
        <Origin />
        <SectionCTA
          eyebrow="Ready to start?"
          title="Bring AI literacy to your school."
          href="/chapters"
          label="Start a chapter"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
