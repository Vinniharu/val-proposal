"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function FloatingMedia({
  src,
  type = "image",
  className,
  depth = 1,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * depth]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 5 * (depth % 2 === 0 ? 1 : -1)],
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={cn(
        "absolute z-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 w-64 md:w-80 aspect-[9/16]", // Portrait ratio
        className,
      )}
    >
      {type === "video" ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img src={src} alt="Memory" className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-navy-950/20 mix-blend-overlay" />
    </motion.div>
  );
}
