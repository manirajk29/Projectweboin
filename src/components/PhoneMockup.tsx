"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function PhoneMockup() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-400, 400], [4, -4]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-400, 400], [-5, 5]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  const moveX = useSpring(
    useTransform(mouseX, [-400, 400], [-26, 26]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  const moveY = useSpring(
    useTransform(mouseY, [-400, 400], [-8, 8]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative flex items-center justify-center w-full h-full select-none">

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.22, 0.32, 0.22],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full bg-blue-400/20 blur-[120px]"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.94,
          rotate: -4,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          x: moveX,
          y: moveY,
          rotateX,
          rotateY,
          transformPerspective: 1200,
        }}
        className="relative"
      >
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[470px] lg:h-[470px] flex items-center justify-center"
        >
          <img
            src="/phone-mockup-new.png"
            alt="Fizens Phone Mockup"
            className="w-full h-full object-contain scale-[1.2] md:scale-[1.35] pointer-events-none"
            style={{
              clipPath: "inset(0 0 11.5% 0)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}