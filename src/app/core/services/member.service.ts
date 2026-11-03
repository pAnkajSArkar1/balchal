import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MemberKYC } from '../models/tripura-data.model';

export interface ImpactStats {
  totalMembers: number;
  activeVolunteers: number;
  districtsCovered: number;
  mandalsCovered: number;
  eventsConducted: number;
  bloodUnitsDonated: number;
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private statsSubject = new BehaviorSubject<ImpactStats>({
    totalMembers: 85420,
    activeVolunteers: 18250,
    districtsCovered: 8,
    mandalsCovered: 60,
    eventsConducted: 450,
    bloodUnitsDonated: 4850
  });

  private registeredMembers: MemberKYC[] = [
    {
      id: 'MEM-001',
      applicationId: 'TR-YMT-2026-1042',
      fullName: 'Prasenjit Bhowmik',
      dob: '2001-04-12',
      gender: 'Male',
      mobile: '9862111200',
      email: 'prasenjit.b@tripura.org',
      bloodGroup: 'O+',
      district: 'West Tripura',
      mandal: 'Agartala (Town)',
      boothNumber: 'Ward 14 / Booth 28',
      pinCode: '799001',
      address: 'Near Jagannath Temple, Agartala',
      qualification: 'B.Tech Computer Science (NIT Agartala)',
      profession: 'Private Sector Employee',
      occupation: 'IT Professional & Startup Enthusiast',
      skills: ['Social Media & IT', 'Disaster Relief & First Aid', 'Event Coordination'],
      wingInterest: 'Digital & Media Wing',
      joinedDate: '2026-02-10',
      status: 'Verified'
    },
    {
      id: 'MEM-002',
      applicationId: 'TR-YMT-2026-1188',
      fullName: 'Mami Debbarma',
      dob: '2002-09-24',
      gender: 'Female',
      mobile: '9436499120',
      email: 'mami.deb@tripura.org',
      bloodGroup: 'B+',
      district: 'Gomati',
      mandal: 'Radhakishorepur (Udaipur)',
      boothNumber: 'Booth 12',
      pinCode: '799120',
      address: 'College Road, Udaipur',
      qualification: 'M.Sc Botany (Tripura University)',
      profession: 'Student',
      occupation: 'Research Scholar',
      skills: ['Sports & Culture', 'Community Welfare', 'Environmental Drives'],
      wingInterest: 'Yuva Mahila & Environmental Wing',
      joinedDate: '2026-03-01',
      status: 'Verified'
    }
  ];

  private latestMemberSubject = new BehaviorSubject<MemberKYC | null>(this.registeredMembers[0]);

  getImpactStats(): Observable<ImpactStats> {
    return this.statsSubject.asObservable();
  }

  getLatestRegisteredMember(): Observable<MemberKYC | null> {
    return this.latestMemberSubject.asObservable();
  }

  registerMember(data: MemberKYC): MemberKYC {
    const randomSeq = Math.floor(1000 + Math.random() * 9000);
    const newMember: MemberKYC = {
      ...data,
      id: `MEM-${Date.now().toString().slice(-4)}`,
      applicationId: `TR-YMT-2026-${randomSeq}`,
      joinedDate: new Date().toISOString().split('T')[0],
      status: 'Verified'
    };

    this.registeredMembers.unshift(newMember);
    this.latestMemberSubject.next(newMember);

    // Update impact stats
    const curStats = this.statsSubject.value;
    const hasSkills = !!(newMember.skills && newMember.skills.length > 0);
    this.statsSubject.next({
      ...curStats,
      totalMembers: curStats.totalMembers + 1,
      activeVolunteers: curStats.activeVolunteers + (hasSkills ? 1 : 0)
    });

    return newMember;
  }

  getMembers(): MemberKYC[] {
    return this.registeredMembers;
  }
}
