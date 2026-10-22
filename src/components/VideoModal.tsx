import React, { useEffect, useRef } from 'react';
import { PortfolioItem, buildWhatsAppLink } from '../config/siteData';
import { X, ArrowUpRight, Film, Check } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: PortfolioItem | null;
  customVideoUrl?: string;
  customTitle?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  project,
  customVideoUrl,
  customTitle,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Pause video on close
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const title = project?.title || customTitle || 'Reprodução de Vídeo';
  const videoSrc = project?.videoUrl || customVideoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
  const poster = project?.coverImage;

  const whatsappMessage = `Olá Danieli! Assisti ao projeto "${title}" no seu site e gostaria de saber se podemos desenvolver algo semelhante para a minha marca.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        className="relative w-full max-w-5xl bg-[#1A1917] text-[#F7F5F1] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#24231F]">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#C4A77D]" />
            <h3 id="video-modal-title" className="font-serif text-lg sm:text-xl font-medium text-white truncate max-w-md">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Fechar reprodutor de vídeo"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden flex-1 min-h-[300px] sm:min-h-[460px]">
          <video
            ref={videoRef}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="w-full max-h-[65vh] object-contain"
          >
            <source src={videoSrc} type="video/quicktime" />
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta este formato de vídeo.
          </video>
        </div>

        {/* Bottom Details Bar */}
        <div className="p-6 bg-[#24231F] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            {project && (
              <div className="flex items-center gap-2 text-xs text-[#EAE5DC]/70">
                <span>{project.category}</span>
                <span aria-hidden="true" className="text-[#C4A77D]">·</span>
                <span>Cliente: {project.client}</span>
                <span aria-hidden="true" className="text-[#C4A77D]">·</span>
                <span>Ano: {project.year}</span>
              </div>
            )}
            <p className="text-xs sm:text-sm text-[#EAE5DC]/90 font-light max-w-2xl">
              {project?.description || 'Conteúdo audiovisual autoral com direção de fotografia, captação e pós-produção profissional.'}
            </p>
            {project?.deliverables && (
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#C4A77D]">
                {project.deliverables.map((del, i) => (
                  <span key={i} className="inline-flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#C4A77D]" />
                    {del}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="shrink-0">
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#24231F] bg-[#C4A77D] hover:bg-[#d5bc94] transition-colors rounded-sm cursor-pointer whitespace-nowrap shadow-sm"
            >
              <span>Solicitar projeto semelhante</span>
              <ArrowUpRight className="w-4 h-4 text-[#24231F]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
