import React from 'react';
import { siteConfig } from '../config/siteData';
import { ArrowDown, GraduationCap, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#servicos');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#EAE5DC]/40 border-y border-[#DEDAD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Professional Photography of Danieli */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame with Delicate Hairline Border */}
              <div className="overflow-hidden rounded-xl border border-[#DEDAD2] bg-[#1A1917] shadow-xl aspect-[4/5] sm:aspect-[3/4] group">
                <img
                  src={siteConfig.media.portrait}
                  alt="Danieli Tulio — Videomaker e Storymaker"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[40%_30%] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Editorial Frame Accent */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#77736C]">
                <span className="font-serif italic text-sm text-[#24231F]">Danieli Tulio</span>
                <span className="tracking-widest uppercase text-[10px]">Direção Criativa & Audiovisual</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Composition */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Kicker */}
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A77D] mb-3 block">
              Sobre mim
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#24231F] leading-[1.18] mb-8 [text-wrap:balance]">
              {siteConfig.professional.aboutTitle}
            </h2>

            {/* Presentation Body Copy */}
            <div className="space-y-5 text-base sm:text-lg text-[#77736C] leading-relaxed font-light">
              <p>
                {siteConfig.professional.aboutTextParagraph1}
              </p>
              <p>
                {siteConfig.professional.aboutTextParagraph2}
              </p>
            </div>

            {/* Credentials / Qualifications Strip */}
            <div className="mt-8 pt-8 border-t border-[#DEDAD2] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-[#F7F5F1] border border-[#DEDAD2]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C4A77D] mb-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Formação</span>
                </div>
                <p className="font-serif text-lg font-medium text-[#24231F]">
                  {siteConfig.professional.education}
                </p>
                <p className="text-xs text-[#77736C] mt-0.5">
                  Especialização e qualificação profissional
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F7F5F1] border border-[#DEDAD2]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C4A77D] mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Experiência</span>
                </div>
                <p className="font-serif text-lg font-medium text-[#24231F]">
                  {siteConfig.professional.experience}
                </p>
                <p className="text-xs text-[#77736C] mt-0.5">
                  Direção criativa, produção e redes sociais
                </p>
              </div>
            </div>

            {/* Call to Explore Services */}
            <div className="mt-10">
              <a
                href="#servicos"
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#24231F] hover:text-[#C4A77D] transition-colors group cursor-pointer"
              >
                <span>Conhecer os serviços prestados</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
