import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="scroll-progress fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] bg-[linear-gradient(90deg,#6C63FF,#00E5FF,#FF4D9D)] print:hidden"
      aria-hidden
    />
  );
}

