import ScrollReveal from "@/components/ScrollReveal";
import UrgencyBanner from "@/components/UrgencyBanner";
import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <section id="cta" className="py-20 md:py-28 section-elevated relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-dot animate-glow-pulse pointer-events-none opacity-30" />

      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <ScrollReveal animation="fadeUp">
          <div className="mb-10 space-y-3 text-muted-foreground">
            <p>Un setter puede costarte entre <strong className="text-foreground">800€ y 1.200€ al mes</strong>.</p>
            <p>Perder solo un cliente puede significar <strong className="text-foreground">300€ – 1.000€ menos</strong> en tu facturación.</p>
          </div>
          <p className="text-lg text-muted-foreground mb-2">Hoy puedes implementar tu propio sistema por solo:</p>
        </ScrollReveal>

        <ScrollReveal animation="scaleUp" delay={0.2}>
          <div className="my-8">
            <motion.span
              className="text-7xl md:text-8xl font-bold text-gradient-green glow-text font-display inline-block"
              whileInView={{ scale: [0.5, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              9€
            </motion.span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="space-y-1 text-muted-foreground text-sm mb-10">
            <p>Acceso inmediato.</p>
            <p>Sin mensualidades.</p>
            <p>Sin compromiso.</p>
          </div>

          <div className="mb-8 max-w-md mx-auto">
            <UrgencyBanner />
          </div>

          <motion.a
            href="https://buy.stripe.com/cNi9ASeTtbcb4or9oBd3i04"
            className="inline-block bg-primary text-primary-foreground font-display font-bold text-xl px-10 py-5 rounded-lg animate-pulse-glow transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">👉 Quiero mi Programa DM Fitness por 9€</span>
            <motion.div
              className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>

          <div className="mt-8 text-sm text-muted-foreground space-y-1">
            <p>Empieza a construir estructura.</p>
            <p>Empieza a recuperar control.</p>
            <p>Empieza a cerrar con orden.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
