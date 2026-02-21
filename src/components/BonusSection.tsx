import { Gift } from "lucide-react";

const bonuses = [
  {
    ],
    footer: "Si estás cansado de conversaciones que no llegan a nada, este manual te cambia el enfoque completamente.",
  },
  {
    ],
    footer: "Si quieres escalar sin duplicar horas de trabajo, necesitas entender esto.",
  },
  {
    ],
    footer: "La mayoría pierde ventas aquí. Los que escalan, tienen sistema.",
  },
];

const BonusSection = () => {
  return (
    <section className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Bonuses Exclusivos</h2>
          <p className="text-muted-foreground text-lg">
            Hoy no solo accedes al Sistema DM Fitness. También recibes{" "}
            <strong className="text-foreground">3 guías estratégicas</strong> diseñadas para coaches que quieren escalar.
          </p>
        </div>

        <div className="space-y-8">
          {bonuses.map((bonus) => (
            <div key={bonus.number} className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-md">
                  🎁 BONUS #{bonus.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">"{bonus.title}"</h3>
              <ul className="space-y-2 mb-4">
                {bonus.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-secondary-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground italic">{bonus.footer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
