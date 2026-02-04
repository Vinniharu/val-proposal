"use client";

import { motion } from "framer-motion";
import FloatingMedia from "../FloatingMedia";

export default function Special() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-navy-950 px-6 relative overflow-hidden">
      <FloatingMedia
        src="/new2.jpeg"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[2deg] w-64 md:w-80"
      />

      {/* Background Connected Nodes Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <motion.path
          d="M 100 100 L 300 300 L 500 100"
          fill="none"
          stroke="#e0aaeb"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M 800 600 L 600 400 L 400 600"
          fill="none"
          stroke="#c59d5f"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </svg>

      <div className="z-10 max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose-500 to-rose-gold rounded-full blur-xl mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-heading text-white relative -mt-16 z-20">
            Something Special
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl font-body text-silver-100 leading-relaxed"
        >
          I truly believe we have something rare, Favour. Something worth
          celebrating, nurturing, and cherishing. A connection that feels like
          home and adventure all at once.
        </motion.p>
      </div>
    </section>
  );
}
