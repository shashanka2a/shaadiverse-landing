"use client";

import { motion, useReducedMotion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function InvitationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  
  const features = [
    { icon: "✨", text: "Elegant templates inspired by Indian weddings" },
    { icon: "📊", text: "RSVP tracking, galleries, timelines" },
    { icon: "📱", text: "Easy sharing via WhatsApp & email" }
  ];
  
  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-[#FFFDF8]">
      {/* Gold Border Pattern - More Subtle */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8C77D] to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8C77D] to-transparent opacity-40" />
      
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-full mb-4 sm:mb-6 border border-pink-100">
            <span className="text-lg">💌</span>
            <span className="tracking-wide">Knotify</span>
          </div>
          <h2 
            className="mb-4 sm:mb-6 text-gray-900 max-w-3xl mx-auto text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-tight px-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Your Wedding Deserves More Than a Paper Card.
          </h2>
          
          {/* Interactive Mock Preview */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-8 sm:mb-12 max-w-4xl mx-auto group"
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-2 sm:border-4 border-[#E8C77D]/30 hover:border-[#E8C77D]/50 transition-all duration-500">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src="/invitation.png"
                  alt="Elegant wedding invitation design with gold accents"
                  className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1080}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Enhanced Overlay with Interactive Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-6 sm:pb-8">
                  <motion.button
                    className="bg-white/95 backdrop-blur-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 min-h-[3rem] active:scale-[0.98]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles className="w-4 h-4 text-pink-600" />
                    <span className="tracking-wide">View Live Preview</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Features Grid - Better Mobile Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white/50 border border-pink-100 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="text-2xl sm:text-3xl mb-1 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <p className="text-gray-700 text-[0.875rem] sm:text-[0.9375rem] leading-relaxed text-center">{feature.text}</p>
              </motion.div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 gap-2 min-h-[3rem] sm:min-h-[3.5rem] group active:scale-[0.98] w-full sm:w-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="tracking-wide">Create Your Website</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
