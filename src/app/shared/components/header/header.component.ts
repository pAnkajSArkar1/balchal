import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-200">
      <div class="w-full px-6 sm:px-10 lg:px-14">
        <div class="flex items-center justify-between h-20">
          
          <!-- Brand Logo -->
          <a routerLink="/" class="flex items-center gap-3.5 group cursor-pointer focus:outline-none">
            <img src="emblem.png" alt="Yuva Sampark Emblem" class="w-10 h-10 object-contain transition-transform group-hover:scale-105" />
            
            <div class="flex items-center gap-3">
              <div>
                <span class="text-2xl font-black text-[#0b1e42] tracking-tight block leading-tight">Yuva Sampark</span>
                <span class="text-[11px] font-semibold text-slate-500 tracking-wide block">Connect • Engage • Serve</span>
              </div>
              <div class="hidden sm:block h-8 w-px bg-slate-200 ml-1"></div>
            </div>
          </a>

          <!-- Center Navigation Links -->
          <nav class="hidden md:flex items-center gap-2 text-sm font-medium">
            <a routerLink="/" 
               routerLinkActive="bg-[#0e2554] text-white font-semibold shadow-sm" 
               [routerLinkActiveOptions]="{exact: true}"
               class="px-5 py-2 rounded-lg text-slate-700 hover:text-[#0e2554] hover:bg-slate-100 transition-colors">
              Home
            </a>
            
            <!-- Features Link (Smooth Scrolls to #features directly) -->
            <button type="button" 
                    (click)="scrollToSection('features', $event)" 
                    class="px-4 py-2 rounded-lg text-slate-700 hover:text-[#0e2554] hover:bg-slate-100 transition-colors font-medium text-sm focus:outline-none">
              Features
            </button>
            
            <a routerLink="/opportunities" 
               routerLinkActive="bg-[#0e2554] text-white font-semibold shadow-sm"
               class="px-4 py-2 rounded-lg text-slate-700 hover:text-[#0e2554] hover:bg-slate-100 transition-colors">
              Impact
            </a>

            <a routerLink="/blood-donation" 
               routerLinkActive="bg-[#0e2554] text-white font-semibold shadow-sm"
               class="px-4 py-2 rounded-lg text-slate-700 hover:text-[#0e2554] hover:bg-slate-100 transition-colors">
              Support
            </a>

            <a routerLink="/security" 
               routerLinkActive="bg-[#0e2554] text-white font-semibold shadow-sm"
               class="px-4 py-2 rounded-lg text-slate-700 hover:text-[#0e2554] hover:bg-slate-100 transition-colors">
              Security
            </a>

            <a routerLink="/about" 
               routerLinkActive="bg-[#0e2554] text-white font-semibold shadow-sm"
               class="px-4 py-2 rounded-lg text-slate-700 hover:text-[#0e2554] hover:bg-slate-100 transition-colors">
              About
            </a>
          </nav>

          <!-- Action Buttons / Auth -->
          <div class="flex items-center gap-3">
            <ng-container *ngIf="authService.currentUser$ | async as user; else loggedOutBtns">
              <!-- Role Badge -->
              <div class="hidden sm:flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 text-xs">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span class="text-slate-700 font-semibold">{{ user.role }}</span>
              </div>

              <!-- Dashboard Button -->
              <a routerLink="/dashboard" 
                 class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs md:text-sm font-bold text-[#0e2554] bg-slate-100 hover:bg-slate-200 rounded-xl transition">
                <i class="fa-solid fa-gauge-high"></i>
                <span class="hidden sm:inline">Portal</span>
              </a>

              <!-- Logout Button -->
              <button (click)="authService.logout()" 
                      title="Logout"
                      class="text-slate-400 hover:text-red-600 p-2 text-sm transition">
                <i class="fa-solid fa-right-from-bracket"></i>
              </button>
            </ng-container>

            <ng-template #loggedOutBtns>
              <!-- Login Button -->
              <a routerLink="/login" 
                 class="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-slate-800 bg-white border border-slate-300 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition shadow-sm">
                <i class="fa-solid fa-lock text-xs text-slate-600"></i>
                <span>Login</span>
              </a>

              <!-- Register Button -->
              <a routerLink="/register" 
                 class="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-[#0e2554] hover:bg-[#071739] rounded-xl transition shadow-sm hover:shadow">
                <i class="fa-solid fa-user-plus text-xs"></i>
                <span>+ Register</span>
              </a>
            </ng-template>

            <!-- Mobile Menu Toggle Button -->
            <button (click)="mobileMenuOpen = !mobileMenuOpen" 
                    class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100">
              <i class="fa-solid" [ngClass]="mobileMenuOpen ? 'fa-xmark text-lg' : 'fa-bars text-lg'"></i>
            </button>
          </div>

        </div>

        <!-- Mobile Navigation Menu -->
        <div *ngIf="mobileMenuOpen" class="md:hidden pb-4 pt-2 border-t border-slate-100 flex flex-col gap-1.5 animate-fadeIn">
          <a (click)="mobileMenuOpen = false" routerLink="/" class="px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100">Home</a>
          <button (click)="mobileMenuOpen = false; scrollToSection('features', $event)" class="text-left px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100">Features</button>
          <a (click)="mobileMenuOpen = false" routerLink="/opportunities" class="px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100">Impact & Schemes</a>
          <a (click)="mobileMenuOpen = false" routerLink="/blood-donation" class="px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100">Support & Blood Donation</a>
          <a (click)="mobileMenuOpen = false" routerLink="/events" class="px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100">Events & Drives</a>
          <a (click)="mobileMenuOpen = false" routerLink="/security" class="px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100">Security</a>
          <a (click)="mobileMenuOpen = false" routerLink="/about" class="px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100">About</a>
          <a (click)="mobileMenuOpen = false" routerLink="/dashboard" class="px-3 py-2 rounded-md font-medium text-[#0e2554] bg-slate-100">Member/Admin Dashboard</a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  authService = inject(AuthService);
  router = inject(Router);
  mobileMenuOpen = false;

  scrollToSection(id: string, event?: Event): void {
    if (event) event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      });
    }
  }
}
