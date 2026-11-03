import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../core/services/news.service';
import { EventsService } from '../../core/services/events.service';
import { InitiativesService } from '../../core/services/initiatives.service';
import { MediaService } from '../../core/services/media.service';
import { NewsPost, YuvaEvent, InitiativeItem, MediaPhoto, MediaVideo } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="relative bg-white overflow-hidden">
      
      <!-- ================= 1. TICKER: ANNOUNCEMENTS ================= -->
      <div class="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-xs py-2 px-4 shadow-inner">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 font-bold tracking-wide flex-shrink-0">
            <span class="bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase font-black">Announcement</span>
            <i class="fa-solid fa-bell text-[11px] animate-bounce"></i>
          </div>
          <div class="overflow-hidden whitespace-nowrap text-xs font-medium w-full flex items-center gap-8">
            <span *ngFor="let ann of announcements" class="inline-flex items-center gap-2 hover:underline cursor-pointer">
              <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
              <a routerLink="/news">{{ ann.title }}</a>
            </span>
          </div>
          <a routerLink="/news" class="hidden md:inline-flex text-[11px] font-bold underline flex-shrink-0 hover:text-amber-100">
            View All Updates →
          </a>
        </div>
      </div>

      <!-- ================= 2. HERO SECTION ================= -->
      <section class="relative bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 py-12 lg:py-16 border-b border-slate-100">
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <!-- Left Column: Typography, Tagline, Banners & CTAs -->
            <div class="lg:col-span-7 space-y-6">
              
              <!-- Kicker Pill -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0e2554] text-[11px] font-extrabold tracking-widest uppercase">
                <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                BHARATIYA JANATA YUVA MORCHA • TRIPURA
              </div>

              <!-- Main Title -->
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0b1e42] tracking-tight leading-[1.08]">
                Empowering Youth.<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0e2554] via-blue-800 to-amber-600">Building a Stronger Future.</span>
              </h1>

              <!-- Tagline -->
              <p class="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                Connect. Participate. Lead.
              </p>

              <!-- Description -->
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Join the largest youth movement across all 60 Mandals and 8 Districts of Tripura. Access government scholarships, MSME startup capital, leadership fellowships, and 24/7 emergency blood support.
              </p>

              <!-- Highlighted Banners for Govt Scholarships & MSME Funding -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <!-- Banner 1: Scholarships -->
                <div class="p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-sm hover:shadow transition">
                  <div class="flex items-center gap-2.5 mb-1.5">
                    <div class="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs shadow-sm">
                      <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <span class="text-xs font-black text-amber-900 uppercase tracking-wide">Govt. Scholarship for Youth</span>
                  </div>
                  <p class="text-[12px] text-amber-950 font-medium leading-snug">
                    Mukhyamantri Yuva Yogayog Yojana (MMYYY) & Dr. B.R. Ambedkar Fellowship grants for Tripura students.
                  </p>
                  <a routerLink="/initiatives" class="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 hover:text-amber-950 pt-1.5 underline">
                    Check Eligibility & Apply →
                  </a>
                </div>

                <!-- Banner 2: MSME & Funding -->
                <div class="p-3.5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-sm hover:shadow transition">
                  <div class="flex items-center gap-2.5 mb-1.5">
                    <div class="w-7 h-7 rounded-lg bg-[#0e2554] text-white flex items-center justify-center text-xs shadow-sm">
                      <i class="fa-solid fa-sack-dollar"></i>
                    </div>
                    <span class="text-xs font-black text-[#0b1e42] uppercase tracking-wide">Small Business Funding</span>
                  </div>
                  <p class="text-[12px] text-slate-800 font-medium leading-snug">
                    Subsidized loans and seed capital up to ₹25 Lakhs via PMEGP & Tripura State Youth Startup Schemes.
                  </p>
                  <a routerLink="/initiatives" class="inline-flex items-center gap-1 text-[11px] font-bold text-[#0e2554] hover:text-blue-900 pt-1.5 underline">
                    Explore Schemes →
                  </a>
                </div>
              </div>

              <!-- CTA Buttons: Join Us, Upcoming Events, Our Initiatives -->
              <div class="flex flex-wrap items-center gap-3.5 pt-2">
                <!-- CTA 1: Join Us -->
                <a routerLink="/register" 
                   class="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#0e2554] hover:bg-[#071739] rounded-xl transition duration-150 shadow-md hover:shadow-lg transform active:scale-95">
                  <i class="fa-solid fa-user-plus text-xs"></i>
                  <span>Join Us</span>
                </a>

                <!-- CTA 2: Upcoming Events -->
                <a routerLink="/events" 
                   class="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0e2554] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition duration-150 shadow-sm">
                  <i class="fa-solid fa-calendar-check text-xs"></i>
                  <span>Upcoming Events</span>
                </a>

                <!-- CTA 3: Our Initiatives -->
                <a routerLink="/initiatives" 
                   class="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition duration-150 shadow-sm">
                  <i class="fa-solid fa-compass text-xs text-amber-600"></i>
                  <span>Our Initiatives</span>
                </a>
              </div>

            </div>

            <!-- Right Column: Crisp Showcase of Ujjayanta Palace, Agartala -->
            <div class="lg:col-span-5 flex justify-center">
              <div class="relative w-full max-w-md lg:max-w-none">
                
                <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img src="ujjayanta-palace.jpg" 
                       alt="Ujjayanta Palace, Agartala, Tripura" 
                       class="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                  <!-- Overlay Content Badge -->
                  <div class="absolute bottom-5 left-5 right-5 text-white">
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold mb-2 border border-white/30">
                      <i class="fa-solid fa-landmark text-amber-400"></i>
                      <span>Heritage & Pride of Tripura</span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold tracking-tight">
                      Ujjayanta Palace, Agartala
                    </h3>
                    <p class="text-xs text-slate-300 font-normal leading-relaxed mt-1">
                      Inspiring Tripura’s next generation of cultural custodians and dynamic leaders.
                    </p>
                  </div>
                </div>

                <!-- Floating Stats Pill -->
                <div class="absolute -bottom-4 -left-3 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    <i class="fa-solid fa-droplet"></i>
                  </div>
                  <div>
                    <span class="text-xs text-slate-500 font-semibold block">Rakta Sampark</span>
                    <span class="text-sm sm:text-base font-black text-slate-800">4,850+ Units Donated</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================= 3. QUICK STATISTICS COUNTER ================= -->
      <section class="py-12 bg-[#0b1e42] text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-8">
            <span class="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">Statewide Grassroots Strength</span>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight">Our Reach Across Tripura</h2>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <!-- Total Members -->
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div class="text-3xl sm:text-4xl font-black text-amber-400 mb-1">85,420+</div>
              <div class="text-xs sm:text-sm font-bold text-slate-200">Total Members</div>
              <div class="text-[11px] text-slate-400 mt-1">Registered youth citizens</div>
            </div>

            <!-- Active Volunteers -->
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div class="text-3xl sm:text-4xl font-black text-emerald-400 mb-1">18,250+</div>
              <div class="text-xs sm:text-sm font-bold text-slate-200">Active Volunteers</div>
              <div class="text-[11px] text-slate-400 mt-1">Ready for civic action</div>
            </div>

            <!-- Districts -->
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div class="text-3xl sm:text-4xl font-black text-blue-400 mb-1">8</div>
              <div class="text-xs sm:text-sm font-bold text-slate-200">Districts</div>
              <div class="text-[11px] text-slate-400 mt-1">100% Territory coverage</div>
            </div>

            <!-- Mandals -->
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div class="text-3xl sm:text-4xl font-black text-purple-400 mb-1">60</div>
              <div class="text-xs sm:text-sm font-bold text-slate-200">Mandals</div>
              <div class="text-[11px] text-slate-400 mt-1">Constituency units</div>
            </div>

            <!-- Events Conducted -->
            <div class="col-span-2 md:col-span-1 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div class="text-3xl sm:text-4xl font-black text-amber-400 mb-1">450+</div>
              <div class="text-xs sm:text-sm font-bold text-slate-200">Events Conducted</div>
              <div class="text-[11px] text-slate-400 mt-1">Drives, camps & sports</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 4. OUR INITIATIVES HIGHLIGHTS ================= -->
      <section class="py-14 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Flagship Pillars</span>
              <h2 class="text-2xl sm:text-3xl font-black text-[#0b1e42] tracking-tight">Our Key Initiatives</h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-1">Transformative programs shaping education, livelihoods, environment, and social security.</p>
            </div>
            <a routerLink="/initiatives" class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0e2554] hover:underline">
              <span>View All 9 Initiatives</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div *ngFor="let init of highlightedInitiatives" class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition group">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-xl bg-blue-50 text-[#0e2554] flex items-center justify-center text-xl group-hover:bg-[#0e2554] group-hover:text-white transition">
                  <i [class]="init.icon"></i>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  {{ init.category }}
                </span>
              </div>
              <h3 class="text-lg font-bold text-[#0b1e42] mb-2 group-hover:text-blue-700 transition">
                {{ init.name }}
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {{ init.objective }}
              </p>
              <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span class="text-slate-500">{{ init.impact[0] }}</span>
                <a routerLink="/initiatives" class="text-[#0e2554] hover:underline">Details →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 5. UPCOMING EVENTS & RECENT ACTIVITIES PREVIEW ================= -->
      <section class="py-14 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <!-- Left 7 Cols: Upcoming Events Preview -->
            <div class="lg:col-span-7">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block">Get Involved</span>
                  <h2 class="text-2xl font-black text-[#0b1e42] tracking-tight">Upcoming Events</h2>
                </div>
                <a routerLink="/events" class="text-xs font-bold text-[#0e2554] hover:underline">View Calendar →</a>
              </div>

              <div class="space-y-4">
                <div *ngFor="let ev of upcomingEvents" class="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition bg-slate-50/50 hover:bg-slate-50">
                  <img [src]="ev.imageUrl" [alt]="ev.title" class="w-full sm:w-36 h-28 object-cover rounded-xl flex-shrink-0" />
                  <div class="flex flex-col justify-between flex-grow">
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#0e2554]">{{ ev.category }}</span>
                        <span class="text-xs text-slate-500 font-semibold"><i class="fa-regular fa-clock mr-1"></i>{{ ev.date }}</span>
                      </div>
                      <h3 class="text-base font-bold text-[#0b1e42] leading-snug">{{ ev.title }}</h3>
                      <p class="text-xs text-slate-600 mt-1 line-clamp-1"><i class="fa-solid fa-location-dot mr-1 text-slate-400"></i>{{ ev.venue }}</p>
                    </div>
                    <div class="pt-2 mt-2 border-t border-slate-200/80 flex items-center justify-between">
                      <span class="text-xs font-semibold text-slate-500">{{ ev.volunteersRegistered }} volunteers attending</span>
                      <a routerLink="/events" class="text-xs font-bold text-[#0e2554] hover:underline">Register to Attend →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right 5 Cols: Recent Activities Archive Snippets -->
            <div class="lg:col-span-5">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <span class="text-xs font-bold text-emerald-600 uppercase tracking-widest block">Impact On Ground</span>
                  <h2 class="text-2xl font-black text-[#0b1e42] tracking-tight">Recent Activities</h2>
                </div>
                <a routerLink="/events" class="text-xs font-bold text-emerald-700 hover:underline">Archive →</a>
              </div>

              <div class="space-y-4">
                <div *ngFor="let past of pastEvents" class="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <div class="flex items-center justify-between text-xs font-bold text-emerald-800 mb-1">
                    <span>{{ past.category }}</span>
                    <span>{{ past.date }}</span>
                  </div>
                  <h3 class="text-sm font-bold text-slate-900 mb-1">{{ past.title }}</h3>
                  <p class="text-xs text-slate-600 leading-relaxed mb-2">{{ past.pastSummary }}</p>
                  <div class="text-[11px] font-semibold text-emerald-700 bg-white/80 p-2 rounded-lg border border-emerald-200/60">
                    <i class="fa-solid fa-chart-line mr-1"></i>{{ past.turnoutStats }}
                  </div>
                </div>
              </div>

              <!-- Quick Banner for Blood Network -->
              <div class="mt-6 p-5 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-md">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                    <i class="fa-solid fa-droplet text-white"></i>
                  </div>
                  <h4 class="font-bold text-sm">Emergency Blood Requirement?</h4>
                </div>
                <p class="text-xs text-red-100 leading-relaxed mb-3">
                  Connect with voluntary donors in your district or hospital in real-time. Zero charges.
                </p>
                <a routerLink="/blood-donation" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-red-700 font-bold text-xs hover:bg-red-50 transition">
                  <span>Open Blood Network</span>
                  <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- ================= 6. LATEST NEWS PREVIEW ================= -->
      <section class="py-14 bg-slate-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">State Press & Media</span>
              <h2 class="text-2xl sm:text-3xl font-black text-[#0b1e42] tracking-tight">Latest News & Press Releases</h2>
            </div>
            <a routerLink="/news" class="text-xs sm:text-sm font-bold text-[#0e2554] hover:underline">
              All News & Updates →
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div *ngFor="let item of latestNews" class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <img [src]="item.featuredImage" [alt]="item.title" class="w-full h-44 object-cover" />
                <div class="p-5">
                  <div class="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span class="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">{{ item.category }}</span>
                    <span>{{ item.date }}</span>
                  </div>
                  <h3 class="text-base font-bold text-slate-900 leading-snug mb-2 hover:text-blue-700 transition">
                    <a routerLink="/news">{{ item.title }}</a>
                  </h3>
                  <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {{ item.summary }}
                  </p>
                </div>
              </div>
              <div class="px-5 pb-5 pt-2">
                <a routerLink="/news" class="text-xs font-bold text-[#0e2554] hover:underline flex items-center gap-1">
                  <span>Read Full Article</span>
                  <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 7. PHOTO & VIDEO GALLERY SNIPPETS ================= -->
      <section class="py-14 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span class="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-1">Visual Chronicle</span>
              <h2 class="text-2xl sm:text-3xl font-black text-[#0b1e42] tracking-tight">Photo & Video Gallery</h2>
            </div>
            <a routerLink="/media" class="text-xs sm:text-sm font-bold text-[#0e2554] hover:underline">
              Browse Full Media Center →
            </a>
          </div>

          <!-- Photo Grid Snippets -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div *ngFor="let photo of galleryPhotos" class="relative group rounded-2xl overflow-hidden aspect-video shadow-sm">
              <img [src]="photo.imageUrl" [alt]="photo.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                <span class="text-[10px] font-bold text-amber-400">{{ photo.district }} • {{ photo.date }}</span>
                <span class="text-xs font-bold line-clamp-1">{{ photo.title }}</span>
              </div>
            </div>
          </div>

          <!-- Video Snippets -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div *ngFor="let vid of galleryVideos" class="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group">
              <img [src]="vid.thumbnailUrl" [alt]="vid.title" class="w-full h-56 object-cover opacity-80 group-hover:opacity-60 transition" />
              <div class="absolute inset-0 flex items-center justify-center">
                <a routerLink="/media" class="w-14 h-14 rounded-full bg-white/90 text-[#0e2554] flex items-center justify-center text-xl shadow-lg hover:scale-110 transition">
                  <i class="fa-solid fa-play ml-1"></i>
                </a>
              </div>
              <div class="absolute bottom-3 left-4 right-4 text-white">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white">{{ vid.category }} • {{ vid.duration }}</span>
                <h4 class="text-sm font-bold mt-1 line-clamp-1">{{ vid.title }}</h4>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= 8. CALL TO ACTION: JOIN US ================= -->
      <section class="py-14 bg-gradient-to-r from-[#0b1e42] via-[#0e2554] to-blue-950 text-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
          <span class="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">Be The Catalyst of Change</span>
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight mb-4">Ready to Serve Tripura and Empower Our Youth?</h2>
          <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Register as an active member or volunteer in less than 2 minutes. Receive your official Digital Membership ID card instantly.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a routerLink="/register" class="px-8 py-4 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-[#0b1e42] transition shadow-lg hover:shadow-xl">
              <i class="fa-solid fa-id-card mr-2"></i>Register / Join Us Now
            </a>
            <a routerLink="/districts" class="px-7 py-4 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition">
              <i class="fa-solid fa-map-location-dot mr-2"></i>Find Your Mandal Unit
            </a>
          </div>
        </div>
      </section>

    </div>
  `
})
export class HomeComponent implements OnInit {
  newsService = inject(NewsService);
  eventsService = inject(EventsService);
  initiativesService = inject(InitiativesService);
  mediaService = inject(MediaService);

  announcements: NewsPost[] = [];
  latestNews: NewsPost[] = [];
  upcomingEvents: YuvaEvent[] = [];
  pastEvents: YuvaEvent[] = [];
  highlightedInitiatives: InitiativeItem[] = [];
  galleryPhotos: MediaPhoto[] = [];
  galleryVideos: MediaVideo[] = [];

  ngOnInit(): void {
    this.announcements = this.newsService.getAnnouncements();
    this.latestNews = this.newsService.getAll().slice(0, 3);
    this.upcomingEvents = this.eventsService.getUpcomingEvents().slice(0, 2);
    this.pastEvents = this.eventsService.getPastEvents().slice(0, 2);
    this.highlightedInitiatives = this.initiativesService.getAll().slice(0, 3);
    this.galleryPhotos = this.mediaService.getPhotos().slice(0, 4);
    this.galleryVideos = this.mediaService.getVideos().slice(0, 2);
  }
}
