import React from 'react';
import { siteConfig } from '../config/siteData';
import { Sparkles, Eye, HeartHandshake, Film } from 'lucide-react';

export const Positioning: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#24231F] text-[#F7F5F1] relative overflow-hidden">
      {/* Subtle Texture & Warm Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C4A77D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C4A77D]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Concept Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-[#C4A77D] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Manifesto & Posicionamento</span>
        </div>

        {/* Big Expressive Serif Statement */}
        <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.25] font-normal tracking-tight text-[#F7F5F1] mb-8 [text-wrap:balance]">
          “{siteConfig.positioning.quote}”
        </blockquote>

        {/* Minimalist Complement */}
        <p className="text-base sm:text-xl text-[#EAE5DC]/80 font-light max-w-3xl mx-auto leading-relaxed mb-16 [text-wrap:balance]">
          {siteConfig.positioning.highlight}
        </p>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 text-left">
          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="w-9 h-9 rounded-full bg-[#C4A77D]/10 flex items-center justify-center text-[#C4A77D] mb-4">
              <Eye className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#F7F5F1] mb-2">
              Atenção Genuína
            </h3>
            <p className="text-xs sm:text-sm text-[#EAE5DC]/70 font-light leading-relaxed">
              Em um feed acelerado, o cuidado com a estética faz as pessoas pararem para assistir o que você tem a dizer.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="w-9 h-9 rounded-full bg-[#C4A77D]/10 flex items-center justify-center text-[#C4A77D] mb-4">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#F7F5F1] mb-2">
              Conexão Emocional
            </h3>
            <p className="text-xs sm:text-sm text-[#EAE5DC]/70 font-light leading-relaxed">
              Vídeos bem produzidos comunicam valores, geram identificação instantânea e aproximam o público.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="w-9 h-9 rounded-full bg-[#C4A77D]/10 flex items-center justify-center text-[#C4A77D] mb-4">
              <Film className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#F7F5F1] mb-2">
              Percepção de Valor
            </h3>
            <p className="text-xs sm:text-sm text-[#EAE5DC]/70 font-light leading-relaxed">
              O acabamento audiovisual reflete diretamente a qualidade, o posicionamento e o prestígio da sua marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
