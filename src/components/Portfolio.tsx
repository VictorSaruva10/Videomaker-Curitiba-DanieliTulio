import React, { useRef, useState } from "react";
import { siteConfig, PortfolioItem, buildWhatsAppLink } from "../config/siteData";
import { Play, ArrowUpRight, Camera, Instagram, MessageCircle, Heart, Send, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ScrollText } from "./ScrollText";

interface PortfolioProps {
  onSelectProject: (project: PortfolioItem) => void;
}

type FilterCategory =
  | "Todos"
  | "Reels & Redes"
  | "Eventos & Experiências"
  | "Bastidores"
  | "Projetos Autorais";

const PortfolioCover: React.FC<{ project: PortfolioItem }> = ({ project }) => {
  const coverRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: coverRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  return (
    <motion.div
      ref={coverRef}
      className="portfolio-parallax-layer absolute inset-0"
      style={{ y: shouldReduceMotion ? 0 : y }}
    >
      <img
        src={project.coverImage}
        alt={project.title}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className={`portfolio-feature-image h-full w-full ${project.coverFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.06]`}
      />
    </motion.div>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("Todos");
  const carouselRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const filterOptions: FilterCategory[] = [
    "Todos",
    "Reels & Redes",
    "Eventos & Experiências",
    "Bastidores",
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((item) => item.category === activeFilter);

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({
      left: direction * carousel.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="portfolio"
      className="relative isolate overflow-hidden border-t border-[#FFFFFF]/10 bg-[#101010] py-24 lg:py-32"
    >
      <img
        src="/assets/Filmando%20o%20Caf%C3%A9%20no%20Gimbal.png"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollText as="span" className="text-xs font-medium tracking-[0.2em] uppercase text-[#189EA8] mb-3 block">
              Portfólio Selecionado
            </ScrollText>
            <ScrollText as="h2" className="text-gradient font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] [text-wrap:balance]">
              Histórias em movimento.
            </ScrollText>
            <ScrollText as="p" className="mt-3 text-base sm:text-lg text-[#AEAEB6] font-light">
              Conheça projetos audiovisuais para marcas e conteúdos verticais
              para redes sociais, além de registros dos bastidores de produção.
            </ScrollText>
          </div>
        </div>

        {/* Filter Controls (Functional segmented button tabs - Zero-pill discipline) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0A0A0A] rounded-lg border border-[#FFFFFF]/10 mb-12 w-fit max-w-full overflow-x-auto">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#189EA8] text-[#0A0A0A] shadow-sm"
                  : "text-[#AEAEB6] hover:text-[#FFFFFF] hover:bg-[#101010]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Horizontal Portfolio Carousel */}
        <div className="relative">
          {filteredProjects.length > 1 && (
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              aria-label="Projetos anteriores"
              className="absolute left-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[#189EA8]"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {filteredProjects.map((project, index) => {
            const isVertical = project.aspectRatio === "9:16";
            const isPhotoFormat = project.aspectRatio === "3:4";
            const isPhoto = project.mediaType === "photo";

            const aspectClass = isPhotoFormat
              ? "aspect-[3/4]"
              : isVertical
                ? "aspect-[9/16]"
                : project.aspectRatio === "16:9"
                  ? "aspect-video"
                  : "aspect-[4/3]";
            const canonicalUrl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
            const shareMessage = [
              `Olha esse projeto da Danieli Tulio: ${project.title}`,
              project.description,
              project.instagramUrl,
              canonicalUrl ? `${canonicalUrl}#portfolio` : undefined,
            ].filter(Boolean).join("\n");

            return (
              <motion.div
                key={project.id}
                onClick={(event) => {
                  if (event.target instanceof Element && event.target.closest("a")) return;
                  onSelectProject(project);
                }}
                onKeyDown={(event) => {
                  if (event.target instanceof Element && event.target.closest("a")) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelectProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${isPhoto ? "Ampliar foto" : "Assistir vídeo"}: ${project.title}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.55,
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.07, 0.35),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex w-[min(82vw,360px)] shrink-0 snap-start cursor-pointer flex-col overflow-hidden rounded-xl border border-[#FFFFFF]/10 bg-[#0A0A0A] transition-all duration-300 hover:border-[#FFFFFF]/15 hover:shadow-md sm:w-[min(46vw,390px)] lg:w-[min(30vw,360px)]"
              >
                <div className="flex items-center gap-3 border-b border-[#FFFFFF]/10 px-4 py-3.5">
                  <img
                    src={siteConfig.media.portrait}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 shrink-0 rounded-full border border-[#189EA8]/50 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">Danieli Tulio</p>
                    <p className="truncate text-xs text-[#AEAEB6]">{project.category}</p>
                  </div>
                  {project.instagramUrl && (
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.title} no Instagram`}
                      title="Ver no Instagram"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#AEAEB6] transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <Instagram className="h-5 w-5" aria-hidden="true" />
                    </a>
                  )}
                </div>

                {/* Media Container */}
                <div
                  className={`relative overflow-hidden w-full ${aspectClass} bg-[#101010]`}
                >
                  <PortfolioCover project={project} />

                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Icon Overlay (Camera for photos, Play for videos) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#189EA8] group-hover:text-[#FFFFFF] transition-all duration-300 shadow-lg">
                      {isPhoto ? (
                        <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                      )}
                    </div>
                  </div>

                </div>

                <div className="p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-4 text-white">
                    <Heart className="h-5 w-5" aria-hidden="true" />
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Compartilhar ${project.title} no WhatsApp`}
                      title="Compartilhar no WhatsApp"
                      onClick={(event) => event.stopPropagation()}
                      className="text-white transition-colors hover:text-[#189EA8]"
                    >
                      <Send className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm leading-relaxed text-[#AEAEB6]">
                      <ScrollText as="span" className="mr-1 font-semibold text-white">
                        {project.title}
                      </ScrollText>
                      <ScrollText as="span">{project.description}</ScrollText>
                    </p>
                    <p className="mt-2 text-xs text-[#AEAEB6]">
                      {project.client} <span aria-hidden="true" className="mx-1 text-[#189EA8]">·</span> {project.year}
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppLink(
                      project.whatsappPrompt ??
                        `Olá Danieli! Assisti ao projeto "${project.title}" no seu site e gostaria de saber se podemos desenvolver algo semelhante para a minha marca.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="accent-traveling-border inline-flex items-center gap-2 rounded-sm border border-[#189EA8]/50 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#189EA8] transition-colors hover:bg-[#189EA8] hover:text-[#0A0A0A]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Solicitar projeto semelhante</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            );
          })}
          </div>
          {filteredProjects.length > 1 && (
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              aria-label="Próximos projetos"
              className="absolute right-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[#189EA8]"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
