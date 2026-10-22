import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteData';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
        className="relative w-full max-w-2xl bg-[#F7F5F1] rounded-2xl border border-[#DEDAD2] shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-[#24231F]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#77736C] hover:text-[#24231F] hover:bg-[#EAE5DC] transition-colors focus:outline-none"
          aria-label="Fechar política de privacidade"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#C4A77D] mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Privacidade & Transparência</span>
        </div>

        <h2 id="privacy-modal-title" className="font-serif text-2xl sm:text-3xl font-medium text-[#24231F] mb-6">
          Política de Privacidade & Termos de Uso
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-[#77736C] leading-relaxed font-light">
          <p>
            Esta política descreve como o site oficial de <strong className="text-[#24231F] font-medium">{siteConfig.professional.name}</strong> lida com informações e contatos em conformidade com as diretrizes da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </p>

          <h3 className="font-serif text-base font-semibold text-[#24231F] pt-2">
            1. Coleta de Informações e Contato
          </h3>
          <p>
            Este site tem caráter institucional e informativo. Não coletamos dados pessoais sensíveis sem seu consentimento expresso. As interações para orçamentos e dúvidas ocorrem de forma voluntária por meio de links diretos para o aplicativo de mensagens WhatsApp.
          </p>

          <h3 className="font-serif text-base font-semibold text-[#24231F] pt-2">
            2. Uso de Imagens e Direitos Autorais
          </h3>
          <p>
            Todas as imagens, vídeos, marcas registradas e identidades visuais apresentadas neste site são de titularidade de {siteConfig.professional.name} ou de clientes com autorização expressa de exibição demonstrativa. É expressamente proibida a reprodução, cópia ou distribuição sem autorização prévia por escrito.
          </p>

          <h3 className="font-serif text-base font-semibold text-[#24231F] pt-2">
            3. Cookies e Desempenho
          </h3>
          <p>
            O site utiliza apenas recursos estritamente necessários para navegação fluida, preservação da preferência de redução de movimento do usuário e carregamento rápido de mídias otimizadas.
          </p>

          <h3 className="font-serif text-base font-semibold text-[#24231F] pt-2">
            4. Dúvidas e Atendimento
          </h3>
          <p>
            Para esclarecimentos sobre o tratamento de dados ou direitos autorais, entre em contato diretamente pelo e-mail <a href={`mailto:${siteConfig.contact.email}`} className="text-[#24231F] underline">{siteConfig.contact.email}</a>.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#DEDAD2] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#F7F5F1] bg-[#24231F] hover:bg-[#383733] rounded-sm transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
