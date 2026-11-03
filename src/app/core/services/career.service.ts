import { Injectable } from '@angular/core';
import { CareerOpening } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  private readonly openings: CareerOpening[] = [
    {
      id: 'car-1',
      title: 'State Social Media & Digital Communications Fellow',
      type: 'Fellowship',
      duration: '6 Months (Full-Time / Hybrid)',
      location: 'State HQ, Agartala',
      stipend: '₹18,000 / month + Travel Allowance',
      description: 'Lead digital storytelling, infographics design, video snippet creation, and campaign analytics for youth development initiatives across Tripura.',
      requirements: [
        'Graduate in Mass Communication, Graphic Design, Computer Applications, or related fields.',
        'Fluency in Bengali, English, and conversational Kokborok is advantageous.',
        'Proficiency in Canva, Premiere Pro/DaVinci, and social platform algorithms.'
      ]
    },
    {
      id: 'car-2',
      title: 'Mandal Youth Development Coordinator',
      type: 'Volunteering',
      duration: 'Ongoing / Flexible',
      location: 'Across all 60 Mandals of Tripura',
      stipend: 'Honorarium & Official Experience Certification',
      description: 'Serve as the key community bridge between local youth clubs, colleges, and the state leadership. Coordinate blood donation camps, sports meets, and scholarship helpdesks.',
      requirements: [
        'Age 18-32, permanent resident of the respective assembly constituency.',
        'Strong community networking, leadership temperament, and enthusiasm for social service.',
        'Registered member of Yuva Morcha Tripura.'
      ]
    },
    {
      id: 'car-3',
      title: 'Public Policy & Grassroots Governance Intern',
      type: 'Internship',
      duration: '3 Months (Quarterly Batches)',
      location: 'Agartala with District Field Visits',
      stipend: '₹12,000 / month',
      description: 'Conduct primary surveys, field research on government welfare delivery (MMYYY, PM-Awas, Jal Jeevan), and draft policy whitepapers for the youth wing.',
      requirements: [
        'Undergraduate or Postgraduate students in Political Science, Economics, Law, or Social Work.',
        'Strong report writing, data analysis, and field interviewing capabilities.'
      ]
    },
    {
      id: 'car-4',
      title: 'Emergency Medical & Blood Network Volunteer Coordinator',
      type: 'Volunteering',
      duration: 'Flexible / Emergency Standby',
      location: 'Hospital Zones (Agartala, Udaipur, Dharmanagar, Belonia)',
      stipend: 'Volunteer Commendation & Blood Warriors Pin',
      description: 'Handle incoming urgent blood requests, verify hospital bed requirements, match with available donors from the Rakta Sampark database, and arrange swift logistics.',
      requirements: [
        'Active youth volunteer with empathetic communication and quick decision-making under critical urgency.'
      ]
    }
  ];

  getOpenings(): CareerOpening[] {
    return this.openings;
  }
}

