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
        className="relative w-full max-w-2xl bg-[#0A0A0A] rounded-2xl border border-[#FFFFFF]/10 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-[#FFFFFF]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#AEAEB6] hover:text-[#FFFFFF] hover:bg-[#101010] transition-colors focus:outline-none"
          aria-label="Fechar painel de checklist"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#189EA8] mb-2">
          <FileCode2 className="w-4 h-4" />
          <span>Guia de Ativação do Projeto</span>
        </div>

        <h2 id="checklist-modal-title" className="font-serif text-2xl sm:text-3xl font-medium text-[#FFFFFF] mb-3">
          Dados a Serem Confirmados pela Cliente
        </h2>

        <p className="text-xs sm:text-sm text-[#AEAEB6] font-light leading-relaxed mb-6">
          Para a publicação em produção, todos os dados editáveis da Danieli estão centralizados de forma modular no arquivo <code className="bg-[#101010] px-1.5 py-0.5 rounded text-xs font-mono text-[#FFFFFF]">src/config/siteData.ts</code>. Abaixo estão os itens para homologação final:
        </p>

        <div className="space-y-3.5 mb-8">
          {siteConfig.clientPendingChecklist.map((check, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3.5 rounded-lg bg-[#101010] border border-[#FFFFFF]/10"
            >
              <AlertCircle className="w-4 h-4 text-[#189EA8] shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-[#FFFFFF] font-medium leading-snug">
                  {check.item}
                </p>
                <span className="text-[11px] text-[#AEAEB6] tracking-wide mt-0.5 block">
                  Status: {check.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-[#101010] border border-[#FFFFFF]/10 text-xs text-[#AEAEB6]">
          <span className="font-semibold block mb-1">Como atualizar os dados:</span>
          Basta abrir <code className="font-mono bg-[#101010] px-1 rounded">src/config/siteData.ts</code> e alterar o campo desejado (como <code className="font-mono">contact.whatsappNumber</code> ou <code className="font-mono">professional.bioShort</code>). As alterações são propagadas instantaneamente por todo o site.
        </div>

        <div className="mt-8 pt-6 border-t border-[#FFFFFF]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0A0A0A] bg-[#189EA8] hover:bg-[#189EA8]/85 rounded-sm transition-colors cursor-pointer"
          >
            Fechar painel
          </button>
        </div>
      </div>
    </div>
  );
};
