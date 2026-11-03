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
        
        <!-- Header Banner -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-3">
            <i class="fa-solid fa-flag text-amber-500"></i>
            <span>Vision • Mission • Grassroots Governance</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-[#0b1e42] tracking-tight">About Yuva Morcha Tripura</h1>
          <p class="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            The youth vanguard of Bharatiya Janata Party Tripura Pradesh, dedicated to channelizing the creative, intellectual, and physical vigor of youth toward an Ek Tripura - Srestha Tripura.
          </p>
        </div>

        <!-- 1. Core Vision, Mission & Objectives -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Vision -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shadow-sm">
              <i class="fa-solid fa-eye"></i>
            </div>
            <h3 class="text-xl font-black text-[#0b1e42]">Our Core Vision</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To build a vibrant, digitally skilled, patriotic, and self-reliant youth community in Tripura where every youngster from Dharmanagar to Sabroom has access to higher education, dignified livelihoods, and civic platforms.
            </p>
          </div>

          <!-- Mission -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-50 text-[#0e2554] flex items-center justify-center text-xl shadow-sm">
              <i class="fa-solid fa-bullseye"></i>
            </div>
            <h3 class="text-xl font-black text-[#0b1e42]">Our Mission</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To connect youth across all 60 Mandals, foster grassroots leadership, eradicate substance abuse, deliver state and central government scholarship/funding schemes, and maintain a 24/7 life-saving emergency blood network.
            </p>
          </div>

          <!-- Objectives -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shadow-sm">
              <i class="fa-solid fa-list-check"></i>
            </div>
            <h3 class="text-xl font-black text-[#0b1e42]">Strategic Objectives</h3>
            <ul class="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
              <li>100% digital literacy & cybersecurity awareness in rural mandals.</li>
              <li>Promotion of indigenous tribal athletics, art, and Kokborok heritage.</li>
              <li>Active coordination of disaster relief and community medical aid.</li>
            </ul>
          </div>
        </div>

        <!-- 2. Organizational Structure -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div class="max-w-2xl mb-8">
            <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Democratic Organization</span>
            <h2 class="text-2xl sm:text-3xl font-black text-[#0b1e42] tracking-tight">Four-Tier Organizational Structure</h2>
            <p class="text-xs sm:text-sm text-slate-600 mt-1">From state policy planning down to neighbourhood booth volunteers.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
              <div class="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Tier 1: Apex Body</div>
              <h4 class="text-base font-bold text-[#0b1e42] mb-2">State Executive</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                State President, Vice Presidents, General Secretaries, and department in-charges overseeing statewide youth policy and government scheme coordination.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200">
              <div class="text-xs font-bold text-indigo-800 uppercase tracking-wide mb-1">Tier 2: District Level</div>
              <h4 class="text-base font-bold text-[#0b1e42] mb-2">8 District Units</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Led by District Presidents across West, South, Gomati, Khowai, Sepahijala, Dhalai, Unakoti, and North Tripura managing district blood banks and sports leagues.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
              <div class="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Tier 3: Mandal Units</div>
              <h4 class="text-base font-bold text-[#0b1e42] mb-2">60 Assembly Mandals</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Direct grassroots youth engagement in every assembly constituency, running free study rooms, local grievance redressal, and civic campaigns.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <div class="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-1">Tier 4: Booth Brigades</div>
              <h4 class="text-base font-bold text-[#0b1e42] mb-2">3,328 Booth Teams</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Over 33,000 neighborhood volunteers connecting directly with first-time voters, college students, and emergency blood callers.
              </p>
            </div>
          </div>

          <div class="mt-8 text-center pt-6 border-t border-slate-100">
            <a routerLink="/leadership" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e2554] text-white text-xs sm:text-sm font-bold hover:bg-[#071739] transition shadow">
              <i class="fa-solid fa-users text-xs"></i>
              <span>Explore Complete Leadership Directory & Contact Info →</span>
            </a>
          </div>
        </div>

        <!-- 3. Youth Engagement & Community Programs -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Youth Engagement -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <h3 class="text-lg font-bold text-[#0b1e42]">Youth Engagement Programs</h3>
                <span class="text-xs text-slate-500">Education, Athletics & Digital Skilling</span>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              We empower youth through quarterly Youth Parliaments, free competitive examination study banks (UPSC/TPSC), youth fellowships, coding bootcamps, and football tournaments that nurture talent from remote villages.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">Youth Parliaments</span>
              <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">Study Corners</span>
              <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">Khel Tripura</span>
              <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">Coding Bootcamps</span>
            </div>
          </div>

          <!-- Social / Community Initiatives -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <i class="fa-solid fa-hand-holding-heart"></i>
              </div>
              <div>
                <h3 class="text-lg font-bold text-[#0b1e42]">Social & Community Initiatives</h3>
                <span class="text-xs text-slate-500">Service, Environment & Life-Saving Networks</span>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              "Seva Hi Sangathan" is our operational philosophy. Through Rakta Sampark, we maintain a 24/7 verified voluntary blood donor network, conduct mass river cleanups along the Gomati, and organize emergency relief battalions during monsoons.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-3 py-1 rounded-lg bg-red-50 text-red-700 text-xs font-semibold">Rakta Sampark Blood Network</span>
              <span class="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">Harit Tripura Afforestation</span>
              <span class="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold">Disaster Response Dal</span>
            </div>
          </div>

        </div>

        <!-- Join CTA -->
        <div class="p-8 rounded-3xl bg-gradient-to-r from-[#0b1e42] to-[#0e2554] text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="text-left">
            <h3 class="text-xl sm:text-2xl font-bold">Want to be part of Tripura's youth transformation?</h3>
            <p class="text-xs sm:text-sm text-slate-300 mt-1">Enroll as an active member or volunteer in your mandal unit today.</p>
          </div>
          <a routerLink="/register" class="px-6 py-3 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-[#0b1e42] transition shadow-md flex-shrink-0">
            Join Us / Volunteer Now
          </a>
        </div>

      </div>
    </div>
  `
})
export class AboutComponent {}
