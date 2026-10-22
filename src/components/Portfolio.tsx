import React, { useState } from 'react';
import { siteConfig, PortfolioItem } from '../config/siteData';
import { Play, ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: PortfolioItem) => void;
}

type FilterCategory = 'Todos' | 'Marcas & Negócios' | 'Reels & Redes' | 'Eventos & Experiências' | 'Bastidores' | 'Projetos Autorais';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Todos');

  const filterOptions: FilterCategory[] = [
    'Todos',
    'Marcas & Negócios',
    'Reels & Redes',
    'Eventos & Experiências',
    'Bastidores',
  ];

  const filteredProjects = activeFilter === 'Todos'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#EAE5DC]/30 border-t border-[#DEDAD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A77D] mb-3 block">
              Portfólio Selecionado
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#24231F] leading-[1.15] [text-wrap:balance]">
              Histórias em movimento.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#77736C] font-light">
              Uma seleção de imagens, projetos e momentos capturados por meio de um olhar criativo.
            </p>
          </div>
        </div>

        {/* Filter Controls (Functional segmented button tabs - Zero-pill discipline) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F7F5F1] rounded-lg border border-[#DEDAD2] mb-12 w-fit max-w-full overflow-x-auto">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#24231F] text-[#F7F5F1] shadow-sm'
                  : 'text-[#77736C] hover:text-[#24231F] hover:bg-[#EAE5DC]/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {filteredProjects.map((project, index) => {
            // Give subtle layout rhythm based on index and aspect ratio
            const isWide = project.aspectRatio === '16:9';
            const isVertical = project.aspectRatio === '9:16';
            const colSpan = isWide
              ? 'lg:col-span-8'
              : isVertical
              ? 'lg:col-span-4'
              : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between rounded-xl overflow-hidden bg-[#F7F5F1] border border-[#DEDAD2] hover:border-[#24231F]/50 transition-all duration-300 hover:shadow-md`}
              >
                {/* Media Container with Play Prompt */}
                <div className={`relative overflow-hidden w-full ${isVertical ? 'aspect-[9/14] sm:aspect-[9/16]' : isWide ? 'aspect-video' : 'aspect-[4/3]'} bg-[#24231F]`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Play Button Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#C4A77D] group-hover:text-[#24231F] transition-all duration-300 shadow-lg">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Category Chip (Clean unboxed text in corner) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[#EAE5DC] border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details Below Media */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs text-[#77736C] mb-2 font-medium">
                      <span>{project.client}</span>
                      <span aria-hidden="true" className="text-[#C4A77D]">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#24231F] group-hover:text-[#C4A77D] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#77736C] font-light leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DEDAD2]/50 flex items-center justify-between text-xs font-medium text-[#24231F]">
                    <span className="text-[#77736C]">Clique para assistir ao vídeo</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C4A77D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
