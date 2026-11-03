import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TripuraGeoService } from '../../core/services/tripura-geo.service';
import { MemberService } from '../../core/services/member.service';
import { District, Mandal, MemberKYC } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        
        <!-- Top Breadcrumb & Header -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-2">
            <i class="fa-solid fa-id-card"></i> Member Onboarding & KYC
          </div>
          <h1 class="text-3xl font-extrabold text-[#0e2554] tracking-tight">Join Yuva Sampark Tripura</h1>
          <p class="text-sm text-slate-500 max-w-xl mx-auto mt-2">
            Register as a verified Yuva Morcha member or active youth volunteer. Get your digital membership card, join local mandal initiatives, and access exclusive youth schemes.
          </p>
        </div>

        <!-- Success Screen with Digital Membership Card Preview -->
        <div *ngIf="isSubmitted && createdMember" class="animate-fadeIn">
          
          <div class="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 text-center mb-8">
            <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            
            <h2 class="text-2xl font-black text-slate-900">Registration Successful!</h2>
            <p class="text-sm text-slate-600 mt-1">
              Your Yuva Sampark membership application has been approved and registered with the state database.
            </p>

            <div class="inline-flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl text-xs font-mono font-bold text-slate-700 my-4 border border-slate-200">
              <span>Application ID:</span>
              <span class="text-[#0e2554] text-sm">{{ createdMember.applicationId }}</span>
            </div>

            <!-- Digital Membership Card (High visual fidelity, printable) -->
            <div class="my-8 max-w-md mx-auto">
              <div id="membership-card" class="relative rounded-2xl p-6 text-white overflow-hidden shadow-2xl bg-gradient-to-br from-[#071739] via-[#0d2a60] to-[#08183c] border-2 border-amber-500/40 text-left">
                
                <!-- Card Header -->
                <div class="flex items-center justify-between border-b border-blue-400/30 pb-3 mb-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm shadow">
                      <i class="fa-solid fa-hands-holding-child"></i>
                    </div>
                    <div>
                      <div class="text-xs font-black tracking-wider uppercase text-amber-400">Yuva Sampark</div>
                      <div class="text-[9px] text-blue-200 font-semibold">BJP Yuva Morcha Tripura Pradesh</div>
                    </div>
                  </div>
                  
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                    <i class="fa-solid fa-badge-check mr-1"></i> VERIFIED
                  </span>
                </div>

                <!-- Card Body -->
                <div class="flex items-start gap-4">
                  <!-- Photo Avatar Placeholder with initials -->
                  <div class="w-20 h-24 rounded-xl bg-slate-800 border-2 border-amber-400/60 flex flex-col items-center justify-center text-slate-400 shadow-inner flex-shrink-0 relative overflow-hidden">
                    <i class="fa-solid fa-user text-3xl text-slate-500"></i>
                    <span class="text-[8px] text-amber-300 font-semibold mt-1">TRIPURA</span>
                    <div class="absolute bottom-0 inset-x-0 bg-blue-950/90 text-center py-0.5 text-[8px] text-white">
                      {{ createdMember.bloodGroup }}
                    </div>
                  </div>

                  <!-- Details -->
                  <div class="flex-1 space-y-1">
                    <h3 class="text-base font-black text-white leading-tight tracking-wide">
                      {{ createdMember.fullName }}
                    </h3>
                    <div class="text-[11px] text-amber-300 font-semibold">
                      {{ createdMember.wingInterest || 'Youth General Wing' }}
                    </div>
                    <div class="text-[10px] text-slate-300 flex items-center gap-1.5 pt-1">
                      <i class="fa-solid fa-location-dot text-amber-400 text-[10px]"></i>
                      <span>{{ createdMember.mandal }}, {{ createdMember.district }}</span>
                    </div>
                    <div class="text-[10px] text-slate-300 flex items-center gap-1.5">
                      <i class="fa-solid fa-phone text-amber-400 text-[10px]"></i>
                      <span>{{ createdMember.mobile }}</span>
                    </div>
                  </div>
                </div>

                <!-- Card Footer / Barcode & Security Hologram -->
                <div class="mt-5 pt-3 border-t border-blue-400/30 flex items-center justify-between text-[9px] text-slate-300">
                  <div>
                    <div class="text-[8px] text-blue-300 uppercase tracking-widest font-mono">Card ID</div>
                    <div class="font-mono font-bold text-white text-[10px]">{{ createdMember.applicationId }}</div>
                  </div>

                  <div class="text-right">
                    <div class="text-[8px] text-blue-300 uppercase tracking-widest">Valid Statewide</div>
                    <div class="font-semibold text-amber-300">Govt. Recognised Portal</div>
                  </div>

                  <!-- QR Code Mock -->
                  <div class="w-8 h-8 bg-white p-1 rounded shadow-sm">
                    <div class="w-full h-full bg-slate-900 rounded-[2px] flex items-center justify-center text-[7px] text-white font-mono">
                      QR
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Card Actions -->
            <div class="flex flex-wrap items-center justify-center gap-3">
              <button (click)="printCard()" 
                      class="px-5 py-2.5 bg-[#0e2554] text-white font-bold rounded-xl text-xs hover:bg-[#071739] transition shadow-md flex items-center gap-2">
                <i class="fa-solid fa-print"></i> Print / Download Membership Card
              </button>

              <a routerLink="/blood-donation" 
                 class="px-5 py-2.5 bg-red-600 text-white font-bold rounded-xl text-xs hover:bg-red-700 transition shadow-md flex items-center gap-2">
                <i class="fa-solid fa-droplet"></i> Check Emergency Blood Requests
              </a>

              <a routerLink="/dashboard" 
                 class="px-5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-xs hover:bg-slate-200 transition">
                Go to Member Portal
              </a>
            </div>

          </div>

        </div>

        <!-- Multi-Step Form Container -->
        <div *ngIf="!isSubmitted" class="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          
          <!-- Stepper Indicator -->
          <div class="bg-slate-50 border-b border-slate-200 px-6 py-4">
            <div class="flex items-center justify-between max-w-2xl mx-auto">
              
              <!-- Step 1 -->
              <div class="flex items-center gap-2 cursor-pointer" (click)="currentStep = 1">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                     [ngClass]="currentStep >= 1 ? 'bg-[#0e2554] text-white' : 'bg-slate-200 text-slate-600'">
                  1
                </div>
                <span class="text-xs font-bold hidden sm:inline" [ngClass]="currentStep >= 1 ? 'text-[#0e2554]' : 'text-slate-400'">
                  Personal KYC
                </span>
              </div>

              <div class="flex-1 h-0.5 mx-2 bg-slate-200">
                <div class="h-full bg-[#0e2554] transition-all duration-300" 
                     [style.width]="currentStep >= 2 ? '100%' : '0%'"></div>
              </div>

              <!-- Step 2 -->
              <div class="flex items-center gap-2 cursor-pointer" (click)="canGoToStep(2) && (currentStep = 2)">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                     [ngClass]="currentStep >= 2 ? 'bg-[#0e2554] text-white' : 'bg-slate-200 text-slate-600'">
                  2
                </div>
                <span class="text-xs font-bold hidden sm:inline" [ngClass]="currentStep >= 2 ? 'text-[#0e2554]' : 'text-slate-400'">
                  Location
                </span>
              </div>

              <div class="flex-1 h-0.5 mx-2 bg-slate-200">
                <div class="h-full bg-[#0e2554] transition-all duration-300" 
                     [style.width]="currentStep >= 3 ? '100%' : '0%'"></div>
              </div>

              <!-- Step 3 -->
              <div class="flex items-center gap-2 cursor-pointer" (click)="canGoToStep(3) && (currentStep = 3)">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                     [ngClass]="currentStep >= 3 ? 'bg-[#0e2554] text-white' : 'bg-slate-200 text-slate-600'">
                  3
                </div>
                <span class="text-xs font-bold hidden sm:inline" [ngClass]="currentStep >= 3 ? 'text-[#0e2554]' : 'text-slate-400'">
                  Education & Wing
                </span>
              </div>

              <div class="flex-1 h-0.5 mx-2 bg-slate-200">
                <div class="h-full bg-[#0e2554] transition-all duration-300" 
                     [style.width]="currentStep >= 4 ? '100%' : '0%'"></div>
              </div>

              <!-- Step 4 -->
              <div class="flex items-center gap-2 cursor-pointer" (click)="canGoToStep(4) && (currentStep = 4)">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                     [ngClass]="currentStep === 4 ? 'bg-[#0e2554] text-white' : 'bg-slate-200 text-slate-600'">
                  4
                </div>
                <span class="text-xs font-bold hidden sm:inline" [ngClass]="currentStep === 4 ? 'text-[#0e2554]' : 'text-slate-400'">
                  Volunteer Skills
                </span>
              </div>

            </div>
          </div>

          <!-- Form Body -->
          <form [formGroup]="regForm" (ngSubmit)="onSubmit()" class="p-6 sm:p-8">
            
            <!-- ================= STEP 1: PERSONAL KYC ================= -->
            <div *ngIf="currentStep === 1" class="space-y-5 animate-fadeIn">
              <div class="border-b border-slate-100 pb-3 mb-4">
                <h3 class="text-base font-bold text-slate-900">Step 1: Personal & Identity Details</h3>
                <p class="text-xs text-slate-500">Provide basic identity information as per official records.</p>
              </div>

              <!-- Full Name -->
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span class="text-red-500">*</span>
                </label>
                <input type="text" formControlName="fullName" 
                       placeholder="e.g. Subhrajit Debbarma" 
                       class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] focus:border-transparent transition" />
                <span *ngIf="isFieldInvalid('fullName')" class="text-[11px] text-red-500 mt-1 block">Full Name is required (minimum 3 characters).</span>
              </div>

              <!-- DOB & Gender -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Date of Birth <span class="text-red-500">*</span>
                  </label>
                  <input type="date" formControlName="dob" 
                         class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition" />
                  <span *ngIf="isFieldInvalid('dob')" class="text-[11px] text-red-500 mt-1 block">Date of Birth is required.</span>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Gender <span class="text-red-500">*</span>
                  </label>
                  <select formControlName="gender" 
                          class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition bg-white">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <span *ngIf="isFieldInvalid('gender')" class="text-[11px] text-red-500 mt-1 block">Please select gender.</span>
                </div>
              </div>

              <!-- Mobile & Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number (WhatsApp) <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-xs text-slate-400 font-semibold">+91</span>
                    <input type="tel" formControlName="mobile" placeholder="9876543210" 
                           class="w-full pl-12 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition" />
                  </div>
                  <span *ngIf="isFieldInvalid('mobile')" class="text-[11px] text-red-500 mt-1 block">Enter a valid 10-digit mobile number.</span>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address <span class="text-red-500">*</span>
                  </label>
                  <input type="email" formControlName="email" placeholder="name@example.com" 
                         class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition" />
                  <span *ngIf="isFieldInvalid('email')" class="text-[11px] text-red-500 mt-1 block">Enter a valid email address.</span>
                </div>
              </div>

              <!-- Blood Group (MANDATORY REQUIREMENT) -->
              <div class="bg-red-50/60 p-4 rounded-2xl border border-red-200">
                <div class="flex items-center gap-2 mb-2">
                  <i class="fa-solid fa-droplet text-red-600"></i>
                  <label class="text-xs font-bold text-red-950 uppercase tracking-wider">
                    Blood Group (Required for Emergency Network) <span class="text-red-600">*</span>
                  </label>
                </div>
                <div class="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  <label *ngFor="let bg of bloodGroups" 
                         class="cursor-pointer border rounded-xl p-2 text-center transition font-mono font-bold text-sm"
                         [ngClass]="regForm.get('bloodGroup')?.value === bg ? 'bg-red-600 text-white border-red-600 shadow-md scale-105' : 'bg-white text-slate-700 border-slate-300 hover:border-red-400'">
                    <input type="radio" formControlName="bloodGroup" [value]="bg" class="hidden" />
                    {{ bg }}
                  </label>
                </div>
                <span *ngIf="isFieldInvalid('bloodGroup')" class="text-[11px] text-red-600 mt-2 block font-semibold">
                  Blood Group is mandatory for the emergency response directory.
                </span>
              </div>
            </div>

            <!-- ================= STEP 2: LOCATION HIERARCHY (DISTRICT -> MANDAL) ================= -->
            <div *ngIf="currentStep === 2" class="space-y-5 animate-fadeIn">
              <div class="border-b border-slate-100 pb-3 mb-4">
                <h3 class="text-base font-bold text-slate-900">Step 2: Tripura Administrative Location</h3>
                <p class="text-xs text-slate-500">Select your District to view the corresponding Mandal and Booth unit.</p>
              </div>

              <!-- Cascading District -> Mandal Dropdowns -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    District <span class="text-red-500">*</span>
                  </label>
                  <select formControlName="district" (change)="onDistrictChange()" 
                          class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition bg-white">
                    <option value="">Select Tripura District</option>
                    <option *ngFor="let d of districts" [value]="d.name">{{ d.name }}</option>
                  </select>
                  <span *ngIf="isFieldInvalid('district')" class="text-[11px] text-red-500 mt-1 block">Please select your district.</span>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mandal / Assembly Unit <span class="text-red-500">*</span>
                  </label>
                  <select formControlName="mandal" 
                          [disabled]="!availableMandals.length"
                          class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition bg-white disabled:bg-slate-100 disabled:cursor-not-allowed">
                    <option value="">{{ availableMandals.length ? 'Select Mandal Unit' : 'First select a district' }}</option>
                    <option *ngFor="let m of availableMandals" [value]="m.name">{{ m.name }}</option>
                  </select>
                  <span *ngIf="isFieldInvalid('mandal')" class="text-[11px] text-red-500 mt-1 block">Please select your mandal.</span>
                </div>
              </div>

              <!-- Booth / Ward Number & PIN Code -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Polling Booth / Ward Number (Optional)
                  </label>
                  <input type="text" formControlName="boothNumber" placeholder="e.g. Ward 12 / Booth 45" 
                         class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition" />
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tripura PIN Code <span class="text-red-500">*</span>
                  </label>
                  <input type="text" formControlName="pinCode" placeholder="799001" maxlength="6" 
                         class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition" />
                  <span *ngIf="isFieldInvalid('pinCode')" class="text-[11px] text-red-500 mt-1 block">Valid 6-digit PIN code required (Starts with 799xxx).</span>
                </div>
              </div>

              <!-- Full Address -->
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Residential Address <span class="text-red-500">*</span>
                </label>
                <textarea formControlName="address" rows="2" placeholder="House/Village, Post Office, Landmark" 
                          class="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition"></textarea>
                <span *ngIf="isFieldInvalid('address')" class="text-[11px] text-red-500 mt-1 block">Residential address is required.</span>
              </div>
            </div>

            <!-- ================= STEP 3: EDUCATION & PROFESSION ================= -->
            <div *ngIf="currentStep === 3" class="space-y-5 animate-fadeIn">
              <div class="border-b border-slate-100 pb-3 mb-4">
                <h3 class="text-base font-bold text-slate-900">Step 3: Education & Wing Alignment</h3>
                <p class="text-xs text-slate-500">Helps us match you with relevant state scholarships, career fairs, and wing appointments.</p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Highest Qualification <span class="text-red-500">*</span>
                  </label>
                  <select formControlName="qualification" 
                          class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition bg-white">
                    <option value="">Select Qualification</option>
                    <option value="10th Standard / Madhyamik">10th Standard / Madhyamik</option>
                    <option value="12th Standard / Higher Secondary">12th Standard / Higher Secondary</option>
                    <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
                    <option value="Undergraduate Degree (BA/BSc/BCom/BTech/MBBS)">Undergraduate Degree (BA/BSc/BCom/BTech/MBBS)</option>
                    <option value="Postgraduate Degree (MA/MSc/MCom/MTech)">Postgraduate Degree (MA/MSc/MCom/MTech)</option>
                    <option value="Doctorate / PhD">Doctorate / PhD</option>
                  </select>
                  <span *ngIf="isFieldInvalid('qualification')" class="text-[11px] text-red-500 mt-1 block">Please select qualification.</span>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Current Occupation <span class="text-red-500">*</span>
                  </label>
                  <select formControlName="occupation" 
                          class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0e2554] transition bg-white">
                    <option value="">Select Occupation</option>
                    <option value="Student">Student (College/University)</option>
                    <option value="Employed (Private Sector / IT)">Employed (Private Sector / IT)</option>
                    <option value="Self Employed / Entrepreneur / MSME">Self Employed / Entrepreneur / MSME</option>
                    <option value="Civil Services Aspirant">Civil Services Aspirant</option>
                    <option value="Agriculture & Horticulture">Agriculture & Horticulture</option>
                    <option value="Freelancer / Creative Media">Freelancer / Creative Media</option>
                  </select>
                  <span *ngIf="isFieldInvalid('occupation')" class="text-[11px] text-red-500 mt-1 block">Please select occupation.</span>
                </div>
              </div>

              <!-- Wing Interest -->
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Yuva Morcha Wing Interest <span class="text-red-500">*</span>
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label *ngFor="let wing of wingOptions" 
                         class="cursor-pointer border rounded-xl p-3 flex items-center gap-3 transition"
                         [ngClass]="regForm.get('wingInterest')?.value === wing.name ? 'bg-blue-50 border-[#0e2554] shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'">
                    <input type="radio" formControlName="wingInterest" [value]="wing.name" class="text-[#0e2554] focus:ring-[#0e2554]" />
                    <div>
                      <div class="text-xs font-bold text-slate-900">{{ wing.name }}</div>
                      <div class="text-[10px] text-slate-500">{{ wing.desc }}</div>
                    </div>
                  </label>
                </div>
                <span *ngIf="isFieldInvalid('wingInterest')" class="text-[11px] text-red-500 mt-1 block">Please select an interest wing.</span>
              </div>
            </div>

            <!-- ================= STEP 4: VOLUNTEER SKILLS & CONSENT ================= -->
            <div *ngIf="currentStep === 4" class="space-y-5 animate-fadeIn">
              <div class="border-b border-slate-100 pb-3 mb-4">
                <h3 class="text-base font-bold text-slate-900">Step 4: Volunteer Skills & DPDP Consent</h3>
                <p class="text-xs text-slate-500">Select skills you are passionate to contribute during state/local initiatives.</p>
              </div>

              <!-- Skills Checkbox Grid -->
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Your Volunteer Skills (Select all that apply)
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label *ngFor="let skill of skillOptions" 
                         class="cursor-pointer border rounded-xl p-3 flex items-center gap-3 transition"
                         [ngClass]="isSkillSelected(skill) ? 'bg-amber-50 border-amber-500' : 'bg-white border-slate-200 hover:border-slate-300'">
                    <input type="checkbox" [checked]="isSkillSelected(skill)" (change)="toggleSkill(skill)" 
                           class="rounded text-[#0e2554] focus:ring-[#0e2554]" />
                    <span class="text-xs font-semibold text-slate-800">{{ skill }}</span>
                  </label>
                </div>
              </div>

              <!-- DPDP Act Consent Checkbox -->
              <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div class="flex items-start gap-3">
                  <input type="checkbox" formControlName="dpdpConsent" id="dpdp" 
                         class="mt-1 rounded text-[#0e2554] focus:ring-[#0e2554]" />
                  <label for="dpdp" class="text-xs text-slate-600 leading-relaxed cursor-pointer">
                    <strong class="text-slate-900">DPDP Act (2023) Explicit Consent:</strong> I voluntarily consent to share my contact, district, and blood group details with Yuva Sampark for youth empowerment programs and emergency blood coordination in Tripura. My data will be encrypted and handled under India's Digital Personal Data Protection guidelines.
                  </label>
                </div>
                <span *ngIf="isFieldInvalid('dpdpConsent')" class="text-[11px] text-red-500 block font-semibold">
                  You must accept the DPDP privacy consent to complete registration.
                </span>
              </div>
            </div>

            <!-- Form Navigation Buttons -->
            <div class="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
              <button *ngIf="currentStep > 1" 
                      type="button" 
                      (click)="currentStep = currentStep - 1" 
                      class="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition">
                <i class="fa-solid fa-arrow-left mr-1"></i> Back
              </button>

              <div *ngIf="currentStep === 1"></div>

              <button *ngIf="currentStep < 4" 
                      type="button" 
                      (click)="goToNextStep()" 
                      class="px-6 py-2.5 text-xs font-bold text-white bg-[#0e2554] hover:bg-[#071739] rounded-xl transition shadow-md">
                Next Step <i class="fa-solid fa-arrow-right ml-1"></i>
              </button>

              <button *ngIf="currentStep === 4" 
                      type="submit" 
                      class="px-7 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#0e2554] to-blue-900 hover:from-[#091b3e] hover:to-blue-950 rounded-xl transition shadow-lg flex items-center gap-2">
                <i class="fa-solid fa-badge-check"></i> Complete Registration & Generate Card
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
  memberService = inject(MemberService);

  currentStep = 1;
  isSubmitted = false;
  createdMember: MemberKYC | null = null;

  districts: District[] = [];
  availableMandals: Mandal[] = [];

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  wingOptions = [
    { name: 'Digital & Social Media Wing', desc: 'IT initiatives, digital campaigns, portals' },
    { name: 'Yuva Mahila Morcha', desc: 'Women leadership & skill entrepreneurship' },
    { name: 'Sports, Culture & Heritage', desc: 'Tournaments, traditional festivals & tribal arts' },
    { name: 'Disaster Relief & Seva Wing', desc: 'Blood camps, emergency response & community aid' }
  ];

  skillOptions = [
    'Emergency Blood Donation & Hospital Aid',
    'Disaster Relief & First-Aid Assistance',
    'Social Media, Video Editing & IT',
    'Event Management & Crowd Logistics',
    'Cleanliness (Swachhata) & Tree Plantation',
    'Public Speaking & Debating',
    'Legal Aid & RTI Guidance'
  ];

  selectedSkills: string[] = ['Emergency Blood Donation & Hospital Aid'];

  regForm!: FormGroup;

  ngOnInit(): void {
    this.districts = this.geoService.getDistricts();

    this.regForm = this.fb.group({
      // Step 1
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      bloodGroup: ['', Validators.required],

      // Step 2
      district: ['', Validators.required],
      mandal: ['', Validators.required],
      boothNumber: [''],
      pinCode: ['', [Validators.required, Validators.pattern(/^799\d{3}$/)]],
      address: ['', [Validators.required, Validators.minLength(5)]],

      // Step 3
      qualification: ['', Validators.required],
      occupation: ['', Validators.required],
      wingInterest: ['', Validators.required],

      // Step 4
      dpdpConsent: [false, Validators.requiredTrue]
    });
  }

  onDistrictChange(): void {
    const selected = this.regForm.get('district')?.value;
    this.availableMandals = this.geoService.getMandalsForDistrict(selected);
    this.regForm.get('mandal')?.setValue('');
  }

  isSkillSelected(skill: string): boolean {
    return this.selectedSkills.includes(skill);
  }

  toggleSkill(skill: string): void {
    if (this.selectedSkills.includes(skill)) {
      this.selectedSkills = this.selectedSkills.filter(s => s !== skill);
    } else {
      this.selectedSkills.push(skill);
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.regForm.get(field);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  canGoToStep(targetStep: number): boolean {
    if (targetStep === 2) {
      return !this.isFieldInvalid('fullName') && !this.isFieldInvalid('mobile') && !this.isFieldInvalid('bloodGroup');
    }
    return true;
  }

  goToNextStep(): void {
    if (this.currentStep === 1) {
      const step1Fields = ['fullName', 'dob', 'gender', 'mobile', 'email', 'bloodGroup'];
      step1Fields.forEach(f => this.regForm.get(f)?.markAsTouched());
      const isValid = step1Fields.every(f => this.regForm.get(f)?.valid);
      if (!isValid) return;
    } else if (this.currentStep === 2) {
      const step2Fields = ['district', 'mandal', 'pinCode', 'address'];
      step2Fields.forEach(f => this.regForm.get(f)?.markAsTouched());
      const isValid = step2Fields.every(f => this.regForm.get(f)?.valid);
      if (!isValid) return;
    } else if (this.currentStep === 3) {
      const step3Fields = ['qualification', 'occupation', 'wingInterest'];
      step3Fields.forEach(f => this.regForm.get(f)?.markAsTouched());
      const isValid = step3Fields.every(f => this.regForm.get(f)?.valid);
      if (!isValid) return;
    }

    this.currentStep++;
  }

  onSubmit(): void {
    if (this.regForm.invalid) {
      this.regForm.markAllAsTouched();
      return;
    }

    const val = this.regForm.value;
    const memberData: MemberKYC = {
      fullName: val.fullName,
      dob: val.dob,
      gender: val.gender,
      mobile: val.mobile,
      email: val.email,
      bloodGroup: val.bloodGroup,
      district: val.district,
      mandal: val.mandal,
      boothNumber: val.boothNumber,
      pinCode: val.pinCode,
      address: val.address,
      qualification: val.qualification,
      occupation: val.occupation,
      skills: this.selectedSkills,
      wingInterest: val.wingInterest
    };

    this.createdMember = this.memberService.registerMember(memberData);
    this.isSubmitted = true;
  }

  printCard(): void {
    window.print();
  }
}

