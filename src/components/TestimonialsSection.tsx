import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Coach de transformación física",
    quote: "Antes perdía 2 horas al día respondiendo DMs. Ahora el sistema filtra todo y solo hablo con personas listas para comprar. En el primer mes cerré 4 clientes nuevos sin esfuerzo extra.",
    result: "+4 clientes en 30 días",
  },
  {
    name: "Laura G.",
    role: "Entrenadora online de fuerza",
    quote: "Pensaba que necesitaba un setter, pero con esta plantilla me ahorro 900€/mes. Los leads llegan filtrados y con cita agendada. Es otro nivel.",
    result: "900€/mes ahorrados",
  },
  {
    name: "Diego R.",
    role: "Coach de nutrición deportiva",
    quote: "Lo activé un viernes por la noche y el sábado ya tenía 3 reservas. Sin tocar el móvil. Ojalá lo hubiera tenido hace un año.",
    result: "3 reservas en 24h",
  },
  {
    name: "Andrea P.",
    role: "Preparadora de competición",
    quote: "Mis DMs eran un caos total. Ahora tengo un sistema que trabaja mientras yo entreno a mis clientes. La mejor inversión de 17€ que he hecho.",
    result: "DMs organizados al 100%",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal animation="blur">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Lo que dicen otros <span className="text-primary">coaches fitness</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
            Entrenadores reales que ya automatizaron sus DMs y están cerrando más clientes con menos esfuerzo.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i} animation={i % 2 === 0 ? "fadeLeft" : "fadeRight"}>
              <Card className="bg-card/60 border-border/40 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 h-full">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-1 text-primary text-lg">{"★★★★★"}</div>
                  <p className="text-foreground/90 italic leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                    <div>
                      <p className="font-display font-bold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                    <span className="text-xs font-bold bg-primary/15 text-primary px-3 py-1.5 rounded-full whitespace-nowrap">
                      {t.result}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
