"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Background Curves (Abstract Zaha style) */}
      <motion.div className="absolute inset-0 z-0 opacity-20" style={{ y }}>
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full text-rose-gold fill-none stroke-current stroke-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M-50,400 C300,200 600,600 900,300 C1200,0 1500,500 1600,400"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            d="M-50,600 C200,800 500,400 900,700 C1200,900 1500,600 1600,700"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
            d="M-50,200 C400,0 700,400 1000,100 C1300,-100 1600,300 1700,200"
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <motion.div className="z-10 text-center px-4" style={{ opacity }}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-heading font-light tracking-wide text-rose-500/90 mb-4"
        >
          To My Extraordinary Favour
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-2xl font-body font-light text-silver-100 tracking-widest uppercase opacity-80"
        >
          A journey through our story
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-24 bg-gradient-to-b from-rose-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
