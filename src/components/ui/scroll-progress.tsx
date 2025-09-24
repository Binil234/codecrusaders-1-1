import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-transparent"
      style={{}}
    >
      <motion.div
        className="h-full bg-primary/80"
        style={{ scaleX }}
      />
    </motion.div>
  );
};

export default ScrollProgress;