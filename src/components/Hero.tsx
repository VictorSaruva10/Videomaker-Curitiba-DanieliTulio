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
    <section id="inicio" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Quiet Category Kicker */}
            <div className="mb-4 flex flex-col items-start gap-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#77736C] sm:flex-row sm:items-center sm:gap-2 sm:text-xs sm:tracking-[0.2em]">
              <span>Danieli Tulio</span>
              <span aria-hidden="true" className="hidden text-[#C4A77D] sm:inline">·</span>
              <span>Produção audiovisual em Curitiba</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#24231F] leading-[1.12] mb-6 [text-wrap:balance]">
              Videomaker e Storymaker{' '}
              <span className="italic font-normal text-[#24231F]/90">em Curitiba.</span>
            </h1>

            {/* Complementary Text */}
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed max-w-xl mb-8 font-light">
              {siteConfig.professional.bioShort}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F7F5F1] bg-[#24231F] hover:bg-[#383733] transition-all duration-200 rounded-sm shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Vamos criar juntos</span>
                <ArrowUpRight className="w-4 h-4 text-[#C4A77D]" />
              </a>

              <a
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#24231F] bg-transparent border border-[#DEDAD2] hover:border-[#24231F] hover:bg-[#EAE5DC]/50 transition-all duration-200 rounded-sm cursor-pointer whitespace-nowrap"
              >
                <span>Explorar portfólio</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#77736C]" />
              </a>
            </div>

            {/* Location & Authenticity Note */}
            <div className="mt-8 pt-6 border-t border-[#DEDAD2]/60 flex items-center gap-2 text-xs text-[#77736C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4A77D]"></span>
              <span>{siteConfig.professional.location}</span>
            </div>
          </div>

          {/* Right Column: Cinematic Media Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative group rounded-xl overflow-hidden border border-[#DEDAD2] bg-[#24231F] shadow-lg aspect-video sm:aspect-[16/10] lg:aspect-video flex items-center justify-center">
              <img
                src={siteConfig.media.heroBanner}
                alt="Produção audiovisual cinematográfica por Danieli Tulio"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Subtle Editorial Stamp on Top-Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded bg-black/50 backdrop-blur-md text-[#EAE5DC] border border-white/10">
                  Videomaker Curitiba · Produção Audiovisual
                </span>
              </div>
            </div>

            {/* Decorative Subtle Caption */}
            <p className="mt-2 text-right text-[11px] text-[#77736C]">
              Captação cinematográfica · Enquadramentos pensados para converter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
