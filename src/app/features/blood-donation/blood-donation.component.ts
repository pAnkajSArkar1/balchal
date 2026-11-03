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
            <div class="flex flex-wrap gap-2.5">
              <button (click)="activeTab = 'request'" 
                      class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md"
                      [ngClass]="activeTab === 'request' ? 'bg-white text-red-700' : 'bg-red-800/60 text-white hover:bg-red-800'">
                <i class="fa-solid fa-triangle-exclamation mr-1.5"></i> Request Blood Urgently
              </button>
              <button (click)="activeTab = 'register-donor'" 
                      class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md"
                      [ngClass]="activeTab === 'register-donor' ? 'bg-white text-red-700' : 'bg-red-800/60 text-white hover:bg-red-800'">
                <i class="fa-solid fa-heart mr-1.5"></i> Register as a Donor
              </button>
              <button (click)="activeTab = 'directory'" 
                      class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md"
                      [ngClass]="activeTab === 'directory' ? 'bg-white text-red-700' : 'bg-red-800/60 text-white hover:bg-red-800'">
                <i class="fa-solid fa-address-book mr-1.5"></i> Donor Directory
              </button>
              <button (click)="activeTab = 'drives'" 
                      class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md"
                      [ngClass]="activeTab === 'drives' ? 'bg-white text-red-700' : 'bg-red-800/60 text-white hover:bg-red-800'">
                <i class="fa-solid fa-calendar-check mr-1.5"></i> Blood Drives
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
                  <i class="fa-solid fa-bell text-red-600"></i> Broadcast Emergency Blood Request
                </h2>
                <p class="text-xs text-slate-500 mt-1">
                  Once submitted, an immediate alert is generated across our verified youth donor network in the patient's district.
                </p>
              </div>

              <div *ngIf="requestSubmitted" class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6 flex items-center gap-3">
                <i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
                <div>
                  <strong>Emergency Request Broadcasted!</strong> Nearby voluntary donors and district leads have been alerted.
                </div>
              </div>

              <form [formGroup]="reqForm" (ngSubmit)="submitRequest()" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Patient Name *</label>
                    <input type="text" formControlName="patientName" placeholder="e.g. Smt. Maya Roy"
                           class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                           [ngClass]="isReqFieldInvalid('patientName') ? 'border-red-500 bg-red-50/50' : 'border-slate-300'" />
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Required Blood Group *</label>
                    <select formControlName="bloodGroup"
                            class="w-full px-4 py-2.5 rounded-xl border text-sm font-bold text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            [ngClass]="isReqFieldInvalid('bloodGroup') ? 'border-red-500 bg-red-50/50' : 'border-slate-300'">
                      <option value="">Select Blood Group</option>
                      <option *ngFor="let bg of bloodGroups" [value]="bg">{{ bg }}</option>
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Units Needed *</label>
                    <input type="number" formControlName="unitsNeeded" min="1" max="10"
                           class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Urgency Level *</label>
                    <select formControlName="urgency"
                            class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-semibold text-slate-700">
                      <option value="Critical (Immediate)">Critical (Immediate)</option>
                      <option value="Within 6 Hours">Within 6 Hours</option>
                      <option value="Within 24 Hours">Within 24 Hours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Hospital / Medical Center Name *</label>
                  <input type="text" formControlName="hospitalName" placeholder="e.g. AGMC & GBP Hospital, Agartala"
                         class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                         [ngClass]="isReqFieldInvalid('hospitalName') ? 'border-red-500 bg-red-50/50' : 'border-slate-300'" />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">District *</label>
                    <select formControlName="district" (change)="onReqDistrictChange()"
                            class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            [ngClass]="isReqFieldInvalid('district') ? 'border-red-500 bg-red-50/50' : 'border-slate-300'">
                      <option value="">Select District</option>
                      <option *ngFor="let dist of districts" [value]="dist.name">{{ dist.name }}</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Mandal / Sub-division *</label>
                    <select formControlName="mandal"
                            class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            [ngClass]="isReqFieldInvalid('mandal') ? 'border-red-500 bg-red-50/50' : 'border-slate-300'">
                      <option value="">{{ reqMandals.length ? 'Select Mandal' : 'Select District first' }}</option>
                      <option *ngFor="let m of reqMandals" [value]="m.name">{{ m.name }}</option>
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Contact Attendant Name *</label>
                    <input type="text" formControlName="contactPerson" placeholder="Name of attendant"
                           class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                           [ngClass]="isReqFieldInvalid('contactPerson') ? 'border-red-500 bg-red-50/50' : 'border-slate-300'" />
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Contact Phone Number *</label>
                    <input type="tel" formControlName="contactPhone" placeholder="10-digit phone"
                           class="w-full px-4 py-2.5 rounded-xl border text-sm font-mono focus:outline-none focus:ring-2 focus:ring-red-500"
                           [ngClass]="isReqFieldInvalid('contactPhone') ? 'border-red-500 bg-red-50/50' : 'border-slate-300'" />
                  </div>
                </div>

                <div class="pt-2">
                  <button type="submit" 
                          class="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 transition shadow-lg flex items-center justify-center gap-2">
                    <i class="fa-solid fa-paper-plane"></i> Broadcast Emergency Request
                  </button>
                </div>
              </form>
            </div>

            <!-- Live Active Requests (Right 1 col) -->
            <div class="space-y-4">
              <div class="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <h3 class="text-sm font-black text-slate-900 flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                    Live Urgent Requests
                  </h3>
                  <span class="text-[11px] font-bold text-slate-400 font-mono">{{ activeRequests.length }} Open</span>
                </div>

                <div class="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                  <div *ngFor="let req of activeRequests" 
                       class="p-4 rounded-2xl border border-red-100 bg-red-50/40 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-black px-2 py-0.5 rounded bg-red-600 text-white">
                        {{ req.bloodGroup }} • {{ req.unitsNeeded }} Units
                      </span>
                      <span class="text-[10px] font-bold text-red-600 uppercase">
                        {{ req.urgency }}
                      </span>
                    </div>

                    <div>
                      <div class="text-xs font-bold text-slate-800">{{ req.patientName }}</div>
                      <div class="text-[11px] text-slate-500">{{ req.hospitalName }}</div>
                      <div class="text-[11px] text-slate-400">{{ req.mandal }}, {{ req.district }}</div>
                    </div>

                    <div class="pt-2 border-t border-red-200/60 flex items-center justify-between text-[11px]">
                      <span class="text-slate-600">Contact: {{ req.contactPerson }}</span>
                      <a [href]="'tel:' + req.contactPhone" class="font-bold text-red-600 hover:underline">
                        <i class="fa-solid fa-phone mr-1"></i> Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- ================= TAB 2: REGISTER AS A DONOR ================= -->
        <div *ngIf="activeTab === 'register-donor'" class="animate-fadeIn max-w-2xl mx-auto">
          <div class="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200">
            <div class="border-b border-slate-100 pb-4 mb-6 text-center">
              <div class="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl mx-auto mb-2">
                <i class="fa-solid fa-heart"></i>
              </div>
              <h2 class="text-2xl font-black text-slate-900">Enrol in Rakta Sampark Donor Registry</h2>
              <p class="text-xs text-slate-500 mt-1">Join over 850+ verified voluntary youth blood donors on 24/7 standby.</p>
            </div>

            <div *ngIf="donorEnrolledSuccess" class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 mb-6">
              <i class="fa-solid fa-circle-check text-2xl text-emerald-600"></i>
              <h4 class="text-sm font-bold text-emerald-950">Thank you for registering as a Life Saver!</h4>
              <p class="text-xs text-emerald-800">You have been added to the voluntary donor directory. You will only be alerted for genuine hospital emergencies in your district.</p>
              <button (click)="donorEnrolledSuccess = false" class="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold">Register Another Donor</button>
            </div>

            <form *ngIf="!donorEnrolledSuccess" (ngSubmit)="submitDonorRegistration()" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Donor Full Name *</label>
                <input type="text" [(ngModel)]="newDonorName" name="newDonorName" required placeholder="Full Name" 
                       class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Blood Group *</label>
                  <select [(ngModel)]="newDonorGroup" name="newDonorGroup" required 
                          class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Select Blood Group</option>
                    <option *ngFor="let bg of bloodGroups" [value]="bg">{{ bg }}</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                  <input type="tel" [(ngModel)]="newDonorPhone" name="newDonorPhone" required placeholder="10-digit number" 
                         class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">District *</label>
                  <select [(ngModel)]="newDonorDistrict" name="newDonorDistrict" (change)="onNewDonorDistrictChange()" required 
                          class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Select District</option>
                    <option *ngFor="let dist of districts" [value]="dist.name">{{ dist.name }}</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Mandal *</label>
                  <select [(ngModel)]="newDonorMandal" name="newDonorMandal" required 
                          class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">{{ newDonorMandals.length ? 'Select Mandal' : 'Select District first' }}</option>
                    <option *ngFor="let m of newDonorMandals" [value]="m.name">{{ m.name }}</option>
                  </select>
                </div>
              </div>

              <div class="pt-3">
                <button type="submit" [disabled]="!newDonorName || !newDonorGroup || !newDonorPhone || !newDonorDistrict" 
                        class="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 transition shadow-lg">
                  <i class="fa-solid fa-heart mr-2"></i>Register as Voluntary Blood Donor
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- ================= TAB 3: DONOR DIRECTORY ================= -->
        <div *ngIf="activeTab === 'directory'" class="animate-fadeIn space-y-6">
          
          <div class="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap items-center gap-3">
              <!-- Filter by Blood Group -->
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Blood Group</label>
                <select [(ngModel)]="filterBloodGroup" (change)="applyDonorFilters()" 
                        class="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-red-600 focus:outline-none">
                  <option value="ALL">All Groups</option>
                  <option *ngFor="let bg of bloodGroups" [value]="bg">{{ bg }}</option>
                </select>
              </div>

              <!-- Filter by District -->
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">District</label>
                <select [(ngModel)]="filterDistrict" (change)="applyDonorFilters()" 
                        class="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none">
                  <option value="ALL">All Districts</option>
                  <option *ngFor="let dist of districts" [value]="dist.name">{{ dist.name }}</option>
                </select>
              </div>
            </div>

            <div class="text-xs text-slate-500 font-semibold">
              Showing <strong class="text-slate-900">{{ filteredDonors.length }}</strong> Verified Voluntary Donors
            </div>
          </div>

          <!-- Donors Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let donor of filteredDonors" 
                 class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-black px-3 py-1 rounded-xl bg-red-600 text-white shadow-sm">
                    {{ donor.bloodGroup }}
                  </span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        [ngClass]="donor.isAvailable ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'">
                    {{ donor.isAvailable ? '● Available' : 'On Standby' }}
                  </span>
                </div>

                <h4 class="text-base font-bold text-slate-900 mb-1">{{ donor.name }}</h4>
                <div class="text-xs text-slate-500 flex items-center gap-1 mb-2">
                  <i class="fa-solid fa-location-dot text-slate-400 text-[10px]"></i>
                  <span>{{ donor.mandal }}, {{ donor.district }}</span>
                </div>
                <div class="text-[11px] text-slate-400">
                  Total Lifesaving Donations: <strong class="text-slate-700">{{ donor.totalDonations }} times</strong>
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-slate-700">+91 {{ donor.phone }}</span>
                <a [href]="'tel:' + donor.phone" class="px-3 py-1.5 rounded-xl bg-red-50 text-red-700 font-bold text-xs hover:bg-red-100 transition flex items-center gap-1">
                  <i class="fa-solid fa-phone text-[10px]"></i> Call Donor
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- ================= TAB 4: BLOOD DRIVES & CAMPS ================= -->
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

  activeTab: 'request' | 'register-donor' | 'directory' | 'drives' = 'request';
  requestSubmitted = false;
  donorEnrolledSuccess = false;

  districts: District[] = [];
  reqMandals: Mandal[] = [];
  newDonorMandals: Mandal[] = [];

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  activeRequests: BloodRequest[] = [];
  allDonors: BloodDonor[] = [];
  filteredDonors: BloodDonor[] = [];
  bloodDrives: BloodDrive[] = [];

  filterBloodGroup = 'ALL';
  filterDistrict = 'ALL';

  reqForm!: FormGroup;

  newDonorName = '';
  newDonorGroup = '';
  newDonorPhone = '';
  newDonorDistrict = '';
  newDonorMandal = '';

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

  onNewDonorDistrictChange(): void {
    this.newDonorMandals = this.geoService.getMandalsForDistrict(this.newDonorDistrict);
    this.newDonorMandal = '';
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

  submitDonorRegistration(): void {
    if (!this.newDonorName || !this.newDonorGroup || !this.newDonorPhone || !this.newDonorDistrict) return;

    this.bloodService.registerAsDonor({
      name: this.newDonorName,
      bloodGroup: this.newDonorGroup as any,
      district: this.newDonorDistrict,
      mandal: this.newDonorMandal || 'Main Block',
      phone: this.newDonorPhone,
      isAvailable: true
    });

    this.donorEnrolledSuccess = true;
    this.newDonorName = '';
    this.newDonorGroup = '';
    this.newDonorPhone = '';
    this.newDonorDistrict = '';
    this.newDonorMandal = '';
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
