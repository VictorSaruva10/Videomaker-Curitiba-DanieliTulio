import React, { useCallback, useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/siteData';
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, Instagram, X } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const galleryFrames = [
    {
      img: '/assets/bastidores-1.jpg',
      alt: 'Danieli acompanhando uma gravação ao ar livre',
      title: 'Por trás das histórias',
    },
    {
      img: '/assets/D1EA39F1-601C-4DF4-8E97-4AC3E083E1C0.jpg',
      alt: 'Danieli com equipamento de gravação no Jardim Botânico de Curitiba',
      title: 'Um olhar além da câmera',
    },
    {
      img: '/assets/DSC00409_Original.JPG',
      alt: 'Retrato de Danieli com iluminação cinematográfica',
      title: 'Luz que revela',
    },
    {
      img: '/assets/IMG_1205.JPG',
      alt: 'Danieli com câmera em cenário externo no Jardim Botânico',
      title: 'Curitiba como cenário',
    },
    {
      img: '/assets/IMG_1206.JPG',
      alt: 'Danieli segurando o celular preparado para uma gravação ao ar livre',
      title: 'Momentos que ganham vida',
    },
    {
      img: '/assets/IMG_1207.JPG',
      alt: 'Danieli registrando uma cena no Jardim Botânico',
      title: 'Histórias em movimento',
    },
    {
      img: '/assets/IMG_1222.jpg',
      alt: 'Bastidores de uma gravação acompanhada por Danieli',
      title: 'A beleza dos detalhes',
    },
    {
      img: '/assets/IMG_1264.jpg',
      alt: 'Danieli com equipamento de gravação em Curitiba',
      title: 'Um dia de criação',
    },
    {
      img: '/assets/IMG_1265.jpg',
      alt: 'Danieli pronta para gravar no Jardim Botânico',
      title: 'Olhar atento à cena',
    },
    {
      img: '/assets/danieli-bastidores-1314.jpg',
      alt: 'Danieli preparando o celular para uma gravação',
      title: 'Entre a ideia e a imagem',
    },
    {
      img: siteConfig.media.portrait,
      alt: 'Retrato profissional de Danieli Tulio',
      title: 'Quem conta histórias',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedIndexRef = useRef(selectedIndex);
  const trackRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const scrollFrameRef = useRef<number | null>(null);
  selectedIndexRef.current = selectedIndex;

  const scrollToIndex = useCallback((index: number, behavior?: ScrollBehavior) => {
    const track = trackRef.current;
    const slide = track?.querySelector<HTMLElement>(`[data-slide-index="${index}"]`);
    if (!track || !slide) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const trackBounds = track.getBoundingClientRect();
    const slideBounds = slide.getBoundingClientRect();
    track.scrollTo({
      left: track.scrollLeft + slideBounds.left - trackBounds.left - (track.clientWidth - slide.clientWidth) / 2,
      behavior: behavior ?? (prefersReducedMotion ? 'auto' : 'smooth'),
    });
  }, []);

  useEffect(() => {
    scrollToIndex(1, 'auto');
  }, [scrollToIndex]);

  useEffect(() => () => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }
  }, []);

  const isModalOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const index = selectedIndexRef.current;
        if (index !== null) setSelectedIndex((index - 1 + galleryFrames.length) % galleryFrames.length);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        const index = selectedIndexRef.current;
        if (index !== null) setSelectedIndex((index + 1) % galleryFrames.length);
      } else if (event.key === 'Tab') {
        const modal = closeButtonRef.current?.closest('[role="dialog"]');
        const focusable = modal?.querySelectorAll<HTMLElement>('button:not([disabled])');
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isModalOpen, galleryFrames.length]);

  const handleTrackScroll = () => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;

      const center = track.getBoundingClientRect().left + track.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      track.querySelectorAll<HTMLElement>('[data-slide-index]').forEach((slide) => {
        const slideCenter = slide.getBoundingClientRect().left + slide.offsetWidth / 2;
        const distance = Math.abs(center - slideCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = Number(slide.dataset.slideIndex);
        }
      });

      setActiveIndex(nearestIndex);
    });
  };

  const openImage = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
    previousFocusRef.current = event.currentTarget;
    setSelectedIndex(index);
  };

  const navigateCarousel = (direction: -1 | 1) => {
    const nextIndex = Math.max(0, Math.min(galleryFrames.length - 1, activeIndex + direction));
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-[#FFFFFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#189EA8] mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Redes Sociais & Bastidores</span>
            </div>
            <h2 className="text-gradient font-serif text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15]">
              Acompanhe o processo criativo no Instagram.
            </h2>
          </div>

          <div>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FFFFFF] bg-transparent border border-[#189EA8]/50 hover:bg-[#189EA8] hover:text-[#0A0A0A] hover:border-[#189EA8] rounded-sm transition-all duration-200 cursor-pointer whitespace-normal text-center sm:whitespace-nowrap"
            >
              <span>Acompanhe meu trabalho no Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div
          role="region"
          aria-label="Fotografias do portfólio de Danieli Tulio"
          aria-roledescription="carrossel"
          className="relative"
        >
          <div
            ref={trackRef}
            onScroll={handleTrackScroll}
            className="portfolio-carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:gap-6"
          >
            {galleryFrames.map((frame, index) => (
              <button
                key={frame.img}
                data-slide-index={index}
                type="button"
                onClick={(event) => openImage(index, event)}
                aria-label={`Abrir foto ${index + 1} de ${galleryFrames.length}: ${frame.title}`}
                className={`group relative aspect-[4/5] w-[68vw] max-w-[380px] shrink-0 snap-center overflow-hidden rounded-xl bg-[#101010] text-left sm:w-[52vw] sm:max-w-[420px] lg:w-[40vw] lg:max-w-[520px] ${
                  activeIndex === index ? 'opacity-100' : 'opacity-75'
                }`}
              >
                <img
                  src={frame.img}
                  alt={frame.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 p-5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
                  <span className="font-serif text-2xl">{frame.title}</span>
                  <Expand className="mb-1 h-5 w-5 shrink-0" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => navigateCarousel(-1)}
              disabled={activeIndex === 0}
              aria-label="Fotografia anterior"
              className="rounded-full p-2 text-[#FFFFFF] transition-colors hover:bg-[#101010] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2" role="group" aria-label="Selecionar fotografia">
              {galleryFrames.map((frame, index) => (
                <button
                  key={frame.img}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    scrollToIndex(index);
                  }}
                  aria-label={`Ir para foto ${index + 1}: ${frame.title}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  className={`h-1.5 rounded-full transition-all motion-reduce:transition-none ${
                    activeIndex === index ? 'w-7 bg-[#101010]' : 'w-1.5 bg-[#189EA8]/50 hover:bg-[#189EA8]'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigateCarousel(1)}
              disabled={activeIndex === galleryFrames.length - 1}
              aria-label="Próxima fotografia"
              className="rounded-full p-2 text-[#FFFFFF] transition-colors hover:bg-[#101010] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            Foto {activeIndex + 1} de {galleryFrames.length}: {galleryFrames[activeIndex].title}
          </p>
        </div>

        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A] p-4 sm:p-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedIndex(null);
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="instagram-photo-title"
              className="relative flex h-full max-h-[900px] w-full max-w-6xl flex-col items-center justify-center gap-4"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Fechar fotografia ampliada"
                className="absolute right-0 top-0 z-10 rounded-full bg-black/40 p-3 text-white transition-colors hover:bg-black/70"
              >
                <X className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndex((selectedIndex - 1 + galleryFrames.length) % galleryFrames.length)}
                aria-label="Fotografia anterior"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition-colors hover:bg-black/70 sm:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <img
                src={galleryFrames[selectedIndex].img}
                alt={galleryFrames[selectedIndex].alt}
                width={1200}
                height={1500}
                decoding="async"
                className="max-h-[calc(100%-4rem)] max-w-[calc(100%-4rem)] rounded-lg object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedIndex((selectedIndex + 1) % galleryFrames.length)}
                aria-label="Próxima fotografia"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition-colors hover:bg-black/70 sm:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <p id="instagram-photo-title" className="font-serif text-xl text-white">
                {galleryFrames[selectedIndex].title}
              </p>
              <p className="text-xs text-white/60">
                {selectedIndex + 1} / {galleryFrames.length}
              </p>
            </div>
          </div>
        )}

        {/* Profile Handle Reference */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#AEAEB6]">
          <span>Perfil oficial:</span>
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#FFFFFF] hover:text-[#189EA8] transition-colors underline underline-offset-4"
          >
            @{siteConfig.contact.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
};
