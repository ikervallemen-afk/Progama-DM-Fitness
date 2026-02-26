import { Package, Workflow, Filter, Rocket } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const items = [
  { icon: Package, text: "Plantilla lista para importar en ManyChat" },
  { icon: Workflow, text: "Flujo optimizado específicamente para coaches de fitness online" },
  { icon: Filter, text: "3 Ebooks estratégicos" },
  { icon: Filter, text: "Estructura para filtrar curiosos sin presupuesto" },
];

const IncludesSection = () => {
  return (
    <section id="incluye" className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <ScrollReveal animation="blur">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Qué incluye exactamente
          </h2>
          <p className="text-primary text-xl font-semibold mb-10">Por solo 9€ obtienes:</p>
        </ScrollReveal>

        <StaggerContainer className="space-y-4 text-left" staggerDelay={0.12}>
          {items.map(({ icon: Icon, text }, i) => (
            <StaggerItem key={i} animation="fadeRight">
              <motion.div
                className="flex items-center gap-4 bg-card border border-border p-5 rounded-lg card-hover"
                whileHover={{ borderColor: "hsl(190 100% 55% / 0.4)", x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="text-foreground">{text}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal animation="scaleUp" delay={0.3}>
          <motion.div
            className="mt-10 flex items-center justify-center gap-2 text-primary font-semibold text-lg"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Rocket className="w-5 h-5" />
            </motion.div>
            <span>Solo copiar, importar y activar</span>
            <motion.div animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Rocket className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IncludesSection;
