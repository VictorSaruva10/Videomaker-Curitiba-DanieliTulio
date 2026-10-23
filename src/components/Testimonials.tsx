import React from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteData';
import { Quote, ArrowUpRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#101010] border-t border-[#FFFFFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#189EA8] mb-3 block">
              Experiências & Confiança
            </span>
            <h2 className="text-gradient font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] [text-wrap:balance]">
              O que dizem sobre trabalhar com a Danieli.
            </h2>
          </div>

          <div>
            <a
              href={buildWhatsAppLink("Olá, Danieli! Gostaria de um orçamento personalizado para o meu projeto audiovisual.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-[#FFFFFF] bg-transparent border border-[#189EA8]/50 hover:bg-[#189EA8] hover:text-[#0A0A0A] hover:border-[#189EA8] rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Solicitar orçamento personalizado</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div
          className="testimonials-marquee"
          role="region"
          aria-label="Depoimentos sobre o trabalho da Danieli"
          aria-roledescription="carrossel de depoimentos"
        >
          <div className="testimonials-marquee-track">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? 'duplicate' : 'original'}
                className="testimonials-marquee-group"
                aria-hidden={isDuplicate || undefined}
              >
                {siteConfig.testimonials.map((item) => (
                  <article
                    key={item.id}
                    className="flex min-h-64 w-[min(84vw,360px)] shrink-0 flex-col rounded-xl border border-white/10 bg-[#0A0A0A] p-7 sm:min-h-72 sm:w-[380px] sm:p-8"
                  >
                    <Quote className="mb-5 h-7 w-7 text-[#189EA8]/70" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-[#AEAEB6]">
                      “{item.quote}”
                    </p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
