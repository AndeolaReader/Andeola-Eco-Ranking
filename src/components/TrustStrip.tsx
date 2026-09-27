import React from 'react';

export const TrustStrip: React.FC = () => {
  const items = [
    'Responsive Design',
    'Mobile Optimized',
    'Modern UI/UX',
    'E-commerce Ready',
    'Conversion Focused'
  ];

  return (
    <div className="bg-[#0B1526] border-b border-slate-800/80 py-5 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-3 gap-x-6 text-xs sm:text-sm font-semibold">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">✓</span>
              <span className="text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
