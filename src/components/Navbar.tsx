import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Problema", href: "#dolor" },
  { label: "Solución", href: "#solucion" },
  { label: "Incluye", href: "#incluye" },
  { label: "Precio", href: "#cta" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/40 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-16">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Glowth Agency" className="h-9 w-auto" />
          <span className="font-display font-bold text-lg text-primary hidden sm:inline">GLOWTH AGENCY</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
            >
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-primary/5 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            </motion.li>
          ))}
          <motion.li
            className="ml-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <motion.a
              href="https://buy.stripe.com/cNi9ASeTtbcb4or9oBd3i04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold bg-primary text-primary-foreground px-4 py-2 rounded-md transition-all"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Activar Programa
            </motion.a>
          </motion.li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40 px-4 overflow-hidden"
          >
            <div className="pb-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="block py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://buy.stripe.com/cNi9ASeTtbcb4or9oBd3i04"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-center text-sm font-bold bg-primary text-primary-foreground px-4 py-2.5 rounded-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                Activar Sistema
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
