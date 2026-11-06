import React from "react";
import { siteConfig } from "../config/siteData";
import { Sparkles } from "lucide-react";
import { ScrollText } from "./ScrollText";

export const Positioning: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#101010] text-[#FFFFFF] relative overflow-hidden">
      {/* Subtle Texture & Warm Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#189EA8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#189EA8]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Concept Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-[#189EA8] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <ScrollText as="span">Manifesto & Posicionamento</ScrollText>
        </div>

        {/* Big Expressive Serif Statement */}
        <ScrollText as="blockquote" className="text-gradient font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.25] font-normal tracking-tight mb-8 [text-wrap:balance]">
          {`“${siteConfig.positioning.quote}”`}
        </ScrollText>

        {/* Minimalist Complement */}
        <ScrollText as="p" className="text-base sm:text-xl text-[#AEAEB6] font-light max-w-3xl mx-auto leading-relaxed mb-16 [text-wrap:balance]">
          {siteConfig.positioning.highlight}
        </ScrollText>
      </div>
    </section>
  );
};
