import React from 'react';
import { 
  ShieldCheck, Lock, Database, Users, KeyRound, 
  Server, FileCheck, CheckCircle2, ChevronRight 
} from 'lucide-react';

export const SecuritySection = () => {
  const hierarchyNodes = [
    { level: 'Level 1', title: 'Super Admin', scope: 'State IT Cell & Governance Board', color: 'bg-navy-950 text-white' },
    { level: 'Level 2', title: 'State Leadership', scope: 'All 8 Tripura Districts & Morcha Executives', color: 'bg-royal-600 text-white' },
    { level: 'Level 3', title: 'District In-Charge', scope: 'District-level mobilization & Blood Desks', color: 'bg-saffron-600 text-white' },
    { level: 'Level 4', title: 'Mandal Convenor', scope: '60 Mandal Chapters & Volunteer Coordination', color: 'bg-amber-600 text-white' },
    { level: 'Level 5', title: 'Booth Volunteer', scope: 'Grassroots Citizen Engagement & SOS Field Teams', color: 'bg-emerald-600 text-white' },
  ];

  return (
    <section id="security" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Enterprise-Grade Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Built for Trust, Security & Compliance
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Engineered adhering to India's Digital Personal Data Protection (DPDP) Act 2023 with strict cryptographic safeguards for Tripura's citizens.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 relative group hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 mb-2">
              End-to-End Encryption
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              All member records, medical blood requests, and leadership communications are encrypted in transit (TLS 1.3) and at rest with AES-256 state standards.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Masked donor contact numbers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero unsolicited commercial spam</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 relative group hover:border-saffron-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-saffron-100 text-saffron-700 flex items-center justify-center mb-5">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 mb-2">
              Role-Based Access (RBAC)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              A 5-tier organizational hierarchy ensures granular permission controls so sensitive volunteer and donor lists are accessible strictly on a need-to-know basis.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                <span>Audit logging on every outbound action</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                <span>Mandal-isolated roster permissions</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 relative group hover:border-royal-600 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-royal-600/10 text-royal-600 flex items-center justify-center mb-5">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 mb-2">
              Automated Backups & 99.9% SLA
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Geographically replicated state datacenters ensure instant high-availability failover even during adverse weather or emergency disaster scenarios in the Northeast.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 shrink-0" />
                <span>Continuous incremental backups</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 shrink-0" />
                <span>Disaster recovery point &lt; 5 minutes</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Hierarchy Diagram Visualization */}
        <div className="bg-navy-950 rounded-3xl p-6 sm:p-8 text-white border border-royal-700 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-saffron-400" />
                <span>Five-Tier Administrative Hierarchy</span>
              </h3>
              <p className="text-xs text-slate-400">Streamlined command chain from State Headquarters to Booth Cells</p>
            </div>
            <span className="text-xs font-mono bg-royal-800 text-slate-300 px-3 py-1 rounded-xl">
              Super Admin → Booth Level
            </span>
          </div>

          {/* Interactive Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {hierarchyNodes.map((node, idx) => (
              <div
                key={idx}
                className="bg-royal-900/60 border border-royal-700/80 rounded-2xl p-4 flex flex-col justify-between group hover:border-saffron-400 transition-all"
              >
                <div>
                  <span className="text-[10px] font-mono text-saffron-400 font-bold block mb-1">
                    {node.level}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1">{node.title}</h4>
                  <p className="text-[11px] text-slate-300 leading-snug">{node.scope}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-royal-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>RBAC Sync</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

