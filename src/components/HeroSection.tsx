import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href="#cta"
    className={`inline-block bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-lg animate-pulse-glow hover:brightness-110 transition-all duration-300 ${className}`}
  >
    {children}
  </a>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Convierte tus DMs de Instagram en un sistema que filtra y agenda clientes{" "}
            <span className="text-gradient-green">automáticamente</span>
            <span className="block text-xl md:text-2xl font-medium text-muted-foreground mt-3">
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Si eres Personal Trainer y recibes mensajes como "Info" o "Precio?", esta plantilla convierte esos DMs en un sistema que trabaja por ti 24/7.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {[
              "Filtra curiosos",
              "Detecta presupuesto",
              "Agenda automáticamente",
              "Te devuelve el control",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <CTAButton>Activa el Programa DM Fitness por solo 17€</CTAButton>

          <p className="mt-4 text-sm text-muted-foreground">
            Acceso inmediato • Sin conocimientos técnicos • Diseñado para coaches online
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
