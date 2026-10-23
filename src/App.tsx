import React, { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Positioning } from './components/Positioning';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { InstagramSection } from './components/InstagramSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ClientConfigHelperModal } from './components/ClientConfigHelperModal';
import { PortfolioItem, buildWhatsAppLink } from './config/siteData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleSelectPortfolioProject = (project: PortfolioItem) => {
    setSelectedProject(project);
    setVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] font-sans selection:bg-[#189EA8]/25 selection:text-[#FFFFFF]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-[#189EA8] focus:px-4 focus:py-3 focus:text-[#0A0A0A]"
      >
        Pular para o conteúdo
      </a>
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Portfolio onSelectProject={handleSelectPortfolioProject} />
        <Positioning />
        <Process />
        <Testimonials />
        <InstagramSection />
        <CtaSection />
      </main>

      {/* Footer */}
      <div ref={footerRef}>
        <Footer
          onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
          onOpenChecklistModal={() => setChecklistModalOpen(true)}
        />
      </div>

      {/* Floating Discrete WhatsApp Quick Action */}
      <div
        className={`fixed bottom-6 right-6 z-30 transition-all duration-200 ${
          footerVisible ? 'translate-y-2 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
        aria-hidden={footerVisible}
      >
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={footerVisible ? -1 : 0}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#101010] text-[#FFFFFF] hover:bg-[#189EA8] hover:text-[#0A0A0A] border border-[#189EA8]/40 shadow-xl transition-all duration-200 hover:scale-105 group"
          aria-label="Falar com Danieli no WhatsApp"
        >
          <div className="w-2 h-2 rounded-full bg-[#189EA8] group-hover:scale-125 transition-transform" />
          <MessageCircle className="w-4 h-4 text-[#189EA8] group-hover:text-[#0A0A0A]" />
          <span className="text-xs font-medium tracking-wide hidden sm:inline-block">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Lightbox / Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        project={selectedProject}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Checklist / Info Modal */}
      <ClientConfigHelperModal
        isOpen={checklistModalOpen}
        onClose={() => setChecklistModalOpen(false)}
      />
    </div>
  );
}
