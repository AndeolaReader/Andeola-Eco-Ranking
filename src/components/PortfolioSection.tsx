import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PortfolioProject } from '../types';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const { portfolioProjects, openPortfolioModal } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Business', 'E-commerce', 'Landing Page', 'Redesign', 'Concept'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2">
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08111F] tracking-tight uppercase">
              SELECTED WORK
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              A selection of website concepts, redesigns, and digital experiences.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#08111F] text-white'
                    : 'bg-[#F8FAFC] text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => openPortfolioModal(project)}
              className="group bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95"
                />
                
                {/* Concept Project Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  {project.isConcept && (
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#08111F]/90 text-cyan-300 border border-slate-700/80 backdrop-blur-xs font-mono">
                      CONCEPT PROJECT
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-blue-600 uppercase tracking-wider text-[11px]">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px]">{project.year}</span>
                </div>

                <h3 className="text-lg font-bold text-[#08111F] group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#08111F] group-hover:text-blue-600 flex items-center gap-1">
                    <span>View Project Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
