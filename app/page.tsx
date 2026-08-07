import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Origin from "@/components/Origin";
import ImpactTicker from "@/components/ImpactTicker";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";

import { stats } from "@/data/stats";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Origin />
        <ImpactTicker stats={stats} />
        <SectionCTA
          eyebrow="Get involved"
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
