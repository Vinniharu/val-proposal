"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const moments = [
  {
    title: "Our Conversations",
    desc: "Deep, meaningful, and effortless.",
    image: "/image1.jpeg",
  },
  {
    title: "Our Laughs",
    desc: "The kind that make my cheeks hurt in the best way.",
    image: "/image2.jpeg",
  },
  {
    title: "The Feelings",
    desc: "Seen, valued, and completely alive.",
    image: "/favour-main.jpeg",
  },
];

export default function Moments() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % moments.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + moments.length) % moments.length);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-navy-950 px-6">
      <h2 className="text-3xl md:text-5xl font-heading text-white mb-12">
        The Moments I Cherish
      </h2>

      <div className="relative w-full max-w-4xl aspect-video flex items-center justify-center">
        {/* Card */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full bg-navy-900 border border-rose-500/20 rounded-xl overflow-hidden shadow-2xl group"
        >
          {/* Image Background */}
          <div className="absolute inset-0">
            <img
              src={moments[current].image}
              alt={moments[current].title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 w-full p-10 text-center z-10">
            <h3 className="text-4xl font-heading text-rose-500 mb-4 drop-shadow-md">
              {moments[current].title}
            </h3>
            <p className="text-xl md:text-2xl font-body text-silver-100/90 drop-shadow-sm">
              {moments[current].desc}
            </p>
          </div>
        </motion.div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-[-20px] md:left-[-60px] p-4 bg-rose-500/10 rounded-full hover:bg-rose-500/20 text-white transition-colors z-20"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-[-20px] md:right-[-60px] p-4 bg-rose-500/10 rounded-full hover:bg-rose-500/20 text-white transition-colors z-20"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex gap-2 mt-8">
        {moments.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${idx === current ? "bg-rose-500" : "bg-rose-500/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
