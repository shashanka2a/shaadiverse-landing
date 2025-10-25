"use client";

import { motion, useReducedMotion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced Gradient Overlay with Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5EB] via-[#FFE8D6] to-[#FFF9F0]" />
      
      {/* Glowing Background Elements - Simplified on Mobile */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#FF9933]/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#F4E3B2]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.15, 1, 1.15],
              opacity: [0.4, 0.3, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Typography with Better Contrast */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl">🌿</span>
            <h2 
              className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-tight text-gray-900"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Why ShaadiVerse
            </h2>
          </div>
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p
              className="text-gray-800 max-w-3xl mx-auto text-[1.0625rem] sm:text-[1.125rem] md:text-[1.25rem] leading-relaxed px-4"
            >
              Because every Indian wedding is a universe of emotions, rituals, and stories — and we're here to bring them all together.
            </p>
            {/* Subtle decorative accent */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-[#FF9933] via-[#FFD7C2] to-[#F4E3B2] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
