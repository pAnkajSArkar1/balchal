import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustBannerComponent } from '../../shared/components/trust-banner/trust-banner.component';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [CommonModule, TrustBannerComponent],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#051329] via-[#09224b] to-[#051329] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div class="max-w-2xl relative z-10">
            <span class="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30 mb-3">
              Governance, Trust & Data Security
            </span>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Built for Trust & Security
            </h1>
            <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
              Yuva Sampark handles citizen data with the highest legal and cryptographic standards under India's Digital Personal Data Protection (DPDP) Act 2023, multi-tier RBAC, and military-grade AES-256 encryption.
            </p>
          </div>
        </div>

        <!-- 4 Pillars Breakdown Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-blue-50 text-[#0e2554] flex items-center justify-center text-xl shadow-sm">
              <i class="fa-solid fa-fingerprint"></i>
            </div>
            <h3 class="text-base font-bold text-slate-900">Role-Based Access Control</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Granular hierarchical permissions ensuring state, district, and mandal functionaries only access records authorized for their geographical jurisdiction.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center text-xl shadow-sm">
              <i class="fa-solid fa-database"></i>
            </div>
            <h3 class="text-base font-bold text-slate-900">AES-256 Data Encryption</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              All member KYC, Aadhaar tokens, and phone numbers are encrypted at rest using AES-256-GCM and in transit via TLS 1.3 cryptographic protocols.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl shadow-sm">
              <i class="fa-solid fa-shield-check"></i>
            </div>
            <h3 class="text-base font-bold text-slate-900">DPDP Act (2023) Compliance</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Explicit purpose-bound consent, right to correction, right to grievance redressal, and automated citizen data minimization pipelines.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-xl shadow-sm">
              <i class="fa-solid fa-cloud-arrow-up"></i>
            </div>
            <h3 class="text-base font-bold text-slate-900">Regular Backup & High SLA</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Geo-redundant automated hourly backups, disaster recovery in National Data Centers, and 99.9% uptime architecture.
            </p>
          </div>

        </div>

        <!-- RBAC Hierarchy Matrix Section -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div class="border-b border-slate-100 pb-4 mb-6">
            <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Access Hierarchy</span>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              Role-Based Access Control (RBAC) Architecture
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Data governance strictly follows administrative boundaries to protect member confidentiality.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div class="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <div class="text-[10px] uppercase font-bold text-amber-400">Level 1</div>
              <h4 class="text-sm font-bold">Super Admin</h4>
              <p class="text-[11px] text-slate-300 leading-snug">State IT cell & security audit officers with system-level configuration.</p>
              <div class="text-[10px] text-emerald-400 font-semibold pt-2">Full System & RBAC</div>
            </div>

            <div class="p-4 rounded-2xl bg-[#0e2554] text-white border border-blue-900 space-y-2">
              <div class="text-[10px] uppercase font-bold text-cyan-300">Level 2</div>
              <h4 class="text-sm font-bold">State Admin</h4>
              <p class="text-[11px] text-blue-100 leading-snug">Tripura Pradesh state committee. Reviews state-wide metrics, blood drives, and schemes.</p>
              <div class="text-[10px] text-cyan-300 font-semibold pt-2">State-wide 8 Districts</div>
            </div>

            <div class="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
              <div class="text-[10px] uppercase font-bold text-blue-700">Level 3</div>
              <h4 class="text-sm font-bold text-slate-900">District Admin</h4>
              <p class="text-[11px] text-slate-600 leading-snug">District youth presidents & blood network coordinators. Oversees mandal units.</p>
              <div class="text-[10px] text-[#0e2554] font-semibold pt-2">Assigned District Only</div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div class="text-[10px] uppercase font-bold text-slate-500">Level 4</div>
              <h4 class="text-sm font-bold text-slate-900">Mandal Admin</h4>
              <p class="text-[11px] text-slate-600 leading-snug">Booth leaders and mandal organizers. Verifies member KYC and mobilizes volunteers.</p>
              <div class="text-[10px] text-slate-700 font-semibold pt-2">Assigned Mandal Unit</div>
            </div>

            <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <div class="text-[10px] uppercase font-bold text-amber-700">Level 5</div>
              <h4 class="text-sm font-bold text-slate-900">Member / Volunteer</h4>
              <p class="text-[11px] text-slate-600 leading-snug">Youth citizens with personal digital ID, blood alerts, and scheme applications.</p>
              <div class="text-[10px] text-amber-800 font-semibold pt-2">Individual Profile & ID</div>
            </div>

          </div>
        </div>

        <!-- Trust Banner Embed -->
        <app-trust-banner></app-trust-banner>

      </div>
    </div>
  `
})
export class SecurityComponent {}

