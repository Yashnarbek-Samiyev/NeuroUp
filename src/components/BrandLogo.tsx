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
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16'
  };

  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      <img
        src={isWhite ? '/logo-white.png' : '/logo.png'}
        alt="NeuroUp"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  );
};
