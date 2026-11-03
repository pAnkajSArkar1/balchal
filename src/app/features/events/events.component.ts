import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../core/services/events.service';
import { YuvaEvent } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-3">
            <i class="fa-solid fa-calendar-days text-amber-500"></i>
            <span>Statewide Youth Mobilization</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-[#0b1e42] tracking-tight">Events, Campaigns & Activities</h1>
          <p class="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Discover upcoming conclaves, blood donation camps, athletic tournaments, and past community service archives across all 8 districts of Tripura.
          </p>
        </div>

        <!-- Main Tab Switcher: Upcoming vs Past Events -->
        <div class="flex items-center justify-center">
          <div class="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
            <button (click)="activeTab = 'upcoming'" 
                    [ngClass]="activeTab === 'upcoming' ? 'bg-[#0e2554] text-white shadow' : 'text-slate-600 hover:text-slate-900'"
                    class="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2">
              <i class="fa-solid fa-calendar-plus"></i>
              <span>Upcoming Events ({{ upcomingEvents.length }})</span>
            </button>

            <button (click)="activeTab = 'past'" 
                    [ngClass]="activeTab === 'past' ? 'bg-[#0e2554] text-white shadow' : 'text-slate-600 hover:text-slate-900'"
                    class="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2">
              <i class="fa-solid fa-clock-rotate-left"></i>
              <span>Past Events Archive ({{ pastEvents.length }})</span>
            </button>
          </div>
        </div>

        <!-- ================= UPCOMING EVENTS VIEW ================= -->
        <div *ngIf="activeTab === 'upcoming'" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div *ngFor="let ev of upcomingEvents" class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div class="relative h-48 sm:h-56 overflow-hidden">
                  <img [src]="ev.imageUrl" [alt]="ev.title" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-white shadow">
                    {{ ev.category }}
                  </span>

                  <div class="absolute bottom-4 left-4 right-4 text-white">
                    <span class="text-xs text-amber-300 font-semibold block"><i class="fa-regular fa-clock mr-1"></i>{{ ev.date }} • {{ ev.time }}</span>
                    <h3 class="text-lg sm:text-xl font-bold leading-tight mt-0.5">{{ ev.title }}</h3>
                  </div>
                </div>

                <!-- Event Details Body -->
                <div class="p-6 space-y-4">
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {{ ev.description }}
                  </p>

                  <div class="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <div class="flex items-start gap-2.5">
                      <i class="fa-solid fa-location-dot text-red-500 mt-0.5"></i>
                      <div>
                        <span class="font-bold block text-slate-900">Venue & Location:</span>
                        <span>{{ ev.venue }}</span>
                        <div class="text-[11px] text-slate-500 font-mono">{{ ev.mapLocation }}</div>
                      </div>
                    </div>

                    <div class="flex items-start gap-2.5 pt-1 border-t border-slate-200/60">
                      <i class="fa-solid fa-sitemap text-blue-500 mt-0.5"></i>
                      <div>
                        <span class="font-bold text-slate-900">Organizer:</span>
                        <span>{{ ev.organizer }} ({{ ev.mandal }}, {{ ev.district }})</span>
                      </div>
                    </div>

                    <div class="flex items-start gap-2.5 pt-1 border-t border-slate-200/60">
                      <i class="fa-solid fa-phone text-emerald-600 mt-0.5"></i>
                      <div>
                        <span class="font-bold text-slate-900">Contact Person:</span>
                        <span>{{ ev.contactPerson }} • <span class="font-mono">{{ ev.contactPhone }}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Registration CTA Footer -->
              <div class="p-6 pt-0 flex items-center justify-between gap-4">
                <div class="text-xs text-slate-500 font-semibold">
                  <i class="fa-solid fa-users mr-1 text-[#0e2554]"></i>
                  <span>{{ ev.volunteersRegistered }} Volunteers Registered</span>
                </div>

                <button (click)="openRegistrationModal(ev)" 
                        class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0e2554] hover:bg-[#071739] transition shadow">
                  <i class="fa-solid fa-user-check mr-1.5"></i>
                  <span>Register for Event</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= PAST EVENTS ARCHIVE ================= -->
        <div *ngIf="activeTab === 'past'" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div *ngFor="let past of pastEvents" class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm p-6 space-y-4">
              <div class="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                <span class="px-2.5 py-0.5 rounded-full font-bold bg-slate-100 text-slate-700">{{ past.category }}</span>
                <span><i class="fa-regular fa-calendar-check mr-1 text-emerald-600"></i>Completed on {{ past.date }}</span>
              </div>

              <div class="flex gap-4 items-start">
                <img [src]="past.imageUrl" [alt]="past.title" class="w-28 h-24 rounded-2xl object-cover flex-shrink-0 shadow-sm" />
                <div>
                  <h3 class="text-base font-bold text-slate-900 leading-snug">{{ past.title }}</h3>
                  <p class="text-xs text-slate-600 mt-1 line-clamp-2">{{ past.pastSummary }}</p>
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                <div class="text-xs font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                  <i class="fa-solid fa-square-poll-vertical text-emerald-600"></i>
                  <span>Turnout & Impact Summary:</span>
                </div>
                <p class="text-xs text-emerald-800 font-medium leading-relaxed">
                  {{ past.turnoutStats }}
                </p>
              </div>

              <div class="pt-2 flex items-center justify-between text-xs text-slate-500">
                <span>Location: {{ past.venue }} ({{ past.district }})</span>
                <a routerLink="/media" class="font-bold text-[#0e2554] hover:underline">View Photos & Videos →</a>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= REGISTRATION MODAL ================= -->
        <div *ngIf="showModal && selectedEvent" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn">
            
            <button (click)="closeModal()" class="absolute top-5 right-5 text-slate-400 hover:text-slate-700">
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>

            <div class="text-left mb-6">
              <span class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-100 text-[#0e2554]">
                Event Registration
              </span>
              <h3 class="text-xl font-bold text-[#0b1e42] mt-1">{{ selectedEvent.title }}</h3>
              <p class="text-xs text-slate-500 mt-0.5"><i class="fa-regular fa-calendar mr-1"></i>{{ selectedEvent.date }} • {{ selectedEvent.venue }}</p>
            </div>

            <!-- Success message after submitting in modal -->
            <div *ngIf="registrationSuccess" class="text-center py-6 space-y-3">
              <div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto">
                <i class="fa-solid fa-check"></i>
              </div>
              <h4 class="text-lg font-bold text-slate-900">Registration Confirmed!</h4>
              <p class="text-xs text-slate-600">
                You have been registered for this event. An SMS confirmation has been dispatched.
              </p>
              <button (click)="closeModal()" class="px-6 py-2.5 rounded-xl bg-[#0e2554] text-white font-bold text-xs">
                Done
              </button>
            </div>

            <!-- Modal Form -->
            <form *ngIf="!registrationSuccess" (ngSubmit)="submitEventRegistration()" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                <input type="text" [(ngModel)]="modalName" name="modalName" required placeholder="Full Name" 
                       class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp)</label>
                <input type="tel" [(ngModel)]="modalPhone" name="modalPhone" required placeholder="10-digit number" 
                       class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Participate As</label>
                <select [(ngModel)]="modalRole" name="modalRole" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="General Delegate / Attendee">General Delegate / Attendee</option>
                  <option value="Active Volunteer (Event Support)">Active Volunteer (Event Support)</option>
                  <option value="Media / Student Reporter">Media / Student Reporter</option>
                </select>
              </div>

              <div class="pt-4 flex items-center justify-end gap-3">
                <button type="button" (click)="closeModal()" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">
                  Cancel
                </button>
                <button type="submit" [disabled]="!modalName || !modalPhone" class="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0e2554] hover:bg-[#071739] disabled:opacity-50 transition shadow">
                  Confirm Registration
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  `
})
export class EventsComponent implements OnInit {
  eventsService = inject(EventsService);

  activeTab: 'upcoming' | 'past' = 'upcoming';
  upcomingEvents: YuvaEvent[] = [];
  pastEvents: YuvaEvent[] = [];

  showModal = false;
  selectedEvent: YuvaEvent | null = null;
  modalName = '';
  modalPhone = '';
  modalRole = 'General Delegate / Attendee';
  registrationSuccess = false;

  ngOnInit(): void {
    this.upcomingEvents = this.eventsService.getUpcomingEvents();
    this.pastEvents = this.eventsService.getPastEvents();
  }

  openRegistrationModal(ev: YuvaEvent): void {
    this.selectedEvent = ev;
    this.showModal = true;
    this.registrationSuccess = false;
    this.modalName = '';
    this.modalPhone = '';
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedEvent = null;
  }

  submitEventRegistration(): void {
    if (this.selectedEvent) {
      this.selectedEvent.volunteersRegistered += 1;
      this.registrationSuccess = true;
    }
  }
}
