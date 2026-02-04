"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Quote() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* 360 Degree Compass Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <motion.div
          style={{ rotate }}
          className="w-[40rem] h-[40rem] border border-rose-500/30 rounded-full flex items-center justify-center"
        >
          <div className="w-[35rem] h-[35rem] border border-rose-500/20 rounded-full" />
          <div className="absolute top-0 w-px h-full bg-rose-500/20" />
          <div className="absolute left-0 w-full h-px bg-rose-500/20" />
        </motion.div>
      </div>

      <motion.div
        className="z-10 max-w-4xl text-center px-6"
        style={{ opacity, scale }}
      >
        <h2 className="text-3xl md:text-5xl font-heading leading-tight text-white mb-8">
          "There are 360 degrees, so why stick to one?"
        </h2>
        <p className="text-rose-500 text-xl md:text-2xl font-body italic mb-16">
          — Zaha Hadid
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
          className="h-px w-32 bg-rose-500 mx-auto mb-16"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl md:text-3xl font-heading text-silver-100 font-light"
        >
          And you've expanded my world in every direction...
        </motion.p>
      </motion.div>
    </section>
  );
}
