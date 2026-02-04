"use client";

import { motion } from "framer-motion";

import FloatingMedia from "../FloatingMedia";

export default function Meeting() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-navy-950 relative overflow-hidden">
      <FloatingMedia
        src="/video/video1.mp4"
        type="video"
        className="bottom-20 right-10 md:right-32 rotate-[3deg] w-48 md:w-64"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950 opacity-50" />

      <div className="z-10 text-center max-w-4xl px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading text-white mb-8">
            From Screens to Reality
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl font-body text-silver-100 leading-relaxed max-w-2xl mx-auto"
        >
          And when we finally met in person, every conversation, every laugh,
          every moment we shared confirmed what I already knew—we have something
          truly special.
        </motion.p>

        {/* Animation: Phone Screen to Real World Heart */}
        <div className="mt-20 relative h-64 w-full flex items-center justify-center">
          {/* Phone Outline */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute w-32 h-64 border-4 border-silver-100 rounded-3xl"
          />

          {/* Heart Emerging */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1.5 }}
            transition={{ duration: 1, delay: 1.5, type: "spring" }}
            className="absolute"
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-rose-500"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
