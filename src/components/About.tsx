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
    <section id="sobre" className="relative isolate overflow-hidden border-y border-[#FFFFFF]/10 bg-[#101010] py-20 lg:py-28">
      <img
        src="/assets/foto-camera-making-of.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="section-background-image absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="section-background-overlay absolute inset-0 bg-[#0A0A0A]/75" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Professional Photography of Danieli */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame with Delicate Hairline Border */}
              <div className="about-portrait-frame overflow-hidden rounded-xl border border-[#FFFFFF]/10 bg-[#101010] shadow-xl aspect-[4/5] sm:aspect-[3/4] group">
                <img
                  src={siteConfig.media.portrait}
                  alt="Danieli Tulio — Videomaker e Storymaker"
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={1125}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[40%_30%] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="about-portrait-particles absolute inset-0 z-[3]" aria-hidden="true">
                  <style>{`
                    .about-portrait-particles {
                      pointer-events: none;
                    }

                    .about-portrait-particle {
                      position: absolute;
                      display: block;
                      border-radius: 9999px;
                      background: #1CA0AA;
                      box-shadow: 0 0 7px #1CA0AA, 0 0 13px #1CA0AA;
                      opacity: 0;
                      animation: about-portrait-particle-drift var(--particle-duration) ease-in-out var(--particle-delay) infinite;
                    }

                    .about-portrait-particle:nth-of-type(1) {
                      top: 8%;
                      left: 5%;
                      width: 2px;
                      height: 2px;
                      --particle-duration: 5.4s;
                      --particle-delay: -1.2s;
                      --particle-drift-x: 7px;
                      --particle-drift-y: -15px;
                    }

                    .about-portrait-particle:nth-of-type(2) {
                      top: 23%;
                      right: 4%;
                      width: 3px;
                      height: 3px;
                      --particle-duration: 7.3s;
                      --particle-delay: -3.1s;
                      --particle-drift-x: -8px;
                      --particle-drift-y: -9px;
                    }

                    .about-portrait-particle:nth-of-type(3) {
                      top: 48%;
                      left: 3%;
                      width: 2px;
                      height: 2px;
                      --particle-duration: 6.2s;
                      --particle-delay: -4.5s;
                      --particle-drift-x: 5px;
                      --particle-drift-y: -19px;
                    }

                    .about-portrait-particle:nth-of-type(4) {
                      top: 68%;
                      right: 5%;
                      width: 3px;
                      height: 3px;
                      --particle-duration: 4.9s;
                      --particle-delay: -0.5s;
                      --particle-drift-x: -6px;
                      --particle-drift-y: -10px;
                    }

                    .about-portrait-particle:nth-of-type(5) {
                      bottom: 8%;
                      left: 22%;
                      width: 2px;
                      height: 2px;
                      --particle-duration: 7.8s;
                      --particle-delay: -2.7s;
                      --particle-drift-x: 10px;
                      --particle-drift-y: -16px;
                    }

                    .about-portrait-particle:nth-of-type(6) {
                      right: 23%;
                      bottom: 7%;
                      width: 2px;
                      height: 2px;
                      --particle-duration: 6.7s;
                      --particle-delay: -5.2s;
                      --particle-drift-x: -9px;
                      --particle-drift-y: -12px;
                    }

                    @keyframes about-portrait-particle-drift {
                      0%, 100% {
                        opacity: 0;
                        transform: translate3d(0, 5px, 0) scale(0.65);
                      }
                      18% {
                        opacity: 0.72;
                      }
                      72% {
                        opacity: 0.42;
                        transform: translate3d(var(--particle-drift-x), var(--particle-drift-y), 0) scale(1);
                      }
                    }

                    @media (prefers-reduced-motion: reduce) {
                      .about-portrait-particle {
                        animation: none;
                        opacity: 0.45;
                      }
                    }
                  `}</style>
                  <span className="about-portrait-particle" />
                  <span className="about-portrait-particle" />
                  <span className="about-portrait-particle" />
                  <span className="about-portrait-particle" />
                  <span className="about-portrait-particle" />
                  <span className="about-portrait-particle" />
                </div>
              </div>

              {/* Editorial Frame Accent */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#AEAEB6]">
                <span className="font-serif italic text-sm text-[#FFFFFF]">Danieli Tulio</span>
                <span className="tracking-widest uppercase text-[10px]">Direção Criativa & Audiovisual</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Composition */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Kicker */}
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#189EA8] mb-3 block">
              Sobre mim
            </span>

            {/* Headline */}
            <h2 className="text-gradient font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.18] mb-8 [text-wrap:balance]">
              {siteConfig.professional.aboutTitle}
            </h2>

            {/* Presentation Body Copy */}
            <div className="space-y-5 text-base sm:text-lg text-[#AEAEB6] leading-relaxed font-light">
              <p>
                {siteConfig.professional.aboutTextParagraph1}
              </p>
              <p>
                {siteConfig.professional.aboutTextParagraph2}
              </p>
            </div>

            {/* Credentials / Qualifications Strip */}
            <div className="mt-8 pt-8 border-t border-[#FFFFFF]/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-[#0A0A0A] border border-[#FFFFFF]/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#189EA8] mb-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Formação</span>
                </div>
                <p className="font-serif text-lg font-medium text-[#FFFFFF]">
                  {siteConfig.professional.education}
                </p>
                <p className="text-xs text-[#AEAEB6] mt-0.5">
                  Especialização e qualificação profissional
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0A0A0A] border border-[#FFFFFF]/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#189EA8] mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Experiência</span>
                </div>
                <p className="font-serif text-lg font-medium text-[#FFFFFF]">
                  {siteConfig.professional.experience}
                </p>
                <p className="text-xs text-[#AEAEB6] mt-0.5">
                  Direção criativa, produção e redes sociais
                </p>
              </div>
            </div>

            {/* Call to Explore Services */}
            <div className="mt-10">
              <a
                href="#servicos"
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FFFFFF] hover:text-[#189EA8] transition-colors group cursor-pointer"
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
