import React from 'react';
import { siteConfig } from '../config/siteData';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  // Editorial gallery frames showcasing aesthetic moments
  const galleryFrames = [
    {
      img: siteConfig.media.reelsVertical,
      alt: 'Momento criativo e planejamento de conteúdo',
      aspect: 'aspect-[3/4]',
    },
    {
      img: siteConfig.media.brandShowcase,
      alt: 'Campanha de produto com iluminação natural',
      aspect: 'aspect-[3/4]',
    },
    {
      img: siteConfig.media.backstageShowcase,
      alt: 'Bastidores de gravação externa com Danieli Tulio',
      aspect: 'aspect-[3/4]',
    },
    {
      img: siteConfig.media.heroBanner,
      alt: 'Operação de câmera com estabilizador gimbal',
      aspect: 'aspect-[3/4]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F1] border-t border-[#DEDAD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#C4A77D] mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Redes Sociais & Bastidores</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#24231F] leading-[1.15]">
              Acompanhe o processo criativo no Instagram.
            </h2>
          </div>

          <div>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#24231F] bg-transparent border border-[#24231F] hover:bg-[#24231F] hover:text-[#F7F5F1] rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Acompanhe meu trabalho no Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Editorial Visual Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryFrames.map((frame, idx) => (
            <a
              key={idx}
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-[#DEDAD2] bg-[#24231F] shadow-xs"
            >
              <div className={`${frame.aspect} overflow-hidden`}>
                <img
                  src={frame.img}
                  alt={frame.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay with Instagram Prompt */}
              <div className="absolute inset-0 bg-[#24231F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <div className="flex items-center gap-1.5 text-xs text-white font-medium bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Instagram className="w-3.5 h-3.5 text-[#C4A77D]" />
                  <span>@{siteConfig.contact.instagramHandle}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Profile Handle Reference */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#77736C]">
          <span>Perfil oficial:</span>
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#24231F] hover:text-[#C4A77D] transition-colors underline underline-offset-4"
          >
            @{siteConfig.contact.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
};
