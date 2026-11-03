import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-[#071328] text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          <!-- Column 1: Brand & Mission -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <img src="emblem.png" alt="Yuva Morcha Tripura Emblem" class="w-9 h-9 object-contain" />
              <div>
                <span class="text-xl font-bold text-white tracking-tight block">Yuva Morcha</span>
                <span class="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Tripura Pradesh</span>
              </div>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">
              Official public portal for Bharatiya Janata Yuva Morcha, Tripura. Dedicated to empowering youth across 60 Mandals in 8 Districts through leadership, skill development, community service, and life-saving blood connectivity.
            </p>
            <div class="flex items-center gap-3 text-slate-400 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-500 hover:text-white flex items-center justify-center text-xs transition"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-xs transition"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center text-xs transition"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs transition"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h5 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">Quick Links</h5>
            <ul class="space-y-2 text-xs">
              <li><a routerLink="/" class="hover:text-amber-400 transition">Home</a></li>
              <li><a routerLink="/about" class="hover:text-amber-400 transition">About Us & Vision</a></li>
              <li><a routerLink="/leadership" class="hover:text-amber-400 transition">Leadership Directory</a></li>
              <li><a routerLink="/events" class="hover:text-amber-400 transition">Membership & Events</a></li>
              <li><a routerLink="/initiatives" class="hover:text-amber-400 transition">Flagship Initiatives</a></li>
              <li><a routerLink="/news" class="hover:text-amber-400 transition">News & Announcements</a></li>
              <li><a routerLink="/media" class="hover:text-amber-400 transition">Photo & Video Gallery</a></li>
              <li><a routerLink="/districts" class="hover:text-amber-400 transition">Districts & Mandals Directory</a></li>
            </ul>
          </div>

          <!-- Column 3: Emergency & Blood Network -->
          <div>
            <h5 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2">Emergency Network</h5>
            <p class="text-xs text-slate-400 leading-relaxed mb-3">
              Need blood in Agartala, Udaipur, Dharmanagar, or any sub-divisional hospital? Access our 24/7 verified voluntary blood donor registry.
            </p>
            <a routerLink="/blood-donation" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-950/60 border border-red-700/60 text-red-200 text-xs font-semibold hover:bg-red-900/60 transition mb-3">
              <i class="fa-solid fa-droplet text-red-400"></i>
              <span>Rakta Sampark Blood Portal</span>
            </a>
            <div class="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
              <span class="text-[11px] text-amber-300 font-semibold block">State Emergency Helpline</span>
              <span class="text-xs text-white font-mono font-bold">+91 381 232 4011 / 104</span>
            </div>
          </div>

          <!-- Column 4: Contact & Office -->
          <div>
            <h5 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">State Headquarters</h5>
            <p class="text-xs text-slate-400 leading-relaxed mb-3">
              Dr. Syama Prasad Mookerjee Bhawan, Krishna Nagar, Agartala, West Tripura - 799001
            </p>
            <div class="space-y-1.5 text-xs text-slate-400">
              <div class="flex items-center gap-2"><i class="fa-solid fa-envelope text-amber-500 text-xs"></i> contact&#64;bjymtripura.org</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-phone text-amber-500 text-xs"></i> +91 381 232 4011</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-briefcase text-amber-500 text-xs"></i> <a routerLink="/contact-career" class="hover:text-amber-400 underline">Youth Internships & Careers</a></div>
            </div>
          </div>

        </div>

        <div class="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Bharatiya Janata Yuva Morcha, Tripura. All rights reserved. Public Information Portal.
          </div>
          <div class="flex items-center gap-4">
            <a routerLink="/about" class="hover:text-slate-300 transition">About</a>
            <span>•</span>
            <a routerLink="/contact-career" class="hover:text-slate-300 transition">Contact & Grievances</a>
            <span>•</span>
            <a routerLink="/districts" class="hover:text-slate-300 transition">District Teams</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
