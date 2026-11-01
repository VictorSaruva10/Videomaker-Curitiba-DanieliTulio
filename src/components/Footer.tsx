import React from "react";
import { siteConfig } from "../config/siteData";
import { ArrowUp, Instagram, Mail, Music2 } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101010] text-[#FFFFFF] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 pb-14 border-b border-white/10">
          {/* Brand & Signature Column */}
          <div className="space-y-3">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-white block">
              {siteConfig.professional.founder}
            </span>
            <p className="text-sm text-[#189EA8] font-medium">
              Videomaker &amp; Storymaker
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:items-end">
            <p className="text-sm text-[#AEAEB6]">Curitiba e região</p>
            <div className="flex flex-wrap items-center gap-4 sm:justify-end">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#AEAEB6] hover:text-white transition-colors"
                aria-label="Instagram de Danieli Tulio"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={siteConfig.contact.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#AEAEB6] hover:text-white transition-colors"
                aria-label="TikTok de Danieli Tulio"
              >
                <Music2 className="w-4 h-4" />
                <span>TikTok</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-[#AEAEB6] hover:text-white transition-colors"
                aria-label={`E-mail de contato: ${siteConfig.contact.email}`}
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AEAEB6] font-light">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>
              © {currentYear} {siteConfig.professional.founder}. Todos os
              direitos reservados.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#AEAEB6]">
              Site feito pelo{" "}
              <a
                href="https://instagram.com/nexmi.web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#189EA8] hover:text-white font-medium transition-colors underline underline-offset-2"
              >
                Nexmi.Web
              </a>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#101010]/5 hover:bg-[#101010]/15 text-white transition-colors focus:outline-none"
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
