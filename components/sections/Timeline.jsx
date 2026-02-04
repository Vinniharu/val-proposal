"use client";

import { motion } from "framer-motion";
import FloatingMedia from "../FloatingMedia";

const cards = [
  {
    title: "Your Kindness",
    content:
      "Your kindness shone through every message, making even the ordinary feel special.",
    delay: 0.2,
  },
  {
    title: "Your Humor",
    content:
      "Your humor brightened my darkest days and became the highlight of every moment.",
    delay: 0.4,
  },
  {
    title: "Your Spirit",
    content:
      "Your spirit—creative, brilliant, and passionate—inspired me to be better.",
    delay: 0.6,
  },
];

export default function Timeline() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 relative px-6">
      <FloatingMedia
        src="/image2.jpeg"
        className="top-40 left-30 md:right-20 -rotate-[10deg]"
      />

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-heading text-center text-white mb-20"
      >
        Every Conversation, A Treasure
      </motion.h2>

      {/* Timeline Line */}
      <div className="absolute left-6 md:left-1/2 top-40 bottom-40 w-px bg-gradient-to-b from-transparent via-rose-500 to-transparent opacity-50"></div>

      <div className="w-full max-w-5xl flex flex-col gap-12 relative z-10 pl-12 md:pl-0">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: card.delay }}
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex-1 md:text-right">
              {index % 2 === 0 && (
                <div className="hidden md:block">
                  <h3 className="text-2xl font-heading text-rose-500 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-silver-100/80 font-body">{card.content}</p>
                </div>
              )}
              {index % 2 !== 0 && (
                <div className="block md:hidden">
                  <h3 className="text-2xl font-heading text-rose-500 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-silver-100/80 font-body">{card.content}</p>
                </div>
              )}
            </div>

            {/* Timeline Node */}
            <div className="w-4 h-4 rounded-full bg-rose-gold shadow-[0_0_15px_rgba(197,157,95,0.8)] z-20 shrink-0 absolute left-[-5px] md:static"></div>

            <div className="flex-1 md:text-left">
              {index % 2 !== 0 && (
                <div className="hidden md:block">
                  <h3 className="text-2xl font-heading text-rose-500 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-silver-100/80 font-body">{card.content}</p>
                </div>
              )}
              {index % 2 === 0 && (
                <div className="block md:hidden">
                  <h3 className="text-2xl font-heading text-rose-500 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-silver-100/80 font-body">{card.content}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
