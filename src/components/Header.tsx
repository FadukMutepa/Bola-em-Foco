import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Activity, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-md text-white border-b border-slate-800'
          : 'bg-slate-900 text-white border-b border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('inicio');
            }}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-900/20 group-hover:scale-105 transition-transform duration-200">
              {/* Football SVG icon */}
              <svg
                className="w-6 h-6 text-slate-950 fill-current"
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
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Bola em <span className="text-emerald-400">Foco</span>
              </span>
              <span className="hidden sm:block text-[10px] tracking-widest uppercase text-slate-400 font-medium">
                Portal de Futebol
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            <button
              id="nav-link-inicio"
              onClick={() => handleNavClick('inicio')}
              className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              Início
            </button>
            <button
              id="nav-link-noticias"
              onClick={() => handleNavClick('noticias')}
              className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              Notícias
            </button>
            <button
              id="nav-link-destaques"
              onClick={() => handleNavClick('destaques')}
              className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              Destaques
            </button>
            <button
              id="nav-link-sobre"
              onClick={() => handleNavClick('sobre')}
              className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              Sobre
            </button>
          </nav>

          {/* Search bar / Search toggle */}
          <div className="flex items-center gap-3">
            <div className="relative hidden lg:block w-64">
              <input
                id="header-search-input-desktop"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Pesquisar notícias..."
                className="w-full bg-slate-800/90 text-sm text-slate-100 placeholder-slate-400 pl-9 pr-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              {searchQuery && (
                <button
                  id="clear-search-desktop"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white"
                  title="Limpar pesquisa"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile Search Button */}
            <button
              id="mobile-search-toggle-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Abrir pesquisa"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="hamburger-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search dropdown */}
        {isSearchOpen && (
          <div className="lg:hidden py-3 px-1 border-t border-slate-800 animate-fadeIn">
            <div className="relative">
              <input
                id="header-search-input-mobile"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Pesquisar por título, jogador, clube..."
                autoFocus
                className="w-full bg-slate-800 text-sm text-slate-100 placeholder-slate-400 pl-9 pr-8 py-2.5 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn"
        >
          <button
            id="mobile-nav-inicio"
            onClick={() => handleNavClick('inicio')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
          >
            Início
          </button>
          <button
            id="mobile-nav-noticias"
            onClick={() => handleNavClick('noticias')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
          >
            Notícias
          </button>
          <button
            id="mobile-nav-destaques"
            onClick={() => handleNavClick('destaques')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
          >
            Destaques
          </button>
          <button
            id="mobile-nav-sobre"
            onClick={() => handleNavClick('sobre')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
          >
            Sobre o Bola em Foco
          </button>

          <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Bola em Foco © 2026</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Ao Vivo
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
