"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ASSETS = [
  "/audio/raindance.mp3",
  "/favour-main.jpeg",
  "/image1.jpeg",
  "/image2.jpeg",
  "/video/video1.mp4",
  "/video/video2.mp4",
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = ASSETS.length;

    const increment = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / totalAssets) * 100));
      if (loadedCount >= totalAssets) {
        // Add a small delay for smooth feel
        setTimeout(() => setLoaded(true), 500);
      }
    };

    ASSETS.forEach((src) => {
      if (src.endsWith(".mp4") || src.endsWith(".mp3")) {
        // For media, just requesting it is enough to cache usually,
        // but for true preloading we might fetch blobs.
        // For simplicity/reliability, we'll just wait for oncanplaythrough or a timeout
        const element = src.endsWith(".mp3")
          ? new Audio()
          : document.createElement("video");
        element.src = src;
        element.oncanplaythrough = increment;
        element.onerror = increment; // Fallback if fails
        // Force load
        element.load();
      } else {
        const img = new Image();
        img.src = src;
        img.onload = increment;
        img.onerror = increment;
      }
    });

    // Fallback timeout in case something hangs
    const timeout = setTimeout(() => {
      if (loadedCount < totalAssets) {
        console.log("Preload timeout, forcing start");
        setLoaded(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {!loaded ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-navy-950 flex flex-col items-center justify-center text-rose-500"
        >
          <div className="w-64 h-1 bg-navy-900 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-rose-500"
              animate={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-heading text-xl tracking-widest">{progress}%</p>
        </motion.div>
      ) : (
        <motion.div
          key="enter"
          className="fixed inset-0 z-[100] bg-navy-950 flex flex-col items-center justify-center"
        >
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="px-12 py-4 border border-rose-500 text-rose-500 font-heading text-2xl uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all rounded-sm"
          >
            Enter Story
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
