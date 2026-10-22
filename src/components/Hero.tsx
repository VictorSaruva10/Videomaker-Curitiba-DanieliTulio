import React, { useRef, useState, useEffect } from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteData';
import { Volume2, VolumeX, Play, Pause, ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenVideoModal: (videoUrl: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideoModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

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
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#77736C] mb-4">
              <span>Videomaker Curitiba</span>
              <span aria-hidden="true" className="text-[#C4A77D]">·</span>
              <span>Storymaker</span>
              <span aria-hidden="true" className="text-[#C4A77D]">·</span>
              <span>Danieli Tulio</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#24231F] leading-[1.12] mb-6 [text-wrap:balance]">
              Sua história{' '}
              <span className="italic font-normal text-[#24231F]/90">merece ser vista.</span>
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

          {/* Right Column: Cinematic Video / Media Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative group rounded-xl overflow-hidden border border-[#DEDAD2] bg-[#24231F] shadow-lg aspect-video sm:aspect-[16/10] lg:aspect-video flex items-center justify-center">
              {/* HTML5 Optimized Video Loop with Poster Fallback */}
              {!videoError ? (
                <video
                  ref={videoRef}
                  poster={siteConfig.media.heroBanner}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover"
                >
                  <source src={siteConfig.media.heroVideoUrl} type="video/quicktime" />
                  <source src={siteConfig.media.heroVideoUrl} type="video/mp4" />
                  Seu navegador não suporta a reprodução deste vídeo.
                </video>
              ) : (
                <img
                  src={siteConfig.media.heroBanner}
                  alt="Produção audiovisual cinematográfica por Danieli Tulio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Video Controls Toolbar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 z-10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md transition-colors text-white focus:outline-none"
                    aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md transition-colors text-white focus:outline-none"
                    aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[11px] font-sans text-white/80 hidden sm:inline-block ml-1">
                    Showreel em reprodução
                  </span>
                </div>

                {/* Lightbox Trigger */}
                <button
                  onClick={() =>
                    onOpenVideoModal(
                      siteConfig.media.heroVideoUrl,
                      'Showreel Institucional — Videomaker Curitiba'
                    )
                  }
                  className="text-[11px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors cursor-pointer"
                >
                  Assistir em tela cheia
                </button>
              </div>

              {/* Subtle Editorial Stamp on Top-Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded bg-black/50 backdrop-blur-md text-[#EAE5DC] border border-white/10">
                  Videomaker Curitiba · Showreel
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
