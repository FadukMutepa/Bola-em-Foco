import React from 'react';
import { Calendar, ArrowUpRight, BookOpen } from 'lucide-react';
import { NewsArticle, Category } from '../types';
import { SafeImage } from './SafeImage';

interface LatestNewsProps {
  articles: NewsArticle[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  searchQuery: string;
  onArticleClick: (article: NewsArticle) => void;
}

const CATEGORIES: Category[] = ['Todas', 'Notícias', 'Transferências', 'Opinião', 'Curiosidades'];

export const LatestNews: React.FC<LatestNewsProps> = ({
  articles,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onArticleClick,
}) => {
  // Filter logic
  const filteredArticles = articles.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Todas' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Notícias':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Transferências':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Opinião':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Curiosidades':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="noticias" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with category filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                Atualidade
              </span>
            </div>
            <h2 id="section-latest-news-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Últimas Notícias
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Fique a par de tudo o que acontece dentro e fora das quatro linhas.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`filter-category-${cat.toLowerCase()}`}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10'
                    : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* If search is active, show query feedback */}
        {searchQuery && (
          <div className="mb-6 p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-sm">
            <span className="text-slate-600">
              A mostrar resultados para: <strong className="text-slate-900 font-semibold">"{searchQuery}"</strong>
            </span>
            <span className="text-xs text-slate-500">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
            </span>
          </div>
        )}

        {/* News Cards Grid (6 cards) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                id={`news-card-${article.id}`}
                onClick={() => onArticleClick(article)}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image Container with SafeImage */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <SafeImage
                    src={article.imageUrl}
                    alt={article.title}
                    fallbackCategory={article.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase border ${getCategoryColor(
                        article.category
                      )}`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date and Read Time */}
                    <div className="flex items-center gap-2 text-xs text-slate-600 mb-2.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                      <span className="text-slate-300">•</span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug mb-2">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  {/* Card Footer: Read more prompt */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600 group-hover:text-emerald-700">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      Ler notícia completa
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-emerald-50 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 font-medium">Nenhuma notícia encontrada para os critérios selecionados.</p>
            <button
              onClick={() => {
                onSelectCategory('Todas');
              }}
              className="mt-4 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Ver todas as notícias
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
