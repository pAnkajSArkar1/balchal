import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TripuraGeoService } from '../../core/services/tripura-geo.service';
import { District, Mandal } from '../../core/models/tripura-data.model';

interface RegisteredMemberView {
  applicationId: string;
  fullName: string;
  dob: string;
  gender: string;
  mobile: string;
  email: string;
  district: string;
  mandal: string;
  address: string;
  qualification: string;
  profession: string;
  areasOfInterest: string[];
  volunteerInterests: string[];
  photoUrl: string;
  bloodGroup: string;
  membershipStatus: string;
  issueDate: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-2">
            <i class="fa-solid fa-id-card text-amber-500"></i>
            <span>Official Youth Enrolment</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-[#0b1e42] tracking-tight">Join Yuva Morcha Tripura</h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-2">
            Register as an active member or volunteer. Receive your official Digital Membership ID card instantly upon submission.
          </p>
        </div>

        <!-- ================= POST-REGISTRATION SUCCESS SCREEN ================= -->
        <div *ngIf="isSubmitted && memberRecord" class="animate-fadeIn space-y-8">
          
          <div class="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 text-center">
            <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Enrolment Successful!</h2>
            <p class="text-sm text-slate-600 mt-1 max-w-md mx-auto">
              Welcome to Yuva Morcha Tripura. Your membership has been registered in the state database.
            </p>

            <div class="inline-flex items-center gap-3 bg-slate-100 px-5 py-2.5 rounded-2xl text-xs font-mono font-bold text-slate-700 my-5 border border-slate-200">
              <span>Application ID:</span>
              <span class="text-[#0e2554] text-sm font-black">{{ memberRecord.applicationId }}</span>
              <span class="text-slate-300">|</span>
              <span class="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[11px] uppercase">{{ memberRecord.membershipStatus }}</span>
            </div>

            <!-- Digital Membership ID / Card Preview -->
            <div class="my-6 max-w-md mx-auto">
              <div id="membership-card" class="relative rounded-3xl p-6 text-white overflow-hidden shadow-2xl bg-gradient-to-br from-[#071739] via-[#0d2a60] to-[#08183c] border-2 border-amber-500/40 text-left">
                
                <!-- Card Header -->
                <div class="flex items-center justify-between border-b border-blue-400/30 pb-3 mb-4">
                  <div class="flex items-center gap-2.5">
                    <img src="emblem.png" alt="Yuva Morcha" class="w-8 h-8 object-contain" />
                    <div>
                      <div class="text-xs font-black tracking-wider uppercase text-amber-400">Yuva Morcha</div>
                      <div class="text-[9px] text-blue-200 font-bold">Tripura Pradesh • Youth ID Card</div>
                    </div>
                  </div>
                  
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                    <i class="fa-solid fa-check-circle mr-1"></i> ACTIVE
                  </span>
                </div>

                <!-- Card Body -->
                <div class="flex items-start gap-4">
                  <!-- Photo -->
                  <div class="w-20 h-24 rounded-xl bg-slate-800 border-2 border-amber-400/60 overflow-hidden flex-shrink-0 shadow relative">
                    <img *ngIf="photoPreviewUrl" [src]="photoPreviewUrl" alt="Member Photo" class="w-full h-full object-cover" />
                    <div *ngIf="!photoPreviewUrl" class="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-800">
                      <i class="fa-solid fa-user text-3xl"></i>
                      <span class="text-[8px] text-amber-400 mt-1">TRIPURA</span>
                    </div>
                    <div class="absolute bottom-0 inset-x-0 bg-red-700 text-center py-0.5 text-[8px] font-bold text-white">
                      {{ memberRecord.bloodGroup }}
                    </div>
                  </div>

                  <!-- Details -->
                  <div class="flex-1 space-y-1">
                    <h3 class="text-base font-black text-white leading-tight tracking-wide">
                      {{ memberRecord.fullName }}
                    </h3>
                    <div class="text-[11px] text-amber-300 font-bold">
                      {{ memberRecord.profession }} • {{ memberRecord.qualification }}
                    </div>
                    <div class="text-[10px] text-slate-300 flex items-center gap-1.5 pt-1">
                      <i class="fa-solid fa-location-dot text-amber-400 text-[10px]"></i>
                      <span>{{ memberRecord.mandal }}, {{ memberRecord.district }}</span>
                    </div>
                    <div class="text-[10px] text-slate-300 flex items-center gap-1.5">
                      <i class="fa-solid fa-phone text-slate-400 text-[9px]"></i>
                      <span>+91 {{ memberRecord.mobile }}</span>
                    </div>
                    <div class="text-[9px] text-emerald-300 font-semibold pt-1">
                      Volunteer Role: {{ memberRecord.volunteerInterests[0] || 'Active Youth Member' }}
                    </div>
                  </div>
                </div>

                <!-- Card Footer with Barcode & Verification Details -->
                <div class="mt-4 pt-3 border-t border-blue-400/20 flex items-center justify-between text-[9px] text-slate-400">
                  <div>
                    <span class="block font-mono text-slate-300 font-bold">ID: {{ memberRecord.applicationId }}</span>
                    <span class="text-[8px]">Issued: {{ memberRecord.issueDate }}</span>
                  </div>
                  <!-- Decorative Barcode -->
                  <div class="flex items-center gap-0.5 opacity-70">
                    <span class="w-0.5 h-6 bg-white"></span>
                    <span class="w-1 h-6 bg-white"></span>
                    <span class="w-0.5 h-6 bg-white"></span>
                    <span class="w-1.5 h-6 bg-white"></span>
                    <span class="w-0.5 h-6 bg-white"></span>
                    <span class="w-1 h-6 bg-white"></span>
                    <span class="w-0.5 h-6 bg-white"></span>
                    <span class="w-1.5 h-6 bg-white"></span>
                  </div>
                </div>

              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center justify-center gap-4 mt-6">
              <button (click)="printCard()" 
                      class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e2554] text-white text-xs sm:text-sm font-bold hover:bg-[#071739] transition shadow">
                <i class="fa-solid fa-print"></i>
                <span>Print / Save ID Card</span>
              </button>

              <button (click)="resetForm()" 
                      class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-200 transition">
                <i class="fa-solid fa-user-plus"></i>
                <span>Register Another Member</span>
              </button>
            </div>

          </div>

        </div>

        <!-- ================= INTERACTIVE REGISTRATION FORM ================= -->
        <div *ngIf="!isSubmitted" class="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
          
          <form [formGroup]="regForm" (ngSubmit)="onSubmit()" class="space-y-8">
            
            <!-- Section 1: Personal KYC -->
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#0b1e42] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-[#0e2554] text-xs flex items-center justify-center font-bold">1</span>
                <span>Personal Information</span>
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Full Name -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Full Name <span class="text-red-500">*</span></label>
                  <input type="text" formControlName="fullName" placeholder="e.g. Debasish Debbarma" 
                         class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                         [ngClass]="isFieldInvalid('fullName') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'" />
                  <p *ngIf="isFieldInvalid('fullName')" class="text-[11px] text-red-500 mt-1">Please enter your full name.</p>
                </div>

                <!-- Date of Birth -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Date of Birth <span class="text-red-500">*</span></label>
                  <input type="date" formControlName="dob" 
                         class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                         [ngClass]="isFieldInvalid('dob') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'" />
                  <p *ngIf="isFieldInvalid('dob')" class="text-[11px] text-red-500 mt-1">Date of birth is required.</p>
                </div>

                <!-- Gender -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Gender <span class="text-red-500">*</span></label>
                  <select formControlName="gender" 
                          class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          [ngClass]="isFieldInvalid('gender') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <!-- Blood Group -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Blood Group <span class="text-red-500">*</span></label>
                  <select formControlName="bloodGroup" 
                          class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          [ngClass]="isFieldInvalid('bloodGroup') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'">
                    <option value="">Select Blood Group</option>
                    <option *ngFor="let bg of bloodGroups" [value]="bg">{{ bg }}</option>
                  </select>
                </div>

                <!-- Mobile Number -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute left-3.5 top-2.5 text-xs font-bold text-slate-500">+91</span>
                    <input type="tel" formControlName="mobile" placeholder="98620XXXXX" maxlength="10"
                           class="w-full pl-12 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                           [ngClass]="isFieldInvalid('mobile') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'" />
                  </div>
                  <p *ngIf="isFieldInvalid('mobile')" class="text-[11px] text-red-500 mt-1">Valid 10-digit mobile number required.</p>
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Email Address <span class="text-red-500">*</span></label>
                  <input type="email" formControlName="email" placeholder="name@example.com" 
                         class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                         [ngClass]="isFieldInvalid('email') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'" />
                  <p *ngIf="isFieldInvalid('email')" class="text-[11px] text-red-500 mt-1">Valid email required.</p>
                </div>
              </div>
            </div>

            <!-- Section 2: District, Mandal & Address -->
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#0b1e42] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-[#0e2554] text-xs flex items-center justify-center font-bold">2</span>
                <span>Tripura Jurisdiction & Residential Address</span>
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <!-- District -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">District <span class="text-red-500">*</span></label>
                  <select formControlName="district" (change)="onDistrictChange()"
                          class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          [ngClass]="isFieldInvalid('district') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'">
                    <option value="">Select District</option>
                    <option *ngFor="let dist of districts" [value]="dist.name">{{ dist.name }}</option>
                  </select>
                </div>

                <!-- Mandal -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Mandal (Assembly Constituency) <span class="text-red-500">*</span></label>
                  <select formControlName="mandal" 
                          [disabled]="!availableMandals.length"
                          class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100 disabled:cursor-not-allowed"
                          [ngClass]="isFieldInvalid('mandal') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'">
                    <option value="">{{ availableMandals.length ? 'Select Mandal' : 'Select District first' }}</option>
                    <option *ngFor="let m of availableMandals" [value]="m.name">{{ m.name }}</option>
                  </select>
                </div>
              </div>

              <!-- Full Address -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Full Residential Address <span class="text-red-500">*</span></label>
                <textarea formControlName="address" rows="2" placeholder="House No, Street, Ward, Village / Town, PIN Code"
                          class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          [ngClass]="isFieldInvalid('address') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'"></textarea>
              </div>
            </div>

            <!-- Section 3: Education & Profession -->
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#0b1e42] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-[#0e2554] text-xs flex items-center justify-center font-bold">3</span>
                <span>Education & Profession</span>
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Educational Qualification -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Educational Qualification <span class="text-red-500">*</span></label>
                  <select formControlName="qualification" 
                          class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          [ngClass]="isFieldInvalid('qualification') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'">
                    <option value="">Select Qualification</option>
                    <option value="Secondary (10th)">Secondary (10th)</option>
                    <option value="Higher Secondary (12th)">Higher Secondary (12th)</option>
                    <option value="Graduate (B.A/B.Sc/B.Com)">Graduate (B.A / B.Sc / B.Com)</option>
                    <option value="Technical / Engineering (B.Tech/Diploma/ITI)">Technical / Engineering (B.Tech / Diploma / ITI)</option>
                    <option value="Post Graduate (M.A/M.Sc/M.Com/MBA)">Post Graduate (M.A / M.Sc / MBA)</option>
                    <option value="Medical / Paramedical">Medical / Paramedical</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <!-- Profession -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Profession / Occupation <span class="text-red-500">*</span></label>
                  <select formControlName="profession" 
                          class="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          [ngClass]="isFieldInvalid('profession') ? 'border-red-500 bg-red-50/30' : 'border-slate-300'">
                    <option value="">Select Profession</option>
                    <option value="Student">Student</option>
                    <option value="Self-Employed / Entrepreneur">Self-Employed / Entrepreneur</option>
                    <option value="Private Sector Employee">Private Sector Employee</option>
                    <option value="Govt. / PSU Service">Govt. / PSU Service</option>
                    <option value="Farmer / Agriculture">Farmer / Agriculture</option>
                    <option value="Social Worker / Freelancer">Social Worker / Freelancer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Section 4: Areas of Interest & Volunteer Interests -->
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#0b1e42] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-[#0e2554] text-xs flex items-center justify-center font-bold">4</span>
                <span>Areas of Interest & Volunteering Preferences</span>
              </h3>

              <!-- Areas of Interest (Pills) -->
              <div class="mb-5">
                <label class="block text-xs font-bold text-slate-700 mb-2">Areas of Interest (Select all that apply)</label>
                <div class="flex flex-wrap gap-2">
                  <button type="button" *ngFor="let area of areaOptions" 
                          (click)="toggleArea(area)"
                          [ngClass]="isAreaSelected(area) ? 'bg-[#0e2554] text-white border-[#0e2554]' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'"
                          class="px-3.5 py-1.5 rounded-xl border text-xs font-semibold transition">
                    <i class="fa-solid fa-check mr-1 text-[10px]" *ngIf="isAreaSelected(area)"></i>
                    {{ area }}
                  </button>
                </div>
              </div>

              <!-- Volunteer Interests (Pills) -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-2">Volunteer Interests (Select preferences)</label>
                <div class="flex flex-wrap gap-2">
                  <button type="button" *ngFor="let vol of volunteerOptions" 
                          (click)="toggleVolunteer(vol)"
                          [ngClass]="isVolunteerSelected(vol) ? 'bg-amber-600 text-white border-amber-600' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'"
                          class="px-3.5 py-1.5 rounded-xl border text-xs font-semibold transition">
                    <i class="fa-solid fa-check mr-1 text-[10px]" *ngIf="isVolunteerSelected(vol)"></i>
                    {{ vol }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Section 5: Photograph Upload -->
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#0b1e42] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-[#0e2554] text-xs flex items-center justify-center font-bold">5</span>
                <span>Member Photograph</span>
              </h3>

              <div class="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div class="w-24 h-28 rounded-2xl bg-slate-200 overflow-hidden border-2 border-slate-300 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img *ngIf="photoPreviewUrl" [src]="photoPreviewUrl" alt="Photo Preview" class="w-full h-full object-cover" />
                  <div *ngIf="!photoPreviewUrl" class="text-center p-2 text-slate-400">
                    <i class="fa-solid fa-camera text-2xl mb-1"></i>
                    <span class="text-[9px] block font-semibold">No Image</span>
                  </div>
                </div>

                <div class="flex-1 space-y-2 text-center sm:text-left">
                  <label class="block text-xs font-bold text-slate-700">Upload Passport Size Photo (JPG/PNG)</label>
                  <p class="text-[11px] text-slate-500">This photo will appear on your Digital Membership Card.</p>
                  <input type="file" accept="image/*" (change)="onFileSelected($event)" 
                         class="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#0e2554] file:text-white hover:file:bg-[#071739] cursor-pointer" />
                </div>
              </div>
            </div>

            <!-- Section 6: Declaration & Consent -->
            <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
              <label class="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" formControlName="declarationConsent" class="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" />
                <span class="text-xs text-slate-700 leading-relaxed font-medium">
                  <span class="font-bold text-[#0b1e42]">Declaration:</span> I hereby declare that the particulars furnished above are true and correct. I voluntarily enroll as an active member/volunteer of Bharatiya Janata Yuva Morcha, Tripura Pradesh, and agree to uphold its principles of youth empowerment and community service.
                </span>
              </label>
              <p *ngIf="isFieldInvalid('declarationConsent')" class="text-[11px] text-red-500 mt-1 pl-7">You must accept the declaration to submit.</p>
            </div>

            <!-- Submit Button -->
            <div class="text-center pt-2">
              <button type="submit" 
                      class="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-sm text-white bg-[#0e2554] hover:bg-[#071739] transition shadow-lg hover:shadow-xl transform active:scale-95">
                <i class="fa-solid fa-id-card mr-2"></i>Complete Registration & Generate ID Card
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  `
})
export class RegisterComponent implements OnInit {
  fb = inject(FormBuilder);
  geoService = inject(TripuraGeoService);

  regForm!: FormGroup;
  isSubmitted = false;
  memberRecord: RegisteredMemberView | null = null;
  photoPreviewUrl: string | null = null;

  districts: District[] = [];
  availableMandals: Mandal[] = [];

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  areaOptions = [
    'Youth Empowerment & Leadership',
    'Digital Media, IT & Artificial Intelligence',
    'Higher Education & Competitive Exams',
    'Sports & Tribal Cultural Heritage',
    'Environmental Protection & Gomati Cleanup',
    'Public Policy & Grassroots Governance',
    'Women Youth Leadership (Mahila Wing)'
  ];
  selectedAreas: string[] = ['Youth Empowerment & Leadership'];

  volunteerOptions = [
    'Emergency Blood Donor Standby (24/7)',
    'Disaster Relief & First-Aid Squad',
    'Event Organization & Crowd Coordination',
    'District / Mandal Student Helpdesk',
    'Social Media Advocacy & Content Design',
    'Tree Plantation & Swachhata Drives'
  ];
  selectedVolunteers: string[] = ['Emergency Blood Donor Standby (24/7)'];

  ngOnInit(): void {
    this.districts = this.geoService.getDistricts();

    this.regForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      district: ['', Validators.required],
      mandal: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(5)]],
      qualification: ['', Validators.required],
      profession: ['', Validators.required],
      declarationConsent: [false, Validators.requiredTrue]
    });
  }

  onDistrictChange(): void {
    const selectedDistrictName = this.regForm.get('district')?.value;
    const dist = this.districts.find(d => d.name === selectedDistrictName);
    this.availableMandals = dist ? dist.mandals : [];
    this.regForm.get('mandal')?.setValue('');
  }

  toggleArea(area: string): void {
    if (this.selectedAreas.includes(area)) {
      this.selectedAreas = this.selectedAreas.filter(a => a !== area);
    } else {
      this.selectedAreas.push(area);
    }
  }

  isAreaSelected(area: string): boolean {
    return this.selectedAreas.includes(area);
  }

  toggleVolunteer(vol: string): void {
    if (this.selectedVolunteers.includes(vol)) {
      this.selectedVolunteers = this.selectedVolunteers.filter(v => v !== vol);
    } else {
      this.selectedVolunteers.push(vol);
    }
  }

  isVolunteerSelected(vol: string): boolean {
    return this.selectedVolunteers.includes(vol);
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreviewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.regForm.get(fieldName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  onSubmit(): void {
    if (this.regForm.invalid) {
      this.regForm.markAllAsTouched();
      return;
    }

    const val = this.regForm.value;
    const randomId = 'TR-YMT-2026-' + Math.floor(10000 + Math.random() * 90000);

    this.memberRecord = {
      applicationId: randomId,
      fullName: val.fullName,
      dob: val.dob,
      gender: val.gender,
      mobile: val.mobile,
      email: val.email,
      district: val.district,
      mandal: val.mandal,
      address: val.address,
      qualification: val.qualification,
      profession: val.profession,
      areasOfInterest: this.selectedAreas,
      volunteerInterests: this.selectedVolunteers,
      photoUrl: this.photoPreviewUrl || '',
      bloodGroup: val.bloodGroup,
      membershipStatus: 'Verified & Active',
      issueDate: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    this.isSubmitted = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  printCard(): void {
    window.print();
  }

  resetForm(): void {
    this.regForm.reset();
    this.photoPreviewUrl = null;
    this.isSubmitted = false;
    this.memberRecord = null;
  }
}
