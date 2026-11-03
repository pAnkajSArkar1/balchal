import { Injectable } from '@angular/core';
import { NewsPost } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly articles: NewsPost[] = [
    {
      id: 'news-1',
      title: 'BJYM Tripura Launches Statewide "Nasha Mukt Tripura" Youth Vigilance Abhiyan',
      category: 'Organizational Updates',
      date: 'November 2, 2026',
      author: 'State Media Cell',
      organization: 'BJYM Tripura State HQ, Agartala',
      featuredImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
      summary: 'Statewide anti-drug campaign flagged off from Agartala, mobilizing 5,000+ youth across 60 assembly constituencies to build drug-free neighborhoods.',
      content: `The Bharatiya Janata Yuva Morcha (BJYM) Tripura unit today launched its extensive statewide "Nasha Mukt Tripura" youth vigilance initiative from the state headquarters in Agartala. 

The campaign will deploy student awareness squads in border subdivisions, distribute awareness pamphlets in regional languages (Bengali and Kokborok), and establish direct communication channels between youth clubs and local law enforcement authorities.

Addressing the gathering, the State President reiterated that the energy of Tripura's youth must be channeled towards nation-building, athletic excellence, and technical innovation rather than succumbing to narcotics trafficking. Special de-addiction counseling helpdesks are being set up in all 8 district offices with professional medical volunteers.`,
      tags: ['NashaMuktTripura', 'YouthAwakening', 'Agartala', 'StatewideDrive'],
      isAnnouncement: true
    },
    {
      id: 'news-2',
      title: 'Over 1,200 Youth Compete in 4th Annual Gomati River Basin Football Tournament',
      category: 'Event Updates',
      date: 'October 28, 2026',
      author: 'Sports & Culture Incharge',
      organization: 'BJYM Gomati District Unit',
      featuredImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
      summary: '64 teams from all subdivisions of Gomati and South Tripura participated in a 5-day football championship celebrating unity and fitness.',
      content: `The 4th edition of the annual Gomati Youth Football Tournament concluded with tremendous enthusiasm at Udaipur Stadium. Over 1,200 players representing schools, colleges, and rural sports clubs participated.

The initiative aims to scout promising football talent from remote tribal hamlets and provide them with advanced training facilities and sports scholarships under state athletic development programs. The champions were awarded sports gear and scholarships.`,
      tags: ['KhelTripura', 'Football', 'Gomati', 'SportsExcellence']
    },
    {
      id: 'news-3',
      title: 'Tripura Government Expands Mukhyamantri Yuva Yogayog Yojana with Higher Digital Allowance',
      category: 'Youth-related Updates',
      date: 'October 24, 2026',
      author: 'Policy Research Wing',
      organization: 'Education & Schemes Helpdesk',
      featuredImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      summary: 'Final year undergraduate students across all state colleges eligible for direct financial grant for smartphones and digital learning resources.',
      content: `In a landmark decision to bolster digital connectivity, the Government of Tripura has expanded the Mukhyamantri Yuva Yogayog Yojana (MMYYY). Final-year degree students can apply online through the official education portal.

BJYM Tripura has activated helpdesks across all 60 Mandals to assist rural and first-generation college students with registration, bank account seeding, and document verification to ensure zero delays in grant disbursal.`,
      tags: ['Scholarships', 'DigitalTripura', 'MMYYY', 'HigherEducation'],
      isAnnouncement: true
    },
    {
      id: 'news-4',
      title: 'Press Statement: BJYM Submits Memorandum for Accelerated IT Park & Startup Incubator in Bodhjungnagar',
      category: 'Press Releases',
      date: 'October 19, 2026',
      author: 'Shri Tanmoy Das, Media Incharge',
      organization: 'State Executive Committee',
      featuredImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      summary: 'Delegation meets Department of Industries to request fast-tracked incubation grants for youth-led green energy and agro-tech startups.',
      content: `A delegation of BJYM Tripura office bearers today met the Secretary of Industries and Commerce, submitting a detailed roadmap for expanding the Bodhjungnagar Industrial Growth Centre with specialized software and food processing incubation labs.

The memorandum highlighted that Tripura has over 4,000 engineering and computer science graduates who seek high-growth technological ventures locally without having to migrate to distant metropolitan hubs.`,
      tags: ['PressRelease', 'StartupTripura', 'Employment', 'Bodhjungnagar']
    },
    {
      id: 'news-5',
      title: 'Dhalai District Unit Conducts Free Medical and Blood Typing Camp in Ambassa Sub-division',
      category: 'District Updates',
      date: 'October 15, 2026',
      author: 'District Media Cell',
      organization: 'BJYM Dhalai District Unit',
      featuredImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      summary: '650+ villagers screened, 140 new youth voluntary donors enrolled in the Rakta Sampark Emergency Registry.',
      content: `The Dhalai district unit organized a multi-specialty health screening and blood group registration drive at Ambassa Town Hall. Volunteer doctors from Agartala Government Medical College (AGMC) examined patients, provided free pediatric medicines, and distributed iron supplements.

Over 140 rural youth voluntarily enrolled in the Rakta Sampark Emergency Network, guaranteeing rapid blood donation availability for District Hospital Ambassa.`,
      tags: ['Dhalai', 'Ambassa', 'BloodDonation', 'Healthcare']
    },
    {
      id: 'news-6',
      title: 'Important Notification: Verification Schedule for State Youth Fellowship 2026-27',
      category: 'Important Announcements',
      date: 'October 10, 2026',
      author: 'State Secretariat',
      organization: 'BJYM Youth Fellowship Cell',
      featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      summary: 'Shortlisted candidates for the 1-year Public Policy & Rural Development Fellowship called for personal interaction in Agartala.',
      content: `All applicants for the BJYM Tripura Youth Policy Fellowship 2026-27 are hereby notified that the interview rounds will be conducted from November 10 to 14 at the State Headquarters, Krishnanagar, Agartala.

Selected fellows will receive a monthly stipend, hands-on mentorship under state policymakers, and project assignments in grassroots rural development across 8 districts.`,
      tags: ['Fellowship', 'Announcement', 'Careers', 'PublicPolicy'],
      isAnnouncement: true
    }
  ];

  getAll(): NewsPost[] {
    return this.articles;
  }

  getByCategory(cat: string): NewsPost[] {
    if (!cat || cat === 'All') return this.articles;
    return this.articles.filter(a => a.category === cat);
  }

  getAnnouncements(): NewsPost[] {
    return this.articles.filter(a => a.isAnnouncement);
  }

  getById(id: string): NewsPost | undefined {
    return this.articles.find(a => a.id === id);
  }
}
