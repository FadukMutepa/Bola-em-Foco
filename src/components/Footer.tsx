import React from 'react';
import { ArrowUp, Instagram, Youtube, Facebook, MessageCircle, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs">
                B
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Bola em <span className="text-emerald-400">Foco</span>
              </span>
            </div>
            <p className="text-sm font-medium text-slate-300 italic">
              “Informação, paixão e futebol.”
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              id="social-link-instagram"
              href="#instagram"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-400 hover:text-emerald-400 flex items-center justify-center transition-colors text-slate-300"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="social-link-twitter"
              href="#twitter"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-400 hover:text-emerald-400 flex items-center justify-center transition-colors text-slate-300"
              title="X (Twitter)"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              id="social-link-youtube"
              href="#youtube"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-400 hover:text-emerald-400 flex items-center justify-center transition-colors text-slate-300"
              title="YouTube"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              id="social-link-facebook"
              href="#facebook"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-400 hover:text-emerald-400 flex items-center justify-center transition-colors text-slate-300"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              id="social-link-whatsapp"
              href="#whatsapp"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-400 hover:text-emerald-400 flex items-center justify-center transition-colors text-slate-300"
              title="Canal WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs">
            <span>Bola em Foco © 2026</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Topo</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
