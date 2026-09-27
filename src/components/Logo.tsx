import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'compact';
  theme?: 'dark' | 'light' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
}

export const LogoSymbol: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      aria-label="ANDEOLA Symbol"
    >
      <defs>
        <linearGradient id="andeolaGradPrimary" x1="4" y1="36" x2="24" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="andeolaGradAccent" x1="16" y1="36" x2="36" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        <linearGradient id="andeolaGradBeam" x1="12" y1="22" x2="34" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      {/* Background soft tech tile for crisp isolation */}
      <rect width="40" height="40" rx="9" fill="#111827" />

      {/* Left structural pillar - ascending geometric wing */}
      <path
        d="M8 32L17.5 7H22.5L13 32H8Z"
        fill="url(#andeolaGradPrimary)"
      />

      {/* Right dynamic facet - upward forward momentum vector */}
      <path
        d="M21.5 7L32 32H26.8L21 18.2L18.5 24H14.2L21.5 7Z"
        fill="url(#andeolaGradAccent)"
      />

      {/* Digital bridging nexus node (Solutions & Progress beam) */}
      <path
        d="M13.2 24.5H28.5L26.5 28.5H11.2L13.2 24.5Z"
        fill="url(#andeolaGradBeam)"
        opacity="0.9"
      />

      {/* Precision tech spark indicator */}
      <circle cx="28.5" cy="11.5" r="2.2" fill="#06B6D4" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  size = 'md',
  className = '',
  showSubtitle = true
}) => {
  const iconSizes = {
    sm: 26,
    md: 34,
    lg: 42,
    xl: 52
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <LogoSymbol size={iconSizes[size]} />
      
      {variant !== 'icon' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-extrabold tracking-wider font-sans uppercase transition-colors ${
                textSizes[size]
              } ${isLight ? 'text-white' : 'text-[#111827]'}`}
              style={{ letterSpacing: '0.08em' }}
            >
              ANDEOLA
            </span>
          </div>

          {showSubtitle && (
            <span
              className={`text-[9px] font-semibold tracking-[0.22em] uppercase mt-1 ${
                isLight ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              ECO RANKING
            </span>
          )}
        </div>
      )}
    </div>
  );
};
