import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TripuraGeoService } from '../../core/services/tripura-geo.service';
import { DistrictDirectoryService } from '../../core/services/district-directory.service';
import { District, Mandal, DistrictTeamMember } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-3">
            <i class="fa-solid fa-map-location-dot text-amber-500"></i>
            <span>Grassroots Network • 8 Districts & 60 Mandals</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-[#0b1e42] tracking-tight">District & Mandal Searchable Directory</h1>
          <p class="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Locate authorized youth leaders, coordinators, and Mandal helpdesks in your assembly constituency while respecting privacy standards.
          </p>
        </div>

        <!-- ================= INTERACTIVE DRILL-DOWN COMPONENT ================= -->
        <!-- Select District -> Select Mandal -> View Team -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div class="text-center max-w-xl mx-auto mb-6">
            <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Instant Drill-Down Search</span>
            <h3 class="text-xl sm:text-2xl font-black text-[#0b1e42]">Find Your Local Constituency Team</h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end max-w-3xl mx-auto">
            
            <!-- Step 1: Select District -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-blue-100 text-[#0e2554] text-[10px] flex items-center justify-center font-bold">1</span>
                <span>Select District</span>
              </label>
              <select [(ngModel)]="selectedDistrictId" (change)="onDistrictChange()" 
                      class="w-full px-4 py-2.5 rounded-2xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">
                <option value="all">All Districts (Statewide)</option>
                <option *ngFor="let dist of districts" [value]="dist.id">{{ dist.name }}</option>
              </select>
            </div>

            <!-- Step 2: Select Mandal -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-blue-100 text-[#0e2554] text-[10px] flex items-center justify-center font-bold">2</span>
                <span>Select Mandal</span>
              </label>
              <select [(ngModel)]="selectedMandalId" (change)="applyFilter()"
                      [disabled]="availableMandals.length === 0"
                      class="w-full px-4 py-2.5 rounded-2xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100 disabled:cursor-not-allowed font-medium">
                <option value="all">{{ availableMandals.length ? 'All Mandals in District' : 'Select District first' }}</option>
                <option *ngFor="let m of availableMandals" [value]="m.id">{{ m.name }}</option>
              </select>
            </div>

            <!-- Step 3: View / Reset Button -->
            <div>
              <button (click)="resetDrillDown()" 
                      class="w-full py-2.5 px-4 rounded-2xl border border-slate-300 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition flex items-center justify-center gap-2">
                <i class="fa-solid fa-rotate-left text-xs"></i>
                <span>Reset Filters</span>
              </button>
            </div>

          </div>

          <!-- District Info Pill if selected -->
          <div *ngIf="activeDistrictObject" class="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-3xl mx-auto flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
            <div>
              <span class="font-bold text-slate-900">{{ activeDistrictObject.name }} District:</span>
              <span> HQ: {{ activeDistrictObject.headquarters }} • Population: {{ activeDistrictObject.populationApprox }}</span>
            </div>
            <span class="font-bold text-[#0e2554] bg-blue-100 px-2.5 py-1 rounded-full">
              {{ activeDistrictObject.mandals.length }} Assembly Mandals
            </span>
          </div>

        </div>

        <!-- ================= TEAM MEMBERS RESULTS ================= -->
        <div>
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-xl sm:text-2xl font-black text-[#0b1e42] tracking-tight">Authorized Leadership Team</h3>
              <p class="text-xs text-slate-500 mt-0.5">Displaying authorized public contacts (private mobile numbers protected per security protocol).</p>
            </div>
            <span class="text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
              Showing {{ filteredTeam.length }} Representatives
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let member of filteredTeam" 
                 class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-[#0e2554]">
                    {{ member.designation }}
                  </span>
                  <span class="text-[11px] font-semibold text-amber-700">
                    <i class="fa-solid fa-map-pin mr-1"></i>{{ member.districtName }}
                  </span>
                </div>

                <h4 class="text-base font-bold text-slate-900 mb-1">{{ member.name }}</h4>
                <div class="text-xs font-bold text-slate-600 mb-2">Mandal: {{ member.mandalName }}</div>

                <p class="text-xs text-slate-600 leading-relaxed mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {{ member.responsibilities }}
                </p>
              </div>

              <!-- Authorized Public Contacts (Privacy Preserved) -->
              <div class="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                <div class="flex items-center justify-between">
                  <span class="text-slate-400"><i class="fa-solid fa-phone mr-1"></i>Official Desk:</span>
                  <span class="font-mono text-slate-800 font-bold">{{ member.officeContact }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400"><i class="fa-regular fa-envelope mr-1"></i>Official Email:</span>
                  <a [href]="'mailto:' + member.officialEmail" class="font-mono text-[#0e2554] hover:underline truncate max-w-[170px]">{{ member.officialEmail }}</a>
                </div>
                <div class="pt-2 text-[10px] text-slate-400 flex items-center gap-1">
                  <i class="fa-solid fa-shield-halved text-emerald-600"></i>
                  <span>Official desk contact verified. Personal number masked for privacy.</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- 8 Districts Quick Directory Cards -->
        <div class="pt-8 border-t border-slate-200">
          <div class="text-center max-w-2xl mx-auto mb-8">
            <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Statewide Presence</span>
            <h3 class="text-2xl font-black text-[#0b1e42]">All 8 Districts of Tripura</h3>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div *ngFor="let dist of districts" 
                 (click)="selectQuickDistrict(dist.id)"
                 class="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition cursor-pointer text-center group">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#0e2554] flex items-center justify-center font-bold text-sm mx-auto mb-2 group-hover:bg-[#0e2554] group-hover:text-white transition">
                <i class="fa-solid fa-landmark"></i>
              </div>
              <h5 class="text-sm font-bold text-slate-900 group-hover:text-[#0e2554] transition">{{ dist.name }}</h5>
              <div class="text-[11px] text-slate-500 mt-0.5">HQ: {{ dist.headquarters }}</div>
              <div class="text-[10px] font-bold text-amber-700 mt-1">{{ dist.mandals.length }} Mandals</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class DistrictsComponent implements OnInit {
  geoService = inject(TripuraGeoService);
  districtService = inject(DistrictDirectoryService);

  districts: District[] = [];
  availableMandals: Mandal[] = [];

  selectedDistrictId = 'all';
  selectedMandalId = 'all';

  allTeam: DistrictTeamMember[] = [];
  filteredTeam: DistrictTeamMember[] = [];

  ngOnInit(): void {
    this.districts = this.geoService.getDistricts();
    this.allTeam = this.districtService.getAll();
    this.filteredTeam = [...this.allTeam];
  }

  get activeDistrictObject(): District | undefined {
    if (this.selectedDistrictId === 'all') return undefined;
    return this.districts.find(d => d.id === this.selectedDistrictId);
  }

  onDistrictChange(): void {
    if (this.selectedDistrictId === 'all') {
      this.availableMandals = [];
      this.selectedMandalId = 'all';
    } else {
      const dist = this.districts.find(d => d.id === this.selectedDistrictId);
      this.availableMandals = dist ? dist.mandals : [];
      this.selectedMandalId = 'all';
    }
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredTeam = this.districtService.getTeamByDistrictAndMandal(
      this.selectedDistrictId,
      this.selectedMandalId
    );
  }

  selectQuickDistrict(distId: string): void {
    this.selectedDistrictId = distId;
    this.onDistrictChange();
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }

  resetDrillDown(): void {
    this.selectedDistrictId = 'all';
    this.selectedMandalId = 'all';
    this.availableMandals = [];
    this.filteredTeam = [...this.allTeam];
  }
}

