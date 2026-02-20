import { AlertTriangle } from "lucide-react";

const AgitationSection = () => {
  return (
    <section className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Cada DM que no filtras 
          es una{" "} <span className="text-gradient-green">venta perdida</span>.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">Mientras respondes manualmente:</p>
        <div className="space-y-4 text-left max-w-lg mx-auto">
          {[
            "Hay leads calientes que se enfrían.",
            "Personas con presupuesto que se van con otro coach.",
            "Horas de tu vida perdidas en conversaciones sin intención real de compra.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-secondary-foreground">
              <span className="text-primary font-bold">—</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 rounded-lg border border-border bg-card">
          <p className="text-lg font-semibold text-foreground">Y lo peor…</p>
          <p className="text-muted-foreground mt-2">
            Sigues trabajando como <strong className="text-foreground">autoempleado digital</strong> en lugar de construir un{" "}
            <strong className="text-primary">negocio escalable</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;
