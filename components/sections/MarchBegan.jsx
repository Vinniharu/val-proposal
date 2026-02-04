"use client";

import { motion } from "framer-motion";

import FloatingMedia from "../FloatingMedia";

export default function MarchBegan() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-navy-900 overflow-hidden relative">
      <FloatingMedia
        src="/image1.jpeg"
        className="top-20 right-10 md:right-20 rotate-[10deg]"
      />

      {/* Background Month Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <h1 className="text-[15vw] font-heading font-black text-white">
          MARCH
        </h1>
      </div>

      <div className="max-w-4xl w-full z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-rose-500 tracking-[0.3em] font-body text-sm uppercase">
            2025 Where It All Began
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white mt-4">
            The Digital Spark
          </h2>
        </motion.div>

        {/* Chat Bubbles Container */}
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {/* Bubble 1 (User) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="self-start max-w-[80%]"
          >
            <div className="bg-navy-950 border border-rose-500/20 p-6 rounded-2xl rounded-tl-none shadow-[0_0_20px_rgba(224,170,235,0.1)]">
              <p className="text-silver-100 font-body text-lg leading-relaxed">
                We connected online, two souls finding each other in the digital
                world.
              </p>
            </div>
          </motion.div>

          {/* Bubble 2 (Favour/Response metaphor) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="self-end max-w-[80%]"
          >
            <div className="bg-rose-900/10 border border-rose-500/40 p-6 rounded-2xl rounded-tr-none shadow-[0_0_20px_rgba(224,170,235,0.1)]">
              <p className="text-white font-body text-lg leading-relaxed">
                From that first conversation, I knew there was something
                different about you, Favour. Something extraordinary.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
