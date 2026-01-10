import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Vision from "@/components/Vision";
import TalentEngine from "@/components/TalentEngine";
import Workflow from "@/components/Workflow";
import BusinessImpact from "@/components/BusinessImpact";
import CompetitiveAdvantage from "@/components/CompetitiveAdvantage";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      <Hero />
      <Problem />
      <Vision />
      <TalentEngine />
      <Workflow />
      <BusinessImpact />
      <CompetitiveAdvantage />
      <CTA />
      <Footer />
    </main>
  );
}
