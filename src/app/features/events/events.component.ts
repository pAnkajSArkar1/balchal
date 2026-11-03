import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuvaEvent } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <i class="fa-solid fa-bullhorn"></i> Grassroots Action & Initiatives
          </div>
          <h1 class="text-3xl font-extrabold text-[#0e2554] tracking-tight">Events, Campaigns & Community Service</h1>
          <p class="text-sm text-slate-500 mt-2">
            Explore state-wide social service, blood camps, sports meets, and cleanliness initiatives organized by Yuva Morcha across Tripura.
          </p>
        </div>

        <!-- Filter Chips -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          <button *ngFor="let cat of eventCategories" 
                  (click)="selectedCat = cat" 
                  class="px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm"
                  [ngClass]="selectedCat === cat ? 'bg-[#0e2554] text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'">
            {{ cat }}
          </button>
        </div>

        <!-- Events Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let ev of filteredEvents" 
               class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-lg"
                      [ngClass]="getBadgeClass(ev.category)">
                  {{ ev.category }}
                </span>
                <span class="text-xs font-semibold text-slate-400">
                  <i class="fa-regular fa-calendar mr-1"></i> {{ ev.date }}
                </span>
              </div>

              <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug">
                {{ ev.title }}
              </h3>

              <p class="text-xs text-slate-600 mb-4 leading-relaxed">
                {{ ev.description }}
              </p>

              <div class="space-y-1.5 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-location-dot text-red-500 text-[11px]"></i>
                  <span>{{ ev.location }} ({{ ev.mandal }}, {{ ev.district }})</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-users text-blue-500 text-[11px]"></i>
                  <span>{{ ev.volunteersRegistered }} Volunteers Registered • {{ ev.expectedAttendees }} Expected</span>
                </div>
              </div>
            </div>

            <button (click)="registerForEvent(ev)" 
                    class="w-full py-2.5 text-xs font-bold text-white bg-[#0e2554] hover:bg-[#071739] rounded-xl transition shadow-sm flex items-center justify-center gap-2">
              <i class="fa-solid fa-hand-holding-heart"></i>
              <span>{{ isUserRegistered(ev.id) ? 'Registered (Attending)' : 'Volunteer for this Drive' }}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  `
})
export class EventsComponent {
  eventCategories = ['All', 'Cleanliness Drive', 'Blood Camp', 'Youth Conclave', 'Sports Tournament', 'Skill Workshop'];
  selectedCat = 'All';

  registeredEventIds = new Set<string>();

  events: YuvaEvent[] = [
    {
      id: 'EV-01',
      title: 'Swachh Tripura Rudrasagar Lake & Neermahal Cleanliness Drive',
      category: 'Cleanliness Drive',
      date: '16 Nov 2026',
      location: 'Neermahal Lakefront, Melaghar',
      district: 'Sepahijala',
      mandal: 'Sonamura',
      expectedAttendees: 500,
      volunteersRegistered: 142,
      description: 'Major eco-cleanliness drive removing plastic waste and planting 1,000 indigenous saplings around historical water palace.'
    },
    {
      id: 'EV-02',
      title: 'Statewide Youth Blood Bridge - Swami Vivekananda Jayanti',
      category: 'Blood Camp',
      date: '20 Nov 2026',
      location: 'Rabindra Satabarshiki Bhawan, Agartala',
      district: 'West Tripura',
      mandal: 'Agartala (Town)',
      expectedAttendees: 400,
      volunteersRegistered: 184,
      description: 'Mega blood donation camp in association with AGMC & GBP Hospital Blood Bank targeting 250 units for pediatric thalassemia units.'
    },
    {
      id: 'EV-03',
      title: 'Tripura Yuva Entrepreneurship & MSME Conclave',
      category: 'Youth Conclave',
      date: '28 Nov 2026',
      location: 'Pragna Bhawan Auditorium, Agartala',
      district: 'West Tripura',
      mandal: 'Banamalipur',
      expectedAttendees: 800,
      volunteersRegistered: 95,
      description: 'Interactive session with startup founders, bank officers for PMEGP loan sanctioning, and Tripura Industrial Development Corporation.'
    },
    {
      id: 'EV-04',
      title: 'Matabari Punya Bhumi Khel Mahotsav (Football & Badminton)',
      category: 'Sports Tournament',
      date: '04 Dec 2026',
      location: 'Kirit Bikram Stadium, Udaipur',
      district: 'Gomati',
      mandal: 'Radhakishorepur (Udaipur)',
      expectedAttendees: 1200,
      volunteersRegistered: 210,
      description: 'Inter-mandal sports tournament promoting youth fitness, anti-narcotics (Nasha Mukt Tripura) awareness, and local talent scouting.'
    },
    {
      id: 'EV-05',
      title: 'Dharmanagar Digital Media & Content Creation Bootcamp',
      category: 'Skill Workshop',
      date: '12 Dec 2026',
      location: 'Town Hall, Dharmanagar',
      district: 'North Tripura',
      mandal: 'Dharmanagar',
      expectedAttendees: 300,
      volunteersRegistered: 80,
      description: 'Hands-on training in mobile video journalism, civic journalism, fact-checking, and digital marketing for unemployed rural youth.'
    }
  ];

  get filteredEvents(): YuvaEvent[] {
    if (this.selectedCat === 'All') return this.events;
    return this.events.filter(e => e.category === this.selectedCat);
  }

  getBadgeClass(cat: string): string {
    switch (cat) {
      case 'Cleanliness Drive': return 'bg-emerald-100 text-emerald-800';
      case 'Blood Camp': return 'bg-red-100 text-red-800';
      case 'Youth Conclave': return 'bg-blue-100 text-[#0e2554]';
      case 'Sports Tournament': return 'bg-amber-100 text-amber-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  }

  isUserRegistered(id: string): boolean {
    return this.registeredEventIds.has(id);
  }

  registerForEvent(ev: YuvaEvent): void {
    if (this.registeredEventIds.has(ev.id)) {
      this.registeredEventIds.delete(ev.id);
      ev.volunteersRegistered--;
    } else {
      this.registeredEventIds.add(ev.id);
      ev.volunteersRegistered++;
    }
  }
}

