"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import InteractionButtons from "./InteractionButtons";

const LetterSection = ({ children, index, isVisible, onReveal }) => {
  return (
    <motion.div
      className={cn(
        "relative w-full max-w-md bg-[#fdfbf6] shadow-sm overflow-hidden transition-all duration-1000 ease-in-out origin-top border-b border-gray-100",
        isVisible
          ? "h-auto opacity-100 rotate-x-0"
          : "h-0 opacity-0 -rotate-x-90",
      )}
      initial={false}
    >
      <div className="p-8 text-xl md:text-2xl font-dancing leading-relaxed text-gray-800">
        {children}
      </div>
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      {isVisible && onReveal && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-rose-50 to-transparent flex items-center justify-center cursor-pointer animate-pulse"
          onClick={onReveal}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-rose-300 text-sm font-sans tracking-widest uppercase">
            Tap to unfold
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 text-rose-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function Letter({ onYes, onNo }) {
  const [visibleSections, setVisibleSections] = useState(1);

  const revealNext = () => {
    setVisibleSections((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto py-10 px-4 perspective-1000">
      <LetterSection
        index={0}
        isVisible={true}
        onReveal={visibleSections === 1 ? revealNext : null}
      >
        <p>To my favorite architect, Favour,</p>
        <p className="mt-4">
          Zaha Hadid once said, 'There are 360 degrees, so why stick to one?'
          And from the moment I started talking to you, Favour, my world
          expanded in ways I never imagined.
        </p>
      </LetterSection>

      <LetterSection
        index={1}
        isVisible={visibleSections >= 2}
        onReveal={visibleSections === 2 ? revealNext : null}
      >
        <p>
          We connected online in March, and even though we've only met in person
          recently, those months of talking felt incredibly special. Your
          kindness, humor, and spirit shone through every message. You quickly
          became the highlight of my day.
        </p>
      </LetterSection>

      <LetterSection
        index={2}
        isVisible={visibleSections >= 3}
        onReveal={visibleSections === 3 ? revealNext : null}
      >
        <p>
          I've spent this time, Favour, trying to grow into the best version of
          myself—someone worthy of the amazing person I see in you. I cherish
          our conversations, our laughs, and the way you make me feel. I truly
          believe we have something special.
        </p>
      </LetterSection>

      <LetterSection index={3} isVisible={visibleSections >= 4}>
        <p className="border-b-2 border-rose-200 pb-2 mb-4 inline-block font-bold">
          Favour, would you do me the incredible honor of being my girlfriend?
        </p>
        <p className="mt-8 text-right mb-8">
          With all my heart,
          <br />
          Nifemi
        </p>
        <InteractionButtons onYes={onYes} onNo={onNo} />
      </LetterSection>
    </div>
  );
}
