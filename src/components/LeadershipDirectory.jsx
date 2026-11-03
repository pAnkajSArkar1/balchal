import React, { useState, useMemo } from 'react';
import { 
  Users, MapPin, Mail, Phone, Search, Filter, 
  Award, MessageSquare, ShieldCheck, ChevronRight, Building
} from 'lucide-react';
import { LEADERSHIP_DIRECTORY, TRIPURA_DISTRICTS } from '../data/tripuraData';

export const LeadershipDirectory = ({ onConnectLeader, onCallLeader }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedMandal, setSelectedMandal] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hierarchyFilter, setHierarchyFilter] = useState('All');

  // Auto-populate mandals based on selected district
  const availableMandals = useMemo(() => {
    if (selectedDistrict === 'All') {
      return ['All'];
    }
    const dist = TRIPURA_DISTRICTS.find((d) => d.name === selectedDistrict);
    return dist ? ['All', ...dist.mandals] : ['All'];
  }, [selectedDistrict]);

  // When district changes, reset mandal to All
  const handleDistrictChange = (dist) => {
    setSelectedDistrict(dist);
    setSelectedMandal('All');
  };

  const filteredLeaders = useMemo(() => {
    return LEADERSHIP_DIRECTORY.filter((leader) => {
      const matchDistrict = selectedDistrict === 'All' || leader.district === selectedDistrict;
      const matchMandal = selectedMandal === 'All' || leader.mandal === selectedMandal;
      const matchHierarchy = hierarchyFilter === 'All' || leader.hierarchy === hierarchyFilter;
      const matchSearch =
        leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        leader.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        leader.area.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDistrict && matchMandal && matchHierarchy && matchSearch;
    });
  }, [selectedDistrict, selectedMandal, hierarchyFilter, searchQuery]);

  return (
    <section id="leadership" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Building className="w-3.5 h-3.5 text-saffron-600" /> Grassroots Cadre & Organization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            District & Mandal Leadership Directory
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Connect directly with state, district, and mandal office bearers powering youth welfare across Tripura.
          </p>
        </div>

        {/* Cascading Filter Widget */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-200/90 shadow-sm mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Hierarchy Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {['All', 'State Leadership', 'District Leadership', 'Mandal Leadership'].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setHierarchyFilter(tier)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    hierarchyFilter === tier
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>

            {/* Total Results */}
            <span className="text-xs font-bold text-slate-500 font-mono self-end md:self-auto">
              Showing {filteredLeaders.length} Leaders
            </span>
          </div>

          {/* Cascading Dropdowns & Search */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* District Dropdown */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Select District:
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => handleDistrictChange(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 focus:outline-none focus:ring-1 focus:ring-saffron-500"
              >
                <option value="All">All 8 Districts</option>
                {TRIPURA_DISTRICTS.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mandal Dropdown (Cascading Auto-Populated) */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Select Mandal:
              </label>
              <select
                value={selectedMandal}
                onChange={(e) => setSelectedMandal(e.target.value)}
                disabled={selectedDistrict === 'All'}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 focus:outline-none focus:ring-1 focus:ring-saffron-500 disabled:opacity-50"
              >
                {availableMandals.map((m) => (
                  <option key={m} value={m}>
                    {m === 'All' ? (selectedDistrict === 'All' ? 'Select district first' : 'All Mandals in District') : m}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Search Leader / Role:
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Sushanta, President..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-saffron-500"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 p-6 flex flex-col justify-between group hover:border-saffron-300"
            >
              <div>
                {/* Header with Photo & Hierarchy Badge */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-saffron-400 shadow-md group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-emerald-500 ring-2 ring-white" title="Verified Leader">
                      <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    </span>
                  </div>

                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-saffron-50 text-saffron-700 border border-saffron-200 inline-block mb-1">
                      {leader.hierarchy}
                    </span>
                    <h3 className="text-base font-extrabold text-navy-950 group-hover:text-saffron-600 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-royal-600 mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Area & Details */}
                <div className="space-y-2 py-3 px-3.5 bg-slate-50 rounded-2xl border border-slate-100 mb-4 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                    <span className="font-medium truncate">{leader.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{leader.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-[11px] truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{leader.email}</span>
                  </div>
                </div>

                {/* Achievements / Note */}
                <p className="text-[11px] text-slate-500 italic mb-4 line-clamp-2">
                  "{leader.achievements}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onCallLeader({
                    name: leader.name,
                    phone: leader.phone,
                    role: leader.role,
                    district: leader.district,
                    avatar: leader.avatar
                  })}
                  className="py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-navy-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-saffron-600" />
                  <span>Call Office</span>
                </button>

                <button
                  type="button"
                  onClick={() => onConnectLeader(leader)}
                  className="py-2 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-saffron-600/25 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredLeaders.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <Users className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-700 font-bold">No leaders found for the selected filter combination</p>
            <p className="text-xs text-slate-400 mt-1">Reset your mandal or district selection to view all leaders.</p>
          </div>
        )}

      </div>
    </section>
  );
};

