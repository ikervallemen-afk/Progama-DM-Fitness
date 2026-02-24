import LegalLayout from "@/components/LegalLayout";

const PrivacyPolicy = () => (
  <LegalLayout title="Política de Privacidad">
    <p>Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</p>

    <h2>1. Responsable del tratamiento</h2>
    <p>El responsable del tratamiento de tus datos personales es <strong>Glowth Agency</strong>. Puedes contactarnos en <strong>glowthagency0@gmail.com</strong>.</p>

    <h2>2. Datos que recopilamos</h2>
    <p>Recopilamos los datos que nos proporcionas voluntariamente al realizar una compra o contactarnos: nombre, correo electrónico y datos de pago procesados de forma segura por pasarelas de pago externas.</p>

    <h2>3. Finalidad del tratamiento</h2>
    <p>Utilizamos tus datos para: gestionar tu compra, enviarte el producto adquirido, atender consultas y, si nos autorizas, enviarte comunicaciones comerciales relacionadas.</p>

    <h2>4. Base legal</h2>
    <p>El tratamiento se basa en la ejecución del contrato de compra y, en su caso, en tu consentimiento para comunicaciones comerciales.</p>

    <h2>5. Conservación de datos</h2>
    <p>Conservaremos tus datos mientras exista una relación comercial y durante el tiempo necesario para cumplir con obligaciones legales.</p>

    <h2>6. Derechos del usuario</h2>
    <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiéndonos a <strong>glowthagency0@gmail.com</strong>.</p>

    <h2>7. Cookies</h2>
    <p>Este sitio web puede utilizar cookies técnicas y analíticas. Puedes configurar tu navegador para rechazarlas.</p>

    <h2>8. Cambios en esta política</h2>
    <p>Nos reservamos el derecho de actualizar esta política. Te notificaremos de cambios significativos a través de nuestro sitio web.</p>
  </LegalLayout>
);

export default PrivacyPolicy;
