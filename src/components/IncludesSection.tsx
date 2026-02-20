import { Package, Workflow, Filter, Video, Rocket } from "lucide-react";

const items = [
  { icon: Package, text: "Plantilla lista para importar en ManyChat o herramienta similar" },
  { icon: Workflow, text: "Flujo optimizado específicamente para coaches de fitness online" },
  { icon: Filter, text: "Secuencia estratégica de calificación" },
  { icon: Filter, text: "Estructura para filtrar curiosos sin presupuesto" },
  { icon: Video, text: "Mini vídeo explicativo paso a paso (15 minutos)" },
];

const IncludesSection = () => {
  return (
    <section className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Qué incluye exactamente
        </h2>
        <p className="text-primary text-xl font-semibold mb-10">Por solo 17€ obtienes:</p>

        <div className="space-y-4 text-left">
          {items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-4 bg-card border border-border p-5 rounded-lg">
              <Icon className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-primary font-semibold text-lg">
          <Rocket className="w-5 h-5" />
          <span>Solo copiar, importar y activar.</span>
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;
