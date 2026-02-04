"use client";

import { motion } from "framer-motion";

export default function Growth() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Content Side */}
      <motion.div
        className="flex-1 max-w-xl z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-rose-500 tracking-widest font-body uppercase text-sm">
          Transformation
        </span>
        <h2 className="text-4xl md:text-6xl font-heading text-white mt-4 mb-8">
          Building the Best Version
        </h2>
        <p className="text-silver-100 text-lg md:text-xl font-body leading-relaxed opacity-90">
          I've spent this time, Favour, working to become someone worthy of the
          amazing person I see in you. You inspire me to grow, to dream bigger,
          and to be better every single day.
        </p>
      </motion.div>

      {/* Blueprint Animation Side */}
      <div className="flex-1 md:h-full relative mt-20 md:mt-0 flex items-center justify-center">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Box */}
          <motion.rect
            x="50"
            y="50"
            width="300"
            height="300"
            stroke="#e0aaeb"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Internal Architecture Lines */}
          <motion.path
            d="M50 350 L200 50 L350 350"
            stroke="#c59d5f"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.line
            x1="200"
            y1="50"
            x2="200"
            y2="350"
            stroke="#e0aaeb"
            strokeWidth="1"
            strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          />
          <motion.circle
            cx="200"
            cy="200"
            r="80"
            stroke="#c59d5f"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}
