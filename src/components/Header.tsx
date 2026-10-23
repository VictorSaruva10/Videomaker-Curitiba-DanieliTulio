import React, { useState, useEffect } from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A] backdrop-blur-md border-b border-[#FFFFFF]/10 py-3.5 shadow-[0_4px_20px_-10px_rgba(24,158,168,0.12)]'
          : 'bg-[#0A0A0A] backdrop-blur-sm border-b border-[#FFFFFF]/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group flex flex-col items-start whitespace-nowrap shrink-0 transition-opacity hover:opacity-80"
          >
            <span             className="text-gradient font-serif text-xl sm:text-2xl font-semibold tracking-wider">
              {siteConfig.professional.name}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-sans text-[#AEAEB6] font-medium -mt-0.5">
              Videomaker · Storymaker
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#AEAEB6]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 transition-colors hover:text-[#FFFFFF] relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#189EA8] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Direct to WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppLink("Olá, Danieli! Conheci seu trabalho pelo site e gostaria de solicitar um orçamento para o meu projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider uppercase text-[#FFFFFF] bg-transparent border border-[#189EA8]/50 hover:border-[#189EA8] hover:bg-[#189EA8] hover:text-[#0A0A0A] rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Solicitar orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FFFFFF] hover:text-[#189EA8] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#FFFFFF]/10 px-6 py-6 shadow-xl animate-in fade-in duration-200">
          <nav aria-label="Navegação móvel" className="flex flex-col gap-4 text-sm font-medium text-[#FFFFFF]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 border-b border-[#FFFFFF]/10 text-base font-serif tracking-wide hover:text-[#189EA8] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={buildWhatsAppLink("Olá, Danieli! Conheci seu trabalho pelo site e gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium tracking-wider uppercase text-[#0A0A0A] bg-[#189EA8] hover:bg-[#189EA8]/85 rounded-sm transition-colors cursor-pointer"
              >
                <span>Solicitar orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
