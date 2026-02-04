"use client";

import { motion } from "framer-motion";
import FloatingMedia from "../FloatingMedia";

const words = [
  "Kindness",
  "Laughter",
  "Inspiration",
  "Joy",
  "Brilliance",
  "Home",
  "Light",
  "Wonder",
  "Everything",
];

export default function Meaning() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-navy-900 px-4 relative overflow-hidden">
      <FloatingMedia
        src="/favour-main.jpeg"
        className="top-32 left-10 md:left-40 rotate-[-6deg]"
      />

      <h2 className="text-3xl font-heading text-rose-gold mb-16 uppercase tracking-widest text-center">
        You Are...
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-center">
        {words.map((word, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, color: "#e0aaeb" }}
            className="cursor-default"
          >
            <span className="text-2xl md:text-4xl font-heading text-silver-100 font-light opacity-80 hover:opacity-100 transition-opacity">
              {word}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
