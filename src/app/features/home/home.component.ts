import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MemberService, ImpactStats } from '../../core/services/member.service';
import { SchemesService } from '../../core/services/schemes.service';
import { OpportunityScheme } from '../../core/models/tripura-data.model';
import { TrustBannerComponent } from '../../shared/components/trust-banner/trust-banner.component';

interface CoreFeature {
  id: string;
  title: string;
  description: string;
  iconClass: string;
  iconColor: string;
  link: string;
  badge?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TrustBannerComponent],
  template: `
    <div class="relative bg-white overflow-hidden">
      
      <!-- ================= HERO SECTION ================= -->
      <section class="relative min-h-[500px] lg:min-h-[540px] flex items-center bg-white overflow-hidden border-b border-slate-100">
        
        <!-- Right Background: PRISTINE ORIGINAL PHOTOGRAPH OF UJJAYANTA PALACE (AGARTALA) -->
        <div class="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none select-none overflow-hidden">
          <img src="ujjayanta-palace.jpg" 
               alt="Ujjayanta Palace, Agartala, Tripura" 
               class="w-full h-full object-cover object-center [mask-image:linear-gradient(to_right,transparent_0%,black_22%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_22%)]" />
        </div>

        <!-- Left Mobile Overlay for text readability on small viewports -->
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:hidden pointer-events-none"></div>

        <!-- Left Hero Content (Starts directly on left edge aligned with header logo) -->
        <div class="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
          <div class="max-w-xl lg:max-w-2xl">
            
            <!-- Headline Kicker -->
            <div class="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#0e2554] uppercase mb-2">
              A DIGITAL PLATFORM FOR TRIPURA'S YOUTH
            </div>

            <!-- Big Bold Title -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0b1e42] tracking-tight leading-[1.08] mb-3">
              Yuva Sampark
            </h1>

            <!-- Subheading Tagline -->
            <p class="text-base sm:text-lg lg:text-xl font-bold text-slate-800 tracking-tight mb-3">
              Connect Youth • Organise Action • Build Communities
            </p>

            <!-- Paragraph Description -->
            <p class="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed mb-7 max-w-lg font-normal">
              A secure, unified platform to register members, manage events, mobilise volunteers, support blood donation, and drive meaningful youth initiatives across Tripura.
            </p>

            <!-- Action CTAs -->
            <div class="flex flex-wrap items-center gap-3.5 mb-8">
              <!-- Primary CTA: Get Started -->
              <a routerLink="/register" 
                 class="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#0e2554] hover:bg-[#071739] rounded-xl transition duration-150 shadow-md hover:shadow-lg transform active:scale-95">
                <i class="fa-solid fa-user-plus text-xs"></i>
                <span>Get Started</span>
              </a>

              <!-- Secondary CTA: Watch Demo -->
              <button (click)="openDemoModal()" 
                      class="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition duration-150 shadow-sm hover:border-slate-400">
                <i class="fa-regular fa-circle-play text-base text-[#0e2554]"></i>
                <span>Watch Demo</span>
              </button>
            </div>

            <!-- Trust Chips (3 Trust Marks) -->
            <div class="flex flex-wrap items-center gap-5 text-xs sm:text-sm font-semibold text-slate-800">
              <div class="flex items-center gap-2">
                <i class="fa-regular fa-circle-check text-emerald-600 text-sm"></i>
                <span>Secure & Private</span>
              </div>

              <div class="hidden sm:inline-block h-3.5 w-px bg-slate-300"></div>

              <div class="flex items-center gap-2">
                <i class="fa-solid fa-desktop text-blue-600 text-sm"></i>
                <span>Web & Mobile Ready</span>
              </div>

              <div class="hidden sm:inline-block h-3.5 w-px bg-slate-300"></div>

              <div class="flex items-center gap-2">
                <i class="fa-solid fa-shield-halved text-indigo-600 text-sm"></i>
                <span>Verified Members</span>
              </div>
            </div>

          </div>
        </div>

      </section>

      <!-- ================= CORE FEATURES (10 CARDS) ================= -->
      <section id="features" class="py-14 sm:py-16 bg-slate-50/70 border-b border-slate-100">
        <div class="w-full px-6 sm:px-10 lg:px-14">
          
          <!-- Section Title with Center Accent Underline -->
          <div class="text-center mb-10">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0e2554] tracking-tight">Core Features</h2>
            <!-- Centered stylish line with saffron tick -->
            <div class="flex items-center justify-center gap-2 mt-2.5">
              <span class="w-12 h-[2px] bg-slate-300 rounded-full"></span>
              <span class="w-8 h-[3px] bg-amber-500 rounded-full"></span>
              <span class="w-12 h-[2px] bg-slate-300 rounded-full"></span>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mt-2">
              Ten integrated modules powering grassroots youth engagement, leadership, and public welfare across Tripura.
            </p>
          </div>

          <!-- 10 Feature Cards Grid (5 cols on desktop, 2 rows, horizontal layout inside each card) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            
            <div *ngFor="let item of coreFeatures" 
                 [routerLink]="item.link" 
                 class="feature-card group cursor-pointer bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:border-[#0e2554]/40 hover:shadow-md transition-all flex flex-col justify-between">
              
              <div class="flex items-start gap-3">
                <!-- Icon on Left -->
                <div class="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i [class]="item.iconClass" [ngClass]="item.iconColor" class="text-base"></i>
                </div>

                <!-- Text on Right -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-1">
                    <h3 class="text-xs font-bold text-slate-900 group-hover:text-[#0e2554] transition-colors leading-tight">
                      {{ item.title }}
                    </h3>
                    <span *ngIf="item.badge" class="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-red-100 text-red-600 animate-pulse">
                      {{ item.badge }}
                    </span>
                  </div>

                  <p class="text-[10.5px] text-slate-500 mt-1 leading-snug">
                    {{ item.description }}
                  </p>
                </div>
              </div>

              <!-- Bottom Indicator -->
              <div class="pt-2 mt-2 border-t border-slate-100/70 flex items-center justify-between text-[10px] font-semibold text-[#0e2554] opacity-70 group-hover:opacity-100">
                <span>Explore</span>
                <i class="fa-solid fa-arrow-right text-[9px] transform group-hover:translate-x-1 transition-transform"></i>
              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- ================= LIVE IMPACT COUNTER STRIP ================= -->
      <section class="bg-gradient-to-r from-slate-900 via-[#0e2554] to-slate-900 text-white py-8 border-y border-blue-900/40">
        <div class="w-full px-6 sm:px-10 lg:px-14">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            
            <div class="p-2">
              <div class="text-3xl lg:text-4xl font-extrabold text-amber-400 font-mono tracking-tight">
                {{ (impactStats?.totalMembers || 48924) | number }}
              </div>
              <div class="text-xs uppercase font-bold text-slate-300 mt-1 tracking-wider">Total Members</div>
            </div>

            <div class="p-2">
              <div class="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight">
                {{ (impactStats?.activeVolunteers || 12450) | number }}
              </div>
              <div class="text-xs uppercase font-bold text-slate-300 mt-1 tracking-wider">Active Volunteers</div>
            </div>

            <div class="p-2">
              <div class="text-3xl lg:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">
                8 <span class="text-lg text-slate-400 font-normal">/ 8</span>
              </div>
              <div class="text-xs uppercase font-bold text-slate-300 mt-1 tracking-wider">Districts Covered</div>
            </div>

            <div class="p-2">
              <div class="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">
                60 <span class="text-lg text-slate-400 font-normal">/ 60</span>
              </div>
              <div class="text-xs uppercase font-bold text-slate-300 mt-1 tracking-wider">Mandals Covered</div>
            </div>

            <div class="col-span-2 md:col-span-1 p-2">
              <div class="text-3xl lg:text-4xl font-extrabold text-red-400 font-mono tracking-tight">
                {{ (impactStats?.bloodUnitsDonated || 3418) | number }}
              </div>
              <div class="text-xs uppercase font-bold text-slate-300 mt-1 tracking-wider">Blood Pledges / Units</div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================= TRIPURA SCHEMES & OPPORTUNITIES HIGHLIGHTS ================= -->
      <section class="py-14 bg-white border-t border-slate-100">
        <div class="w-full px-6 sm:px-10 lg:px-14">
          
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Tripura Welfare & Growth</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0e2554] tracking-tight mt-1">
                State & Central Youth Schemes Hub
              </h2>
              <p class="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-xl">
                Direct access to educational scholarships, startup subsidies, and government fellowships for Tripura's youth.
              </p>
            </div>
            <a routerLink="/opportunities" 
               class="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#0e2554] hover:text-blue-700">
              <span>View All 18 Schemes</span>
              <i class="fa-solid fa-arrow-right-long text-xs"></i>
            </a>
          </div>

          <!-- Schemes Grid Preview -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div *ngFor="let s of featuredSchemes" 
                 class="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                    {{ s.category }}
                  </span>
                  <span class="text-[11px] font-semibold text-slate-400">
                    {{ s.sponsor }}
                  </span>
                </div>
                <h4 class="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {{ s.title }}
                </h4>
                <p class="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {{ s.shortDesc }}
                </p>
                <div class="p-3 bg-white rounded-xl border border-slate-200/80 mb-4">
                  <div class="text-[11px] text-slate-400 font-semibold uppercase">Grant / Benefit</div>
                  <div class="text-xs font-bold text-[#0e2554] mt-0.5">{{ s.benefit }}</div>
                </div>
              </div>

              <a [routerLink]="['/opportunities']" 
                 class="w-full py-2.5 text-center text-xs font-bold text-[#0e2554] bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition shadow-sm">
                Check Eligibility & Documents
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= URGENT BLOOD DONATION CALLOUT ================= -->
      <section class="py-10 bg-red-50/70 border-t border-red-100">
        <div class="w-full px-6 sm:px-10 lg:px-14">
          <div class="bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div class="space-y-3 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
                Emergency Network
              </div>
              <h3 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need Blood Urgently in Any Tripura District?
              </h3>
              <p class="text-sm text-red-100 max-w-xl">
                Connect in real-time with verified Yuva Morcha blood donors across all 8 districts. We coordinate directly with AGMC, TMC, and district hospitals.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <a routerLink="/blood-donation" 
                 class="px-6 py-3.5 bg-white text-red-700 hover:bg-red-50 font-bold rounded-xl text-sm transition shadow-lg">
                <i class="fa-solid fa-droplet text-red-600 mr-2"></i>
                Request Blood Now
              </a>
              <a routerLink="/blood-donation" 
                 class="px-6 py-3.5 bg-red-800/80 hover:bg-red-800 text-white font-bold rounded-xl text-sm border border-white/20 transition">
                Volunteer as Donor
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= BUILT FOR TRUST & SECURITY BANNER ================= -->
      <app-trust-banner></app-trust-banner>

    </div>

    <!-- ================= WATCH DEMO MODAL ================= -->
    <div *ngIf="showDemoModal" 
         class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button (click)="showDemoModal = false" class="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2">
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>

        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#0e2554] flex items-center justify-center text-lg">
            <i class="fa-solid fa-play"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900">Yuva Sampark Platform Tour</h3>
            <p class="text-xs text-slate-500">Tripura Youth Digital Governance & Action Portal</p>
          </div>
        </div>

        <div class="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white relative overflow-hidden mb-6 p-6 text-center">
          <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl mb-4 shadow-lg border border-white/30 animate-pulse">
            <i class="fa-solid fa-play ml-1"></i>
          </div>
          <h4 class="text-lg font-bold text-white mb-1">Interactive Walkthrough</h4>
          <p class="text-xs text-slate-300 max-w-md">
            Learn how members register, access emergency blood matches, apply for scholarships, and organize community drives in Tripura.
          </p>
        </div>

        <div class="flex justify-end gap-3">
          <button (click)="showDemoModal = false" class="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl">
            Close
          </button>
          <a routerLink="/register" (click)="showDemoModal = false" class="px-5 py-2.5 text-sm font-bold text-white bg-[#0e2554] hover:bg-[#081836] rounded-xl">
            Register as Volunteer
          </a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  memberService = inject(MemberService);
  schemesService = inject(SchemesService);

  impactStats: ImpactStats | null = null;
  featuredSchemes: OpportunityScheme[] = [];
  showDemoModal = false;

  coreFeatures: CoreFeature[] = [
    {
      id: 'member-mgmt',
      title: 'Member Management',
      description: 'Register, verify and manage members & teams',
      iconClass: 'fa-solid fa-users',
      iconColor: 'text-[#0e2554]',
      link: '/register'
    },
    {
      id: 'event-mgmt',
      title: 'Event Management',
      description: 'Create, promote and track events & campaigns',
      iconClass: 'fa-solid fa-calendar-days',
      iconColor: 'text-[#0e2554]',
      link: '/events'
    },
    {
      id: 'blood-donation',
      title: 'Blood Donation',
      description: 'Organise drives, manage donors & urgent requests',
      iconClass: 'fa-solid fa-droplet',
      iconColor: 'text-red-600',
      link: '/blood-donation',
      badge: 'Urgent'
    },
    {
      id: 'calling-messaging',
      title: 'Calling & Messaging',
      description: 'Secure, real-time communication',
      iconClass: 'fa-solid fa-comments',
      iconColor: 'text-[#0e2554]',
      link: '/dashboard'
    },
    {
      id: 'reports-analytics',
      title: 'Reports & Analytics',
      description: 'Track participation, activities and impact',
      iconClass: 'fa-solid fa-chart-simple',
      iconColor: 'text-[#0e2554]',
      link: '/dashboard'
    },
    {
      id: 'youth-opps',
      title: 'Youth Opportunities',
      description: 'Scholarships, internships and career guidance',
      iconClass: 'fa-solid fa-graduation-cap',
      iconColor: 'text-[#0e2554]',
      link: '/opportunities'
    },
    {
      id: 'volunteer-engagement',
      title: 'Volunteer Engagement',
      description: 'Onboard, assign and track volunteers',
      iconClass: 'fa-solid fa-hands-holding-child',
      iconColor: 'text-[#0e2554]',
      link: '/register'
    },
    {
      id: 'announcements',
      title: 'Announcements',
      description: 'Official updates, alerts and circulars',
      iconClass: 'fa-solid fa-bullhorn',
      iconColor: 'text-[#0e2554]',
      link: '/events'
    },
    {
      id: 'community-service',
      title: 'Community Service',
      description: 'Drive cleanliness, awareness and social initiatives',
      iconClass: 'fa-solid fa-seedling',
      iconColor: 'text-emerald-600',
      link: '/events'
    },
    {
      id: 'my-dashboard',
      title: 'My Dashboard',
      description: 'Personalized access to activities, roles and impact',
      iconClass: 'fa-solid fa-user',
      iconColor: 'text-[#0e2554]',
      link: '/dashboard'
    }
  ];

  ngOnInit(): void {
    this.memberService.getImpactStats().subscribe(stats => {
      this.impactStats = stats;
    });
    this.featuredSchemes = this.schemesService.getFeaturedSchemes().slice(0, 3);
  }

  openDemoModal(): void {
    this.showDemoModal = true;
  }
}
