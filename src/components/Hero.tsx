import React from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteData';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#portfolio');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-24">
      <img
        src="/assets/hero-background-optimized.jpg"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="hero-background absolute inset-0 h-full w-full object-cover object-[center_38%] brightness-110"
      />
      <div className="hero-background-overlay absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/35 via-transparent to-[#0A0A0A]/5" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex flex-col justify-center">
            {/* Quiet Category Kicker */}
            <div className="mb-4 flex flex-col items-start gap-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#AEAEB6] sm:flex-row sm:items-center sm:gap-2 sm:text-xs sm:tracking-[0.2em]">
              <span>Danieli Tulio</span>
              <span aria-hidden="true" className="hidden text-[#189EA8] sm:inline">·</span>
              <span>Produção audiovisual em Curitiba</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-gradient font-serif text-[3.1rem] sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
              Videomaker e Storymaker{' '}
              <span className="italic font-normal">em Curitiba.</span>
            </h1>

            {/* Complementary Text */}
            <p className="text-base sm:text-lg text-[#AEAEB6] leading-relaxed max-w-xl mb-8 font-light">
              {siteConfig.professional.bioShort}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0A0A0A] bg-[#189EA8] hover:bg-[#189EA8]/85 transition-all duration-200 rounded-sm shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Vamos criar juntos</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0A]" />
              </a>

              <a
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#FFFFFF] bg-transparent border border-[#FFFFFF]/10 hover:border-[#FFFFFF]/15 hover:bg-[#101010] transition-all duration-200 rounded-sm cursor-pointer whitespace-nowrap"
              >
                <span>Explorar portfólio</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#AEAEB6]" />
              </a>
            </div>

            {/* Location & Authenticity Note */}
            <div className="mt-8 pt-6 border-t border-[#FFFFFF]/10 flex items-center gap-2 text-xs text-[#AEAEB6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#189EA8]"></span>
              <span>{siteConfig.professional.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
