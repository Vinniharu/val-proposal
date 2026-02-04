"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function InteractionButtons({ onYes, onNo }) {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showWhyModal, setShowWhyModal] = useState(false);

  // Initial position reset or something? defaulting to static layout first.
  // We'll make the No button absolute only when it starts moving?
  // Actually easier if it's always fixed/absolute once interacted with,
  // but initially it should sit next to Yes.

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoBtnPosition({ x, y });
    setIsHovered(true);
  };

  const handleNoClick = () => {
    setShowWhyModal(true);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 gap-8 relative z-50">
      <div className="flex gap-8 items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-rose-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-rose-600 transition-colors"
          onClick={onYes}
        >
          YES ❤️
        </motion.button>

        <motion.button
          className={cn(
            "px-8 py-3 bg-gray-400 text-white text-xl font-bold rounded-full shadow-lg transition-colors cursor-pointer",
            isHovered ? "fixed transition-all duration-200" : "relative",
          )}
          style={
            isHovered ? { left: noBtnPosition.x, top: noBtnPosition.y } : {}
          }
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
          onClick={handleNoClick}
          animate={
            isHovered
              ? {
                  x: 0,
                  y: 0,
                }
              : {}
          }
        >
          No 😢
        </motion.button>
      </div>

      <AnimatePresence>
        {showWhyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white p-8 rounded-2xl max-w-sm text-center shadow-2xl m-4"
            >
              <h3 className="text-2xl font-bold text-rose-500 mb-4">
                Why? Please :("
              </h3>
              <p className="text-gray-600 mb-6">
                You broke my heart! Give me another chance?
              </p>
              <button
                className="px-6 py-2 bg-rose-400 text-white rounded-full hover:bg-rose-500"
                onClick={() => setShowWhyModal(false)}
              >
                Okay, fine
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
