import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CareerService } from '../../core/services/career.service';
import { CareerOpening } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-contact-career',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-3">
            <i class="fa-solid fa-headset text-amber-500"></i>
            <span>Citizen Helpdesk & Youth Fellowships</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-[#0b1e42] tracking-tight">Contact & Youth Career Opportunities</h1>
          <p class="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Reach out to the State Headquarters in Agartala, submit inquiries or grievances, and explore paid policy fellowships, digital internships, and community leadership roles.
          </p>
        </div>

        <!-- ================= CONTACT & STATE HQ SECTION ================= -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left 5 Cols: HQ Info, Helplines & Map Info -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">State Headquarters</span>
                <h3 class="text-xl font-black text-[#0b1e42]">Dr. Syama Prasad Mookerjee Bhawan</h3>
                <p class="text-xs text-slate-500 mt-1">Krishna Nagar, Agartala, West Tripura - 799001</p>
              </div>

              <div class="space-y-4 text-xs sm:text-sm text-slate-700">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-blue-50 text-[#0e2554] flex items-center justify-center flex-shrink-0 text-sm">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <span class="font-bold text-slate-900 block">General Inquiries & Office Desk:</span>
                    <span class="font-mono">+91 381 232 4011 / +91 381 232 4012</span>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 text-sm">
                    <i class="fa-solid fa-droplet"></i>
                  </div>
                  <div>
                    <span class="font-bold text-slate-900 block">24/7 Emergency Blood Helpline:</span>
                    <span class="font-mono text-red-700 font-bold">+91 381 232 4011 (Ext. 9) / 104</span>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-sm">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span class="font-bold text-slate-900 block">Official Email Address:</span>
                    <span class="font-mono text-[#0e2554]">contact&#64;bjymtripura.org</span>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 text-sm">
                    <i class="fa-regular fa-clock"></i>
                  </div>
                  <div>
                    <span class="font-bold text-slate-900 block">Visiting Hours:</span>
                    <span>Monday - Saturday: 09:30 AM to 06:30 PM</span>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="pt-4 border-t border-slate-100 flex items-center gap-3">
                <span class="text-xs font-bold text-slate-500">Official Handles:</span>
                <a href="https://twitter.com" target="_blank" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-xs transition"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://facebook.com" target="_blank" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-xs transition"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-xs transition"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://youtube.com" target="_blank" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-xs transition"><i class="fa-brands fa-youtube"></i></a>
              </div>
            </div>

          </div>

          <!-- Right 7 Cols: Grievance & Citizen Inquiry Form -->
          <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            <div class="mb-6">
              <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Direct Citizen Connect</span>
              <h3 class="text-2xl font-black text-[#0b1e42]">Submit an Inquiry or Grievance</h3>
              <p class="text-xs text-slate-500 mt-1">Our public grievance desk reviews and responds to all community messages within 24-48 working hours.</p>
            </div>

            <!-- Success message -->
            <div *ngIf="inquirySubmitted" class="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mx-auto">
                <i class="fa-solid fa-check"></i>
              </div>
              <h4 class="text-base font-bold text-emerald-950">Inquiry Received</h4>
              <p class="text-xs text-emerald-800">
                Thank you, <strong>{{ inquiryName }}</strong>. Your submission has been logged with Reference ID <strong>TR-INQ-{{ randomRef }}</strong>. Our team will contact you shortly.
              </p>
              <button (click)="inquirySubmitted = false" class="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs">
                Submit Another Message
              </button>
            </div>

            <!-- Form -->
            <form *ngIf="!inquirySubmitted" (ngSubmit)="submitInquiry()" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Your Full Name <span class="text-red-500">*</span></label>
                  <input type="text" [(ngModel)]="inquiryName" name="inquiryName" required placeholder="Full Name" 
                         class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) <span class="text-red-500">*</span></label>
                  <input type="tel" [(ngModel)]="inquiryPhone" name="inquiryPhone" required placeholder="10-digit number" 
                         class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input type="email" [(ngModel)]="inquiryEmail" name="inquiryEmail" placeholder="name@example.com" 
                         class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">District / Assembly Area <span class="text-red-500">*</span></label>
                  <input type="text" [(ngModel)]="inquiryArea" name="inquiryArea" required placeholder="e.g. Udaipur, Gomati" 
                         class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Subject / Category</label>
                <select [(ngModel)]="inquirySubject" name="inquirySubject" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Scholarship / MMYYY Helpdesk">Scholarship / MMYYY Assistance</option>
                  <option value="MSME Startup Subsidy Inquiry">MSME / Startup Subsidy Inquiry</option>
                  <option value="Blood Donation Coordination">Blood Donation Coordination</option>
                  <option value="Mandal Grievance / Public Issue">Mandal Grievance / Public Issue</option>
                  <option value="Other / General Query">Other / General Query</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Message / Details <span class="text-red-500">*</span></label>
                <textarea [(ngModel)]="inquiryMessage" name="inquiryMessage" required rows="4" placeholder="Please elaborate your query or grievance with relevant details..." 
                          class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>

              <div>
                <button type="submit" [disabled]="!inquiryName || !inquiryPhone || !inquiryMessage" 
                        class="px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0e2554] hover:bg-[#071739] disabled:opacity-50 transition shadow">
                  <i class="fa-solid fa-paper-plane mr-2"></i>Send Message to Helpdesk
                </button>
              </div>
            </form>

          </div>

        </div>

        <!-- ================= YOUTH CAREER, FELLOWSHIPS & VOLUNTEERING ================= -->
        <div class="pt-8 border-t border-slate-200">
          <div class="text-center max-w-3xl mx-auto mb-10">
            <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Youth Careers & Internships</span>
            <h2 class="text-2xl sm:text-3xl font-black text-[#0b1e42] tracking-tight">Lead with Purpose: Active Openings</h2>
            <p class="text-xs sm:text-sm text-slate-600 mt-2">
              Gain hands-on experience in public policy, communications, digital media, and grassroots event mobilization across Tripura.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div *ngFor="let opening of careerOpenings" class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        [ngClass]="opening.type === 'Fellowship' ? 'bg-amber-100 text-amber-900' : (opening.type === 'Internship' ? 'bg-blue-100 text-blue-900' : 'bg-emerald-100 text-emerald-900')">
                    {{ opening.type }}
                  </span>
                  <span class="text-xs font-semibold text-slate-500"><i class="fa-solid fa-location-dot mr-1 text-slate-400"></i>{{ opening.location }}</span>
                </div>

                <h3 class="text-lg font-bold text-[#0b1e42] mb-1">{{ opening.title }}</h3>
                <div class="text-xs font-bold text-emerald-700 mb-3">{{ opening.stipend }} • Duration: {{ opening.duration }}</div>

                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                  {{ opening.description }}
                </p>

                <div class="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-6">
                  <span class="font-bold text-slate-800 block text-[11px] uppercase">Key Requirements:</span>
                  <ul class="list-disc pl-4 space-y-1">
                    <li *ngFor="let req of opening.requirements">{{ req }}</li>
                  </ul>
                </div>
              </div>

              <div>
                <button (click)="applyForCareer(opening)" 
                        class="w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0e2554] hover:bg-[#071739] transition shadow">
                  Apply for this Role →
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Career Application Modal -->
        <div *ngIf="selectedCareer" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn">
            <button (click)="selectedCareer = null" class="absolute top-5 right-5 text-slate-400 hover:text-slate-700">
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>

            <div class="mb-4">
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                Application Form
              </span>
              <h3 class="text-lg font-bold text-[#0b1e42] mt-1">{{ selectedCareer.title }}</h3>
              <p class="text-xs text-slate-500 mt-0.5">{{ selectedCareer.location }} • {{ selectedCareer.type }}</p>
            </div>

            <div *ngIf="careerApplied" class="text-center py-6 space-y-3">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mx-auto">
                <i class="fa-solid fa-check"></i>
              </div>
              <h4 class="text-base font-bold text-slate-900">Application Submitted!</h4>
              <p class="text-xs text-slate-600">Your profile has been received by the State Secretariat. Shortlisted candidates will be contacted via email/phone.</p>
              <button (click)="selectedCareer = null" class="px-6 py-2 rounded-xl bg-[#0e2554] text-white font-bold text-xs">Close</button>
            </div>

            <form *ngIf="!careerApplied" (ngSubmit)="submitCareerApp()" class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                <input type="text" [(ngModel)]="appFullName" name="appFullName" required placeholder="Full Name" class="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" [(ngModel)]="appPhone" name="appPhone" required placeholder="10-digit number" class="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Email</label>
                <input type="email" [(ngModel)]="appEmail" name="appEmail" required placeholder="name@example.com" class="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Resume / LinkedIn / Portfolio Link</label>
                <input type="text" [(ngModel)]="appLink" name="appLink" placeholder="https://..." class="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs" />
              </div>
              <div class="pt-3 flex justify-end gap-2">
                <button type="button" (click)="selectedCareer = null" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600">Cancel</button>
                <button type="submit" [disabled]="!appFullName || !appPhone" class="px-5 py-2 rounded-xl bg-[#0e2554] text-white font-bold text-xs">Submit Application</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  `
})
export class ContactCareerComponent implements OnInit {
  careerService = inject(CareerService);

  careerOpenings: CareerOpening[] = [];
  selectedCareer: CareerOpening | null = null;
  careerApplied = false;

  inquirySubmitted = false;
  inquiryName = '';
  inquiryPhone = '';
  inquiryEmail = '';
  inquiryArea = '';
  inquirySubject = 'Scholarship / MMYYY Helpdesk';
  inquiryMessage = '';
  randomRef = Math.floor(1000 + Math.random() * 9000);

  appFullName = '';
  appPhone = '';
  appEmail = '';
  appLink = '';

  ngOnInit(): void {
    this.careerOpenings = this.careerService.getOpenings();
  }

  submitInquiry(): void {
    this.inquirySubmitted = true;
    this.randomRef = Math.floor(1000 + Math.random() * 9000);
  }

  applyForCareer(opening: CareerOpening): void {
    this.selectedCareer = opening;
    this.careerApplied = false;
    this.appFullName = '';
    this.appPhone = '';
    this.appEmail = '';
    this.appLink = '';
  }

  submitCareerApp(): void {
    this.careerApplied = true;
  }
}

