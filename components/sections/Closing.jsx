"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Closing() {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const moveButton = () => {
    const x =
      Math.random() *
        (typeof window !== "undefined" ? window.innerWidth - 200 : 200) -
      (typeof window !== "undefined" ? window.innerWidth / 2 - 100 : 0);
    const y =
      Math.random() *
        (typeof window !== "undefined" ? window.innerHeight - 100 : 100) -
      (typeof window !== "undefined" ? window.innerHeight / 2 - 50 : 0);
    setNoBtnPosition({ x, y });
    setIsHovered(true);
  };

  const handleYes = () => {
    setAccepted(true);
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-navy-950 relative overflow-hidden px-4">
      {!accepted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl md:text-7xl font-heading text-white mb-12">
            Favour...
          </h1>

          <p className="text-2xl md:text-4xl font-heading text-rose-500 mb-16">
            Will you receive my heart
            <br />
            and be my Valentine?
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative h-32">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="px-12 py-4 bg-rose-500 text-white text-xl font-bold rounded-full shadow-[0_0_20px_rgba(224,170,235,0.5)] hover:bg-rose-600 transition-colors uppercase tracking-widest"
            >
              Yes, I will ❤️
            </motion.button>

            <motion.button
              className={`px-12 py-4 bg-navy-900 border border-silver-100/30 text-silver-100 text-xl font-bold rounded-full transition-all duration-200 ${isHovered ? "absolute" : "relative"}`}
              style={
                isHovered
                  ? {
                      transform: `translate(${noBtnPosition.x}px, ${noBtnPosition.y}px)`,
                    }
                  : {}
              }
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
            >
              No
            </motion.button>
          </div>

          <p className="text-sm font-body text-silver-100/30 mt-32 uppercase tracking-widest">
            February 14, 2026
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-20"
        >
          <h1 className="text-6xl md:text-8xl font-heading text-rose-gold mb-6 animate-pulse">
            She Said YES!
          </h1>
          <p className="text-2xl text-silver-100 font-body">
            Best. Valentine. Ever.
          </p>
          <div className="mt-12 text-6xl">💍🌹💑</div>
        </motion.div>
      )}
    </section>
  );
}
