import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/siteData";
import { Reveal } from "./Reveal";
import { ScrollText } from "./ScrollText";
import { useReducedMotion } from "motion/react";

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [videoNearViewport, setVideoNearViewport] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const restartBeforeEnd = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    if (Number.isFinite(video.duration) && video.duration - video.currentTime <= 1.5) {
      video.currentTime = 0;
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoNearViewport(entry.isIntersecting);
        if (entry.isIntersecting && !shouldReduceMotion) {
          setShouldLoadVideo(true);
        }
      },
      { rootMargin: "0px" },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  useEffect(() => {
    const video = backgroundVideoRef.current;
    if (!video || !shouldLoadVideo) return;

    if (shouldReduceMotion || !videoNearViewport) {
      video.pause();
    } else if (video.paused) {
      void video.play().catch((error: unknown) => {
        console.warn("Process background video could not start.", error);
      });
    }
  }, [shouldLoadVideo, shouldReduceMotion, videoNearViewport]);

  return (
    <section
      ref={sectionRef}
      id="processo"
      className="relative isolate overflow-hidden bg-[#0A0A0A] py-24 lg:py-32"
    >
      <video
        ref={backgroundVideoRef}
        src={shouldLoadVideo ? "/assets/videos/ilha%20do%20mel.mp4" : undefined}
        poster={shouldLoadVideo ? "/assets/ilha%20do%20mel.png" : undefined}
        aria-hidden="true"
        muted
        loop
        playsInline
        preload="none"
        onTimeUpdate={restartBeforeEnd}
        className="process-background-video section-background-image absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="process-background-overlay section-background-overlay absolute inset-0 bg-[#0A0A0A]/35"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="process-copy-backdrop max-w-2xl mb-16 lg:mb-24">
          <ScrollText as="span" className="text-xs font-medium tracking-[0.2em] uppercase text-[#189EA8] mb-3 block">
            Metodologia & Etapas
          </ScrollText>
          <ScrollText as="h2" className="text-gradient font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] [text-wrap:balance]">
            Como funciona a criação do seu projeto.
          </ScrollText>
          <ScrollText as="p" className="mt-4 text-base sm:text-lg text-[#AEAEB6] font-light">
            Um processo fluido, colaborativo e estruturado para garantir que
            cada detalhe reflita a essência da sua marca.
          </ScrollText>
        </div>

        {/* 4-Step Process with Connecting Hairline */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Line on Large Screens */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/10 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {siteConfig.process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-[#FFFFFF]/10 bg-[#101010]/75 p-6 backdrop-blur-sm lg:rounded-none lg:border-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
                {/* Step Number Circle Indicator */}
                <div className="w-14 h-14 rounded-full bg-[#101010] text-[#189EA8] flex items-center justify-center mb-6 shadow-sm border border-[#FFFFFF]/15">
                  <span className="font-secondary font-bold text-2xl tracking-tight text-[#189EA8]">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <ScrollText as="h3" className="font-serif text-2xl font-semibold text-[#FFFFFF] mb-3">
                  {step.title}
                </ScrollText>

                {/* Step Description */}
                <ScrollText as="p" className="text-sm text-[#AEAEB6] font-light leading-relaxed">
                  {step.description}
                </ScrollText>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
