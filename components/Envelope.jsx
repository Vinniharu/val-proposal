"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Wait for animation to finish before calling onOpen
      setTimeout(() => {
        onOpen?.();
      }, 800);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-rose-50 overflow-hidden cursor-pointer"
      onClick={handleOpen}
    >
      <motion.div
        className="relative w-80 h-60 bg-rose-300 rounded-b-lg shadow-xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Envelope Body */}
        <div className="absolute bottom-0 w-full h-full bg-rose-300 rounded-b-lg z-10 border-t-2 border-rose-400/30"></div>

        {/* Left Flap */}
        <div className="absolute left-0 bottom-0 w-0 h-0 border-l-[160px] border-l-rose-400 border-t-[120px] border-t-transparent border-b-[120px] border-b-rose-400 rounded-bl-lg z-20"></div>

        {/* Right Flap */}
        <div className="absolute right-0 bottom-0 w-0 h-0 border-r-[160px] border-r-rose-400 border-t-[120px] border-t-transparent border-b-[120px] border-b-rose-400 rounded-br-lg z-20"></div>

        {/* Bottom Flap (Visual only to cover seams) */}
        <div className="absolute bottom-0 w-0 h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-b-[100px] border-b-rose-500/80 z-20"></div>

        {/* Top Flap (The one that opens) */}
        <motion.div
          className="absolute top-0 w-0 h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-t-[120px] border-t-rose-500 origin-top z-30 drop-shadow-md"
          animate={
            isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
        ></motion.div>

        {/* Letter Preview (Slides up) */}
        <motion.div
          className="absolute left-4 right-4 top-4 bottom-4 bg-white rounded-sm shadow-sm z-10"
          initial={{ y: 0 }}
          animate={isOpen ? { y: -100 } : { y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="p-4 text-[8px] text-gray-400 font-dancing-script">
            Dearest Favour...
          </div>
        </motion.div>

        {/* Heart Seal */}
        <motion.div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        >
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-2xl">❤️</span>
          </div>
        </motion.div>
      </motion.div>

      {!isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-rose-500 font-medium text-lg animate-pulse"
        >
          Tap to open
        </motion.p>
      )}
    </div>
  );
}
