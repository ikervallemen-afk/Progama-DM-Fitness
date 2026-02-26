import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const objections = [
  {
    question: '"No soy técnico"',
    answer: "Está diseñado para coaches, no programadores.",
  },
  {
    question: '"No tengo miles de seguidores"',
    answer: "Si recibes aunque sea 5–10 DMs por semana, ya puedes beneficiarte.",
  },
  {
    question: '"¿Y si no me funciona?"',
    answer: "El sistema está diseñado específicamente para el mercado fitness online y ataca un problema universal: el caos en DMs.",
  },
];

const ObjectionsSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4 max-w-2xl">
        <ScrollReveal animation="blur">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Preguntas frecuentes</h2>
        </ScrollReveal>
        <StaggerContainer className="space-y-4" staggerDelay={0.12}>
          {objections.map((obj, i) => (
            <StaggerItem key={i} animation="fadeLeft">
              <motion.div
                className="bg-card border border-border rounded-lg p-6 card-hover"
                whileHover={{ borderColor: "hsl(190 100% 55% / 0.4)" }}
              >
                <p className="font-bold text-foreground text-lg mb-2">{obj.question}</p>
                <p className="text-muted-foreground">{obj.answer}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ObjectionsSection;
