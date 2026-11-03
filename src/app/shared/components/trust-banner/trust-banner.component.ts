import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trust-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="relative bg-gradient-to-r from-[#051329] via-[#09224b] to-[#051329] text-white border-t border-blue-900/40 overflow-hidden shadow-2xl">
      <!-- Subtle ambient circuit lines / glow -->
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div class="grid grid-cols-1 md:grid-cols-5 items-center gap-6 md:gap-4">
          
          <!-- Shield Header (Col 1) -->
          <div class="flex items-center gap-3.5 md:pr-4 md:border-r md:border-blue-900/60">
            <div class="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <i class="fa-solid fa-shield-halved text-2xl"></i>
            </div>
            <div>
              <h4 class="text-base font-bold text-white tracking-tight leading-snug">Built for Trust & Security</h4>
              <p class="text-[11px] text-blue-200/70">Enterprise-grade citizen portal</p>
            </div>
          </div>

          <!-- 4 Trust Pillars (Col 2-5) -->
          <div class="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
            
            <!-- Item 1: Role-based Access -->
            <div class="flex items-start gap-3 sm:px-3 sm:border-r sm:border-blue-900/60">
              <i class="fa-solid fa-fingerprint text-xl text-cyan-400 mt-1 flex-shrink-0"></i>
              <div>
                <div class="text-xs font-bold text-white leading-tight">Role-based Access</div>
                <div class="text-[10px] text-slate-300 mt-0.5 leading-snug">(Admin / State / District / Booth)</div>
              </div>
            </div>

            <!-- Item 2: Encrypted Data -->
            <div class="flex items-start gap-3 sm:px-3 sm:border-r sm:border-blue-900/60">
              <i class="fa-solid fa-database text-xl text-cyan-400 mt-1 flex-shrink-0"></i>
              <div>
                <div class="text-xs font-bold text-white leading-tight">Encrypted Data</div>
                <div class="text-[10px] text-slate-300 mt-0.5 leading-snug">& Secure Storage (AES-256)</div>
              </div>
            </div>

            <!-- Item 3: Privacy Compliant -->
            <div class="flex items-start gap-3 sm:px-3 sm:border-r sm:border-blue-900/60">
              <i class="fa-solid fa-shield-check text-xl text-cyan-400 mt-1 flex-shrink-0"></i>
              <div>
                <div class="text-xs font-bold text-white leading-tight">Privacy Compliant</div>
                <div class="text-[10px] text-slate-300 mt-0.5 leading-snug">(India DPDP Act 2023)</div>
              </div>
            </div>

            <!-- Item 4: Regular Backup & High Availability -->
            <div class="flex items-start gap-3 sm:px-3">
              <i class="fa-solid fa-cloud-arrow-up text-xl text-cyan-400 mt-1 flex-shrink-0"></i>
              <div>
                <div class="text-xs font-bold text-white leading-tight">Regular Backup</div>
                <div class="text-[10px] text-slate-300 mt-0.5 leading-snug">& High Availability (99.9%)</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  `
})
export class TrustBannerComponent {}

