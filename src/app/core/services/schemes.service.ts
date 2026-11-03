import { Injectable } from '@angular/core';
import { OpportunityScheme } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class SchemesService {
  private schemes: OpportunityScheme[] = [
    {
      id: 'SCH-TR-01',
      title: "Mukhyamantri Yuva Yogayog Yojana (Tripura Smartphone Scheme)",
      category: 'Scholarship',
      sponsor: 'Government of Tripura',
      shortDesc: 'One-time financial grant of ₹5,000 to final year undergraduate degree students for internet/smartphone connectivity.',
      benefit: '₹5,000 direct bank transfer (DBT) per student',
      deadline: '31 December 2026',
      eligibility: [
        'Must be a permanent resident of Tripura (PRTC holder).',
        'Enrolled in the final year of degree courses in recognized govt/aided colleges in Tripura.',
        'Family annual income must not exceed state prescribed limit.'
      ],
      documentsRequired: [
        'Permanent Resident Certificate of Tripura (PRTC)',
        'College Identity Card & Final Year Enrolment Certificate',
        'Valid Aadhaar Card seeded with active bank account',
        'Bank Passbook photocopy showing IFSC & Account No'
      ],
      applicationUrl: 'https://highereducation.tripura.gov.in',
      featured: true,
      tag: 'State Flagship'
    },
    {
      id: 'SCH-TR-02',
      title: 'Mukhyamantri B.Ed. Anuprerana Yojana',
      category: 'Scholarship',
      sponsor: 'Government of Tripura',
      shortDesc: 'Financial grant of ₹50,000 for deserving meritorious youth enrolling in two-year regular B.Ed programs.',
      benefit: '₹50,000 grant towards tuition fees and academic materials',
      deadline: '15 January 2027',
      eligibility: [
        'Permanent resident of Tripura.',
        'Secured at least 55% aggregate marks in Bachelor or Master degree.',
        'Admitted to approved B.Ed colleges in Tripura.'
      ],
      documentsRequired: [
        'PRTC / Domicile Certificate',
        'Graduation & Post-Graduation Marksheets',
        'B.Ed College Admission Receipt and ID',
        'Income Certificate issued by DCM/SDM'
      ],
      applicationUrl: 'https://education.tripura.gov.in',
      featured: true,
      tag: 'Education Grant'
    },
    {
      id: 'SCH-TR-03',
      title: 'NEC Merit-Cum-Means Scholarship for North Eastern Youth',
      category: 'Scholarship',
      sponsor: 'NEC',
      shortDesc: 'Comprehensive higher education scholarship for NE students pursuing Professional/Technical degrees (Engineering, Medical, Agri).',
      benefit: '₹20,000 to ₹30,000 per annum + hostel allowance',
      deadline: '28 February 2027',
      eligibility: [
        'Permanent resident of Tripura or North East states.',
        'Studying in AICTE / UGC / NMC recognized institutions.',
        'Minimum 60% marks in 10+2 examinations.'
      ],
      documentsRequired: [
        'National Scholarship Portal (NSP) OTR Registration',
        'Income Certificate below ₹8 Lakh per annum',
        'Bonafide Student Certificate',
        'Aadhaar & Bank Account link proof'
      ],
      applicationUrl: 'https://scholarships.gov.in',
      featured: false,
      tag: 'Central Sponsored'
    },
    {
      id: 'SCH-TR-04',
      title: 'Tripura Youth Entrepreneurship Scheme (TYES) / PMEGP',
      category: 'MSME & Startup',
      sponsor: 'Government of Tripura',
      shortDesc: 'Subsidized collateral-free bank loans with up to 35% capital subsidy for setting up agro-processing, IT, tourism, or manufacturing units.',
      benefit: 'Loans up to ₹25 Lakhs with 25%-35% margin money subsidy',
      deadline: 'Rolling Applications Year-Round',
      eligibility: [
        'Youth aged 18 to 35 years resident of Tripura.',
        'Minimum educational qualification: 8th standard pass.',
        'Existing project proposal or DPR for new enterprise.'
      ],
      documentsRequired: [
        'Detailed Project Report (DPR) / Business Plan',
        'Educational & Skill Training (EDP) Certificate',
        'Land / Tenancy Agreement of unit',
        'PRTC, Aadhaar, PAN Card'
      ],
      applicationUrl: 'https://kviconline.gov.in/pmegpeportal',
      featured: true,
      tag: 'Self Employment'
    },
    {
      id: 'SCH-TR-05',
      title: 'Tripura Bamboo & Rubber Handicraft Value-Addition Grant',
      category: 'MSME & Startup',
      sponsor: 'Government of Tripura',
      shortDesc: 'Special innovation cluster grant for youth establishing eco-friendly bamboo furniture, agarwood distillation, or rubber processing.',
      benefit: 'Up to ₹5 Lakhs 100% equipment grant + free incubation at TIDC',
      deadline: '10 March 2027',
      eligibility: [
        'Registered youth self-help group (SHG) or individual youth artisan.',
        'Must complete Bamboo Mission or Rubber Board skill certification.'
      ],
      documentsRequired: [
        'Skill Certificate in Wood/Bamboo Craft',
        'MSME Udyam Registration Certificate',
        'Detailed list of machinery with quotations'
      ],
      applicationUrl: 'https://industries.tripura.gov.in',
      featured: false,
      tag: 'Handicraft & Agro'
    },
    {
      id: 'SCH-TR-06',
      title: 'Tripura Yuva Vikas Governance & Digital Media Internship',
      category: 'Internship',
      sponsor: 'Government of Tripura',
      shortDesc: '6-month paid internship with Department of Youth Affairs, District Administration, and Information & Cultural Affairs.',
      benefit: '₹12,000 monthly stipend + official Govt certification',
      deadline: '20 December 2026',
      eligibility: [
        'Graduate or final year student in IT, Media, Social Sciences, or Public Policy.',
        'Proficiency in Bengali, Kokborok, or English.',
        'Age below 28 years.'
      ],
      documentsRequired: [
        'Curriculum Vitae (CV) with statement of purpose',
        'College NOC / Degree Certificate',
        'Writing Sample or digital portfolio'
      ],
      applicationUrl: 'https://tripura.gov.in/internships',
      featured: true,
      tag: 'Paid Internship'
    },
    {
      id: 'SCH-TR-07',
      title: 'PM-YUVA 2.0 Young Authors & Researchers Mentorship',
      category: 'Skill Training',
      sponsor: 'Central Government (Govt of India)',
      shortDesc: 'National Book Trust (NBT) scheme for training 75 young authors under 30 years to promote Tripura history, folk tales, and culture.',
      benefit: 'Scholarship of ₹50,000 per month for 6 months + book publishing',
      deadline: '15 January 2027',
      eligibility: [
        'Indian citizen under 30 years as of contest launch.',
        'Submission of 10,000 word manuscript draft on Tripura Heritage.'
      ],
      documentsRequired: [
        'Age proof (Birth Certificate / 10th Admit Card)',
        'Original manuscript draft in English, Bengali, or Kokborok',
        'Declaration of original work'
      ],
      applicationUrl: 'https://www.nbtindia.gov.in',
      featured: false,
      tag: 'Culture & Research'
    }
  ];

  getSchemes(): OpportunityScheme[] {
    return this.schemes;
  }

  getSchemesByCategory(cat: string): OpportunityScheme[] {
    if (!cat || cat === 'All') return this.schemes;
    return this.schemes.filter(s => s.category.toLowerCase() === cat.toLowerCase());
  }

  getFeaturedSchemes(): OpportunityScheme[] {
    return this.schemes.filter(s => s.featured);
  }
}

