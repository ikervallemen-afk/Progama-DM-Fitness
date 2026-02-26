import { Gift } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
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
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal animation="scaleUp">
          <div className="text-center mb-12">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Bonuses Exclusivos</h2>
            <p className="text-muted-foreground text-lg">
              Hoy no solo accedes al Programa DM Fitness. También recibes{" "}
              <strong className="text-foreground">3 guías estratégicas</strong> diseñadas para coaches que quieren escalar.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.2}>
          {bonuses.map((bonus) => (
            <StaggerItem key={bonus.number} animation="fadeUp">
              <motion.div
                className="bg-card border border-border rounded-lg p-5 flex flex-col items-center text-center h-full card-hover"
                whileHover={{ borderColor: "hsl(190 100% 55% / 0.4)" }}
              >
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-md mb-4">
                  🎁 BONUS #{bonus.number}
                </span>
                <motion.img
                  src={bonus.image}
                  alt={`Ebook bonus ${bonus.number}`}
                  className="w-36 h-auto rounded-lg shadow-lg mb-4"
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <p className="text-sm text-muted-foreground italic mt-auto">{bonus.footer}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BonusSection;
