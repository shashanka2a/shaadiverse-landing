"use client";

import { motion, useReducedMotion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function GiftingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  
  const features = [
    "Personalized handcrafted gifts",
    "Sustainable bamboo & wood materials",
    "Perfect for weddings, engagements & anniversaries"
  ];
  
  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Warm Beige Background with Enhanced Texture */}
      <div className="absolute inset-0 bg-[#FAF4ED]" />
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23654321' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src="/gnapika.png"
                  alt="Handmade wooden craft gift details"
                  className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1080}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            {/* Accent Border - Adjusted for Mobile */}
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-full h-full border-2 sm:border-4 border-amber-200 rounded-xl sm:rounded-2xl -z-10" />
          </motion.div>
          
          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-800 rounded-full mb-4 sm:mb-6 border border-amber-100">
              <span className="text-lg">🎁</span>
              <span className="tracking-wide">Gnapika</span>
            </div>
            <h2 
              className="mb-4 sm:mb-6 text-gray-900 text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Turn Emotions into Timeless Keepsakes.
            </h2>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 items-start group cursor-pointer"
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-gray-700 text-[0.9375rem] sm:text-[1rem] leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
            <Button 
              size="lg" 
              className="bg-amber-700 hover:bg-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 gap-2 min-h-[3rem] sm:min-h-[3.5rem] group active:scale-[0.98] w-full sm:w-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="tracking-wide">Explore Gifts</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
