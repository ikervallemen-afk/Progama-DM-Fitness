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
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ScrollReveal><PainSection /></ScrollReveal>
      <ScrollReveal><AgitationSection /></ScrollReveal>
      <ScrollReveal><SolutionSection /></ScrollReveal>
      <ScrollReveal><IncludesSection /></ScrollReveal>
      <ScrollReveal><ResultsSection /></ScrollReveal>
      <ScrollReveal><TestimonialsSection /></ScrollReveal>
      <ScrollReveal><BonusSection /></ScrollReveal>
      <ScrollReveal><PricingSection /></ScrollReveal>
      <ScrollReveal><ObjectionsSection /></ScrollReveal>
      <ScrollReveal><ClosingSection /></ScrollReveal>
    </div>
  );
};

export default Index;
