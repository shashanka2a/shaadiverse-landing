"use client";

import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  
  const socialLinks = [
    { icon: Instagram, label: "Instagram", name: "instagram" },
    { icon: Facebook, label: "Facebook", name: "facebook" },
    { icon: Twitter, label: "Twitter", name: "twitter" },
    { icon: Mail, label: "Email", name: "email" }
  ];
  
  const sections = [
    {
      title: "📸 SnapEvent",
      links: ["Browse Photographers", "How It Works", "Pricing"]
    },
    {
      title: "🎁 Gnapika",
      links: ["Shop Gifts", "Custom Orders", "Bulk Discounts"]
    },
    {
      title: "💌 Knotify",
      links: ["Create Website", "Templates", "Features"]
    }
  ];
  
  return (
    <footer className="relative overflow-hidden py-12 sm:py-16 px-4 sm:px-6">
      {/* Enhanced Reversed Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8C77D] via-[#FFB88C] to-[#E8741C]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <h3 
            className="text-white mb-3 sm:mb-4 text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] leading-[1.2] drop-shadow-md"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Every Shaadi Deserves Its Own Universe.
          </h3>
          <p className="text-white/95 mb-6 sm:mb-8 text-[0.9375rem] sm:text-[1rem] drop-shadow-sm">
            ShaadiVerse — The Modern Indian Wedding Universe
          </p>
          
          {/* Social Icons - Enhanced with Better Spacing */}
          <div className="flex gap-4 sm:gap-6 justify-center mb-8 sm:mb-10">
            {socialLinks.map(({ icon: Icon, label, name }) => (
              <a
                key={name}
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 active:scale-95 group"
                aria-label={label}
                onMouseEnter={() => setHoveredIcon(name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                  hoveredIcon === name ? 'scale-110' : ''
                }`} />
              </a>
            ))}
          </div>
        </div>
        
        {/* Links - Better Mobile Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 text-center sm:text-left">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white mb-3 sm:mb-4 tracking-wide">{section.title}</h4>
              <ul className="space-y-2 text-white/90">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="hover:text-white transition-colors duration-200 inline-block hover:translate-x-1 transition-transform text-[0.9375rem] sm:text-[1rem]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright - Better Contrast */}
        <div className="border-t border-white/25 pt-6 sm:pt-8 text-center">
          <p className="text-white/80 text-[0.875rem] sm:text-[0.9375rem]">
            © 2025 ShaadiVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
