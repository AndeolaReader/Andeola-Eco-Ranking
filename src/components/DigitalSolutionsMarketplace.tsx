import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DigitalProduct } from '../types';
import { 
  Search, 
  Filter, 
  FileText, 
  ShoppingBag, 
  Download, 
  ArrowRight, 
  Check, 
  Star, 
  SlidersHorizontal,
  Sparkles,
  Layers,
  AlertCircle
} from 'lucide-react';

export const DigitalSolutionsMarketplace: React.FC = () => {
  const { digitalProducts, openSolutionDetail, openCheckout, addToCart } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [selectedProblem, setSelectedProblem] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const platforms = [
    'All',
    'Shopify',
    'WordPress',
    'Wix',
    'Webflow',
    'Squarespace',
    'General Website',
    'E-commerce'
  ];

  const problems = [
    'All',
    'Checkout',
    'Speed',
    'SEO',
    'Mobile',
    'Errors',
    'Design',
    'Conversion',
    'Security',
    'Product Pages',
    'Store Setup'
  ];

  const difficulties = ['All', 'Beginner', 'Beginner–Intermediate', 'Intermediate'];

  // Filtering
  const filteredProducts = digitalProducts.filter(product => {
    // Search query
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    // Platform filter
    const matchesPlatform = selectedPlatform === 'All' || 
      product.compatiblePlatforms.some(p => p.toLowerCase().includes(selectedPlatform.toLowerCase())) ||
      product.compatiblePlatforms.includes('General Website');

    // Problem filter
    const matchesProblem = selectedProblem === 'All' ||
      product.problemCategory.toLowerCase() === selectedProblem.toLowerCase() ||
      product.problem.toLowerCase().includes(selectedProblem.toLowerCase());

    // Difficulty
    const matchesDifficulty = selectedDifficulty === 'All' ||
      product.difficulty === selectedDifficulty;

    return matchesSearch && matchesPlatform && matchesProblem && matchesDifficulty;
  });

  const handleAddToCart = (product: DigitalProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedNotice(product.name);
    setTimeout(() => setAddedNotice(null), 2500);
  };

  const handleDirectBuy = (product: DigitalProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    openCheckout(product);
  };

  return (
    <section id="digital-solutions" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[11px] font-bold tracking-widest uppercase text-purple-700 mb-3">
            <Download className="w-3.5 h-3.5 text-purple-600" />
            <span>SELF-SERVICE DIGITAL STORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight uppercase">
            Solve the Problem Yourself.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Already know what's wrong with your website? Get a practical digital solution designed around the problem.
          </p>
        </div>

        {/* Added to cart notification popup */}
        {addedNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center justify-between animate-fade-in shadow-md">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Added <strong>"{addedNotice}"</strong> to your cart.</span>
            </div>
            <button
              onClick={() => openCheckout()}
              className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-[10px]"
            >
              Go to Checkout
            </button>
          </div>
        )}

        {/* Search & Filter Controls Toolbar */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200 p-6 mb-12 space-y-5">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search solutions (e.g. checkout, speed, mobile, 404, WordPress, Shopify)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Row 1: Problem Categories */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-purple-600" />
                <span>Filter by Problem:</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {filteredProducts.length} Solutions available
              </span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
              {problems.map(prob => (
                <button
                  key={prob}
                  onClick={() => setSelectedProblem(prob)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedProblem === prob
                      ? 'bg-[#7C3AED] text-white shadow-sm font-bold'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {prob}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Row 2: Platforms & Difficulty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-200/80">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Platform:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {platforms.map(plat => (
                  <button
                    key={plat}
                    onClick={() => setSelectedPlatform(plat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      selectedPlatform === plat
                        ? 'bg-[#0F172A] text-white font-bold'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {plat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Difficulty Level:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {difficulties.map(diff => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      selectedDifficulty === diff
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 12 Digital Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => openSolutionDetail(product)}
              className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-7 flex flex-col justify-between hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group cursor-pointer hover:-translate-y-1 relative"
            >
              {product.isPopular && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#7C3AED] text-white text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  MOST DOWNLOADED
                </div>
              )}

              <div>
                {/* Meta header line */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/80 text-xs">
                  <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800 uppercase">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 text-[10px] font-normal">({product.reviewCount})</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-[#0F172A] group-hover:text-purple-700 transition-colors leading-snug">
                  {product.name}
                </h3>

                {/* Problem line */}
                <div className="mt-3 p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold text-[11px]">Problem it solves:</strong>
                    <span className="text-slate-600 text-[11px]">{product.problem}</span>
                  </div>
                </div>

                {/* Short description */}
                <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Format & Difficulty details */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-2 text-[11px] text-slate-500 font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">FORMAT</span>
                    <span className="font-semibold text-slate-700">{product.format}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">DIFFICULTY</span>
                    <span className="font-semibold text-purple-700">{product.difficulty}</span>
                  </div>
                </div>

                {/* What's included preview */}
                <div className="mt-3 space-y-1.5 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Includes {product.whatsIncluded.length} Checkpoints:
                  </span>
                  {product.whatsIncluded.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600 truncate">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action CTAs */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="flex items-baseline justify-between mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-[#0F172A] font-mono">${product.price}</span>
                    <span className="text-xs text-slate-400 font-sans">USD</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Instant download</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openSolutionDetail(product);
                    }}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={(e) => handleDirectBuy(product, e)}
                    className="py-2.5 px-3 rounded-xl bg-[#7C3AED] hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 shadow-md shadow-purple-600/20 cursor-pointer"
                  >
                    <Download className="w-3 h-3" />
                    <span>Buy ${product.price}</span>
                  </button>
                </div>

                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="w-full mt-2 py-1.5 text-[11px] font-semibold text-slate-500 hover:text-purple-700 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Add to Cart</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#F8FAFC] rounded-3xl border border-slate-200 space-y-3">
            <FileText className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No matching digital solutions found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try adjusting your problem or platform filters, or contact our engineering team to request a custom solution.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedPlatform('All');
                setSelectedProblem('All');
                setSelectedDifficulty('All');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
