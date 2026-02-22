import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleUp" | "blur";

const animations: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.7,
}: ScrollRevealProps) => {
  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

// Stagger container for lists
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: staggerDelay } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className = "",
  animation = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
}) => (
  <motion.div className={className} variants={animations[animation]}>
    {children}
  </motion.div>
);
