const ClosingSection = () => {
  return (
    <section className="py-20 md:py-28 section-elevated">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Deja de responder manualmente.
        </h2>
        <p className="text-xl text-muted-foreground mb-4">
          Empieza a construir un negocio con sistema.
        </p>
        <p className="text-muted-foreground mb-8">
          Los coaches que escalan no trabajan más horas.{" "}
          <strong className="text-foreground">Construyen estructuras que trabajan por ellos.</strong>
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Hoy puedes dar el primer paso por solo <strong className="text-primary">17€</strong>.
        </p>
        <a
          href="https://buy.stripe.com/eVq9ASaDd6VVaMP7gtd3i03"
          className="inline-block bg-primary text-primary-foreground font-display font-bold text-xl px-10 py-5 rounded-lg animate-pulse-glow hover:brightness-110 transition-all duration-300"
        >
          👉 Activar el Programa DM Fitness
        </a>
      </div>
    </section>
  );
};

export default ClosingSection;
