import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TripuraGeoService } from '../../core/services/tripura-geo.service';
import { BloodDonationService } from '../../core/services/blood-donation.service';
import { BloodDonor, BloodRequest, BloodDrive, District, Mandal } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-blood-donation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <!-- Header Banner -->
        <div class="bg-gradient-to-r from-red-600 via-rose-600 to-red-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 opacity-10 text-[200px] pointer-events-none">
            <i class="fa-solid fa-droplet"></i>
          </div>

          <div class="max-w-2xl relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Tripura Raktadan Sahayata Kendra
            </div>
            <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Emergency Blood Network
            </h1>
            <p class="text-sm sm:text-base text-red-100 leading-relaxed mb-6">
              Immediate blood donor matching across all 8 districts of Tripura. Directly integrated with AGMC & GBP Hospital, Dr. BRAM Teaching Hospital, and district sub-divisional blood banks.
            </p>
            <div class="flex flex-wrap gap-3">
              <button (click)="activeTab = 'request'" 
                      class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md"
                      [ngClass]="activeTab === 'request' ? 'bg-white text-red-700' : 'bg-red-800/60 text-white hover:bg-red-800'">
                <i class="fa-solid fa-triangle-exclamation mr-1.5"></i> Request Blood Urgently
              </button>
              <button (click)="activeTab = 'directory'" 
                      class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md"
                      [ngClass]="activeTab === 'directory' ? 'bg-white text-red-700' : 'bg-red-800/60 text-white hover:bg-red-800'">
                <i class="fa-solid fa-address-book mr-1.5"></i> Donor Directory & Matchmaker
              </button>
              <button (click)="activeTab = 'drives'" 
                      class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md"
                      [ngClass]="activeTab === 'drives' ? 'bg-white text-red-700' : 'bg-red-800/60 text-white hover:bg-red-800'">
                <i class="fa-solid fa-calendar-check mr-1.5"></i> Blood Donation Drives
              </button>
            </div>
          </div>
        </div>

        <!-- ================= TAB 1: URGENT BLOOD REQUEST FORM ================= -->
        <div *ngIf="activeTab === 'request'" class="animate-fadeIn">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <!-- Request Form (Left 2 cols) -->
            <div class="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200">
              <div class="border-b border-slate-100 pb-4 mb-6">
                <h2 class="text-xl font-black text-slate-900 flex items-center gap-2">
                  <span class="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-sm">
                    <i class="fa-solid fa-hand-holding-medical"></i>
                  </span>
                  Submit Urgent Blood Request
                </h2>
                <p class="text-xs text-slate-500 mt-1">
                  Once submitted, an instant broadcast is sent to active registered volunteers in your selected Tripura district.
                </p>
              </div>

              <!-- Alert on submission -->
              <div *ngIf="requestSubmitted" class="p-4 mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-lg text-emerald-600 mt-0.5"></i>
                <div>
                  <strong class="font-bold">Request Broadcasted Successfully!</strong>
                  <p class="mt-0.5">Volunteers in {{ reqForm.value.district }} have been alerted. You can also contact donors directly from the directory below.</p>
                </div>
              </div>

              <form [formGroup]="reqForm" (ngSubmit)="submitRequest()" class="space-y-4">
                
                <!-- Patient Name & Blood Group -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Patient Name *</label>
                    <input type="text" formControlName="patientName" placeholder="e.g. Ranjan Debnath" 
                           class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none" />
                    <span *ngIf="isReqFieldInvalid('patientName')" class="text-[11px] text-red-500 mt-1 block">Patient Name is required.</span>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Required Blood Group *</label>
                    <select formControlName="bloodGroup" 
                            class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none bg-white font-mono font-bold text-red-600">
                      <option value="">Select Blood Group</option>
                      <option *ngFor="let bg of bloodGroups" [value]="bg">{{ bg }}</option>
                    </select>
                    <span *ngIf="isReqFieldInvalid('bloodGroup')" class="text-[11px] text-red-500 mt-1 block">Blood group is required.</span>
                  </div>
                </div>

                <!-- Units Needed & Urgency Level -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Units (Bags) Required *</label>
                    <input type="number" formControlName="unitsNeeded" min="1" max="10" 
                           class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none" />
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Urgency Level *</label>
                    <select formControlName="urgency" 
                            class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none bg-white">
                      <option value="Critical (Immediate)">Critical (Immediate - Within 2 Hours)</option>
                      <option value="Within 6 Hours">Urgent (Within 6 Hours)</option>
                      <option value="Within 24 Hours">Routine / Planned Transfusion</option>
                    </select>
                  </div>
                </div>

                <!-- Hospital Name & District / Mandal -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Hospital / Medical Center *</label>
                  <input type="text" formControlName="hospitalName" 
                         placeholder="e.g. AGMC & GBP Hospital, Agartala (Ward 4B / ICU)" 
                         class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none" />
                  <span *ngIf="isReqFieldInvalid('hospitalName')" class="text-[11px] text-red-500 mt-1 block">Hospital details are required.</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Tripura District *</label>
                    <select formControlName="district" (change)="onReqDistrictChange()" 
                            class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none bg-white">
                      <option value="">Select District</option>
                      <option *ngFor="let d of districts" [value]="d.name">{{ d.name }}</option>
                    </select>
                    <span *ngIf="isReqFieldInvalid('district')" class="text-[11px] text-red-500 mt-1 block">District is required.</span>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Mandal / Sub-Division *</label>
                    <select formControlName="mandal" 
                            class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none bg-white">
                      <option value="">Select Mandal</option>
                      <option *ngFor="let m of reqMandals" [value]="m.name">{{ m.name }}</option>
                    </select>
                    <span *ngIf="isReqFieldInvalid('mandal')" class="text-[11px] text-red-500 mt-1 block">Mandal is required.</span>
                  </div>
                </div>

                <!-- Attendant Contact -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Attendant Contact Person *</label>
                    <input type="text" formControlName="contactPerson" placeholder="e.g. Bikash Das (Relative)" 
                           class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none" />
                    <span *ngIf="isReqFieldInvalid('contactPerson')" class="text-[11px] text-red-500 mt-1 block">Contact Person is required.</span>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Direct Calling / WhatsApp Phone *</label>
                    <input type="tel" formControlName="contactPhone" placeholder="+91 9876543210" 
                           class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none" />
                    <span *ngIf="isReqFieldInvalid('contactPhone')" class="text-[11px] text-red-500 mt-1 block">Phone number is required.</span>
                  </div>
                </div>

                <!-- Notes -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Additional Notes / Diagnosis</label>
                  <textarea formControlName="notes" rows="2" placeholder="Surgery timing, replacement donor requirements, etc." 
                            class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-600 focus:outline-none"></textarea>
                </div>

                <button type="submit" 
                        class="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition shadow-lg flex items-center justify-center gap-2">
                  <i class="fa-solid fa-tower-broadcast animate-pulse"></i> Broadcast Urgent Request Across Tripura
                </button>

              </form>
            </div>

            <!-- Active Requests Sidebar (Right 1 col) -->
            <div class="space-y-4">
              <div class="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <h3 class="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                    Live Urgent Appeals
                  </h3>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                    {{ activeRequests.length }} Active
                  </span>
                </div>

                <div class="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                  <div *ngFor="let req of activeRequests" 
                       class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-300 transition">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs font-black font-mono px-2 py-0.5 rounded-md bg-red-600 text-white shadow-sm">
                        {{ req.bloodGroup }}
                      </span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            [ngClass]="req.urgency.includes('Critical') ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'">
                        {{ req.urgency }}
                      </span>
                    </div>

                    <h4 class="text-xs font-bold text-slate-900 leading-snug">{{ req.patientName }}</h4>
                    <p class="text-[11px] text-slate-600 mt-1 font-medium">{{ req.hospitalName }}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">{{ req.mandal }}, {{ req.district }}</p>

                    <div class="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span class="text-[11px] font-semibold text-slate-500">{{ req.unitsNeeded }} Unit(s)</span>
                      <a [href]="'tel:' + req.contactPhone" 
                         class="px-3 py-1 bg-emerald-600 text-white rounded-lg font-bold text-[11px] hover:bg-emerald-700 flex items-center gap-1 shadow-sm">
                        <i class="fa-solid fa-phone text-[9px]"></i> Call Attendant
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <!-- ================= TAB 2: DONOR DIRECTORY & MATCHMAKER ================= -->
        <div *ngIf="activeTab === 'directory'" class="animate-fadeIn space-y-6">
          
          <!-- Filter Bar -->
          <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            
            <div class="flex flex-wrap items-center gap-3">
              <!-- Blood Group Filter -->
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-slate-600">Group:</span>
                <select [(ngModel)]="filterBloodGroup" (ngModelChange)="applyDonorFilters()"
                        class="px-3 py-1.5 text-xs rounded-xl border border-slate-300 font-bold bg-white text-red-600 font-mono">
                  <option value="ALL">All Groups</option>
                  <option *ngFor="let bg of bloodGroups" [value]="bg">{{ bg }}</option>
                </select>
              </div>

              <!-- District Filter -->
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-slate-600">District:</span>
                <select [(ngModel)]="filterDistrict" (ngModelChange)="applyDonorFilters()"
                        class="px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white">
                  <option value="ALL">All 8 Districts</option>
                  <option *ngFor="let d of districts" [value]="d.name">{{ d.name }}</option>
                </select>
              </div>
            </div>

            <div class="text-xs font-semibold text-slate-500">
              Showing <span class="font-bold text-slate-900">{{ filteredDonors.length }}</span> verified donors ready to assist
            </div>

          </div>

          <!-- Donors Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div *ngFor="let d of filteredDonors" 
                 class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="w-10 h-10 rounded-xl bg-red-50 text-red-600 font-mono font-black text-sm flex items-center justify-center border border-red-200 shadow-sm">
                    {{ d.bloodGroup }}
                  </span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                  </span>
                </div>

                <h4 class="text-sm font-bold text-slate-900 leading-snug">{{ d.name }}</h4>
                <div class="text-xs text-slate-500 mt-1 flex items-center gap-1">
                  <i class="fa-solid fa-location-dot text-slate-400 text-[10px]"></i>
                  <span>{{ d.mandal }}, {{ d.district }}</span>
                </div>

                <div class="mt-3 p-2.5 rounded-xl bg-slate-50 text-[11px] text-slate-600 flex justify-between">
                  <span>Donated: <strong>{{ d.totalDonations }} times</strong></span>
                  <span class="text-slate-400">Last: {{ d.lastDonationDate }}</span>
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                <a [href]="'tel:' + d.phone" 
                   class="flex-1 py-2 text-center text-xs font-bold text-white bg-[#0e2554] hover:bg-[#081836] rounded-xl transition shadow-sm flex items-center justify-center gap-1.5">
                  <i class="fa-solid fa-phone text-[10px]"></i> Call Donor
                </a>
                <a [href]="'https://wa.me/' + d.phone.replace('+91', '').replace(' ', '')" target="_blank" 
                   class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs hover:bg-emerald-700 transition shadow-sm"
                   title="WhatsApp">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- ================= TAB 3: BLOOD DRIVES & CAMPS ================= -->
        <div *ngIf="activeTab === 'drives'" class="animate-fadeIn space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div *ngFor="let drive of bloodDrives" 
                 class="bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold px-2.5 py-1 rounded-lg bg-red-100 text-red-700">
                    <i class="fa-regular fa-calendar mr-1"></i> {{ drive.date }}
                  </span>
                  <span class="text-xs font-semibold text-slate-400">
                    <i class="fa-regular fa-clock mr-1"></i> {{ drive.time }}
                  </span>
                </div>

                <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {{ drive.title }}
                </h3>
                
                <p class="text-xs text-slate-500 mb-3">
                  Organized by: <strong class="text-slate-700">{{ drive.organizer }}</strong>
                </p>

                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 mb-4 space-y-1.5 text-xs text-slate-600">
                  <div class="flex items-start gap-2">
                    <i class="fa-solid fa-map-pin text-red-500 mt-0.5"></i>
                    <span>{{ drive.venue }}</span>
                  </div>
                  <div class="text-[11px] text-slate-400 pl-4">
                    {{ drive.mandal }}, {{ drive.district }}
                  </div>
                </div>

                <!-- Pledge Progress Bar -->
                <div class="space-y-1.5 mb-4">
                  <div class="flex justify-between text-xs font-bold">
                    <span class="text-slate-700">{{ drive.pledgedCount }} Donors Pledged</span>
                    <span class="text-red-600">Target: {{ drive.targetUnits }}</span>
                  </div>
                  <div class="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-red-600 h-full rounded-full transition-all duration-500"
                         [style.width]="(drive.pledgedCount / drive.targetUnits * 100) + '%'"></div>
                  </div>
                </div>
              </div>

              <button (click)="pledge(drive.id)" 
                      class="w-full py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition shadow-md flex items-center justify-center gap-2">
                <i class="fa-solid fa-heart"></i> Pledge to Donate Here
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class BloodDonationComponent implements OnInit {
  bloodService = inject(BloodDonationService);
  geoService = inject(TripuraGeoService);
  fb = inject(FormBuilder);

  activeTab: 'request' | 'directory' | 'drives' = 'request';
  requestSubmitted = false;

  districts: District[] = [];
  reqMandals: Mandal[] = [];

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  activeRequests: BloodRequest[] = [];
  allDonors: BloodDonor[] = [];
  filteredDonors: BloodDonor[] = [];
  bloodDrives: BloodDrive[] = [];

  filterBloodGroup = 'ALL';
  filterDistrict = 'ALL';

  reqForm!: FormGroup;

  ngOnInit(): void {
    this.districts = this.geoService.getDistricts();

    this.bloodService.getRequests().subscribe(reqs => this.activeRequests = reqs);
    this.bloodService.getDonors().subscribe(donors => {
      this.allDonors = donors;
      this.applyDonorFilters();
    });
    this.bloodService.getDrives().subscribe(drives => this.bloodDrives = drives);

    this.reqForm = this.fb.group({
      patientName: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      unitsNeeded: [2, [Validators.required, Validators.min(1)]],
      urgency: ['Critical (Immediate)', Validators.required],
      hospitalName: ['', Validators.required],
      district: ['', Validators.required],
      mandal: ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactPhone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      notes: ['']
    });
  }

  onReqDistrictChange(): void {
    const dName = this.reqForm.get('district')?.value;
    this.reqMandals = this.geoService.getMandalsForDistrict(dName);
    this.reqForm.get('mandal')?.setValue('');
  }

  isReqFieldInvalid(field: string): boolean {
    const c = this.reqForm.get(field);
    return !!(c && c.invalid && (c.touched || c.dirty));
  }

  submitRequest(): void {
    if (this.reqForm.invalid) {
      this.reqForm.markAllAsTouched();
      return;
    }

    this.bloodService.addBloodRequest(this.reqForm.value);
    this.requestSubmitted = true;
    setTimeout(() => {
      this.requestSubmitted = false;
      this.reqForm.reset({ unitsNeeded: 2, urgency: 'Critical (Immediate)' });
    }, 4000);
  }

  applyDonorFilters(): void {
    this.filteredDonors = this.allDonors.filter(d => {
      const matchBg = this.filterBloodGroup === 'ALL' || d.bloodGroup === this.filterBloodGroup;
      const matchDist = this.filterDistrict === 'ALL' || d.district === this.filterDistrict;
      return matchBg && matchDist;
    });
  }

  pledge(driveId: string): void {
    this.bloodService.pledgeToDrive(driveId);
  }
}

