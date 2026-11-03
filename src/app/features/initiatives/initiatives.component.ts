import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InitiativesService } from '../../core/services/initiatives.service';
import { SchemesService } from '../../core/services/schemes.service';
import { InitiativeItem, OpportunityScheme } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-initiatives',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-3">
            <i class="fa-solid fa-compass text-amber-500"></i>
            <span>Transformative Programs & Government Schemes</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-[#0b1e42] tracking-tight">Key Initiatives & Youth Schemes Hub</h1>
          <p class="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Dedicated statewide missions advancing youth leadership, technical skills, higher education scholarships, environmental conservation, and 24/7 emergency blood donation across Tripura.
          </p>
        </div>

        <!-- 9 Category Filter Pills -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          <button (click)="selectedCat = 'All'" 
                  [ngClass]="selectedCat === 'All' ? 'bg-[#0e2554] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
                  class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition">
            All 9 Initiatives
          </button>

          <button *ngFor="let cat of categoryList" 
                  (click)="selectedCat = cat" 
                  [ngClass]="selectedCat === cat ? 'bg-[#0e2554] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
                  class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition">
            {{ cat }}
          </button>
        </div>

        <!-- ================= INITIATIVES STANDARD LAYOUT BLOCK LIST ================= -->
        <!-- Layout: Initiative Name -> Objective -> Activities -> Participation -> Impact -> Photo Gallery -->
        <div class="space-y-10">
          <div *ngFor="let init of filteredInitiatives" 
               class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 animate-fadeIn">
            
            <!-- 1. Header: Initiative Name & Category Badge -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-blue-50 text-[#0e2554] flex items-center justify-center text-2xl shadow-sm flex-shrink-0">
                  <i [class]="init.icon"></i>
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                      {{ init.category }}
                    </span>
                    <span class="text-xs font-semibold text-slate-400">• {{ init.badge }}</span>
                  </div>
                  <h2 class="text-2xl sm:text-3xl font-black text-[#0b1e42] tracking-tight">
                    {{ init.name }}
                  </h2>
                </div>
              </div>

              <!-- Quick action button depending on category -->
              <div class="flex-shrink-0">
                <a *ngIf="init.category === 'Blood Donation'" routerLink="/blood-donation" class="px-5 py-2.5 rounded-xl font-bold text-xs bg-red-600 text-white hover:bg-red-700 shadow inline-flex items-center gap-1.5">
                  <i class="fa-solid fa-droplet text-white"></i>
                  <span>Emergency Blood Portal →</span>
                </a>
                <a *ngIf="init.category !== 'Blood Donation'" routerLink="/register" class="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#0e2554] text-white hover:bg-[#071739] shadow inline-flex items-center gap-1.5">
                  <i class="fa-solid fa-user-plus text-xs"></i>
                  <span>Volunteer for this Initiative →</span>
                </a>
              </div>
            </div>

            <!-- Standard Layout Grid: Objective, Activities, Participation, Impact -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <!-- Left 7 Cols: Objective, Activities & Participation -->
              <div class="lg:col-span-7 space-y-6">
                
                <!-- 2. Objective -->
                <div>
                  <h4 class="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-bullseye"></i>
                    <span>Objective</span>
                  </h4>
                  <p class="text-sm sm:text-base text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    {{ init.objective }}
                  </p>
                </div>

                <!-- 3. Key Activities -->
                <div>
                  <h4 class="text-xs font-bold text-[#0e2554] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-list-check"></i>
                    <span>Key Activities & Operational Programs</span>
                  </h4>
                  <ul class="space-y-2">
                    <li *ngFor="let act of init.activities" class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <span class="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></span>
                      <span>{{ act }}</span>
                    </li>
                  </ul>
                </div>

                <!-- 4. How to Participate -->
                <div>
                  <h4 class="text-xs font-bold text-purple-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-hand-holding-hand"></i>
                    <span>Participation Process</span>
                  </h4>
                  <div class="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100 text-xs sm:text-sm text-purple-950 font-medium">
                    {{ init.participation }}
                  </div>
                </div>

              </div>

              <!-- Right 5 Cols: Impact Metrics & Photo Gallery -->
              <div class="lg:col-span-5 space-y-6">
                
                <!-- 5. Quantifiable Impact -->
                <div class="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <h4 class="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-chart-line text-emerald-600"></i>
                    <span>Demonstrated Impact Across Tripura</span>
                  </h4>
                  <div class="space-y-2.5">
                    <div *ngFor="let imp of init.impact" class="flex items-start gap-2 text-xs font-semibold text-emerald-950">
                      <i class="fa-solid fa-circle-check text-emerald-600 text-xs mt-0.5"></i>
                      <span>{{ imp }}</span>
                    </div>
                  </div>
                </div>

                <!-- 6. Photo Gallery Snippets -->
                <div>
                  <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <i class="fa-regular fa-image"></i>
                    <span>Photo Gallery</span>
                  </h4>
                  <div class="grid grid-cols-3 gap-2">
                    <div *ngFor="let photo of init.photoGallery" class="rounded-xl overflow-hidden aspect-video shadow-sm">
                      <img [src]="photo" [alt]="init.name" class="w-full h-full object-cover hover:scale-105 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        <!-- ================= GOVERNMENT SCHEMES ACCELERATOR ================= -->
        <div class="bg-gradient-to-r from-[#0b1e42] via-[#0e2554] to-blue-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div class="max-w-2xl mb-8">
            <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-900 mb-3 inline-block">
              Government Schemes Helpdesk
            </span>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight">Verified Scholarships & MSME Grants</h2>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Our 60 Mandal Helpdesks offer free documentation handholding to help students and entrepreneurs secure direct benefit transfers.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div *ngFor="let s of flagshipSchemes" class="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {{ s.category }}
                </span>
                <h4 class="text-base font-bold text-white mt-2">{{ s.title }}</h4>
                <div class="text-xs text-emerald-300 font-bold mt-1">{{ s.benefit }}</div>
                <p class="text-xs text-slate-300 mt-2 line-clamp-2">{{ s.shortDesc }}</p>
              </div>
              <div class="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span class="text-slate-400">{{ s.sponsor }}</span>
                <a [href]="s.applicationUrl" target="_blank" class="font-bold text-amber-300 hover:underline">Apply Portal ↗</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class InitiativesComponent implements OnInit {
  initiativesService = inject(InitiativesService);
  schemesService = inject(SchemesService);

  allInitiatives: InitiativeItem[] = [];
  flagshipSchemes: OpportunityScheme[] = [];
  selectedCat = 'All';

  categoryList = [
    'Youth Development',
    'Skill Development',
    'Education',
    'Community Service',
    'Environmental Activities',
    'Sports & Cultural Activities',
    'Digital/Technology Initiatives',
    'Awareness Programs',
    'Blood Donation'
  ];

  ngOnInit(): void {
    this.allInitiatives = this.initiativesService.getAll();
    this.flagshipSchemes = this.schemesService.getSchemes();
  }

  get filteredInitiatives(): InitiativeItem[] {
    if (this.selectedCat === 'All') return this.allInitiatives;
    return this.allInitiatives.filter(i => i.category === this.selectedCat);
  }
}
