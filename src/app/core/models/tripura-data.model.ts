export interface District {
  id: string;
  name: string;
  headquarters: string;
  populationApprox: string;
  mandals: Mandal[];
}

export interface Mandal {
  id: string;
  name: string;
  districtId: string;
  boothCount: number;
  contactLead: string;
}

export interface BloodDonor {
  id: string;
  name: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  district: string;
  mandal: string;
  phone: string;
  lastDonationDate?: string;
  isAvailable: boolean;
  totalDonations: number;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  bloodGroup: string;
  unitsNeeded: number;
  hospitalName: string;
  district: string;
  mandal: string;
  contactPerson: string;
  contactPhone: string;
  urgency: 'Critical (Immediate)' | 'Within 6 Hours' | 'Within 24 Hours';
  notes?: string;
  requestedAt: Date;
  status: 'Open' | 'Fulfilled' | 'In Progress';
}

export interface BloodDrive {
  id: string;
  title: string;
  organizer: string;
  date: string;
  time: string;
  venue: string;
  district: string;
  mandal: string;
  targetUnits: number;
  pledgedCount: number;
  isCompleted: boolean;
}

export interface OpportunityScheme {
  id: string;
  title: string;
  category: 'Scholarship' | 'Internship' | 'MSME & Startup' | 'Skill Training';
  sponsor: 'Government of Tripura' | 'Central Government (Govt of India)' | 'NEC';
  shortDesc: string;
  benefit: string;
  deadline: string;
  eligibility: string[];
  documentsRequired: string[];
  applicationUrl: string;
  featured: boolean;
  tag: string;
}

export interface MemberKYC {
  id?: string;
  applicationId?: string;
  fullName: string;
  dob: string;
  gender: string;
  mobile: string;
  email: string;
  idProofType?: string;
  idProofNumber?: string;
  bloodGroup: string;
  district: string;
  mandal: string;
  boothNumber?: string;
  pinCode: string;
  address: string;
  qualification: string;
  occupation: string;
  skills: string[];
  wingInterest: string;
  joinedDate?: string;
  status?: 'Verified' | 'Pending Verification';
}

export interface YuvaEvent {
  id: string;
  title: string;
  category: 'Cleanliness Drive' | 'Blood Camp' | 'Youth Conclave' | 'Sports Tournament' | 'Skill Workshop';
  date: string;
  location: string;
  district: string;
  mandal: string;
  expectedAttendees: number;
  volunteersRegistered: number;
  imageUrl?: string;
  description: string;
}

