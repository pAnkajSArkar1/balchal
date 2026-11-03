import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Top Announcement / Helpline Bar -->
    <div class="bg-[#0b1e42] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-blue-900/60 hidden md:flex justify-between items-center">
      <div class="flex items-center gap-4">
        <span class="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
          <i class="fa-solid fa-bullhorn text-[10px]"></i>
          <span>Yuva Morcha Tripura</span>
        </span>
        <span class="text-slate-300 hidden lg:inline">|</span>
        <span class="text-slate-300 hidden lg:inline">Empowering Youth • Building a Stronger Future</span>
      </div>
      <div class="flex items-center gap-4 text-slate-200">
        <a routerLink="/blood-donation" class="hover:text-amber-300 transition-colors flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>24/7 Emergency Blood Helpline: +91 381 232 4011</span>
        </a>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-200">
      <div class="w-full px-4 sm:px-6 lg:px-10">
        <div class="flex items-center justify-between h-20">
          
          <!-- Brand Logo -->
          <a routerLink="/" class="flex items-center gap-3 group cursor-pointer focus:outline-none flex-shrink-0">
            <img src="emblem.png" alt="Yuva Morcha Tripura Emblem" class="w-10 h-10 object-contain transition-transform group-hover:scale-105" />
            <div class="flex flex-col">
              <span class="text-xl sm:text-2xl font-black text-[#0b1e42] tracking-tight leading-tight">Yuva Morcha</span>
              <span class="text-[11px] font-bold text-amber-600 tracking-wider uppercase">Tripura Pradesh</span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden xl:flex items-center gap-1 text-[13px] font-semibold text-slate-700">
            <a routerLink="/" 
               routerLinkActive="text-[#0e2554] bg-slate-100/90 font-bold" 
               [routerLinkActiveOptions]="{exact: true}"
               class="px-3 py-2 rounded-lg hover:text-[#0e2554] hover:bg-slate-50 transition-colors">
              HOME
            </a>

            <a routerLink="/about" 
               routerLinkActive="text-[#0e2554] bg-slate-100/90 font-bold"
               class="px-3 py-2 rounded-lg hover:text-[#0e2554] hover:bg-slate-50 transition-colors">
              ABOUT
            </a>

            <a routerLink="/leadership" 
               routerLinkActive="text-[#0e2554] bg-slate-100/90 font-bold"
               class="px-3 py-2 rounded-lg hover:text-[#0e2554] hover:bg-slate-50 transition-colors">
              LEADERSHIP
            </a>

            <a routerLink="/events" 
               routerLinkActive="text-[#0e2554] bg-slate-100/90 font-bold"
               class="px-3 py-2 rounded-lg hover:text-[#0e2554] hover:bg-slate-50 transition-colors">
              MEMBERSHIP / EVENTS
            </a>

            <a routerLink="/initiatives" 
               routerLinkActive="text-[#0e2554] bg-slate-100/90 font-bold"
               class="px-3 py-2 rounded-lg hover:text-[#0e2554] hover:bg-slate-50 transition-colors">
              INITIATIVES
            </a>

            <a routerLink="/news" 
               routerLinkActive="text-[#0e2554] bg-slate-100/90 font-bold"
               class="px-3 py-2 rounded-lg hover:text-[#0e2554] hover:bg-slate-50 transition-colors">
              NEWS
            </a>

            <a routerLink="/media" 
               routerLinkActive="text-[#0e2554] bg-slate-100/90 font-bold"
               class="px-3 py-2 rounded-lg hover:text-[#0e2554] hover:bg-slate-50 transition-colors">
              MEDIA
            </a>

            <a routerLink="/districts" 
               routerLinkActive="text-[#0e2554] bg-slate-100/90 font-bold"
               class="px-3 py-2 rounded-lg hover:text-[#0e2554] hover:bg-slate-50 transition-colors">
              DISTRICTS
            </a>

            <a routerLink="/contact-career" 
               routerLinkActive="text-[#0e2554] bg-slate-100/90 font-bold"
               class="px-3 py-2 rounded-lg hover:text-[#0e2554] hover:bg-slate-50 transition-colors">
              CONTACT / CAREER
            </a>
          </nav>

          <!-- Desktop Quick Action CTAs -->
          <div class="hidden sm:flex items-center gap-3">
            <a routerLink="/blood-donation" 
               class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl transition shadow-sm">
              <span class="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <i class="fa-solid fa-droplet text-red-600 text-xs"></i>
              <span>Blood Network</span>
            </a>

            <a routerLink="/register" 
               class="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-white bg-[#0e2554] hover:bg-[#071739] rounded-xl transition shadow-md hover:shadow-lg">
              <i class="fa-solid fa-user-plus text-xs"></i>
              <span>Join Us</span>
            </a>
          </div>

          <!-- Mobile / Tablet Menu Button -->
          <div class="flex xl:hidden items-center gap-2">
            <a routerLink="/register" 
               class="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#0e2554] rounded-lg">
              <span>Join</span>
            </a>

            <button (click)="mobileMenuOpen = !mobileMenuOpen" 
                    type="button"
                    class="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                    aria-label="Toggle Navigation Menu">
              <i class="fa-solid" [ngClass]="mobileMenuOpen ? 'fa-xmark text-xl' : 'fa-bars text-xl'"></i>
            </button>
          </div>

        </div>

        <!-- Mobile Drawer Navigation -->
        <div *ngIf="mobileMenuOpen" class="xl:hidden pb-6 pt-2 border-t border-slate-100 flex flex-col gap-1.5 animate-fadeIn">
          <a (click)="mobileMenuOpen = false" routerLink="/" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-100">HOME</a>
          <a (click)="mobileMenuOpen = false" routerLink="/about" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-100">ABOUT</a>
          <a (click)="mobileMenuOpen = false" routerLink="/leadership" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-100">LEADERSHIP</a>
          <a (click)="mobileMenuOpen = false" routerLink="/events" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-100">MEMBERSHIP / EVENTS</a>
          <a (click)="mobileMenuOpen = false" routerLink="/initiatives" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-100">INITIATIVES</a>
          <a (click)="mobileMenuOpen = false" routerLink="/news" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-100">NEWS</a>
          <a (click)="mobileMenuOpen = false" routerLink="/media" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-100">MEDIA</a>
          <a (click)="mobileMenuOpen = false" routerLink="/districts" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-100">DISTRICTS</a>
          <a (click)="mobileMenuOpen = false" routerLink="/contact-career" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-100">CONTACT / CAREER</a>
          <a (click)="mobileMenuOpen = false" routerLink="/blood-donation" class="px-3.5 py-2.5 rounded-lg font-bold text-sm text-red-600 bg-red-50 hover:bg-red-100 flex items-center gap-2">
            <i class="fa-solid fa-droplet text-red-600"></i>
            <span>EMERGENCY BLOOD NETWORK</span>
          </a>
          <a (click)="mobileMenuOpen = false" routerLink="/register" class="mt-2 text-center px-4 py-3 rounded-xl font-bold text-sm text-white bg-[#0e2554] hover:bg-[#071739] shadow">
            JOIN US / VOLUNTEER REGISTRATION
          </a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  router = inject(Router);
  mobileMenuOpen = false;
}
