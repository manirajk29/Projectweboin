"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  // Animation variants for staggered load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // premium custom easeOut
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex flex-col justify-between z-30">
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />

      {/* Main Grid Content */}
      <div className="relative w-[92%] max-w-[1240px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch flex-1">

        {/* Left Column (Headline & CTA) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex flex-col justify-center lg:-translate-y-36 items-start text-left z-20 order-1"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-medium tracking-tight text-text-dark leading-[1.08] flex flex-col gap-1.5"
          >
            <span className="sm:whitespace-nowrap">Start Managing</span>
            <span className="sm:whitespace-nowrap">Your Finance</span>
            <span className="text-text-gray font-normal flex items-center gap-3 sm:gap-4 mt-2">
              <span className="inline-block w-8 sm:w-20 h-[1.5px] bg-[#CFD4DC]" />
              <span className="sm:whitespace-nowrap">With Our Tool</span>
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
            {/* Connected CTA Button */}
            <motion.a
              href="#"
              whileHover="hover"
              className="inline-flex items-center gap-4 bg-[#EEF4FF] rounded-full p-1.5 pr-2.5 pl-6 group transition-colors duration-300 hover:bg-[#E2EDFF]"
            >
              <span className="text-[15px] sm:text-[16px] font-bold text-brand-blue tracking-tight">
                Get Started Free
              </span>
              <motion.div
                variants={{
                  hover: { scale: 1.05, rotate: 45 },
                }}
                className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-md shadow-brand-blue/10 transition-transform duration-300"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Center Column (3D Phone Mockup) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-4 flex justify-center items-center h-[300px] sm:h-[380px] md:h-[450px] lg:h-auto z-30 overflow-visible lg:-translate-y-20 lg:-translate-x-14 order-3 lg:order-2"
        >
          <PhoneMockup />
        </motion.div>

        {/* Right Column (Plus Icon, Text, Avatars) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-3 flex flex-col justify-between gap-8 lg:gap-0 py-8 lg:py-14 z-20 order-2 lg:order-3"
        >
          {/* Top block */}
          <motion.div variants={itemVariants} className="flex flex-col items-start gap-4 lg:-translate-y-12">
            {/* Thin Elegant Plus Icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0047FF"
                strokeWidth="1.6"
              >
                <line x1="12" y1="4" x2="12" y2="20" />
                <line x1="4" y1="12" x2="20" y2="12" />
              </svg>
            </div>

            <p className="text-[15px] sm:text-[16px] text-text-dark font-normal leading-[1.6] max-w-[290px]">
              Simplify your financial life. Our intuitive app makes managing your money effortless.
            </p>
          </motion.div>

          {/* Bottom block (Avatar group) */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 lg:-translate-y-56">
            <div className="flex items-center gap-3.5">
              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80"
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full border-2 border-white overflow-hidden shadow-sm bg-gray-100 flex-shrink-0 relative"
                  >
                    <Image
                      src={src}
                      alt={`User profile ${i + 1}`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <span className="text-[28px] sm:text-[32px] font-bold text-text-dark font-sans tracking-tight leading-none">
                2.3M+
              </span>
            </div>

            <p className="text-[13px] sm:text-[14px] text-text-gray font-normal leading-[1.5] max-w-[240px]">
              Trusted to use by millions users over 140 countries
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
