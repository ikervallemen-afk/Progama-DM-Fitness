import { MessageCircle, HelpCircle, MessageSquare } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const painPoints = [
  { icon: MessageCircle, text: "Recibes muchos mensajes, pero pocos terminan comprando." },
  { icon: HelpCircle, text: "No sabes quién tiene dinero y quién solo pregunta por curiosidad." },
  { icon: MessageSquare, text: "Tienes conversaciones perdidas en tus DMs." },
];

const PainSection = () => {
  return (
    <section id="dolor" className="py-20 md:py-28 section-elevated">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="blur">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Como Entrenador Personal, probablemente te esté pasando esto:
          </h2>
        </ScrollReveal>
        <StaggerContainer className="max-w-2xl mx-auto mt-12 space-y-6" staggerDelay={0.15}>
          {painPoints.map(({ icon: Icon, text }, i) => (
            <StaggerItem key={i} animation="fadeLeft">
              <motion.div
                className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border card-hover"
                whileHover={{ borderColor: "hsl(190 100% 55% / 0.4)" }}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                </motion.div>
                <p className="text-secondary-foreground">{text}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal animation="scaleUp" delay={0.3}>
          <div className="text-center mt-12 max-w-xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Y aunque generas contenido… sientes que estás dejando dinero sobre la mesa.
            </p>
            <motion.p
              className="mt-6 text-2xl font-bold text-gradient-green"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              No te faltan leads. Te falta sistema.
            </motion.p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainSection;
