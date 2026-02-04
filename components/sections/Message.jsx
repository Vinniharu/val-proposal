"use client";

import { motion } from "framer-motion";

export default function Message() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-navy-900 px-6 relative">
      {/* Heartbeat Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-3xl text-center z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-heading text-rose-gold mb-12"
        >
          My Dearest Favour,
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-navy-950/50 backdrop-blur-sm border border-rose-500/20 p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <p className="text-xl md:text-2xl font-body text-silver-100 leading-loose">
            You are my favorite architect—not just of buildings, but of dreams,
            of laughter, of the beautiful life we're creating together. This
            Valentine's Day, I want you to know that loving you is the easiest
            and best thing I've ever done.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
