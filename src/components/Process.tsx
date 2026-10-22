import React from 'react';
import { siteConfig } from '../config/siteData';

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 lg:py-32 bg-[#F7F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A77D] mb-3 block">
            Metodologia & Etapas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#24231F] leading-[1.15] [text-wrap:balance]">
            Como funciona a criação do seu projeto.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#77736C] font-light">
            Um processo fluido, colaborativo e estruturado para garantir que cada detalhe reflita a essência da sua marca.
          </p>
        </div>

        {/* 4-Step Process with Connecting Hairline */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Line on Large Screens */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-[#DEDAD2] -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {siteConfig.process.map((step) => (
              <div
                key={step.number}
                className="flex flex-col bg-[#F7F5F1] p-6 lg:p-0 rounded-xl lg:rounded-none border lg:border-none border-[#DEDAD2]"
              >
                {/* Step Number Circle Indicator */}
                <div className="w-14 h-14 rounded-full bg-[#24231F] text-[#C4A77D] flex items-center justify-center mb-6 shadow-sm border border-[#24231F]">
                  <span className="font-sans font-bold text-2xl tracking-tight text-[#C4A77D]">{step.number}</span>
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-2xl font-semibold text-[#24231F] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#24231F]/90 font-light leading-relaxed">
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
