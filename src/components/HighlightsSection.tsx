import React from 'react';
import { User, Shield, RefreshCw, Trophy, ArrowRight, Zap } from 'lucide-react';
import { HighlightItem } from '../types';
import { SafeImage } from './SafeImage';

interface HighlightsSectionProps {
  highlights: HighlightItem[];
  onHighlightClick: (item: HighlightItem) => void;
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({
  highlights,
  onHighlightClick,
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'jogador':
        return <User className="w-4 h-4 text-amber-500" />;
      case 'equipa':
        return <Shield className="w-4 h-4 text-blue-500" />;
      case 'transferencia':
        return <RefreshCw className="w-4 h-4 text-emerald-500" />;
      default:
        return <Trophy className="w-4 h-4 text-emerald-500" />;
    }
  };

  const getAccentBadge = (type: string) => {
    switch (type) {
      case 'jogador':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'equipa':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'transferencia':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="destaques" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-2">
            <Zap className="w-3.5 h-3.5" />
            Foco Semanal
          </div>
          <h2 id="section-destaques-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Em Destaque
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Os protagonistas, as equipas em forma e os maiores movimentos do mercado.
          </p>
        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              id={`highlight-card-${item.id}`}
              onClick={() => onHighlightClick(item)}
              className="group bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-slate-300 cursor-pointer"
            >
              <div>
                {/* Header tag & date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${getAccentBadge(
                      item.type
                    )}`}
                  >
                    {getIcon(item.type)}
                    {item.badgeTitle}
                  </span>
                  <span className="text-[11px] font-medium text-slate-600">
                    {item.date}
                  </span>
                </div>

                {/* Image container with SafeImage */}
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-slate-200">
                  <SafeImage
                    src={item.imageUrl}
                    alt={item.title}
                    fallbackCategory={item.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={false}
                  />
                  {/* Metric overlay pill */}
                  <div className="absolute bottom-2.5 right-2.5 bg-slate-950/85 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-semibold border border-white/10 shadow z-10">
                    <span className="text-slate-300 text-[10px] block leading-none">{item.metricLabel}</span>
                    <span className="text-emerald-400 font-bold text-sm leading-tight">{item.metricValue}</span>
                  </div>
                </div>

                {/* Title & subtitle */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-600 mb-2">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-800">
                <span>Ver análise completa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
