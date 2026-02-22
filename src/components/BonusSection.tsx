import { Gift } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import ebook1 from "@/assets/ebook-1.png";
import ebook2 from "@/assets/ebook-2.png";
import ebook3 from "@/assets/ebook-3.png";

const bonuses = [
  {
    number: 1,
    image: ebook1,
    footer: "Si estás cansado de conversaciones que no llegan a nada, este manual te cambia el enfoque completamente.",
  },
  {
    number: 2,
    image: ebook2,
    footer: "Si quieres escalar sin duplicar horas de trabajo, necesitas entender esto.",
  },
  {
    number: 3,
    image: ebook3,
    footer: "La mayoría pierde ventas aquí. Los que escalan, tienen sistema.",
  },
];

const BonusSection = () => {
  return (
    <section className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal animation="scaleUp">
          <div className="text-center mb-12">
            <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Bonuses Exclusivos</h2>
            <p className="text-muted-foreground text-lg">
              Hoy no solo accedes al Sistema DM Fitness. También recibes{" "}
              <strong className="text-foreground">3 guías estratégicas</strong> diseñadas para coaches que quieren escalar.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="space-y-8" staggerDelay={0.2}>
          {bonuses.map((bonus) => (
            <StaggerItem key={bonus.number} animation="fadeUp">
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-md">
                    🎁 BONUS #{bonus.number}
                  </span>
                </div>
                <div className="flex justify-center mb-4">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-48 md:w-56 rounded-lg shadow-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground italic">{bonus.footer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BonusSection;
