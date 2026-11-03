import { Injectable } from '@angular/core';
import { YuvaEvent } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private readonly events: YuvaEvent[] = [
    // Upcoming Events
    {
      id: 'ev-1',
      title: 'Statewide Youth Leadership Conclave 2026',
      category: 'Youth Conclave',
      date: 'November 15, 2026',
      time: '10:00 AM - 04:30 PM',
      venue: 'Rabindra Satabarshiki Bhavan, Agartala',
      district: 'West Tripura',
      mandal: 'Agartala (Town)',
      organizer: 'State Youth Executive Committee',
      contactPerson: 'Shri Rahul Bhattacharjee (Gen Sec)',
      contactPhone: '+91 381 232 4012',
      mapLocation: 'Rabindra Satabarshiki Bhavan, Agartala, Tripura 799001',
      description: 'The premier annual youth assembly of Tripura featuring policy panels on IT entrepreneurship, rural tourism, competitive examination strategies, and state development vision.',
      expectedAttendees: 3000,
      volunteersRegistered: 120,
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      isPast: false
    },
    {
      id: 'ev-2',
      title: 'Mega Voluntary Blood Donation Camp & Donor Felicitation',
      category: 'Blood Camp',
      date: 'November 20, 2026',
      time: '09:00 AM - 03:00 PM',
      venue: 'Matabari Community Hall, Udaipur',
      district: 'Gomati',
      mandal: 'Matabari',
      organizer: 'Rakta Sampark Gomati Wing',
      contactPerson: 'Shri Joydeep Paul (District Lead)',
      contactPhone: '+91 94361 00003',
      mapLocation: 'Near Tripura Sundari Temple, Udaipur, Gomati 799114',
      description: 'Targeting 250 units of voluntary blood donation in association with Gomati District Hospital blood bank. Free health checkup and donor donor certificates provided.',
      expectedAttendees: 400,
      volunteersRegistered: 45,
      imageUrl: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
      isPast: false
    },
    {
      id: 'ev-3',
      title: 'North East Youth Cup - Inter-District Football Championship',
      category: 'Sports Tournament',
      date: 'December 2 - 6, 2026',
      time: '02:00 PM Daily',
      venue: 'Dasharath Deb State Sports Complex, Badharghat',
      district: 'West Tripura',
      mandal: 'Badharghat',
      organizer: 'BJYM Sports Cell',
      contactPerson: 'Shri Tanmoy Das (Sports Convener)',
      contactPhone: '+91 98621 11005',
      mapLocation: 'Badharghat, Agartala, Tripura 799003',
      description: 'Annual 16-team knockout football festival featuring top young talent from all 8 districts of Tripura with scout selectors from national leagues.',
      expectedAttendees: 8000,
      volunteersRegistered: 85,
      imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      isPast: false
    },
    {
      id: 'ev-4',
      title: 'Digital Yuva: Hands-on AI & Web Development Bootcamp',
      category: 'Skill Workshop',
      date: 'December 12, 2026',
      time: '11:00 AM - 05:00 PM',
      venue: 'District ITI Campus, Dharmanagar',
      district: 'North Tripura',
      mandal: 'Dharmanagar',
      organizer: 'Digital Saksham Cell',
      contactPerson: 'Shri Amit Nath',
      contactPhone: '+91 94361 00008',
      mapLocation: 'ITI Dharmanagar, North Tripura 799250',
      description: 'Free coding workshop covering modern web technologies, prompt engineering, and digital marketing for college students and local entrepreneurs.',
      expectedAttendees: 250,
      volunteersRegistered: 30,
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      isPast: false
    },

    // Past Events Archive
    {
      id: 'ev-p1',
      title: 'Statewide Gomati River Cleanliness & Tree Plantation Drive',
      category: 'Cleanliness Drive',
      date: 'September 17, 2026',
      time: '07:00 AM - 12:00 PM',
      venue: 'Gomati River Ghats, Udaipur',
      district: 'Gomati',
      mandal: 'Radhakishorepur (Udaipur)',
      organizer: 'Harit Tripura Brigade',
      contactPerson: 'Shri B. Pal',
      contactPhone: '+91 98621 11003',
      mapLocation: 'Udaipur, Gomati District',
      description: 'Mega riverbank restoration where volunteers cleared over 4 tons of non-biodegradable waste and planted 1,200 medicinal trees.',
      expectedAttendees: 1500,
      volunteersRegistered: 320,
      imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
      isPast: true,
      turnoutStats: '1,480 Volunteers participated • 4.2 Tonnes waste removed • 1,200 saplings planted',
      pastSummary: 'Massive civic participation across 5 mandals along the Gomati river. Local schools, sports associations, and fishing cooperatives joined hands with youth brigades.'
    },
    {
      id: 'ev-p2',
      title: 'Tripura Medha Scholarship & Career Guidance Expo',
      category: 'Youth Conclave',
      date: 'August 12, 2026',
      time: '10:00 AM - 05:00 PM',
      venue: 'Town Hall, Kailashahar',
      district: 'Unakoti',
      mandal: 'Kailashahar',
      organizer: 'Education Helpdesk Wing',
      contactPerson: 'Shri Rakesh Sinha',
      contactPhone: '+91 94361 00007',
      mapLocation: 'Kailashahar Town Hall, Unakoti',
      description: 'Comprehensive educational fair connecting over 2,000 higher-secondary students with bank education loans, MMYYY applications, and civil services mentoring.',
      expectedAttendees: 2000,
      volunteersRegistered: 70,
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      isPast: true,
      turnoutStats: '2,150 Students attended • 840 Scholarship applications processed on the spot',
      pastSummary: 'Distinguished educators and civil servants delivered masterclasses. 10 educational institutions offered spot scholarships to meritorious tribal candidates.'
    }
  ];

  getUpcomingEvents(): YuvaEvent[] {
    return this.events.filter(e => !e.isPast);
  }

  getPastEvents(): YuvaEvent[] {
    return this.events.filter(e => e.isPast);
  }

  getAllEvents(): YuvaEvent[] {
    return this.events;
  }
}
