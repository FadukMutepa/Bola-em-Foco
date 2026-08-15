import React, { useEffect, useState } from 'react';
import { X, Calendar, Clock, User, Share2, Check, ArrowLeft } from 'lucide-react';
import { NewsArticle, HighlightItem } from '../types';
import { SafeImage } from './SafeImage';

interface NewsModalProps {
  article: NewsArticle | null;
  highlight: HighlightItem | null;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({
  article,
  highlight,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (article || highlight) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, highlight, onClose]);

  if (!article && !highlight) return null;

  const title = article ? article.title : highlight?.title;
  const subtitle = article ? article.subtitle : highlight?.subtitle;
  const imageUrl = article ? article.imageUrl : highlight?.imageUrl;
  const date = article ? article.date : highlight?.date;
  const category = article ? article.category : highlight?.badgeTitle;
  const paragraphs = article ? article.content : highlight?.fullStory || [];
  const author = article ? article.author : 'Equipa Bola em Foco';
  const readTime = article ? article.readTime : '3 min de leitura';

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="article-reader-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors py-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Copiar ligação"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copiado</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Partilhar</span>
                </>
              )}
            </button>
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-4 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-slate-500">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-900 text-white">
              {category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
            {title}
          </h1>

          {/* Subtitle / Lead if exists */}
          {subtitle && (
            <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed mb-5 italic border-l-2 border-emerald-500 pl-3">
              {subtitle}
            </p>
          )}

          {/* Featured Image */}
          {imageUrl && (
            <div className="rounded-xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
              <SafeImage
                src={imageUrl}
                alt={title || 'Bola em Foco'}
                fallbackCategory={category}
                className="w-full h-64 sm:h-80 object-cover"
                priority={true}
              />
              {article?.imageCaption && (
                <p className="p-2.5 text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
                  {article.imageCaption}
                </p>
              )}
            </div>
          )}

          {/* Author info */}
          <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
            <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 font-bold text-xs">
              <User className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">{author}</p>
              <p className="text-[11px] text-slate-500">Jornalismo Desportivo Independente</p>
            </div>
          </div>

          {/* Body paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          {/* Metric highlight if it was from highlights */}
          {highlight?.metricLabel && (
            <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                  {highlight.metricLabel}
                </p>
                <p className="text-xl font-extrabold text-emerald-950">
                  {highlight.metricValue}
                </p>
              </div>
              <span className="text-xs font-medium text-emerald-700 bg-white px-2.5 py-1 rounded-md border border-emerald-200">
                {highlight.badgeTitle}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
