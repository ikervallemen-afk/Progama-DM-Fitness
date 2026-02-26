import { Check, Zap } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  "Pregunta el objetivo del lead",
  "Filtra su nivel actual",
  "Detecta presupuesto",
  "Envía automáticamente tu enlace de reserva",
];

const SolutionSection = () => {
  return (
    <section id="solucion" className="py-20 md:py-28 section-elevated">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal animation="blur">
          <div className="text-center mb-12">
            <motion.div
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Te presento el{" "}
              <span className="text-gradient-green">"Programa DM Fitness"</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Una plantilla lista para usar que convierte una palabra clave como <strong className="text-foreground">"PLAN"</strong> en un sistema automático que:
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-4 mb-10" staggerDelay={0.1}>
          {steps.map((item, i) => (
            <StaggerItem key={item} animation="fadeLeft">
              <motion.div
                className="flex items-center gap-3 bg-card border border-border p-4 rounded-lg card-hover"
                whileHover={{ borderColor: "hsl(190 100% 55% / 0.4)", x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                >
                  <Check className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-foreground">{item}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="text-center space-y-2 text-lg">
            <p className="text-primary font-semibold">Funciona 24/7.</p>
            <p className="text-muted-foreground">Sin contratar equipo.</p>
            <p className="text-muted-foreground">Sin responder manualmente cada mensaje.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scaleUp" delay={0.3}>
          <motion.div
            className="mt-10 p-6 rounded-lg border border-primary/20 bg-primary/5 text-center"
            whileHover={{ borderColor: "hsl(190 100% 55% / 0.5)", scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-muted-foreground">Esto no es un chatbot técnico.</p>
            <p className="text-xl font-bold mt-2 text-foreground">
              Es un <span className="text-gradient-green">sistema de conversión</span> para Personal Trainers.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
