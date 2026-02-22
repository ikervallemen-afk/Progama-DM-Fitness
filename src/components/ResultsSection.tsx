import { TrendingUp } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const results = [
  { metric: "+4 clientes", desc: "cerrados en el primer mes sin esfuerzo extra" },
  { metric: "900€/mes", desc: "ahorrados al no necesitar un setter" },
  { metric: "2h/día", desc: "recuperadas al eliminar respuestas manuales" },
  { metric: "24/7", desc: "tu sistema trabaja mientras tú descansas" },
];

const ResultsSection = () => {
  return (
    <section className="py-20 md:py-28 section-elevated">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal animation="blur">
          <div className="text-center mb-12">
            <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Resultados <span className="text-gradient-green">reales</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Esto es lo que consiguen coaches que ya usan el Programa DM Fitness.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
          {results.map((r, i) => (
            <StaggerItem key={i} animation="scaleUp">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{r.metric}</p>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ResultsSection;
