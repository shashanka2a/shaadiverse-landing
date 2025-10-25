"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "./ui/button";
import { Camera, Gift, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth);
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);
  
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-20">
      {/* Enhanced Gradient Background with Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8741C] via-[#FFB88C] to-[#F0D9B5]" />
      
      {/* Subtle Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5" />
      
      {/* Animated Decorative Elements - Simplified on Mobile */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Marigold Petals - Reduced on Mobile */}
          {[...Array(windowWidth < 768 ? 8 : 15)].map((_, i) => (
            <motion.div
              key={`petal-${i}`}
              className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-orange-500/20 rounded-full blur-sm"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "110%",
                rotate: 0 
              }}
              animate={{ 
                y: "-10%",
                rotate: 360,
                x: `${Math.random() * 100}%`
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Diya Sparkles - Reduced on Mobile */}
          {[...Array(windowWidth < 768 ? 10 : 20)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 bg-yellow-100 rounded-full shadow-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
          
          {/* Mandala Outlines - Hidden on Small Mobile */}
          {windowWidth >= 640 && [...Array(3)].map((_, i) => (
            <motion.div
              key={`mandala-${i}`}
              className="absolute border border-white/15 rounded-full hidden sm:block"
              style={{
                width: 200 + i * 100,
                height: 200 + i * 100,
                left: `${20 + i * 30}%`,
                top: `${10 + i * 25}%`,
              }}
              animate={{
                rotate: 360,
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 25 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-white mb-4 sm:mb-6 px-4 drop-shadow-lg text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.2] tracking-tight"
          style={{ fontFamily: "'DM Serif Display', serif" }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Where Every Moment, Gift, and Story Finds Its Celebration.
        </motion.h1>
        
        <motion.p
          className="text-white mb-8 sm:mb-12 max-w-3xl mx-auto px-4 text-[1.125rem] sm:text-[1.25rem] leading-relaxed font-medium"
          style={{ 
            textShadow: '0 1px 3px rgba(0,0,0,0.3)'
          }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          ShaadiVerse is your all-in-one destination for everything wedding from photographers to handcrafted gifts to stunning digital invitations. Celebrate love the modern Indian way beautifully, effortlessly, and together.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            size="lg" 
            className="bg-white text-[#D65F1A] hover:bg-white/95 shadow-xl hover:shadow-2xl transition-all duration-300 gap-2 min-h-[3.5rem] active:scale-[0.98] group"
            onMouseEnter={() => setHoveredButton('photographers')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Camera className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="tracking-wide">Find Photographers</span>
          </Button>
          <Button 
            size="lg" 
            className="bg-white text-[#D65F1A] hover:bg-white/95 shadow-xl hover:shadow-2xl transition-all duration-300 gap-2 min-h-[3.5rem] active:scale-[0.98] group"
            onMouseEnter={() => setHoveredButton('gifts')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Gift className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="tracking-wide">Shop Gifts</span>
          </Button>
          <Button 
            size="lg" 
            className="bg-white text-[#D65F1A] hover:bg-white/95 shadow-xl hover:shadow-2xl transition-all duration-300 gap-2 min-h-[3.5rem] active:scale-[0.98] group"
            onMouseEnter={() => setHoveredButton('website')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="tracking-wide hidden sm:inline">Create Wedding Website</span>
            <span className="tracking-wide sm:hidden">Create Website</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
