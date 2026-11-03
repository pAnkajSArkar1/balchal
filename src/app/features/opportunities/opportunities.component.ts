import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemesService } from '../../core/services/schemes.service';
import { OpportunityScheme } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-opportunities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-10">
        
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#0b1e42] via-[#0e2554] to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div class="max-w-2xl">
            <span class="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-400/30 mb-3">
              Tripura Youth Schemes & Opportunity Portal
            </span>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Empowering Tripura's Next Generation
            </h1>
            <p class="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Discover verified scholarships, paid internships, self-employment MSME loans, and skill training programs launched by the Government of Tripura, North Eastern Council (NEC), and Govt of India.
            </p>
          </div>
        </div>

        <!-- Filter Tabs & Search -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap gap-2">
            <button *ngFor="let cat of categories" 
                    (click)="selectedCategory = cat; filterSchemes()" 
                    class="px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm"
                    [ngClass]="selectedCategory === cat ? 'bg-[#0e2554] text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'">
              {{ cat }}
            </button>
          </div>

          <div class="text-xs text-slate-500 font-semibold">
            Showing <strong class="text-slate-900">{{ displayedSchemes.length }}</strong> Opportunities
          </div>
        </div>

        <!-- Schemes Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let s of displayedSchemes" 
               class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800">
                  {{ s.category }}
                </span>
                <span class="text-[11px] font-semibold text-slate-400">
                  {{ s.sponsor }}
                </span>
              </div>

              <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug">
                {{ s.title }}
              </h3>

              <p class="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-3">
                {{ s.shortDesc }}
              </p>

              <!-- Benefit Pill -->
              <div class="p-3 bg-blue-50/60 rounded-2xl border border-blue-100 mb-4">
                <div class="text-[10px] text-blue-900/70 font-bold uppercase tracking-wider">Financial Benefit / Grant</div>
                <div class="text-xs font-extrabold text-[#0e2554] mt-0.5">{{ s.benefit }}</div>
              </div>

              <!-- Deadline -->
              <div class="flex items-center gap-2 text-xs text-slate-500 mb-4">
                <i class="fa-regular fa-clock text-amber-500"></i>
                <span>Deadline: <strong class="text-slate-800">{{ s.deadline }}</strong></span>
              </div>
            </div>

            <!-- Detail Modal Trigger -->
            <button (click)="openDetail(s)" 
                    class="w-full py-2.5 text-xs font-bold text-[#0e2554] bg-slate-50 border border-slate-200 rounded-xl hover:bg-[#0e2554] hover:text-white transition flex items-center justify-center gap-2">
              <span>View Eligibility & Apply</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

      </div>

      <!-- ================= DETAIL MODAL ================= -->
      <div *ngIf="selectedScheme" 
           class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
        <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
          
          <button (click)="selectedScheme = null" class="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2">
            <i class="fa-solid fa-xmark text-xl"></i>
          </button>

          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-800">
              {{ selectedScheme.category }}
            </span>
            <span class="text-xs text-slate-400 font-semibold">{{ selectedScheme.sponsor }}</span>
          </div>

          <h3 class="text-xl font-black text-slate-900 mb-3 leading-snug">
            {{ selectedScheme.title }}
          </h3>

          <div class="p-4 bg-blue-50/70 rounded-2xl border border-blue-100 mb-6">
            <div class="text-[11px] text-blue-900 font-bold uppercase tracking-wider">Sanctioned Benefit</div>
            <div class="text-sm font-black text-[#0e2554] mt-0.5">{{ selectedScheme.benefit }}</div>
            <div class="text-xs text-slate-500 mt-1">Application Last Date: <strong>{{ selectedScheme.deadline }}</strong></div>
          </div>

          <!-- Eligibility Criteria -->
          <div class="mb-6">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <i class="fa-solid fa-clipboard-check text-emerald-600"></i> Eligibility Criteria
            </h4>
            <ul class="space-y-1.5 text-xs text-slate-600">
              <li *ngFor="let el of selectedScheme.eligibility" class="flex items-start gap-2">
                <i class="fa-solid fa-check text-emerald-600 text-[10px] mt-1"></i>
                <span>{{ el }}</span>
              </li>
            </ul>
          </div>

          <!-- Required Documents -->
          <div class="mb-6">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <i class="fa-solid fa-file-shield text-blue-600"></i> Required Documents Checklist
            </h4>
            <ul class="space-y-1.5 text-xs text-slate-600">
              <li *ngFor="let doc of selectedScheme.documentsRequired" class="flex items-start gap-2">
                <i class="fa-solid fa-file text-blue-500 text-[10px] mt-1"></i>
                <span>{{ doc }}</span>
              </li>
            </ul>
          </div>

          <!-- Modal Footer Actions -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button (click)="selectedScheme = null" class="px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl">
              Close
            </button>
            <a [href]="selectedScheme.applicationUrl" target="_blank" 
               class="px-6 py-2.5 text-xs font-bold text-white bg-[#0e2554] hover:bg-[#071739] rounded-xl transition shadow-md flex items-center gap-2">
              <span>Visit Official Application Portal</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>

        </div>
      </div>

    </div>
  `
})
export class OpportunitiesComponent implements OnInit {
  schemesService = inject(SchemesService);

  categories = ['All', 'Scholarship', 'Internship', 'MSME & Startup', 'Skill Training'];
  selectedCategory = 'All';

  allSchemes: OpportunityScheme[] = [];
  displayedSchemes: OpportunityScheme[] = [];

  selectedScheme: OpportunityScheme | null = null;

  ngOnInit(): void {
    this.allSchemes = this.schemesService.getSchemes();
    this.displayedSchemes = this.allSchemes;
  }

  filterSchemes(): void {
    if (this.selectedCategory === 'All') {
      this.displayedSchemes = this.allSchemes;
    } else {
      this.displayedSchemes = this.allSchemes.filter(s => s.category.toLowerCase() === this.selectedCategory.toLowerCase());
    }
  }

  openDetail(s: OpportunityScheme): void {
    this.selectedScheme = s;
  }
}

