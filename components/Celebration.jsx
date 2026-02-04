"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function Celebration() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Trigger confetti
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

    // Play Audio
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current
        .play()
        .catch((e) => console.log("Audio play failed:", e));
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <audio ref={audioRef} src="/audio/celebration.mp3" loop />

      <motion.div
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden border-4 border-rose-500"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        {/* Placeholder for video - User should replace src */}
        <video
          className="w-full h-full object-cover"
          src="/video/celebration.mp4"
          autoPlay
          loop
          muted={false} // Muted might be needed for autoplay if audio wasn't user-triggered, but here we rely on the click.
          playsInline
        >
          <div className="flex items-center justify-center h-full text-white">
            <p>Video Placeholder (Add celebration.mp4 to public/video)</p>
          </div>
        </video>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-6xl md:text-8xl font-dancing text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] animate-bounce">
            She Said YES! 💍
          </h1>
        </div>
      </motion.div>

      <p className="mt-8 text-white text-xl font-medium animate-pulse">
        Best. Day. Ever.
      </p>
    </motion.div>
  );
}
