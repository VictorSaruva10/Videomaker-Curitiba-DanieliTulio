import React from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteData';
import { Quote, ArrowUpRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#EAE5DC]/40 border-t border-[#DEDAD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A77D] mb-3 block">
              Experiências & Confiança
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#24231F] leading-[1.15] [text-wrap:balance]">
              O que dizem sobre trabalhar com a Danieli.
            </h2>
          </div>

          <div>
            <a
              href={buildWhatsAppLink("Olá, Danieli! Gostaria de um orçamento personalizado para o meu projeto audiovisual.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-[#24231F] bg-transparent border border-[#24231F] hover:bg-[#24231F] hover:text-[#F7F5F1] rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Solicitar orçamento personalizado</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteConfig.testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-8 rounded-xl bg-[#F7F5F1] border border-[#DEDAD2] shadow-xs"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C4A77D]/60 mb-5" />
                <p className="text-sm sm:text-base text-[#24231F] font-light italic leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-[#DEDAD2]/50">
                <p className="font-serif text-lg font-medium text-[#24231F]">
                  {item.author}
                </p>
                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex items-center gap-2 text-xs text-[#77736C] mt-0.5">
                  <span>{item.role}</span>
                  <span aria-hidden="true" className="text-[#C4A77D]">·</span>
                  <span className="text-[11px] font-sans">{item.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
