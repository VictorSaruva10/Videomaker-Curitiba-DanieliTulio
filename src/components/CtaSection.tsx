import React from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteData';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 lg:py-36 bg-[#EAE5DC]/60 border-t border-[#DEDAD2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#C4A77D] mb-4 block">
          Contato Direto
        </span>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#24231F] leading-[1.15] mb-6 [text-wrap:balance]">
          Vamos transformar sua ideia em conteúdo?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#77736C] font-light max-w-2xl mx-auto leading-relaxed mb-10 [text-wrap:balance]">
          Me conte o que você está imaginando. Vamos conversar sobre a melhor forma de dar vida à sua história.
        </p>

        {/* Single Dominant Primary WhatsApp Action */}
        <div className="flex items-center justify-center">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#F7F5F1] bg-[#24231F] hover:bg-[#383733] transition-all duration-200 rounded-sm shadow-md cursor-pointer whitespace-nowrap group"
          >
            <MessageCircle className="w-4 h-4 text-[#C4A77D]" />
            <span>Conversar pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-[#C4A77D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Direct Phone / Contact note */}
        <div className="mt-8 text-xs text-[#77736C]">
          <span>Atendimento direto · Resposta ágil em horário comercial</span>
        </div>
      </div>
    </section>
  );
};
