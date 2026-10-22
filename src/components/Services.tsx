import React from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteData';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#F7F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A77D] mb-3 block">
            Serviços & Formatos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#24231F] leading-[1.15] [text-wrap:balance]">
            Audiovisual que transforma ideias em experiências.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#77736C] font-light max-w-2xl">
            Produção audiovisual em Curitiba para marcas e empresas: vídeos institucionais e promocionais, storymaking, Reels e conteúdo para redes sociais.
          </p>
        </div>

        {/* Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-xl bg-[#F7F5F1] border border-[#DEDAD2] hover:border-[#24231F]/40 transition-all duration-300 hover:shadow-sm"
            >
              <div>
                {/* Top Row: Number & Subtitle */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DEDAD2]/60">
                  <span className="font-serif text-3xl font-bold tracking-tight text-[#C4A77D]">
                    {service.number}
                  </span>
                  <span className="text-xs tracking-wider uppercase text-[#77736C]">
                    {service.subtitle}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#24231F] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[#77736C] font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Scope Highlights */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#24231F]/80">
                      <Check className="w-4 h-4 text-[#C4A77D] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Availability Note for conditional services (Events) */}
                {service.availabilityNote && (
                  <div className="mb-6 p-3 rounded bg-[#EAE5DC]/60 border border-[#DEDAD2] text-xs text-[#77736C]">
                    <span className="font-medium text-[#24231F]">Nota de disponibilidade: </span>
                    {service.availabilityNote}
                  </div>
                )}
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-6 border-t border-[#DEDAD2]/60 flex items-center justify-between gap-4">
                <a
                  href={buildWhatsAppLink(service.whatsappPrompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center sm:justify-between gap-3 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F7F5F1] bg-[#24231F] hover:bg-[#383733] rounded-sm transition-all duration-200 group/btn cursor-pointer shadow-xs"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#C4A77D]" />
                    <span>Solicitar proposta no WhatsApp</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#C4A77D] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
