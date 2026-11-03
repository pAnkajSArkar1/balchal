import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService, UserRole, UserSession } from '../../core/services/auth.service';
import { MemberService } from '../../core/services/member.service';
import { BloodDonationService } from '../../core/services/blood-donation.service';
import { TripuraGeoService } from '../../core/services/tripura-geo.service';
import { District, BloodRequest } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-8">
        
        <!-- Top Role Switching Bar for Testing & Demonstration -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Switch Portal Role:</span>
            <div class="flex flex-wrap gap-1.5">
              <button *ngFor="let r of roles" 
                      (click)="switchRole(r)" 
                      class="px-3 py-1.5 rounded-lg text-xs font-bold transition"
                      [ngClass]="currentUser?.role === r ? 'bg-[#0e2554] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'">
                {{ r }}
              </button>
            </div>
          </div>

          <div class="text-xs font-semibold text-slate-500">
            Current RBAC: <span class="font-bold text-[#0e2554]">{{ currentUser?.role }}</span>
          </div>
        </div>

        <!-- Dashboard User Header Card -->
        <div class="bg-gradient-to-r from-[#0b1e42] via-[#0e2554] to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4 text-center sm:text-left">
            <div class="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 text-2xl flex-shrink-0 shadow">
              <i class="fa-solid fa-user-shield"></i>
            </div>
            <div>
              <div class="flex items-center gap-2 justify-center sm:justify-start">
                <h1 class="text-2xl font-black">{{ currentUser?.name }}</h1>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  {{ currentUser?.role }}
                </span>
              </div>
              <p class="text-xs text-blue-200 mt-1">
                {{ currentUser?.badge }} • {{ currentUser?.assignedMandal }}, {{ currentUser?.assignedDistrict }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <a routerLink="/register" 
               class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition">
              <i class="fa-solid fa-id-card mr-1.5"></i> My Digital ID
            </a>
            <a routerLink="/blood-donation" 
               class="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-md">
              <i class="fa-solid fa-droplet mr-1.5"></i> Blood Help
            </a>
          </div>
        </div>

        <!-- ================= ADMIN METRICS (Visible for State/District Admin) ================= -->
        <div *ngIf="isAdmin" class="space-y-6 animate-fadeIn">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Total Registrations</span>
                <i class="fa-solid fa-users text-[#0e2554]"></i>
              </div>
              <div class="text-2xl font-extrabold text-slate-900 font-mono">48,924</div>
              <div class="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <i class="fa-solid fa-arrow-trend-up"></i> +412 this week across 8 districts
              </div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Active Volunteers</span>
                <i class="fa-solid fa-handshake-angle text-blue-600"></i>
              </div>
              <div class="text-2xl font-extrabold text-slate-900 font-mono">12,450</div>
              <div class="text-[11px] text-blue-600 font-semibold mt-1">
                Mobilized in 60 Mandals
              </div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Blood Requests</span>
                <i class="fa-solid fa-droplet text-red-600"></i>
              </div>
              <div class="text-2xl font-extrabold text-red-600 font-mono">4 Pending</div>
              <div class="text-[11px] text-slate-500 font-semibold mt-1">
                12 fulfilled in last 48 hours
              </div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>DPDP Verification</span>
                <i class="fa-solid fa-shield-check text-emerald-600"></i>
              </div>
              <div class="text-2xl font-extrabold text-emerald-600 font-mono">100%</div>
              <div class="text-[11px] text-slate-500 font-semibold mt-1">
                Encrypted & Aadhaar Tokenized
              </div>
            </div>

          </div>

          <!-- District Breakdown Table -->
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-md">
            <div class="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <h3 class="text-base font-bold text-slate-900">
                Tripura District-Wise Membership & Volunteer Strength
              </h3>
              <span class="text-xs text-slate-500 font-semibold">Updated 5 mins ago</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead>
                  <tr class="border-b border-slate-200 text-slate-400 font-semibold uppercase text-[10px]">
                    <th class="py-2.5">District</th>
                    <th class="py-2.5">Headquarters</th>
                    <th class="py-2.5">Mandals</th>
                    <th class="py-2.5">Registered Members</th>
                    <th class="py-2.5">Active Donors</th>
                    <th class="py-2.5">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-slate-700">
                  <tr *ngFor="let dist of districtStats" class="hover:bg-slate-50 transition">
                    <td class="py-3 font-bold text-slate-900">{{ dist.name }}</td>
                    <td class="py-3">{{ dist.hq }}</td>
                    <td class="py-3 font-mono">{{ dist.mandals }}</td>
                    <td class="py-3 font-mono font-bold">{{ dist.members | number }}</td>
                    <td class="py-3 font-mono text-red-600 font-bold">{{ dist.donors }}</td>
                    <td class="py-3">
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">Active</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <!-- ================= MEMBER VIEW (Visible for Member / Mandal role) ================= -->
        <div *ngIf="!isAdmin" class="space-y-6 animate-fadeIn">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 class="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                My Volunteer Wing
              </h3>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#0e2554] flex items-center justify-center text-lg">
                  <i class="fa-solid fa-medal"></i>
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">Digital Media & Youth Outreach</div>
                  <div class="text-[10px] text-slate-500">Assigned Mandal: Agartala (Town)</div>
                </div>
              </div>
              <div class="p-3 bg-slate-50 rounded-xl text-xs text-slate-600">
                Next local meeting: <strong>Rabindra Bhawan, 15 Nov (04:00 PM)</strong>
              </div>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 class="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                Blood Donor Status
              </h3>
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-slate-900">Ready for Emergency Alerts</div>
                  <div class="text-[10px] text-slate-500">Group: O+ (Available in West Tripura)</div>
                </div>
                <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              </div>
              <a routerLink="/blood-donation" class="block text-center py-2 bg-red-50 text-red-700 font-bold rounded-xl text-xs hover:bg-red-100 transition">
                View Local Blood Alerts
              </a>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 class="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                Eligible Tripura Schemes
              </h3>
              <div class="text-xs text-slate-600">
                You qualify for <strong>Mukhyamantri Yuva Yogayog Yojana</strong> and <strong>TYES Startup Subsidies</strong>.
              </div>
              <a routerLink="/opportunities" class="block text-center py-2 bg-blue-50 text-[#0e2554] font-bold rounded-xl text-xs hover:bg-blue-100 transition">
                Explore Schemes
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  geoService = inject(TripuraGeoService);

  currentUser: UserSession | null = null;
  roles: UserRole[] = ['Super Admin', 'State Admin', 'District Admin', 'Mandal Admin', 'Member'];

  districtStats = [
    { name: 'West Tripura', hq: 'Agartala', mandals: 8, members: 14200, donors: 890 },
    { name: 'Sepahijala', hq: 'Bishramganj', mandals: 6, members: 6850, donors: 410 },
    { name: 'Gomati', hq: 'Udaipur', mandals: 5, members: 6420, donors: 380 },
    { name: 'South Tripura', hq: 'Belonia', mandals: 6, members: 5900, donors: 340 },
    { name: 'Khowai', hq: 'Khowai', mandals: 4, members: 4320, donors: 260 },
    { name: 'Dhalai', hq: 'Ambassa', mandals: 5, members: 4100, donors: 240 },
    { name: 'Unakoti', hq: 'Kailashahar', mandals: 4, members: 3650, donors: 220 },
    { name: 'North Tripura', hq: 'Dharmanagar', mandals: 5, members: 3484, donors: 210 }
  ];

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(u => this.currentUser = u);
  }

  get isAdmin(): boolean {
    return this.currentUser?.role === 'Super Admin' || this.currentUser?.role === 'State Admin' || this.currentUser?.role === 'District Admin';
  }

  switchRole(role: UserRole): void {
    this.authService.switchRole(role);
  }
}

