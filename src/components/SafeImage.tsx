import React, { useState } from 'react';
import { Trophy, Users, Award, ShieldCheck, Newspaper } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fallbackCategory?: string;
  className?: string;
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackCategory,
  className = '',
  priority = false,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If no source is provided or if network error occurred, render styled fallback graphic
  if (!src || hasError) {
    const getCategoryDetails = () => {
      switch (fallbackCategory) {
        case 'jogador':
          return {
            gradient: 'from-amber-600 to-amber-900',
            icon: <Award className="w-10 h-10 text-amber-300" />,
            label: 'Jogador em Destaque',
          };
        case 'equipa':
          return {
            gradient: 'from-blue-600 to-blue-900',
            icon: <ShieldCheck className="w-10 h-10 text-blue-300" />,
            label: 'Equipa em Destaque',
          };
        case 'transferencia':
        case 'Transferências':
          return {
            gradient: 'from-emerald-600 to-emerald-900',
            icon: <Users className="w-10 h-10 text-emerald-300" />,
            label: 'Mercado de Transferências',
          };
        default:
          return {
            gradient: 'from-slate-800 to-slate-950',
            icon: <Trophy className="w-10 h-10 text-emerald-400" />,
            label: 'Bola em Foco',
          };
      }
    };

    const details = getCategoryDetails();

    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${details.gradient} flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
      >
        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm mb-2 shadow-inner">
          {details.icon}
        </div>
        <p className="text-xs font-bold text-white/90 tracking-wide line-clamp-1">
          {alt || details.label}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-100 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200/70 flex items-center justify-center">
          <Newspaper className="w-5 h-5 text-slate-400" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
