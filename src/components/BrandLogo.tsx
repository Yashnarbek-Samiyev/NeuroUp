import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
  variant?: 'default' | 'white';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  withTagline: _withTagline,
  variant = 'default'
}) => {
  const isWhite = variant === 'white';

  const heightClasses = {
    sm: 'h-10 sm:h-11',
    md: 'h-14 sm:h-16',
    lg: 'h-18 sm:h-20'
  };

  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      <img
        src={isWhite ? '/logo-white.png' : '/logo.png'}
        alt="NeuroUp — Rebuild Your Path"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-sm`}
        loading="eager"
      />
    </div>
  );
};
