import React from 'react';
import { siteConfig } from '../config/siteData';

export const Process: React.FC = () => {
  return (
    <section id="processo" className="relative isolate overflow-hidden bg-[#0A0A0A] py-24 lg:py-32">
      <img
        src="/assets/studio-background-optimized.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/80" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#189EA8] mb-3 block">
            Metodologia & Etapas
          </span>
          <h2 className="text-gradient font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] [text-wrap:balance]">
            Como funciona a criação do seu projeto.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AEAEB6] font-light">
            Um processo fluido, colaborativo e estruturado para garantir que cada detalhe reflita a essência da sua marca.
          </p>
        </div>

        {/* 4-Step Process with Connecting Hairline */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Line on Large Screens */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/10 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {siteConfig.process.map((step) => (
              <div
                key={step.number}
                className="flex flex-col rounded-xl border border-[#FFFFFF]/10 bg-[#101010]/75 p-6 backdrop-blur-sm lg:rounded-none lg:border-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
              >
                {/* Step Number Circle Indicator */}
                <div className="w-14 h-14 rounded-full bg-[#101010] text-[#189EA8] flex items-center justify-center mb-6 shadow-sm border border-[#FFFFFF]/15">
                  <span className="font-sans font-bold text-2xl tracking-tight text-[#189EA8]">{step.number}</span>
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-2xl font-semibold text-[#FFFFFF] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#AEAEB6] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
