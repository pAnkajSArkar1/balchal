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
              <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                <i class="fa-solid fa-hands-holding-child text-lg"></i>
              </div>
              <span class="text-xl font-bold text-white tracking-tight">Yuva Sampark</span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">
              Official digital citizen platform for BJP Yuva Morcha Tripura Pradesh. Unifying 60 Mandals across 8 Districts to empower Tripura's youth with skill, blood connectivity, leadership, and public welfare.
            </p>
            <div class="flex items-center gap-3 text-slate-400 pt-2">
              <a href="#" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-xs transition"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-700 hover:text-white flex items-center justify-center text-xs transition"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center text-xs transition"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs transition"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h5 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">Navigation</h5>
            <ul class="space-y-2 text-xs">
              <li><a routerLink="/" class="hover:text-amber-400 transition">Home & Overview</a></li>
              <li><a routerLink="/#features" class="hover:text-amber-400 transition">10 Core Modules</a></li>
              <li><a routerLink="/opportunities" class="hover:text-amber-400 transition">Tripura Schemes Hub</a></li>
              <li><a routerLink="/blood-donation" class="hover:text-amber-400 transition">Blood Donation Network</a></li>
              <li><a routerLink="/events" class="hover:text-amber-400 transition">Events & Campaigns</a></li>
              <li><a routerLink="/security" class="hover:text-amber-400 transition">Trust & Data Privacy (DPDP)</a></li>
            </ul>
          </div>

          <!-- Column 3: Districts & Mandals -->
          <div>
            <h5 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">Tripura Coverage</h5>
            <div class="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
              <span>• West Tripura</span>
              <span>• Sepahijala</span>
              <span>• Gomati</span>
              <span>• South Tripura</span>
              <span>• Khowai</span>
              <span>• Dhalai</span>
              <span>• Unakoti</span>
              <span>• North Tripura</span>
            </div>
            <div class="mt-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
              <span class="text-[11px] text-amber-300 font-semibold block">State Emergency Helpline</span>
              <span class="text-xs text-white font-mono font-bold">+91 381 232 4001 / 104</span>
            </div>
          </div>

          <!-- Column 4: Contact & Office -->
          <div>
            <h5 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">State Headquarters</h5>
            <p class="text-xs text-slate-400 leading-relaxed mb-3">
              Dr. Syama Prasad Mookerjee Bhawan, Krishna Nagar, Agartala, West Tripura - 799001
            </p>
            <div class="space-y-1.5 text-xs text-slate-400">
              <div class="flex items-center gap-2"><i class="fa-solid fa-envelope text-amber-500 text-xs"></i> sampark&#64;tripurayuva.org</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-phone text-amber-500 text-xs"></i> +91 381 295 1800</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-clock text-amber-500 text-xs"></i> 09:30 AM - 06:30 PM (Mon-Sat)</div>
            </div>
          </div>

        </div>

        <div class="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Yuva Sampark, Tripura. All rights reserved. Compliant with Digital Personal Data Protection (DPDP) Act, 2023.
          </div>
          <div class="flex items-center gap-4">
            <a routerLink="/security" class="hover:text-slate-300 transition">Privacy Policy</a>
            <span>•</span>
            <a routerLink="/security" class="hover:text-slate-300 transition">Terms of Service</a>
            <span>•</span>
            <a routerLink="/security" class="hover:text-slate-300 transition">RBAC Architecture</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}

