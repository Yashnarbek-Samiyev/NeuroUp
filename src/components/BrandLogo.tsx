import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  withTagline?: boolean;
  variant?: 'default' | 'white';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  withTagline = true,
  variant = 'default'
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: { neuro: 'text-lg', up: 'text-base', tagline: 'text-[9px]' },
    md: { neuro: 'text-2xl', up: 'text-xl', tagline: 'text-[10px]' },
    lg: { neuro: 'text-3xl', up: 'text-2xl', tagline: 'text-xs' }
  };

  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric Low-Poly Brain Icon */}
      <div className={`${iconSizes[size]} relative shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Top Parietal & Frontal lobes */}
          <polygon points="50,20 20,45 60,60" fill="#38a38f" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="50,20 60,60 100,25" fill="#42b29c" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="100,25 60,60 110,65" fill="#329783" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="100,25 110,65 145,45" fill="#58c6b0" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="145,45 110,65 155,80" fill="#3ea995" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="145,45 155,80 180,70" fill="#4cbda7" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="180,70 155,80 170,110" fill="#329783" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          
          {/* Left anterior */}
          <polygon points="20,45 5,75 40,85" fill="#2d8c79" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="20,45 40,85 60,60" fill="#38a38f" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="5,75 25,115 55,100" fill="#247866" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="5,75 55,100 40,85" fill="#2d8c79" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="40,85 55,100 85,90" fill="#38a38f" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="60,60 40,85 85,90" fill="#42b29c" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="60,60 85,90 110,65" fill="#50c0a9" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="25,115 75,130 55,100" fill="#247866" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="55,100 75,130 110,115" fill="#2d8c79" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="55,100 110,115 85,90" fill="#38a38f" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="85,90 110,115 130,85" fill="#42b29c" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="110,65 85,90 130,85" fill="#58c6b0" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="110,65 130,85 155,80" fill="#50c0a9" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          
          {/* Distinct Purple Accent Poly Facet */}
          <polygon points="130,85 110,145 150,120" fill="#6d5ecc" stroke={isWhite ? "#ffffff" : "#362f6b"} strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="130,85 150,120 155,80" fill="#5b4ebf" stroke={isWhite ? "#ffffff" : "#362f6b"} strokeWidth="1.8" strokeLinejoin="round"/>
          
          {/* Cerebellum & Stem */}
          <polygon points="150,120 135,175 160,135" fill="#2d8c79" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="110,145 135,175 150,120" fill="#38a38f" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="155,80 150,120 170,110" fill="#3ea995" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
          <polygon points="170,110 150,120 160,135" fill="#2d8c79" stroke={isWhite ? "#ffffff" : "#1d6657"} strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Typography: "NeuroUp" + "Rebuild Your Path" */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-baseline gap-0.5">
            <span className={`font-black tracking-tight ${
              isWhite 
                ? 'text-white' 
                : 'text-[#162276] dark:text-[#60a5fa]'
            } ${textSizes[size].neuro}`}>
              Neuro
            </span>
            <span className={`font-black tracking-tight ${
              isWhite 
                ? 'text-[#38d4b3]' 
                : 'text-[#2b917d] dark:text-[#2dd4bf]'
            } ${textSizes[size].up}`}>
              Up
            </span>
          </div>
          {withTagline && (
            <span className={`font-bold tracking-wider uppercase ${textSizes[size].tagline} ${
              isWhite ? 'text-[#38d4b3]/90' : 'text-[#2b917d] dark:text-[#2dd4bf]'
            }`}>
              Rebuild Your Path
            </span>
          )}
        </div>
      )}
    </div>
  );
};
