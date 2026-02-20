import { CheckCircle } from "lucide-react";

const results = [
  "Tendrás orden en tus DMs.",
  "Solo hablarás con personas realmente interesadas.",
  "Ahorrarás horas cada semana.",
  "Empezarás a ver tu negocio como un sistema, no como un caos.",
];

const ResultsSection = () => {
  return (
    <section className="py-20 md:py-28 section-elevated">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Lo que pasará cuando lo actives
        </h2>
        <p className="text-muted-foreground text-lg mb-10">En cuanto esté funcionando:</p>

        <div className="grid gap-4 md:grid-cols-2">
          {results.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-card border border-border p-5 rounded-lg text-left">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-lg text-muted-foreground">Y lo más importante…</p>
          <p className="text-xl font-bold mt-2 text-foreground">
            Dejarás de perder oportunidades por falta de estructura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
