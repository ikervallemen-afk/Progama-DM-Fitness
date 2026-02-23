import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import AgitationSection from "@/components/AgitationSection";
import SolutionSection from "@/components/SolutionSection";
import IncludesSection from "@/components/IncludesSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainSection />
      <AgitationSection />
      <SolutionSection />
      <IncludesSection />
      <ResultsSection />
      <TestimonialsSection />
      <BonusSection />
      <PricingSection />
      <ObjectionsSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
