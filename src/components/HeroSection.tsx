import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import UrgencyBanner from "@/components/UrgencyBanner";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.a
    href="https://buy.stripe.com/cNi9ASeTtbcb4or9oBd3i04"
    className={`inline-block bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-lg animate-pulse-glow transition-all duration-300 relative overflow-hidden group ${className}`}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.97 }}
  >
    <span className="relative z-10">{children}</span>
    <motion.div
      className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  </motion.a>
);

const heroItems = [
  "Filtra curiosos",
  "Detecta presupuesto",
  "Agenda automáticamente",
  "Te devuelve el control",
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </motion.div>

      {/* Decorative floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 glow-dot animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-40 h-40 glow-dot animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <motion.div className="relative z-10 container mx-auto px-4 py-20 md:py-32" style={{ opacity }}>
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Convierte tus DMs de Instagram en un sistema que filtra y agenda clientes{" "}
            <motion.span
              className="text-gradient-green inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              automáticamente
            </motion.span>
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
                className="flex items-center gap-2 group"
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5 }}
                whileHover={{ x: 6 }}
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}>
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                </motion.div>
                <span className="text-foreground group-hover:text-primary transition-colors duration-200">{item}</span>
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
