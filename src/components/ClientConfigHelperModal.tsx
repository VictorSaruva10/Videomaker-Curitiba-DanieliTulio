import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteData';
import { X, CheckCircle2, AlertCircle, FileCode2 } from 'lucide-react';

interface ClientConfigHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientConfigHelperModal: React.FC<ClientConfigHelperModalProps> = ({
  isOpen,
  onClose,
}) => {
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
        aria-labelledby="checklist-modal-title"
        className="relative w-full max-w-2xl bg-[#F7F5F1] rounded-2xl border border-[#DEDAD2] shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-[#24231F]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#77736C] hover:text-[#24231F] hover:bg-[#EAE5DC] transition-colors focus:outline-none"
          aria-label="Fechar painel de checklist"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#C4A77D] mb-2">
          <FileCode2 className="w-4 h-4" />
          <span>Guia de Ativação do Projeto</span>
        </div>

        <h2 id="checklist-modal-title" className="font-serif text-2xl sm:text-3xl font-medium text-[#24231F] mb-3">
          Dados a Serem Confirmados pela Cliente
        </h2>

        <p className="text-xs sm:text-sm text-[#77736C] font-light leading-relaxed mb-6">
          Para a publicação em produção, todos os dados editáveis da Danieli estão centralizados de forma modular no arquivo <code className="bg-[#EAE5DC] px-1.5 py-0.5 rounded text-xs font-mono text-[#24231F]">src/config/siteData.ts</code>. Abaixo estão os itens para homologação final:
        </p>

        <div className="space-y-3.5 mb-8">
          {siteConfig.clientPendingChecklist.map((check, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#DEDAD2]"
            >
              <AlertCircle className="w-4 h-4 text-[#C4A77D] shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-[#24231F] font-medium leading-snug">
                  {check.item}
                </p>
                <span className="text-[11px] text-[#77736C] tracking-wide mt-0.5 block">
                  Status: {check.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-[#EAE5DC]/60 border border-[#DEDAD2] text-xs text-[#24231F]">
          <span className="font-semibold block mb-1">Como atualizar os dados:</span>
          Basta abrir <code className="font-mono bg-white px-1 rounded">src/config/siteData.ts</code> e alterar o campo desejado (como <code className="font-mono">contact.whatsappNumber</code> ou <code className="font-mono">media.heroVideoUrl</code>). As alterações são propagadas instantaneamente por todo o site.
        </div>

        <div className="mt-8 pt-6 border-t border-[#DEDAD2] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#F7F5F1] bg-[#24231F] hover:bg-[#383733] rounded-sm transition-colors cursor-pointer"
          >
            Fechar painel
          </button>
        </div>
      </div>
    </div>
  );
};
