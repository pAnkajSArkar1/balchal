import React from 'react';
import { 
  Flame, Phone, Mail, MapPin, Shield, HeartHandshake, 
  ExternalLink, ArrowUp, Sparkles 
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden border-t border-royal-800">
      {/* Top tricolor border line */}
      <div className="h-1.5 w-full gradient-tricolor" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand & Mission (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-saffron-500 to-amber-400 flex items-center justify-center text-white shadow-lg">
                <Flame className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight text-white">YUVA SAMPARK</h3>
                <p className="text-xs text-saffron-400 font-semibold">BJP Yuva Morcha Tripura</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Tripura's premier digital youth empowerment, voluntary blood donation and civic action platform. Connecting 8 districts, 60 Mandals, and over 1.25 Lakh energetic youth.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                <span>State HQ: Krishna Nagar, Agartala, Tripura - 799001</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                <span>contact@yuvasampark.tripura.org.in</span>
              </div>
            </div>
          </div>

          {/* Col 2: Emergency Helplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-saffron-400">
              Tripura Helplines
            </h4>
            <ul className="text-xs space-y-2 text-slate-300">
              <li className="flex flex-col bg-royal-900/60 p-2.5 rounded-xl border border-royal-700">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Yuva Citizen Hotline:</span>
                <span className="font-mono font-bold text-white text-sm">1800-345-YUVA</span>
              </li>
              <li className="flex flex-col bg-rose-950/40 p-2.5 rounded-xl border border-rose-900/60">
                <span className="text-[10px] text-rose-300 uppercase font-bold">Blood SOS / Ambulance:</span>
                <span className="font-mono font-bold text-rose-200 text-sm">104 / 108 (24x7)</span>
              </li>
              <li className="flex flex-col bg-royal-900/60 p-2.5 rounded-xl border border-royal-700">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Disaster Management:</span>
                <span className="font-mono font-bold text-white text-sm">1070 / 112</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-saffron-400">
              Core Modules
            </h4>
            <ul className="text-xs space-y-2 text-slate-300">
              <li>
                <a href="#schemes" className="hover:text-saffron-400 transition-colors">
                  Youth Schemes & Grants Hub
                </a>
              </li>
              <li>
                <a href="#blood-bank" className="hover:text-saffron-400 transition-colors">
                  Emergency Blood Donor Pool
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-saffron-400 transition-colors">
                  District & Mandal Directory
                </a>
              </li>
              <li>
                <a href="#membership-card" className="hover:text-saffron-400 transition-colors">
                  Digital Card Generator
                </a>
              </li>
              <li>
                <a href="#dashboards" className="hover:text-saffron-400 transition-colors">
                  Multi-Role Dashboards
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: State Links & DPDP */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-saffron-400">
              Official Links
            </h4>
            <ul className="text-xs space-y-2 text-slate-300">
              <li>
                <a href="https://tripura.gov.in" target="_blank" rel="noreferrer" className="hover:text-saffron-400 transition-colors flex items-center gap-1">
                  <span>Tripura State Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://highereducation.tripura.gov.in" target="_blank" rel="noreferrer" className="hover:text-saffron-400 transition-colors flex items-center gap-1">
                  <span>Higher Education Dept</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://industries.tripura.gov.in" target="_blank" rel="noreferrer" className="hover:text-saffron-400 transition-colors flex items-center gap-1">
                  <span>Industries & Commerce</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-saffron-400 transition-colors">
                  Data Protection (DPDP)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-royal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Yuva Sampark Tripura (BJP Yuva Morcha Tripura). All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Ujjayanta Palace Heritage Tribute • Dedicated to Tripura Youth
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-royal-800 hover:bg-royal-700 text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

