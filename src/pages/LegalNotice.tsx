import LegalLayout from "@/components/LegalLayout";

const LegalNotice = () => (
  <LegalLayout title="Aviso Legal">
    <p>Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</p>

    <h2>1. Datos identificativos</h2>
    <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que el titular de este sitio web es <strong>Sistema DM Fitness</strong>.</p>
    <p>Correo electrónico de contacto: <strong>contacto@example.com</strong></p>

    <h2>2. Objeto del sitio web</h2>
    <p>Este sitio web tiene como finalidad la promoción y venta de productos digitales orientados a coaches fitness que desean mejorar sus habilidades de captación de clientes.</p>

    <h2>3. Condiciones de uso</h2>
    <p>El usuario se compromete a utilizar el sitio web de conformidad con la ley, la moral y el orden público. Queda prohibido el uso con fines ilícitos o que perjudiquen a terceros.</p>

    <h2>4. Propiedad intelectual e industrial</h2>
    <p>Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño gráfico, código fuente) están protegidos por derechos de propiedad intelectual e industrial.</p>

    <h2>5. Exclusión de responsabilidad</h2>
    <p>Sistema DM Fitness no se hace responsable de los daños que pudieran derivarse del uso del sitio web, ni de la información contenida en enlaces externos.</p>

    <h2>6. Enlaces externos</h2>
    <p>Este sitio puede contener enlaces a páginas externas sobre las que no tenemos control. No nos hacemos responsables del contenido de dichas páginas.</p>

    <h2>7. Legislación aplicable y jurisdicción</h2>
    <p>El presente aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales competentes.</p>
  </LegalLayout>
);

export default LegalNotice;
