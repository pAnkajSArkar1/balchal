import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <i class="fa-solid fa-flag"></i> Vision, Leadership & Heritage
          </div>
          <h1 class="text-3xl font-extrabold text-[#0e2554] tracking-tight">About Yuva Sampark Tripura</h1>
          <p class="text-sm text-slate-500 mt-2">
            Uniting the youth of Tripura across hills and plains to build an empowered, educated, and self-reliant state through Seva, Sangathan, and Digital Empowerment.
          </p>
        </div>

        <!-- Vision and Mission Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
              <i class="fa-solid fa-hands-holding-circle"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900">Connect</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Bridging geographical barriers across 8 districts and 60 mandals from Agartala to Jampui Hills. Creating a unified digital network for every youth in Tripura.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-blue-50 text-[#0e2554] flex items-center justify-center text-xl">
              <i class="fa-solid fa-people-group"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900">Engage</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Equipping youth with career opportunities, civil services guidance, sports leagues, cultural heritage conservation, and state entrepreneurship subsidies.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl">
              <i class="fa-solid fa-heart-pulse"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900">Serve</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Immediate community response: 24x7 blood donation matching, flood/cyclone disaster relief teams, cleanliness drives, and health outreach camps.
            </p>
          </div>
        </div>

        <!-- Leadership Directory -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">
            State Leadership & Coordination Team
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let leader of leaders" class="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div class="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-3 overflow-hidden border-2 border-amber-400">
                <img [src]="leader.image" [alt]="leader.name" class="w-full h-full object-cover" />
              </div>
              <h4 class="text-sm font-bold text-slate-900">{{ leader.name }}</h4>
              <div class="text-xs text-[#0e2554] font-semibold mt-0.5">{{ leader.designation }}</div>
              <div class="text-[11px] text-slate-500 mt-1">{{ leader.district }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class AboutComponent {
  leaders = [
    {
      name: 'Shri Sushanta Deb',
      designation: 'State President, BJYM Tripura',
      district: 'Tripura Pradesh Committee',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    {
      name: 'Shri Rupam Debnath',
      designation: 'General Secretary (Organization)',
      district: 'West Tripura',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
    {
      name: 'Smt. Anamika Tripura',
      designation: 'Vice President & Women Wing Lead',
      district: 'Dhalai & Gomati',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    {
      name: 'Dr. Sandip Chakraborty',
      designation: 'State Blood Donation Network Lead',
      district: 'AGMC Coordination Unit',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
    }
  ];
}

