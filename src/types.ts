export type Category = 'Todas' | 'Notícias' | 'Transferências' | 'Opinião' | 'Curiosidades';

export interface NewsArticle {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  content: string[];
  category: 'Notícias' | 'Transferências' | 'Opinião' | 'Curiosidades';
  imageUrl: string;
  imageCaption?: string;
  date: string;
  author: string;
  readTime: string;
  isHeroFeatured?: boolean;
}

export interface HighlightItem {
  id: string;
  type: 'jogador' | 'equipa' | 'transferencia';
  badgeTitle: string;
  title: string;
  subtitle: string;
  description: string;
  fullStory: string[];
  imageUrl: string;
  metricLabel: string;
  metricValue: string;
  date: string;
}
