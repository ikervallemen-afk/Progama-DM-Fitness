import ScrollReveal from "@/components/ScrollReveal";

const ClosingSection = () => {
  return (
    <section className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <ScrollReveal animation="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para transformar tu negocio de coaching?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            No dejes pasar esta oportunidad. Tu próximo nivel está a un clic de distancia.
          </p>
          <a
            href="#precio"
            className="inline-block bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Quiero acceder ahora →
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClosingSection;
