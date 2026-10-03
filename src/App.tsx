import React, { useState } from 'react';
import { Header } from './components/Header';
import { CentralRefreshBanner } from './components/CentralRefreshBanner';
import { LatestNews } from './components/LatestNews';
import { HighlightsSection } from './components/HighlightsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { NewsModal } from './components/NewsModal';
import { LATEST_NEWS, HIGHLIGHTS_DATA } from './data/mockData';
import { Category, NewsArticle, HighlightItem } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todas');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [activeHighlight, setActiveHighlight] = useState<HighlightItem | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setSearchQuery('');
    setSelectedCategory('Todas');
    setActiveArticle(null);
    setActiveHighlight(null);

    const now = new Date();
    const timeFormatted = now.toLocaleTimeString('pt-PT', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    setLastUpdated(timeFormatted);
    setToastMessage('Portal atualizado com sucesso!');

    setTimeout(() => {
      setIsRefreshing(false);
    }, 250);

    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleOpenArticle = (article: NewsArticle) => {
    setActiveArticle(article);
    setActiveHighlight(null);
  };

  const handleOpenHighlight = (item: HighlightItem) => {
    setActiveHighlight(item);
    setActiveArticle(null);
  };

  const handleCloseModal = () => {
    setActiveArticle(null);
    setActiveHighlight(null);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category as Category);
    const noticiasEl = document.getElementById('noticias');
    if (noticiasEl) {
      noticiasEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-slate-950">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white border border-emerald-500/40 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. CABEÇALHO */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectCategory={handleCategorySelect}
      />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 2. LOGO BOLA EM FOCO / BOTÃO CENTRAL DE ACTUALIZAR */}
        <CentralRefreshBanner
          onRefresh={handleRefresh}
          isRefreshing={isRefreshing}
          lastUpdated={lastUpdated}
        />

        {/* 3. ÚLTIMAS NOTÍCIAS */}
        <LatestNews
          articles={LATEST_NEWS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onArticleClick={handleOpenArticle}
        />

        {/* 4. DESTAQUES */}
        <HighlightsSection
          highlights={HIGHLIGHTS_DATA}
          onHighlightClick={handleOpenHighlight}
        />

        {/* 5. SOBRE */}
        <AboutSection />
      </main>

      {/* 6. RODAPÉ */}
      <Footer />

      {/* Article / Highlight Reading Modal without leaving page */}
      <NewsModal
        article={activeArticle}
        highlight={activeHighlight}
        onClose={handleCloseModal}
      />
    </div>
  );
}
