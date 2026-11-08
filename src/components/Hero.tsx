import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { siteConfig, buildWhatsAppLink } from "../config/siteData";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

const heroContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.15, staggerChildren: 0.12 },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const headline = "Vídeos que conectam marcas e pessoas.";
  const headlineCharacters = Array.from(headline);
  const headlineWords = [
    { text: "Vídeos", italic: false },
    { text: "que", italic: false },
    { text: "conectam", italic: false },
    { text: "marcas", italic: false },
    { text: "e", italic: true },
    { text: "pessoas.", italic: true },
  ];
  let wordCharacterOffset = 0;
  const headlineSegments = headlineWords.map((word, index) => {
    const segment = { ...word, start: wordCharacterOffset };
    wordCharacterOffset += Array.from(word.text).length + (index < headlineWords.length - 1 ? 1 : 0);
    return segment;
  });
  const [visibleCharacterCount, setVisibleCharacterCount] = useState(0);

  useLayoutEffect(() => {
    const heading = headlineRef.current;
    if (!heading) return;

    const alignWordGradients = () => {
      const headingRect = heading.getBoundingClientRect();
      heading.style.setProperty("--hero-headline-gradient-width", `${headingRect.width}px`);
      heading.style.setProperty("--hero-headline-gradient-height", `${headingRect.height}px`);

      heading.querySelectorAll<HTMLElement>(".hero-headline-word-visible").forEach((word) => {
        const wordRect = word.parentElement?.getBoundingClientRect();
        if (!wordRect) return;
        const paddingLeft = Number.parseFloat(
          getComputedStyle(word.parentElement!).paddingLeft,
        ) || 0;
        word.style.setProperty(
          "--hero-headline-gradient-x",
          `${headingRect.left - wordRect.left - paddingLeft}px`,
        );
        word.style.setProperty("--hero-headline-gradient-y", `${headingRect.top - wordRect.top}px`);
      });
    };

    alignWordGradients();
    const observer = new ResizeObserver(alignWordGradients);
    observer.observe(heading);
    document.fonts?.ready.then(alignWordGradients);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleCharacterCount(headlineCharacters.length);
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let resolveWait: (() => void) | undefined;

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        resolveWait = resolve;
        timeoutId = setTimeout(() => {
          timeoutId = undefined;
          resolveWait = undefined;
          resolve();
        }, duration);
      });

    const animateLoop = async () => {
      while (!cancelled) {
        setVisibleCharacterCount(0);
        for (let count = 1; count <= headlineCharacters.length; count += 1) {
          await wait(90);
          if (cancelled) return;
          setVisibleCharacterCount(count);
        }

        await wait(1500);
        if (cancelled) return;

        for (let count = headlineCharacters.length - 1; count >= 0; count -= 1) {
          await wait(50);
          if (cancelled) return;
          setVisibleCharacterCount(count);
        }

        await wait(500);
      }
    };

    void animateLoop();
    return () => {
      cancelled = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
        resolveWait?.();
        resolveWait = undefined;
      }
    };
  }, [shouldReduceMotion, headlineCharacters.length]);

  const renderedCharacterCount = shouldReduceMotion
    ? headlineCharacters.length
    : visibleCharacterCount;

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector("#portfolio");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#0A0A0A] pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="hero-background-parallax absolute inset-0" aria-hidden="true" />
      <div
        className="hero-background-overlay absolute inset-0"
        aria-hidden="true"
      />
      <div className="hero-ambient-light absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            className="flex flex-col justify-center"
            variants={heroContentVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? false : "visible"}
          >
            {/* Quiet Category Kicker */}
            <motion.div variants={heroItemVariants} className="mb-4 flex flex-col items-start gap-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#AEAEB6] sm:flex-row sm:items-center sm:gap-2 sm:text-xs sm:tracking-[0.2em]">
              <span>Danieli Tulio</span>
              <span
                aria-hidden="true"
                className="hidden text-[#189EA8] sm:inline"
              >
                ·
              </span>
              <span>Produção audiovisual em Curitiba</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <h1
              ref={headlineRef}
              aria-label="Vídeos que conectam marcas e pessoas."
              className="relative text-gradient font-serif text-[3.5rem] sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.96] sm:leading-[1.08] mb-6 [text-wrap:balance]"
            >
              <span className="hero-headline-reservation" aria-hidden="true">
                {headlineSegments.map((word, index) => (
                  <React.Fragment key={word.text}>
                    <span className={`hero-headline-word${word.italic ? " hero-headline-italic italic font-normal" : ""}`}>
                      {word.text}
                    </span>
                    {index < headlineSegments.length - 1 ? " " : null}
                  </React.Fragment>
                ))}
              </span>
              <span className="absolute inset-0" aria-hidden="true">
                {headlineSegments.map((word, index) => {
                  const characterCount = Math.max(
                    0,
                    Math.min(
                      Array.from(word.text).length,
                      renderedCharacterCount - word.start,
                    ),
                  );
                  const visibleWord = Array.from(word.text)
                    .slice(0, characterCount)
                    .join("");

                  return (
                    <React.Fragment key={word.text}>
                      <span className={`hero-headline-word${word.italic ? " hero-headline-italic italic font-normal" : ""}`}>
                        <span className="hero-headline-word-reserve">{word.text}</span>
                        <span className="hero-headline-word-visible">{visibleWord}</span>
                      </span>
                      {index < headlineSegments.length - 1 ? " " : null}
                    </React.Fragment>
                  );
                })}
              </span>
            </h1>

            {/* Complementary Text */}
            <motion.p variants={heroItemVariants} className="text-base sm:text-xl text-[#AEAEB6] leading-[1.4] sm:leading-relaxed max-w-xl mb-8 font-light">
              {siteConfig.professional.bioShort}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-float accent-traveling-border hero-cta-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0A0A0A] bg-[#189EA8] hover:bg-[#189EA8]/85 transition-all duration-200 rounded-sm shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Solicite um orçamento</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0A]" />
              </a>

              <a
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="hero-cta-float hero-cta-float-delayed accent-traveling-border inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#FFFFFF] bg-[#0A0A0A] sm:bg-transparent border border-[#FFFFFF]/10 hover:border-[#FFFFFF]/15 hover:bg-[#101010] transition-all duration-200 rounded-sm cursor-pointer whitespace-nowrap"
              >
                <span>Conheça meu trabalho</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#AEAEB6]" />
              </a>
            </motion.div>

            {/* Location & Authenticity Note */}
            <motion.div variants={heroItemVariants} className="mt-8 pt-6 border-t border-[#FFFFFF]/10 flex items-center gap-2 text-xs text-[#AEAEB6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#189EA8]"></span>
              <span>{siteConfig.professional.location}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
