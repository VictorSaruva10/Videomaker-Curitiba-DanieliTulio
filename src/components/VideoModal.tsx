import React, { useEffect, useRef, useState } from 'react';
import { PortfolioItem, siteConfig, buildWhatsAppLink } from '../config/siteData';
import { X, ArrowUpRight, Check, Camera, Instagram, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

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
  const [likedProjects, setLikedProjects] = useState<Record<string, boolean>>({});
  const [savedProjects, setSavedProjects] = useState<Record<string, boolean>>({});
  const [shareCopied, setShareCopied] = useState(false);

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

  useEffect(() => {
    setShareCopied(false);
  }, [isOpen, project?.id]);

  if (!isOpen) return null;

  const isPhoto = project?.mediaType === 'photo';
  const title = project?.title || customTitle || (isPhoto ? 'Fotografia' : 'Reprodução de Vídeo');
  const interactionKey = project?.id || customVideoUrl || 'custom-video';
  const isLiked = Boolean(likedProjects[interactionKey]);
  const isSaved = Boolean(savedProjects[interactionKey]);
  const instagramUrl = project?.instagramUrl || siteConfig.contact.instagramUrl;
  const videoSrc = project?.videoUrl || customVideoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
  const poster = project?.coverImage;

  const whatsappMessage = isPhoto
    ? `Olá Danieli! Vi a foto "${title}" no seu site e gostaria de saber se podemos desenvolver uma produção fotográfica e audiovisual semelhante para a minha marca.`
    : `Olá Danieli! Assisti ao projeto "${title}" no seu site e gostaria de saber se podemos desenvolver algo semelhante para a minha marca.`;

  const handleShare = async () => {
    const url = project?.instagramUrl || window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, text: project?.description, url });
      } else {
        await navigator.clipboard.writeText(url);
        setShareCopied(true);
      }
    } catch {
      setShareCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-md animate-in fade-in duration-200 sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        className={isPhoto
          ? "relative flex h-[95dvh] max-h-[900px] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101010] text-[#FFFFFF] shadow-2xl"
          : "relative flex max-h-[92dvh] w-full max-w-[420px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101010] text-[#FFFFFF] shadow-2xl"}
      >
        {isPhoto ? (
          <>
            <div className="shrink-0 flex items-center justify-between border-b border-white/10 bg-[#101010] px-6 py-4">
              <div className="flex items-center gap-2.5">
                <Camera className="h-4 w-4 text-[#189EA8]" />
                <h3 id="video-modal-title" className="max-w-md truncate font-serif text-lg font-medium text-white sm:text-xl">
                  {title}
                </h3>
                <span className="hidden rounded border border-[#189EA8]/30 bg-[#189EA8]/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#189EA8] sm:inline-block">
                  Fotografia
                </span>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-[#101010]/10 hover:text-white focus:outline-none"
                aria-label="Fechar visualizador de foto"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#0A0A0A] p-4 sm:p-6">
              <img
                src={project?.coverImage}
                alt={title}
                className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            <div className="shrink-0 flex flex-col justify-between gap-4 border-t border-white/10 bg-[#101010] p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
              <div className="space-y-1">
                {project && (
                  <div className="flex items-center gap-2 text-xs text-[#AEAEB6]">
                    <span>{project.category}</span>
                    <span aria-hidden="true" className="text-[#189EA8]">·</span>
                    <span>Cliente: {project.client}</span>
                    <span aria-hidden="true" className="text-[#189EA8]">·</span>
                    <span>Ano: {project.year}</span>
                  </div>
                )}
                <p className="max-w-2xl text-xs font-light text-[#AEAEB6] sm:text-sm">
                  {project?.description || 'Conteúdo audiovisual autoral com direção de fotografia, captação e pós-produção profissional.'}
                </p>
                {project?.deliverables && (
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#189EA8]">
                    {project.deliverables.map((del, i) => (
                      <span key={i} className="inline-flex items-center gap-1">
                        <Check className="h-3 w-3 text-[#189EA8]" />
                        {del}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={buildWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#189EA8] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] shadow-sm transition-colors hover:bg-[#189EA8]/85"
              >
                <span>Solicitar projeto semelhante</span>
                <ArrowUpRight className="h-4 w-4 text-[#0A0A0A]" />
              </a>
            </div>
          </>
        ) : (
          <>
            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-[#101010] px-4 py-3 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={siteConfig.media.portrait}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 shrink-0 rounded-full border border-[#189EA8]/50 object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{siteConfig.professional.founder}</p>
                  <p className="truncate text-xs text-[#AEAEB6]">{project?.category || 'Vídeo'}</p>
                  <h3 id="video-modal-title" className="sr-only">{title}</h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 rounded-full p-2 text-white/75 transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
                aria-label="Fechar reprodutor de vídeo"
              >
                <X className="h-6 w-6" />
              </button>
            </header>

            <div className="flex min-h-0 flex-1 flex-col items-center overflow-y-auto">
              <div className="flex w-full shrink-0 flex-col items-center justify-center bg-black p-3 sm:p-4">
                <div className="relative aspect-[9/16] h-[min(48dvh,440px)] max-h-full max-w-full overflow-hidden rounded-md bg-black md:h-[min(66dvh,580px)]">
                  <video
                    ref={videoRef}
                    poster={poster}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full object-contain"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Seu navegador não suporta este formato de vídeo.
                  </video>
                </div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ${title} no Instagram`}
                  className="mt-3 inline-flex w-full max-w-[340px] items-center gap-2 text-sm text-[#189EA8] transition-colors hover:text-white"
                >
                  <span>Ver mais no Instagram</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <div className="mt-3 w-full max-w-[340px] border-t border-white/10 pt-2">
                  <div className="flex items-center gap-3 text-white" role="group" aria-label="Ações do vídeo">
                  <button
                    type="button"
                    onClick={() => setLikedProjects((current) => ({ ...current, [interactionKey]: !current[interactionKey] }))}
                    aria-label={isLiked ? 'Remover curtida' : 'Curtir vídeo'}
                    aria-pressed={isLiked}
                    title={isLiked ? 'Curtido' : 'Curtir'}
                    className={`rounded-full p-2 transition-colors ${isLiked ? 'text-[#189EA8]' : 'text-white hover:text-[#189EA8]'}`}
                  >
                    <Heart className="h-6 w-6" fill={isLiked ? 'currentColor' : 'none'} aria-hidden="true" />
                  </button>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir comentários no Instagram"
                    title="Comentar no Instagram"
                    className="rounded-full p-2 text-white/80 transition-colors hover:text-[#189EA8]"
                  >
                    <MessageCircle className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={handleShare}
                    aria-label="Compartilhar vídeo"
                    title="Compartilhar"
                    className="rounded-full p-2 text-white transition-colors hover:text-[#189EA8]"
                  >
                    <Send className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSavedProjects((current) => ({ ...current, [interactionKey]: !current[interactionKey] }))}
                    aria-label={isSaved ? 'Remover vídeo dos salvos' : 'Salvar vídeo'}
                    aria-pressed={isSaved}
                    title={isSaved ? 'Salvo' : 'Salvar'}
                    className={`rounded-full p-2 transition-colors ${isSaved ? 'text-[#189EA8]' : 'text-white hover:text-[#189EA8]'}`}
                  >
                    <Bookmark className="h-6 w-6" fill={isSaved ? 'currentColor' : 'none'} aria-hidden="true" />
                  </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-1 pb-1">
                    {isLiked || isSaved || shareCopied ? (
                      <p role="status" className="text-xs font-medium text-white">
                    {isLiked && 'Você curtiu este vídeo.'}
                    {isSaved && ' Vídeo salvo nesta sessão.'}
                    {shareCopied && ' Link copiado.'}
                      </p>
                    ) : <span aria-hidden="true" />}
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-3 border-t border-white/10 px-1 pt-3 text-sm text-[#AEAEB6]">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-0 flex-1 truncate transition-colors hover:text-white"
                    >
                      Adicione um comentário...
                    </a>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Abrir Instagram"
                      className="shrink-0 text-white transition-colors hover:text-[#189EA8]"
                    >
                      <Instagram className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
};
