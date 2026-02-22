import { Package, Workflow, Filter, Rocket } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

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
          <p className="text-primary text-xl font-semibold mb-10">Por solo 17€ obtienes:</p>
        </ScrollReveal>

        <StaggerContainer className="space-y-4 text-left" staggerDelay={0.12}>
          {items.map(({ icon: Icon, text }, i) => (
            <StaggerItem key={i} animation="fadeRight">
              <div className="flex items-center gap-4 bg-card border border-border p-5 rounded-lg">
                <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground">{text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal animation="scaleUp" delay={0.3}>
          <div className="mt-10 flex items-center justify-center gap-2 text-primary font-semibold text-lg">
            <Rocket className="w-5 h-5" />
            <span>Solo copiar, importar y activar</span>
            <Rocket className="w-5 h-5" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IncludesSection;
