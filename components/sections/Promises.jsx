"use client";

import { motion } from "framer-motion";

const promises = [
  "To love you with creativity and intention, designing our days with joy",
  "To support your dreams as boldly as Zaha defied convention",
  "To explore all 360 degrees of life together, never settling for ordinary",
  "To make you laugh, to hold you close, and to choose you every single day",
];

export default function Promises() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center py-20 bg-navy-950 px-6 md:px-20">
      {/* Title Side */}
      <div className="w-full md:w-1/3 mb-10 md:mb-0">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-heading text-rose-500 leading-none"
        >
          My
          <br />
          Promise
          <br />
          To You
        </motion.h2>
        <div className="w-20 h-2 bg-rose-gold mt-6" />
      </div>

      {/* Promises List */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        {promises.map((promise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="flex flex-col items-center mt-2">
              <div className="w-3 h-3 rounded-full bg-rose-gold" />
              {index !== promises.length - 1 && (
                <div className="w-px h-16 bg-rose-500/30 my-2" />
              )}
            </div>
            <p className="text-xl md:text-2xl font-body text-silver-100 italic font-light">
              {promise}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
