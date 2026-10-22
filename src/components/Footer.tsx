import React from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/siteData';
import { ArrowUp, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenChecklistModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyModal,
  onOpenChecklistModal,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#24231F] text-[#F7F5F1] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand & Signature Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-white block">
              {siteConfig.professional.name}
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C4A77D] font-medium">
              Videomaker · Storymaker
            </p>
            <p className="text-xs sm:text-sm text-[#EAE5DC]/70 font-light max-w-sm leading-relaxed">
              Narrativas audiovisuais e conteúdos estratégicos que valorizam a essência da sua marca e conectam pessoas.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C4A77D] hover:text-[#24231F] border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram de Danieli Tulio"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C4A77D] hover:text-[#24231F] border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp de Danieli Tulio"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C4A77D] font-medium mb-4">
              Navegação
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#EAE5DC]/80 font-light">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Direct Quote via WhatsApp */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C4A77D] font-medium mb-4">
              Orçamentos & Projetos
            </p>
            <p className="text-xs sm:text-sm text-[#EAE5DC]/70 font-light">
              Pronto para planejar sua próxima gravação ou cobertura audiovisual?
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={buildWhatsAppLink("Olá Danieli! Gostaria de falar sobre um orçamento para o meu projeto audiovisual.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#24231F] bg-[#C4A77D] hover:bg-[#d8c09a] rounded-sm transition-colors cursor-pointer"
              >
                <span>Solicitar orçamento no WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenChecklistModal}
                className="w-full text-center text-[11px] text-[#EAE5DC]/60 hover:text-white transition-colors pt-1 cursor-pointer underline underline-offset-2"
              >
                Painel de dados & checklist do projeto
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE5DC]/60 font-light">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>© {currentYear} {siteConfig.professional.name}. Todos os direitos reservados.</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#EAE5DC]/50">
              Desenvolvido por <span className="text-[#EAE5DC]/80 font-medium">{siteConfig.agency.name}</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors focus:outline-none"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
