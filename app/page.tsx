import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Origin from "@/components/Origin";
import ImpactTicker from "@/components/ImpactTicker";
import ChapterFunnel from "@/components/ChapterFunnel";
import ChaptersMap from "@/components/ChaptersMap";
import Board from "@/components/Board";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";

import { chapters } from "@/data/chapters";
import { board } from "@/data/board";
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
        <ChapterFunnel />
        <ChaptersMap chapters={chapters} />
        <Board board={board} />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
