import { Injectable } from '@angular/core';
import { Leader } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class LeadershipService {
  private readonly leaders: Leader[] = [
    // --- STATE LEVEL ---
    {
      id: 'state-1',
      name: 'Shri Bipin Debbarma',
      designation: 'State President, BJYM Tripura',
      level: 'State',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Leading statewide youth mobilization, digital literacy, and skill empowerment drives across all 8 districts of Tripura.',
      publicEmail: 'president.bjymtripura@gmail.com',
      publicPhone: '+91 381 232 4011',
      socialTwitter: 'https://twitter.com',
      socialFacebook: 'https://facebook.com'
    },
    {
      id: 'state-2',
      name: 'Shri Rahul Bhattacharjee',
      designation: 'State General Secretary (Org)',
      level: 'State',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Coordinating Mandal level expansions, blood donation drives, and youth fellowship programs throughout Tripura.',
      publicEmail: 'gensec.bjymtripura@gmail.com',
      publicPhone: '+91 381 232 4012',
      socialTwitter: 'https://twitter.com',
      socialFacebook: 'https://facebook.com'
    },
    {
      id: 'state-3',
      name: 'Smt. Ananya Chakraborty',
      designation: 'State Vice President',
      level: 'State',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Spearheading women youth empowerment, college campus initiatives, and competitive examination coaching centers.',
      publicEmail: 'vp.ananya@bjymtripura.org',
      publicPhone: '+91 381 232 4013',
      socialTwitter: 'https://twitter.com'
    },
    {
      id: 'state-4',
      name: 'Shri Subrata Jamatia',
      designation: 'State Vice President (Tribal Affairs)',
      level: 'State',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Directing tribal youth development, indigenous sports promotion, and rural vocational training across TTAADC mandals.',
      publicEmail: 'vp.tribal@bjymtripura.org',
      publicPhone: '+91 381 232 4014'
    },
    {
      id: 'state-5',
      name: 'Shri Tanmoy Das',
      designation: 'State Media & Social Media Incharge',
      level: 'State',
      photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Managing communications, state press briefings, digital campaign outreach, and fact-checking helpline.',
      publicEmail: 'media@bjymtripura.org',
      publicPhone: '+91 381 232 4015'
    },

    // --- DISTRICT LEVEL ---
    {
      id: 'dist-1',
      name: 'Shri Prasenjit Roy',
      designation: 'District President - West Tripura',
      level: 'District',
      district: 'West Tripura',
      photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Overseeing youth units across Agartala Municipal Corporation and surrounding rural blocks.',
      publicEmail: 'west.tripura@bjymtripura.org',
      publicPhone: '+91 94361 00001'
    },
    {
      id: 'dist-2',
      name: 'Shri Suman Debnath',
      designation: 'District President - Sepahijala',
      level: 'District',
      district: 'Sepahijala',
      photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Coordinating rural employment schemes and anti-drug youth vigilance across Bishalgarh & Sonamura.',
      publicEmail: 'sepahijala@bjymtripura.org',
      publicPhone: '+91 94361 00002'
    },
    {
      id: 'dist-3',
      name: 'Shri Joydeep Paul',
      designation: 'District President - Gomati',
      level: 'District',
      district: 'Gomati',
      photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Leading Gomati river cleanups, youth sports festivals, and Matabari tourism volunteer brigades.',
      publicEmail: 'gomati@bjymtripura.org',
      publicPhone: '+91 94361 00003'
    },
    {
      id: 'dist-4',
      name: 'Shri Gourab Majumder',
      designation: 'District President - South Tripura',
      level: 'District',
      district: 'South Tripura',
      photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Managing border youth empowerment and career guidance fairs in Belonia, Santirbazar, and Sabroom.',
      publicEmail: 'south.tripura@bjymtripura.org',
      publicPhone: '+91 94361 00004'
    },
    {
      id: 'dist-5',
      name: 'Shri Niloy Deb',
      designation: 'District President - Khowai',
      level: 'District',
      district: 'Khowai',
      photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Championing organic farming cooperatives and tea garden youth skill development initiatives.',
      publicEmail: 'khowai@bjymtripura.org',
      publicPhone: '+91 94361 00005'
    },
    {
      id: 'dist-6',
      name: 'Shri Biswajit Reang',
      designation: 'District President - Dhalai',
      level: 'District',
      district: 'Dhalai',
      photoUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Active in Ambassa and Gandacherra, driving educational aid and remote medical camps.',
      publicEmail: 'dhalai@bjymtripura.org',
      publicPhone: '+91 94361 00006'
    },
    {
      id: 'dist-7',
      name: 'Shri Rakesh Sinha',
      designation: 'District President - Unakoti',
      level: 'District',
      district: 'Unakoti',
      photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Managing Kailashahar and Kumarghat youth councils and heritage tourism volunteers.',
      publicEmail: 'unakoti@bjymtripura.org',
      publicPhone: '+91 94361 00007'
    },
    {
      id: 'dist-8',
      name: 'Shri Amit Nath',
      designation: 'District President - North Tripura',
      level: 'District',
      district: 'North Tripura',
      photoUrl: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Leading cross-border trade youth forums, blood drives, and IT training centers in Dharmanagar.',
      publicEmail: 'north.tripura@bjymtripura.org',
      publicPhone: '+91 94361 00008'
    },

    // --- MANDAL LEVEL SAMPLE ---
    {
      id: 'mandal-1',
      name: 'Shri R. Debbarma',
      designation: 'Mandal President - Agartala Town',
      level: 'Mandal',
      district: 'West Tripura',
      mandal: 'Agartala (Town)',
      photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Coordinating 48 booths in the capital city, organizing student help desks and blood donation camps.',
      publicEmail: 'mandal.agartala@bjymtripura.org',
      publicPhone: '+91 98621 11001'
    },
    {
      id: 'mandal-2',
      name: 'Smt. S. Saha',
      designation: 'Mandal President - Banamalipur',
      level: 'Mandal',
      district: 'West Tripura',
      mandal: 'Banamalipur',
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Focusing on youth entrepreneurship and women self-help group digital training across 42 booths.',
      publicEmail: 'mandal.banamalipur@bjymtripura.org',
      publicPhone: '+91 98621 11002'
    },
    {
      id: 'mandal-3',
      name: 'Shri B. Pal',
      designation: 'Mandal President - Radhakishorepur',
      level: 'Mandal',
      district: 'Gomati',
      mandal: 'Radhakishorepur (Udaipur)',
      photoUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
      shortProfile: 'Managing 45 booths in Udaipur city, temple cleanup drives, and competitive exam library.',
      publicEmail: 'mandal.rkpur@bjymtripura.org',
      publicPhone: '+91 98621 11003'
    }
  ];

  getHierarchySummary() {
    return [
      {
        level: 'State Committee',
        scope: 'Entire Tripura State (8 Districts)',
        units: '1 Apex State Team',
        members: '45+ Executive Members',
        desc: 'Sets statewide policy, coordinates with Central Leadership and State Government, oversees flagship youth schemes.'
      },
      {
        level: 'District Committees',
        scope: '8 Administrative Districts',
        units: '8 District Units',
        members: '240+ Office Bearers',
        desc: 'Executes district-level campaigns, monitors Mandal initiatives, and manages District Youth Red Cross/Blood camps.'
      },
      {
        level: 'Mandal Committees',
        scope: '60 Assembly Mandals',
        units: '60 Mandal Units',
        members: '1,800+ Active Leaders',
        desc: 'Direct ground-level youth connect, grassroots grievance redressing, voter registration, and sports tournaments.'
      },
      {
        level: 'Booth Youth Brigades',
        scope: '3,328 Electoral Booths',
        units: '3,328 Booth Teams',
        members: '33,000+ Ground Volunteers',
        desc: 'Neighbourhood-level volunteers who engage directly with young citizens, students, and first-time voters.'
      }
    ];
  }

  getAllLeaders(): Leader[] {
    return this.leaders;
  }

  getLeadersByLevel(level: 'State' | 'District' | 'Mandal' | 'Booth'): Leader[] {
    return this.leaders.filter(l => l.level === level);
  }
}

