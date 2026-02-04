"use client";

import { motion } from "framer-motion";

export default function Valentines() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-navy-900 overflow-hidden relative">
      {/* Geometric Hearts Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border border-rose-500/30 rounded-full border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-rose-500/30 rounded-full"
        />
        <div className="absolute text-[300px] text-rose-500/10 font-heading">
          ♥
        </div>
      </div>

      <div className="z-10 text-center max-w-2xl px-4">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.5 }}
          className="text-rose-gold uppercase text-sm md:text-base font-bold mb-4 block"
        >
          The Occasion
        </motion.span>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-heading text-white mb-8"
        >
          This Valentine's Day
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl font-body text-silver-100/90 leading-relaxed"
        >
          I want to celebrate US. The journey we've been on, the love we share,
          and all the beautiful moments still to come.
        </motion.p>
      </div>
    </section>
  );
}
