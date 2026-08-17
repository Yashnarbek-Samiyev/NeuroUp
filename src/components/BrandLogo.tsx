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
  showText: _showText = true,
  withTagline: _withTagline = false,
  variant = 'default'
}) => {
  const isWhite = variant === 'white';

  // Dimension scaling
  const heightClasses = {
    sm: 'h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20'
  };

  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      {isWhite ? (
        /* White variant for Dark Footer */
        <div className={`flex items-center gap-1.5 ${heightClasses[size]}`}>
          {/* Logo Composition with crisp high-contrast SVG */}
          <svg 
            viewBox="0 0 420 220" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto drop-shadow-sm"
          >
            {/* Text: "Neuro" */}
            <text 
              x="10" 
              y="145" 
              fill="#ffffff" 
              fontFamily="system-ui, -apple-system, sans-serif" 
              fontWeight="900" 
              fontSize="125" 
              letterSpacing="-2"
            >
              Neuro
            </text>

            {/* Text: "Up" */}
            <text 
              x="245" 
              y="205" 
              fill="#38d4b3" 
              fontFamily="system-ui, -apple-system, sans-serif" 
              fontWeight="900" 
              fontSize="75" 
              letterSpacing="-1"
            >
              Up
            </text>

            {/* Geometric Low-poly Brain at Top Right */}
            <g transform="translate(235, 10) scale(0.85)">
              <polygon points="50,20 20,45 60,60" fill="#38a38f" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="50,20 60,60 100,25" fill="#42b29c" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="100,25 60,60 110,65" fill="#329783" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="100,25 110,65 145,45" fill="#58c6b0" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="145,45 110,65 155,80" fill="#3ea995" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="145,45 155,80 180,70" fill="#4cbda7" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="180,70 155,80 170,110" fill="#329783" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              
              <polygon points="20,45 5,75 40,85" fill="#2d8c79" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="20,45 40,85 60,60" fill="#38a38f" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="5,75 25,115 55,100" fill="#247866" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="5,75 55,100 40,85" fill="#2d8c79" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="40,85 55,100 85,90" fill="#38a38f" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="60,60 40,85 85,90" fill="#42b29c" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="60,60 85,90 110,65" fill="#50c0a9" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="25,115 75,130 55,100" fill="#247866" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="55,100 75,130 110,115" fill="#2d8c79" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="55,100 110,115 85,90" fill="#38a38f" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="85,90 110,115 130,85" fill="#42b29c" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="110,65 85,90 130,85" fill="#58c6b0" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="110,65 130,85 155,80" fill="#50c0a9" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              
              {/* Signature Purple Accent Facet */}
              <polygon points="130,85 110,145 150,120" fill="#6d5ecc" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round"/>
              <polygon points="130,85 150,120 155,80" fill="#5b4ebf" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              
              <polygon points="150,120 135,175 160,135" fill="#2d8c79" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="110,145 135,175 150,120" fill="#38a38f" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="155,80 150,120 170,110" fill="#3ea995" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="170,110 150,120 160,135" fill="#2d8c79" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
            </g>
          </svg>
        </div>
      ) : (
        /* Default Official Brand Logo exactly matching the user's uploaded image */
        <div className={`relative flex items-center ${heightClasses[size]}`}>
          <img 
            src="/logo.png" 
            alt="NeuroUp" 
            className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to SVG if image fails
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />

          {/* SVG Fallback */}
          <svg 
            viewBox="0 0 420 220" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto hidden"
          >
            <text 
              x="10" 
              y="145" 
              fill="#14247d" 
              fontFamily="system-ui, -apple-system, sans-serif" 
              fontWeight="900" 
              fontSize="125" 
              letterSpacing="-2"
            >
              Neuro
            </text>
            <text 
              x="245" 
              y="205" 
              fill="#248270" 
              fontFamily="system-ui, -apple-system, sans-serif" 
              fontWeight="900" 
              fontSize="75" 
              letterSpacing="-1"
            >
              Up
            </text>

            <g transform="translate(235, 10) scale(0.85)">
              <polygon points="50,20 20,45 60,60" fill="#38a38f" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="50,20 60,60 100,25" fill="#42b29c" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="100,25 60,60 110,65" fill="#329783" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="100,25 110,65 145,45" fill="#58c6b0" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="145,45 110,65 155,80" fill="#3ea995" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="145,45 155,80 180,70" fill="#4cbda7" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="180,70 155,80 170,110" fill="#329783" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              
              <polygon points="20,45 5,75 40,85" fill="#2d8c79" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="20,45 40,85 60,60" fill="#38a38f" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="5,75 25,115 55,100" fill="#247866" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="5,75 55,100 40,85" fill="#2d8c79" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="40,85 55,100 85,90" fill="#38a38f" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="60,60 40,85 85,90" fill="#42b29c" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="60,60 85,90 110,65" fill="#50c0a9" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="25,115 75,130 55,100" fill="#247866" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="55,100 75,130 110,115" fill="#2d8c79" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="55,100 110,115 85,90" fill="#38a38f" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="85,90 110,115 130,85" fill="#42b29c" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="110,65 85,90 130,85" fill="#58c6b0" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="110,65 130,85 155,80" fill="#50c0a9" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              
              {/* Signature Purple Accent Facet */}
              <polygon points="130,85 110,145 150,120" fill="#554a9d" stroke="#362f6b" strokeWidth="2.2" strokeLinejoin="round"/>
              <polygon points="130,85 150,120 155,80" fill="#473e87" stroke="#362f6b" strokeWidth="1.8" strokeLinejoin="round"/>
              
              <polygon points="150,120 135,175 160,135" fill="#2d8c79" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="110,145 135,175 150,120" fill="#38a38f" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="155,80 150,120 170,110" fill="#3ea995" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="170,110 150,120 160,135" fill="#2d8c79" stroke="#1d6657" strokeWidth="1.8" strokeLinejoin="round"/>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
