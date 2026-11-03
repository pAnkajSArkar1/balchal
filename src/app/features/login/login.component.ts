import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService, UserRole } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        
        <div class="text-center mb-8">
          <div class="w-12 h-12 rounded-2xl bg-[#0e2554] text-white flex items-center justify-center text-xl mx-auto mb-3 shadow">
            <i class="fa-solid fa-lock"></i>
          </div>
          <h2 class="text-2xl font-extrabold text-[#0e2554]">Login to Yuva Sampark</h2>
          <p class="text-xs text-slate-500 mt-1">
            Access your member profile, mandal alerts, or admin dashboard.
          </p>
        </div>

        <!-- Quick Role Demo Selector -->
        <div class="space-y-2 mb-6">
          <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
            Select Role to Enter Portal:
          </label>
          <div *ngFor="let r of demoRoles" 
               (click)="selectedRole = r.role"
               class="p-3 rounded-xl border cursor-pointer flex items-center justify-between transition"
               [ngClass]="selectedRole === r.role ? 'bg-blue-50 border-[#0e2554] shadow-sm' : 'border-slate-200 hover:bg-slate-50'">
            <div class="flex items-center gap-2.5">
              <i [class]="r.icon" class="text-sm text-[#0e2554]"></i>
              <div>
                <div class="text-xs font-bold text-slate-900">{{ r.role }}</div>
                <div class="text-[10px] text-slate-500">{{ r.desc }}</div>
              </div>
            </div>
            <span class="w-3.5 h-3.5 rounded-full border flex items-center justify-center"
                  [ngClass]="selectedRole === r.role ? 'border-[#0e2554] bg-[#0e2554]' : 'border-slate-300'">
              <span *ngIf="selectedRole === r.role" class="w-1.5 h-1.5 rounded-full bg-white"></span>
            </span>
          </div>
        </div>

        <button (click)="performLogin()" 
                class="w-full py-3 bg-[#0e2554] hover:bg-[#071739] text-white font-bold rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2">
          <i class="fa-solid fa-right-to-bracket"></i> Login as {{ selectedRole }}
        </button>

        <div class="text-center mt-6 pt-4 border-t border-slate-100">
          <span class="text-xs text-slate-500">Not registered yet? </span>
          <a routerLink="/register" class="text-xs font-bold text-[#0e2554] hover:underline">
            Register as New Member
          </a>
        </div>

      </div>
    </div>
  `
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  selectedRole: UserRole = 'State Admin';

  demoRoles: { role: UserRole; desc: string; icon: string }[] = [
    { role: 'State Admin', desc: 'Tripura Pradesh Executive View', icon: 'fa-solid fa-crown' },
    { role: 'District Admin', desc: 'West Tripura / Gomati Command', icon: 'fa-solid fa-building-columns' },
    { role: 'Mandal Admin', desc: 'Agartala (Town) Coordinator', icon: 'fa-solid fa-map-location-dot' },
    { role: 'Member', desc: 'Verified Youth Citizen & Blood Donor', icon: 'fa-solid fa-user-check' }
  ];

  performLogin(): void {
    this.authService.login(this.selectedRole);
    this.router.navigate(['/dashboard']);
  }
}

