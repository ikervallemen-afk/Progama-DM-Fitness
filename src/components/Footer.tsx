import { Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "Inicio", href: "#" },
  { label: "Qué incluye", href: "#incluye" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Precio", href: "#precio" },
];

const legalLinks = [
  { label: "Política de Privacidad", to: "/privacidad" },
  { label: "Términos y Condiciones", to: "/terminos" },
  { label: "Aviso Legal", to: "/aviso-legal" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/glowthagency_fitness/", label: "Instagram" },
  { icon: Mail, href: "mailto:glowthagency0@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="Glowth Agency" className="h-10 w-auto" />
              <h3 className="font-bold text-lg text-foreground">Glowth Agency</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              El sistema paso a paso para entrenadores personales que quieren cerrar clientes por mensaje directo sin ser invasivos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Navegación</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Síguenos</h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal + Copyright */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {legalLinks.map((link) => (
              <Link key={link.label} to={link.to} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Glowth Agency. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
