import { Check, Zap } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solucion" className="py-20 md:py-28 section-elevated">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Te presento el{" "}
            <span className="text-gradient-green">"Programa DM Fitness"</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Una plantilla lista para usar que convierte una palabra clave como <strong className="text-foreground">"PLAN"</strong> en un sistema automático que:
          </p>
        </div>

        <div className="grid gap-4 mb-10">
          {[
            "Pregunta el objetivo del lead",
            "Filtra su nivel actual",
            "Detecta presupuesto",
            "Envía automáticamente tu enlace de reserva",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-card border border-border p-4 rounded-lg">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2 text-lg">
          <p className="text-primary font-semibold">Funciona 24/7.</p>
          <p className="text-muted-foreground">Sin contratar equipo.</p>
          <p className="text-muted-foreground">Sin responder manualmente cada mensaje.</p>
        </div>

        <div className="mt-10 p-6 rounded-lg border border-primary/20 bg-primary/5 text-center">
          <p className="text-muted-foreground">Esto no es un chatbot técnico.</p>
          <p className="text-xl font-bold mt-2 text-foreground">
            Es un <span className="text-gradient-green">sistema de conversión</span> para Personal Trainers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
