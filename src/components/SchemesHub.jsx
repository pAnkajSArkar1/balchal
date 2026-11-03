import React, { useState, useMemo } from 'react';
import { 
  Sparkles, Search, CheckCircle2, FileText, ArrowUpRight, 
  HelpCircle, Filter, Calendar, Award, ExternalLink, Zap
} from 'lucide-react';
import { SCHEMES_DATA } from '../data/tripuraData';

export const SchemesHub = ({ onOpenEligibility }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'State Scholarships',
    'Central Subsidies',
    'MSME & PMEGP Loans',
    'Skill Training'
  ];

  const filteredSchemes = useMemo(() => {
    return SCHEMES_DATA.filter((scheme) => {
      const matchesTab = activeTab === 'All' || scheme.category === activeTab;
      const matchesSearch =
        scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="schemes" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-saffron-600" /> State & Central Opportunities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              Tripura Youth Schemes & Subsidies Hub
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              Tap into specialized grants, student allowances, capital subsidies, and modern skill certifications designed for Tripura's youth.
            </p>
          </div>

          {/* Interactive Eligibility Trigger Button */}
          <button
            onClick={() => onOpenEligibility(null)}
            className="self-start md:self-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-royal-600 to-navy-900 hover:from-royal-700 hover:to-navy-950 text-white font-bold text-xs sm:text-sm shadow-lg shadow-navy-900/20 hover:shadow-navy-900/35 transition-all flex items-center gap-2.5 group"
          >
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400 group-hover:scale-125 transition-transform" />
            <span>Launch Interactive Eligibility Checker</span>
          </button>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-8">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === cat
                    ? 'bg-saffron-500 text-white shadow-md shadow-saffron-500/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search scheme name, grant, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 p-6 flex flex-col justify-between group hover:border-saffron-300"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-royal-600 bg-royal-600/10 px-2.5 py-1 rounded-lg">
                    {scheme.category}
                  </span>
                  {scheme.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-saffron-50 text-saffron-700 border border-saffron-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Award className="w-3 h-3 text-saffron-600" /> High Demand
                    </span>
                  )}
                </div>

                {/* Scheme Title */}
                <h3 className="text-lg font-bold text-navy-950 group-hover:text-saffron-600 transition-colors leading-snug mb-2">
                  {scheme.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {scheme.description}
                </p>

                {/* Highlight Stats Pill */}
                <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 mb-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Financial Grant:</span>
                    <span className="font-extrabold text-saffron-700 font-mono text-sm">
                      {scheme.subsidyAmount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Eligible Age:</span>
                    <span className="font-bold text-navy-900">
                      {scheme.minAge} – {scheme.maxAge} Years
                    </span>
                  </div>
                </div>

                {/* Required Documents Tags */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Required Documents:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {scheme.documentsRequired.map((doc, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md flex items-center gap-1"
                      >
                        <FileText className="w-3 h-3 text-slate-400" />
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onOpenEligibility(scheme.id)}
                  className="text-xs font-bold text-saffron-600 hover:text-saffron-700 hover:underline flex items-center gap-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Am I Eligible?</span>
                </button>

                <a
                  href={scheme.portalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm group/btn"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <Filter className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-600 font-bold text-base">No schemes found matching "{searchQuery}"</p>
            <p className="text-xs text-slate-400 mt-1">Try searching another keyword or reset the category filter.</p>
          </div>
        )}

      </div>
    </section>
  );
};

