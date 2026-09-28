import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'compact';
  theme?: 'dark' | 'light' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
}

export const LogoSymbol: React.FC<{ size?: number; className?: string; theme?: 'dark' | 'light' | 'auto' }> = ({
  size = 32,
  className = '',
  theme = 'dark'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 group-hover:scale-105 ${className}`}
      aria-label="ANDEOLA Logo Symbol"
    >
      <defs>
        <linearGradient id="andeolaA1" x1="4" y1="36" x2="22" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="andeolaA2" x1="18" y1="36" x2="36" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="andeolaCross" x1="12" y1="24" x2="30" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/* Deep Navy precision foundation */}
      <rect width="40" height="40" rx="10" fill={theme === 'light' ? '#0F172A' : '#0F172A'} />

      {/* Left structural pillar - ascending foundation */}
      <path
        d="M8.5 32.5L17.5 6.5H22L13.5 32.5H8.5Z"
        fill="url(#andeolaA1)"
      />

      {/* Right dynamic wing - forward growth vector */}
      <path
        d="M21 6.5L31.5 32.5H26.8L21.2 18.2L18.8 24.2H14.5L21 6.5Z"
        fill="url(#andeolaA2)"
      />

      {/* Digital solution bridge element */}
      <path
        d="M13.5 24H28.2L26.5 27.5H11.8L13.5 24Z"
        fill="url(#andeolaCross)"
      />

      {/* Purple accent spark */}
      <circle cx="28.5" cy="11.5" r="2.2" fill="#7C3AED" />
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
    sm: 28,
    md: 36,
    lg: 44,
    xl: 52
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      <LogoSymbol size={iconSizes[size]} theme={theme} />

      {variant !== 'icon' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-[0.08em] font-sans uppercase transition-colors ${
                textSizes[size]
              } ${isLight ? 'text-white' : 'text-[#0F172A]'}`}
            >
              ANDEOLA
            </span>
          </div>

          {showSubtitle && (
            <span
              className={`text-[9.5px] font-bold tracking-[0.22em] uppercase mt-1 ${
                isLight ? 'text-blue-300' : 'text-slate-500'
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
