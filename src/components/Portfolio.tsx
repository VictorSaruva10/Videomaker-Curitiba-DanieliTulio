import React, { useState } from 'react';
import { siteConfig, PortfolioItem } from '../config/siteData';
import { Play, ArrowUpRight, Camera } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: PortfolioItem) => void;
}

type FilterCategory = 'Todos' | 'Reels & Redes' | 'Eventos & Experiências' | 'Bastidores' | 'Projetos Autorais';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Todos');

  const filterOptions: FilterCategory[] = [
    'Todos',
    'Reels & Redes',
    'Eventos & Experiências',
    'Bastidores',
  ];

  const filteredProjects = activeFilter === 'Todos'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative isolate overflow-hidden border-t border-[#FFFFFF]/10 bg-[#101010] py-24 lg:py-32">
      <img
        src="/assets/portfolio-background-optimized.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/80" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#189EA8] mb-3 block">
              Portfólio Selecionado
            </span>
            <h2 className="text-gradient font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] [text-wrap:balance]">
              Histórias em movimento.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#AEAEB6] font-light">
              Conheça projetos audiovisuais para marcas e conteúdos verticais para redes sociais, além de registros dos bastidores de produção.
            </p>
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
                  ? 'bg-[#189EA8] text-[#0A0A0A] shadow-sm'
                  : 'text-[#AEAEB6] hover:text-[#FFFFFF] hover:bg-[#101010]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const isWide = project.aspectRatio === '16:9';
            const isVertical = project.aspectRatio === '9:16';
            const isPhotoFormat = project.aspectRatio === '3:4';
            const isPhoto = project.mediaType === 'photo';

            const colSpan = isWide
              ? 'lg:col-span-8'
              : (isVertical || isPhotoFormat)
              ? 'lg:col-span-4'
              : 'lg:col-span-6';

            const aspectClass = isPhotoFormat
              ? 'aspect-[3/4]'
              : isVertical
              ? 'aspect-[9/16]'
              : isWide
              ? 'aspect-video'
              : 'aspect-[4/3]';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${isPhoto ? 'Ampliar foto' : 'Assistir vídeo'}: ${project.title}`}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#FFFFFF]/10 hover:border-[#FFFFFF]/15 transition-all duration-300 hover:shadow-md`}
              >
                {/* Media Container */}
                <div className={`relative overflow-hidden w-full ${aspectClass} bg-[#101010]`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full ${project.coverFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                  />
                  
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

                  {/* Category Chip */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[#AEAEB6] border border-white/10 inline-flex items-center gap-1.5">
                      {isPhoto && <Camera className="w-3 h-3 text-[#189EA8]" />}
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details Below Media */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs text-[#AEAEB6] mb-2 font-medium">
                      <span>{project.client}</span>
                      <span aria-hidden="true" className="text-[#189EA8]">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#FFFFFF] group-hover:text-[#189EA8] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#AEAEB6] font-light leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FFFFFF]/10 flex items-center justify-between text-xs font-medium text-[#FFFFFF]">
                    <span className="text-[#AEAEB6]">
                      {isPhoto ? 'Clique para ampliar foto' : 'Clique para assistir ao vídeo'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#189EA8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
