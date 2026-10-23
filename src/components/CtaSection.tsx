import React from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteData';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section id="contato" className="relative isolate overflow-hidden border-t border-[#FFFFFF]/10 bg-[#101010] py-24 lg:py-36">
      <img
        src="/assets/contact-background-optimized.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/75" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#189EA8] mb-4 block">
          Contato Direto
        </span>

        {/* Headline */}
        <h2 className="text-gradient font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
          Vamos transformar sua ideia em conteúdo?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#AEAEB6] font-light max-w-2xl mx-auto leading-relaxed mb-10 [text-wrap:balance]">
          Me conte o que você está imaginando. Vamos conversar sobre a melhor forma de dar vida à sua história.
        </p>

        {/* Single Dominant Primary WhatsApp Action */}
        <div className="flex items-center justify-center">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#0A0A0A] bg-[#189EA8] hover:bg-[#189EA8]/85 transition-all duration-200 rounded-sm shadow-md cursor-pointer whitespace-nowrap group"
          >
            <MessageCircle className="w-4 h-4 text-[#0A0A0A]" />
            <span>Conversar pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-[#0A0A0A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Direct Phone / Contact note */}
        <div className="mt-8 text-xs text-[#AEAEB6]">
          <span>Atendimento direto · Resposta ágil em horário comercial</span>
        </div>
      </div>
    </section>
  );
};
