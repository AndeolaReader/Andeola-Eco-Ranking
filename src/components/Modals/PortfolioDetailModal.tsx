import React from 'react';
import { useApp } from '../../context/AppContext';
import { PortfolioProject } from '../../types';
import { Logo } from '../Logo';
import { X, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export const PortfolioDetailModal: React.FC = () => {
  const { closeModal, modalData, openIntakeModal } = useApp();
  const project: PortfolioProject = modalData;

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-6 bg-[#08111F] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-800 text-cyan-400 font-mono">
              {project.isConcept ? 'CONCEPT PROJECT' : 'SELECTED WORK'}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300 font-medium">{project.category}</span>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Hero Banner Mockup */}
          <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 border border-slate-200 shadow-md">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#08111F] uppercase">
              {project.name}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {project.fullDescription}
            </p>
          </div>

          {/* Deliverables tags */}
          <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Project Deliverables & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((del, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700"
                >
                  ✓ {del}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 flex items-center justify-between">
            <span>Notice: As required by agency standards, concepts demonstrate visual direction and layout capabilities.</span>
            <span className="font-mono text-blue-700 font-bold">2026 Archive</span>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-6 bg-[#F8FAFC] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Like this design style? We can build a custom variation for your brand.
          </div>

          <button
            onClick={() => {
              closeModal();
              openIntakeModal(project.category);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>START A PROJECT LIKE THIS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
