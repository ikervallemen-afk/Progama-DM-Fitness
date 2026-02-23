import LegalLayout from "@/components/LegalLayout";

const TermsAndConditions = () => (
  <LegalLayout title="Términos y Condiciones">
    <p>Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</p>

    <h2>1. Objeto</h2>
    <p>Los presentes términos regulan el acceso y uso de los productos digitales ofrecidos por <strong>Sistema DM Fitness</strong>, así como la compra de los mismos.</p>

    <h2>2. Productos digitales</h2>
    <p>Los productos ofrecidos son guías y materiales digitales descargables. Una vez completada la compra, recibirás acceso al contenido adquirido.</p>

    <h2>3. Precio y pago</h2>
    <p>Los precios se muestran en euros e incluyen los impuestos aplicables. El pago se realiza a través de pasarelas de pago seguras. El precio puede variar según promociones vigentes.</p>

    <h2>4. Política de reembolso</h2>
    <p>Al tratarse de productos digitales de acceso inmediato, no se admiten devoluciones una vez entregado el contenido, salvo en los casos previstos por la legislación vigente.</p>

    <h2>5. Propiedad intelectual</h2>
    <p>Todo el contenido (textos, imágenes, materiales) es propiedad de Sistema DM Fitness. Queda prohibida su reproducción, distribución o reventa sin autorización expresa.</p>

    <h2>6. Uso permitido</h2>
    <p>El contenido adquirido es para uso personal y profesional del comprador. No está permitido compartirlo, redistribuirlo o utilizarlo para crear productos derivados.</p>

    <h2>7. Limitación de responsabilidad</h2>
    <p>Los resultados obtenidos dependen de la aplicación individual de cada usuario. No garantizamos resultados específicos derivados del uso de nuestros materiales.</p>

    <h2>8. Legislación aplicable</h2>
    <p>Estos términos se rigen por la legislación española. Para cualquier controversia, ambas partes se someten a los juzgados y tribunales competentes.</p>
  </LegalLayout>
);

export default TermsAndConditions;
