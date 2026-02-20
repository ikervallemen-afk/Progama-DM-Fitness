import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
