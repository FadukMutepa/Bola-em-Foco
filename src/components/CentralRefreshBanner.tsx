import React from 'react';
import { RotateCw, Sparkles, RefreshCcw, CheckCircle2 } from 'lucide-react';

interface CentralRefreshBannerProps {
  onRefresh: () => void;
  isRefreshing: boolean;
  lastUpdated?: string;
}

export const CentralRefreshBanner: React.FC<CentralRefreshBannerProps> = ({
  onRefresh,
  isRefreshing,
  lastUpdated,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (e.ctrlKey || e.metaKey) {
      window.location.reload();
      return;
    }
    onRefresh();
  };

  return (
    <section
      id="inicio"
      className="pt-8 pb-12 sm:py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden flex flex-col items-center justify-center border-b border-slate-800"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-4 right-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Title Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-6 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Portal Oficial</span>
        </div>

        {/* Central Logo Button that reloads page */}
        <button
          id="central-bola-em-foco-button"
          onClick={handleClick}
          title="Clique para actualizar a página instantaneamente"
          aria-label="Actualizar página Bola em Foco"
          className="group relative w-full max-w-2xl bg-slate-900/90 hover:bg-slate-850 border-2 border-slate-700/80 hover:border-emerald-400 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/40 hover:shadow-emerald-500/20 transition-all duration-200 hover:scale-[1.01] active:scale-95 cursor-pointer flex flex-col items-center"
        >
          {/* Neon gradient glowing frame */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/30 via-emerald-500/30 to-blue-500/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-300 -z-10" />

          {/* Centered Brand visual matching the exact user uploaded image */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7">
            {/* Green glowing soccer ball icon box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:rotate-6 transition-transform duration-200 shrink-0">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-slate-950 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <polygon points="12,7 15.5,9.5 14,14 10,14 8.5,9.5" fill="currentColor" />
                <line x1="12" y1="7" x2="12" y2="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="15.5" y1="9.5" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
                <line x1="14" y1="14" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
                <line x1="10" y1="14" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5" />
                <line x1="8.5" y1="9.5" x2="4" y2="8" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Typography */}
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-none">
                Bola em <span className="text-emerald-400">Foco</span>
              </h1>
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-indigo-300/90 mt-2.5">
                PORTAL DE FUTEBOL
              </p>
            </div>
          </div>

          {/* Interactive instruction & icon */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 w-full flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 group-hover:text-emerald-300">
            {isRefreshing ? (
              <>
                <RefreshCcw className="w-4 h-4 animate-spin text-emerald-300" />
                <span className="text-emerald-300">A actualizar portal...</span>
              </>
            ) : lastUpdated ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Atualizado às {lastUpdated} (Clique para atualizar)</span>
              </>
            ) : (
              <>
                <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                <span>Clique para actualizar a página</span>
              </>
            )}
          </div>
        </button>

        {/* Quick features sub-pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800">
            <RotateCw className="w-3.5 h-3.5 text-emerald-400" />
            Actualização Instantânea
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800">
            Notícias & Opinião
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800">
            Transferências 2026
          </span>
        </div>
      </div>
    </section>
  );
};
