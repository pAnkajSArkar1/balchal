import { Injectable } from '@angular/core';
import { DistrictTeamMember } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictDirectoryService {
  private readonly teamMembers: DistrictTeamMember[] = [
    // West Tripura - Agartala
    {
      id: 'tm-1',
      name: 'Shri Prasenjit Roy',
      designation: 'District President',
      districtId: 'west-tripura',
      districtName: 'West Tripura',
      mandalId: 'agartala',
      mandalName: 'Agartala (Town)',
      officeContact: '0381-2324011 (Ext. 101)',
      officialEmail: 'pres.westtripura@bjymtripura.org',
      responsibilities: 'Overall district youth administration, municipal zone coordination, and youth helpline operations.'
    },
    {
      id: 'tm-2',
      name: 'Shri R. Debbarma',
      designation: 'Mandal President',
      districtId: 'west-tripura',
      districtName: 'West Tripura',
      mandalId: 'agartala',
      mandalName: 'Agartala (Town)',
      officeContact: '0381-2324011 (Ext. 102)',
      officialEmail: 'mandal.agartala@bjymtripura.org',
      responsibilities: 'Ward youth clubs, blood donation mobilization, and college youth chapters in Town area.'
    },
    {
      id: 'tm-3',
      name: 'Smt. S. Saha',
      designation: 'Mandal President',
      districtId: 'west-tripura',
      districtName: 'West Tripura',
      mandalId: 'banamalipur',
      mandalName: 'Banamalipur',
      officeContact: '0381-2324011 (Ext. 104)',
      officialEmail: 'mandal.banamalipur@bjymtripura.org',
      responsibilities: 'Women youth self-help groups, competitive exam centers, and youth sports events.'
    },
    {
      id: 'tm-4',
      name: 'Shri P. Chakraborty',
      designation: 'Mandal President',
      districtId: 'west-tripura',
      districtName: 'West Tripura',
      mandalId: 'badharghat',
      mandalName: 'Badharghat',
      officeContact: '0381-2324011 (Ext. 105)',
      officialEmail: 'mandal.badharghat@bjymtripura.org',
      responsibilities: 'Vocational skill training camps and blood donation drives.'
    },

    // Sepahijala
    {
      id: 'tm-5',
      name: 'Shri Suman Debnath',
      designation: 'District President',
      districtId: 'sepahijala',
      districtName: 'Sepahijala',
      mandalId: 'bishalgarh',
      mandalName: 'Bishalgarh',
      officeContact: '0381-2867022',
      officialEmail: 'pres.sepahijala@bjymtripura.org',
      responsibilities: 'District youth development, agriculture tech training, and anti-narcotics vigilance squads.'
    },
    {
      id: 'tm-6',
      name: 'Shri K. Jamatia',
      designation: 'Mandal President',
      districtId: 'sepahijala',
      districtName: 'Sepahijala',
      mandalId: 'bishalgarh',
      mandalName: 'Bishalgarh',
      officeContact: '0381-2867023',
      officialEmail: 'mandal.bishalgarh@bjymtripura.org',
      responsibilities: 'Grassroots volunteer management across 46 booths in Bishalgarh.'
    },
    {
      id: 'tm-7',
      name: 'Shri R. Barman',
      designation: 'Mandal President',
      districtId: 'sepahijala',
      districtName: 'Sepahijala',
      mandalId: 'sonamura',
      mandalName: 'Sonamura',
      officeContact: '0381-2867024',
      officialEmail: 'mandal.sonamura@bjymtripura.org',
      responsibilities: 'Border trade awareness, youth employment guidance, and river safety.'
    },

    // Gomati
    {
      id: 'tm-8',
      name: 'Shri Joydeep Paul',
      designation: 'District President',
      districtId: 'gomati',
      districtName: 'Gomati',
      mandalId: 'udaipur-radhakishorepur',
      mandalName: 'Radhakishorepur (Udaipur)',
      officeContact: '03821-223451',
      officialEmail: 'pres.gomati@bjymtripura.org',
      responsibilities: 'Temple tourism youth assistance, Gomati river protection, and youth athletics meets.'
    },
    {
      id: 'tm-9',
      name: 'Shri B. Pal',
      designation: 'Mandal President',
      districtId: 'gomati',
      districtName: 'Gomati',
      mandalId: 'udaipur-radhakishorepur',
      mandalName: 'Radhakishorepur (Udaipur)',
      officeContact: '03821-223452',
      officialEmail: 'mandal.rkpur@bjymtripura.org',
      responsibilities: 'Student mentorship libraries, Matabari visitor assistance, and blood donation drives.'
    },
    {
      id: 'tm-10',
      name: 'Shri K. Roy',
      designation: 'Mandal President',
      districtId: 'gomati',
      districtName: 'Gomati',
      mandalId: 'matabari',
      mandalName: 'Matabari',
      officeContact: '03821-223453',
      officialEmail: 'mandal.matabari@bjymtripura.org',
      responsibilities: 'Heritage volunteers, lake preservation, and youth sports tournaments.'
    },

    // South Tripura
    {
      id: 'tm-11',
      name: 'Shri Gourab Majumder',
      designation: 'District President',
      districtId: 'south-tripura',
      districtName: 'South Tripura',
      mandalId: 'belonia',
      mandalName: 'Belonia',
      officeContact: '03823-222301',
      officialEmail: 'pres.southtripura@bjymtripura.org',
      responsibilities: 'Coordinating student welfare, Indo-Bangla connectivity youth forums, and sports leagues.'
    },
    {
      id: 'tm-12',
      name: 'Shri G. Majumder',
      designation: 'Mandal President',
      districtId: 'south-tripura',
      districtName: 'South Tripura',
      mandalId: 'belonia',
      mandalName: 'Belonia',
      officeContact: '03823-222302',
      officialEmail: 'mandal.belonia@bjymtripura.org',
      responsibilities: 'College youth chapters, disaster response teams, and voter enrollment.'
    },

    // Khowai
    {
      id: 'tm-13',
      name: 'Shri Niloy Deb',
      designation: 'District President',
      districtId: 'khowai',
      districtName: 'Khowai',
      mandalId: 'khowai',
      mandalName: 'Khowai',
      officeContact: '03825-222110',
      officialEmail: 'pres.khowai@bjymtripura.org',
      responsibilities: 'Tea worker youth welfare, digital connectivity camps, and environmental protection.'
    },

    // Dhalai
    {
      id: 'tm-14',
      name: 'Shri Biswajit Reang',
      designation: 'District President',
      districtId: 'dhalai',
      districtName: 'Dhalai',
      mandalId: 'ambassa',
      mandalName: 'Ambassa',
      officeContact: '03826-267200',
      officialEmail: 'pres.dhalai@bjymtripura.org',
      responsibilities: 'Tribal youth education assistance, medical camps, and hill-block outreach.'
    },

    // Unakoti
    {
      id: 'tm-15',
      name: 'Shri Rakesh Sinha',
      designation: 'District President',
      districtId: 'unakoti',
      districtName: 'Unakoti',
      mandalId: 'kailashahar',
      mandalName: 'Kailashahar',
      officeContact: '03824-222550',
      officialEmail: 'pres.unakoti@bjymtripura.org',
      responsibilities: 'Unakoti heritage volunteers, border security youth vigilance, and sports academies.'
    },

    // North Tripura
    {
      id: 'tm-16',
      name: 'Shri Amit Nath',
      designation: 'District President',
      districtId: 'north-tripura',
      districtName: 'North Tripura',
      mandalId: 'dharmanagar',
      mandalName: 'Dharmanagar',
      officeContact: '03822-234880',
      officialEmail: 'pres.northtripura@bjymtripura.org',
      responsibilities: 'Railway youth helpline, flood mitigation volunteer brigades, and IT skilling.'
    }
  ];

  getTeamByDistrictAndMandal(districtId?: string, mandalId?: string): DistrictTeamMember[] {
    return this.teamMembers.filter(m => {
      const matchDist = !districtId || districtId === 'all' || m.districtId === districtId;
      const matchMandal = !mandalId || mandalId === 'all' || m.mandalId === mandalId;
      return matchDist && matchMandal;
    });
  }

  getAll(): DistrictTeamMember[] {
    return this.teamMembers;
  }
}
