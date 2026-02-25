import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import UrgencyBanner from "@/components/UrgencyBanner";
import { motion } from "framer-motion";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href="https://buy.stripe.com/cNi9ASeTtbcb4or9oBd3i04"
    className={`inline-block bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-lg animate-pulse-glow hover:brightness-110 transition-all duration-300 ${className}`}
  >
    {children}
  </a>
);

const heroItems = [
  "Filtra curiosos",
  "Detecta presupuesto",
  "Agenda automáticamente",
  "Te devuelve el control",
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Convierte tus DMs de Instagram en un sistema que filtra y agenda clientes{" "}
            <span className="text-gradient-green">automáticamente</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl"
          >
            Si eres Personal Trainer y recibes mensajes como "Info" o "Precio?", esta plantilla convierte esos DMs en un sistema que trabaja por ti 24/7.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
          >
            {heroItems.map((item) => (
              <motion.div
                key={item}
                className="flex items-center gap-2"
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5 }}
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <CTAButton>Activa el Programa DM Fitness por solo 9€</CTAButton>
          </motion.div>

          <motion.div
            className="mt-6 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <UrgencyBanner />
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            Acceso inmediato • Sin conocimientos técnicos • Diseñado para coaches online
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
