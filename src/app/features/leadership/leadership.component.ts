import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LeadershipService } from '../../core/services/leadership.service';
import { Leader } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-3">
            <i class="fa-solid fa-sitemap text-amber-500"></i>
            <span>Leadership & Organizational Hierarchy</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-[#0b1e42] tracking-tight">Yuva Morcha Tripura Leadership Directory</h1>
          <p class="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Democratic representation from the State Executive to District Presidents, Mandal Leaders, and Grassroots Booth Brigades across Tripura.
          </p>
        </div>

        <!-- 1. Visual Breakdown Hierarchy View -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div class="text-center max-w-2xl mx-auto mb-8">
            <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Grassroots Governance</span>
            <h2 class="text-2xl font-black text-[#0b1e42] tracking-tight">Organizational Command Structure</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div *ngFor="let tier of hierarchy" class="p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-100 text-[#0e2554]">
                    {{ tier.level }}
                  </span>
                  <span class="text-xs font-bold text-amber-600">{{ tier.units }}</span>
                </div>
                <h4 class="text-sm font-bold text-slate-900 mb-1">{{ tier.scope }}</h4>
                <div class="text-xs font-extrabold text-emerald-700 mb-2">{{ tier.members }}</div>
                <p class="text-xs text-slate-600 leading-relaxed">{{ tier.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Interactive Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          <button (click)="activeLevel = 'All'" 
                  [ngClass]="activeLevel === 'All' ? 'bg-[#0e2554] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
                  class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition">
            All Office Bearers ({{ allLeaders.length }})
          </button>
          
          <button (click)="activeLevel = 'State'" 
                  [ngClass]="activeLevel === 'State' ? 'bg-[#0e2554] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
                  class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition">
            State Office Bearers
          </button>

          <button (click)="activeLevel = 'District'" 
                  [ngClass]="activeLevel === 'District' ? 'bg-[#0e2554] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
                  class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition">
            District Presidents (8 Districts)
          </button>

          <button (click)="activeLevel = 'Mandal'" 
                  [ngClass]="activeLevel === 'Mandal' ? 'bg-[#0e2554] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
                  class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition">
            Mandal Leadership
          </button>
        </div>

        <!-- 3. Detailed Leader Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let leader of filteredLeaders" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div class="flex items-start gap-4 mb-4">
                <img [src]="leader.photoUrl" [alt]="leader.name" class="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400 flex-shrink-0 shadow-sm" />
                <div>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider" 
                        [ngClass]="leader.level === 'State' ? 'bg-amber-100 text-amber-900' : (leader.level === 'District' ? 'bg-blue-100 text-blue-900' : 'bg-emerald-100 text-emerald-900')">
                    {{ leader.level }} Committee
                  </span>
                  <h3 class="text-base font-bold text-[#0b1e42] mt-1">{{ leader.name }}</h3>
                  <div class="text-xs font-semibold text-[#0e2554]">{{ leader.designation }}</div>
                  <div *ngIf="leader.district" class="text-[11px] text-slate-500 font-medium">
                    <i class="fa-solid fa-map-pin mr-1 text-slate-400"></i>{{ leader.district }} <span *ngIf="leader.mandal">• {{ leader.mandal }}</span>
                  </div>
                </div>
              </div>

              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                {{ leader.shortProfile }}
              </p>
            </div>

            <!-- Public Contact Info Footer -->
            <div class="pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
              <div class="flex items-center justify-between">
                <span class="text-slate-400"><i class="fa-regular fa-envelope mr-1.5"></i>Official Email:</span>
                <a [href]="'mailto:' + leader.publicEmail" class="font-mono text-[#0e2554] hover:underline truncate max-w-[170px]">{{ leader.publicEmail }}</a>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400"><i class="fa-solid fa-phone mr-1.5"></i>Public Desk:</span>
                <span class="font-mono text-slate-800 font-semibold">{{ leader.publicPhone }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Mandal Drill-Down Banner -->
        <div class="p-8 rounded-3xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="text-xl font-bold">Looking for your specific Assembly Mandal team?</h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Use our interactive District & Mandal directory to look up local coordinators across all 60 constituencies.</p>
          </div>
          <a routerLink="/districts" class="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-amber-500 text-slate-900 hover:bg-amber-400 transition shadow flex-shrink-0">
            Open District & Mandal Directory →
          </a>
        </div>

      </div>
    </div>
  `
})
export class LeadershipComponent implements OnInit {
  leadershipService = inject(LeadershipService);

  hierarchy = this.leadershipService.getHierarchySummary();
  allLeaders: Leader[] = [];
  activeLevel: 'All' | 'State' | 'District' | 'Mandal' = 'All';

  ngOnInit(): void {
    this.allLeaders = this.leadershipService.getAllLeaders();
  }

  get filteredLeaders(): Leader[] {
    if (this.activeLevel === 'All') return this.allLeaders;
    return this.allLeaders.filter(l => l.level === this.activeLevel);
  }
}

