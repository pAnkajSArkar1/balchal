import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BloodDonor, BloodRequest, BloodDrive } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class BloodDonationService {
  private bloodRequestsSubject = new BehaviorSubject<BloodRequest[]>([
    {
      id: 'REQ-TR-091',
      patientName: 'Subir Debnath',
      bloodGroup: 'O-',
      unitsNeeded: 2,
      hospitalName: 'AGMC & GBP Hospital, Agartala',
      district: 'West Tripura',
      mandal: 'Agartala (Town)',
      contactPerson: 'Bikram Debnath (Brother)',
      contactPhone: '+91 98621 44521',
      urgency: 'Critical (Immediate)',
      notes: 'Emergency surgery scheduled in ICU. Donors needed urgently.',
      requestedAt: new Date(Date.now() - 1000 * 60 * 45),
      status: 'Open'
    },
    {
      id: 'REQ-TR-092',
      patientName: 'Purnima Reang',
      bloodGroup: 'B+',
      unitsNeeded: 3,
      hospitalName: 'TMC & Dr. BRAM Teaching Hospital, Hapania',
      district: 'West Tripura',
      mandal: 'Badharghat',
      contactPerson: 'Joydeb Reang (Father)',
      contactPhone: '+91 94361 88204',
      urgency: 'Within 6 Hours',
      notes: 'Platelet and whole blood requirement for dengue patient.',
      requestedAt: new Date(Date.now() - 1000 * 60 * 120),
      status: 'In Progress'
    },
    {
      id: 'REQ-TR-093',
      patientName: 'Gouranga Saha',
      bloodGroup: 'AB-',
      unitsNeeded: 1,
      hospitalName: 'Gomati District Hospital, Tepania, Udaipur',
      district: 'Gomati',
      mandal: 'Radhakishorepur (Udaipur)',
      contactPerson: 'Sujit Saha',
      contactPhone: '+91 98560 33129',
      urgency: 'Within 24 Hours',
      notes: 'Thalassemia patient regular transfusion requirement.',
      requestedAt: new Date(Date.now() - 1000 * 60 * 360),
      status: 'Open'
    },
    {
      id: 'REQ-TR-094',
      patientName: 'Ranjit Tripura',
      bloodGroup: 'A+',
      unitsNeeded: 2,
      hospitalName: 'Khowai Sub-Divisional Hospital',
      district: 'Khowai',
      mandal: 'Khowai',
      contactPerson: 'Kamal Tripura',
      contactPhone: '+91 97740 12893',
      urgency: 'Critical (Immediate)',
      notes: 'Accident trauma case. Rare positive units needed.',
      requestedAt: new Date(Date.now() - 1000 * 60 * 30),
      status: 'Open'
    }
  ]);

  private donorsSubject = new BehaviorSubject<BloodDonor[]>([
    {
      id: 'DON-01',
      name: 'Rupam Chakraborty',
      bloodGroup: 'O-',
      district: 'West Tripura',
      mandal: 'Banamalipur',
      phone: '+91 94361 29401',
      lastDonationDate: '2026-08-14',
      isAvailable: true,
      totalDonations: 8
    },
    {
      id: 'DON-02',
      name: 'Priyanka Jamatia',
      bloodGroup: 'O+',
      district: 'Sepahijala',
      mandal: 'Bishalgarh',
      phone: '+91 98622 19832',
      lastDonationDate: '2026-07-20',
      isAvailable: true,
      totalDonations: 5
    },
    {
      id: 'DON-03',
      name: 'Abhijit Roy',
      bloodGroup: 'A+',
      district: 'West Tripura',
      mandal: 'Agartala (Town)',
      phone: '+91 97745 88210',
      lastDonationDate: '2026-06-11',
      isAvailable: true,
      totalDonations: 12
    },
    {
      id: 'DON-04',
      name: 'Mousumi Debbarma',
      bloodGroup: 'B+',
      district: 'Gomati',
      mandal: 'Radhakishorepur (Udaipur)',
      phone: '+91 98561 74920',
      lastDonationDate: '2026-09-02',
      isAvailable: true,
      totalDonations: 4
    },
    {
      id: 'DON-05',
      name: 'Dipankar Nath',
      bloodGroup: 'AB+',
      district: 'North Tripura',
      mandal: 'Dharmanagar',
      phone: '+91 94364 12093',
      lastDonationDate: '2026-05-18',
      isAvailable: true,
      totalDonations: 7
    },
    {
      id: 'DON-06',
      name: 'Subrata Das',
      bloodGroup: 'AB-',
      district: 'South Tripura',
      mandal: 'Belonia',
      phone: '+91 98630 45892',
      lastDonationDate: '2026-04-10',
      isAvailable: true,
      totalDonations: 6
    },
    {
      id: 'DON-07',
      name: 'Tanmoy Paul',
      bloodGroup: 'B-',
      district: 'Unakoti',
      mandal: 'Kailashahar',
      phone: '+91 97743 66102',
      lastDonationDate: '2026-08-30',
      isAvailable: true,
      totalDonations: 3
    },
    {
      id: 'DON-08',
      name: 'Suman Reang',
      bloodGroup: 'A-',
      district: 'Dhalai',
      mandal: 'Ambassa',
      phone: '+91 94365 77193',
      lastDonationDate: '2026-07-04',
      isAvailable: true,
      totalDonations: 9
    }
  ]);

  private bloodDrivesSubject = new BehaviorSubject<BloodDrive[]>([
    {
      id: 'DRV-TR-01',
      title: 'Maha Raktadan Shibir - Swami Vivekananda Jayanti',
      organizer: 'BJP Yuva Morcha West Tripura District Committee',
      date: '2026-11-15',
      time: '09:00 AM - 04:00 PM',
      venue: 'Rabindra Satabarshiki Bhawan, Agartala',
      district: 'West Tripura',
      mandal: 'Agartala (Town)',
      targetUnits: 250,
      pledgedCount: 184,
      isCompleted: false
    },
    {
      id: 'DRV-TR-02',
      title: 'Matabari Punya Bhumi Youth Blood Camp',
      organizer: 'Yuva Morcha Gomati Mandal',
      date: '2026-11-22',
      time: '10:00 AM - 03:30 PM',
      venue: 'Town Hall Auditorium, Udaipur',
      district: 'Gomati',
      mandal: 'Radhakishorepur (Udaipur)',
      targetUnits: 150,
      pledgedCount: 112,
      isCompleted: false
    },
    {
      id: 'DRV-TR-03',
      title: 'Northern Border Blood Bridge',
      organizer: 'Yuva Morcha Dharmanagar Mandal',
      date: '2026-12-05',
      time: '09:30 AM - 03:00 PM',
      venue: 'B.B.I. School Ground, Dharmanagar',
      district: 'North Tripura',
      mandal: 'Dharmanagar',
      targetUnits: 120,
      pledgedCount: 68,
      isCompleted: false
    }
  ]);

  getRequests(): Observable<BloodRequest[]> {
    return this.bloodRequestsSubject.asObservable();
  }

  getDonors(): Observable<BloodDonor[]> {
    return this.donorsSubject.asObservable();
  }

  getDrives(): Observable<BloodDrive[]> {
    return this.bloodDrivesSubject.asObservable();
  }

  addBloodRequest(request: Omit<BloodRequest, 'id' | 'requestedAt' | 'status'>): BloodRequest {
    const newReq: BloodRequest = {
      ...request,
      id: `REQ-TR-${Math.floor(100 + Math.random() * 900)}`,
      requestedAt: new Date(),
      status: 'Open'
    };
    const current = this.bloodRequestsSubject.value;
    this.bloodRequestsSubject.next([newReq, ...current]);
    return newReq;
  }

  pledgeToDrive(driveId: string): void {
    const drives = this.bloodDrivesSubject.value.map(d => {
      if (d.id === driveId) {
        return { ...d, pledgedCount: d.pledgedCount + 1 };
      }
      return d;
    });
    this.bloodDrivesSubject.next(drives);
  }

  registerAsDonor(donor: Omit<BloodDonor, 'id' | 'totalDonations'>): BloodDonor {
    const newDonor: BloodDonor = {
      ...donor,
      id: `DON-${Math.floor(10 + Math.random() * 90)}`,
      totalDonations: 1
    };
    const list = this.donorsSubject.value;
    this.donorsSubject.next([newDonor, ...list]);
    return newDonor;
  }
}

