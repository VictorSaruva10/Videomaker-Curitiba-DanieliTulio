import React from "react";
import { siteConfig, buildWhatsAppLink } from "../config/siteData";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { ScrollText } from "./ScrollText";

export const Services: React.FC = () => {
  return (
    <section
      id="servicos"
      className="relative isolate overflow-hidden bg-[#0A0A0A] py-24 lg:py-32"
    >
      <img
        src="/assets/bastidores-filmagem-cinematografica.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="section-background-image absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="section-background-overlay absolute inset-0 bg-[#0A0A0A]/80"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <ScrollText as="span" className="text-xs font-medium tracking-[0.2em] uppercase text-[#189EA8] mb-3 block">
            Serviços & Formatos
          </ScrollText>
          <ScrollText as="h2" className="text-gradient font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] [text-wrap:balance]">
            Audiovisual que transforma ideias em experiências.
          </ScrollText>
        </div>

        {/* Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {siteConfig.services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.12} className="h-full">
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-[#FFFFFF]/10 bg-[#101010] p-8 transition-all duration-300 hover:border-[#189EA8]/40 hover:shadow-sm sm:p-10">
              <div>
                {/* Top Row: Number & Subtitle */}
                <div className="flex flex-col items-start gap-2 pb-6 mb-6 border-b border-[#FFFFFF]/10 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-secondary text-3xl font-bold tracking-tight text-[#189EA8]">
                    {service.number}
                  </span>
                  <span className="text-xs tracking-wider uppercase text-[#AEAEB6]">
                    {service.subtitle}
                  </span>
                </div>

                {/* Service Title */}
                <ScrollText as="h3" className="font-serif text-2xl sm:text-3xl font-medium text-[#FFFFFF] mb-4">
                  {service.title}
                </ScrollText>

                {(service.previewVideo || service.previewImage) && (
                  <div className="mb-6 aspect-video overflow-hidden rounded-md border border-[#FFFFFF]/10 bg-[#0A0A0A]">
                    {service.previewVideo ? (
                      <video
                        src={service.previewVideo}
                        poster={service.previewImage}
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={service.title}
                        className="h-full w-full object-contain"
                      />
                    ) : service.previewImage ? (
                      <img
                        src={service.previewImage}
                        alt={service.previewAlt || ""}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                )}

                {/* Description */}
                <ScrollText as="p" className="text-base text-[#AEAEB6] font-light leading-relaxed mb-6">
                  {service.description}
                </ScrollText>

                {/* Scope Highlights */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#AEAEB6]"
                    >
                      <Check className="w-4 h-4 text-[#189EA8] shrink-0 mt-0.5" />
                      <ScrollText as="span">{feature}</ScrollText>
                    </li>
                  ))}
                </ul>

                {/* Availability Note for conditional services (Events) */}
                {service.availabilityNote && (
                  <div className="mb-6 p-3 rounded bg-[#101010] border border-[#FFFFFF]/10 text-xs text-[#AEAEB6]">
                    <span className="font-medium text-[#FFFFFF]">
                      Nota de disponibilidade:{" "}
                    </span>
                    {service.availabilityNote}
                  </div>
                )}
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-6 border-t border-[#FFFFFF]/10 flex items-center justify-between gap-4">
                <a
                  href={buildWhatsAppLink(service.whatsappPrompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-traveling-border w-full inline-flex items-center justify-center sm:justify-between gap-3 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0A0A0A] bg-[#189EA8] hover:bg-[#189EA8]/85 rounded-sm transition-all duration-200 group/btn cursor-pointer shadow-xs"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#0A0A0A]" />
                    <span>{service.buttonLabel}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#0A0A0A] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
