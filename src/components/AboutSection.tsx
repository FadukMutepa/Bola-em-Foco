import React from 'react';
import { Newspaper, Compass, Target, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider mb-4">
          <Newspaper className="w-3.5 h-3.5" />
          Quem Somos
        </div>

        {/* Title */}
        <h2 id="section-sobre-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6">
          Sobre o Bola em Foco
        </h2>

        {/* Main Required Description Text */}
        <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
          “O Bola em Foco é uma plataforma independente dedicada à partilha de notícias, análises, opiniões e curiosidades sobre o mundo do futebol.”
        </p>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800 text-left">
          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/60">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Independência</h3>
            <p className="text-xs text-slate-400 leading-normal">
              Conteúdo focado na verdade do jogo, sem ruído desnecessário ou interesses ocultos.
            </p>
          </div>

          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/60">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Análise Tática</h3>
            <p className="text-xs text-slate-400 leading-normal">
              Olhamos para lá do resultado para compreender a estratégia e o talento individual.
            </p>
          </div>

          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/60">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Paixão Pelo Jogo</h3>
            <p className="text-xs text-slate-400 leading-normal">
              Feito por e para quem vive as emoções do desporto rei 24 horas por dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
