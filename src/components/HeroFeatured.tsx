import React from 'react';
import { Calendar, Clock, ArrowRight, Flame } from 'lucide-react';
import { NewsArticle } from '../types';

interface HeroFeaturedProps {
  article: NewsArticle;
  onReadMore: (article: NewsArticle) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({ article, onReadMore }) => {
  return (
    <section id="inicio" className="pt-6 sm:pt-10 pb-10 sm:pb-14 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title / pill */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            Destaque Principal
          </span>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
            Em Foco Mundial
          </span>
        </div>

        {/* Hero Card */}
        <div
          id="hero-featured-card"
          className="group bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
        >
          {/* Image side (Large on Desktop) */}
          <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[440px] overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent lg:hidden" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-500 text-slate-950 shadow-md">
                {article.category}
              </span>
            </div>
          </div>

          {/* Text Content side */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-slate-800/40">
            <div>
              {/* Meta information */}
              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 mb-3">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h1
                id="hero-news-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight mb-4 group-hover:text-emerald-300 transition-colors"
              >
                {article.title}
              </h1>

              {/* Summary */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {article.summary}
              </p>
            </div>

            {/* Author and Read More Action */}
            <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-xs font-bold text-emerald-300">
                  BF
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-200">{article.author}</p>
                  <p className="text-[11px] text-slate-400">Edição Especial</p>
                </div>
              </div>

              <button
                id="hero-read-more-btn"
                onClick={() => onReadMore(article)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer"
              >
                <span>Ler mais</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
