import { MessageCircle, Clock, HelpCircle, MessageSquare, Wifi } from "lucide-react";

const painPoints = [
  { icon: MessageCircle, text: "Recibes muchos mensajes, pero pocos terminan comprando." },
  { icon: Clock, text: "Respondes tarde y el lead se enfría." },
  { icon: HelpCircle, text: "No sabes quién tiene dinero y quién solo pregunta por curiosidad." },
  { icon: MessageSquare, text: "Tienes conversaciones perdidas en tus DMs." },
  { icon: Wifi, text: "Todo depende de que tú estés conectado." },
];

const PainSection = () => {
  return (
    <section className="py-20 md:py-28 section-elevated">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Si eres coach online, probablemente te esté pasando esto:
        </h2>
        <div className="max-w-2xl mx-auto mt-12 space-y-6">
          {painPoints.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border">
              <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-secondary-foreground">{text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 max-w-xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Y aunque generas contenido… sientes que estás dejando dinero sobre la mesa.
          </p>
          <p className="mt-6 text-2xl font-bold text-gradient-green">
            No es que te falten leads. Te falta sistema.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
