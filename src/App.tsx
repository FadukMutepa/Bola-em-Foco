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
      {/* 1. CABEÇALHO */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectCategory={handleCategorySelect}
      />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 2. LOGO BOLA EM FOCO / BOTÃO CENTRAL DE ACTUALIZAR */}
        <CentralRefreshBanner />

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
