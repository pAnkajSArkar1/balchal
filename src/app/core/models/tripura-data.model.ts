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
  district: string;
  mandal: string;
  boothNumber?: string;
  pinCode?: string;
  address: string;
  qualification: string;
  profession: string;
  occupation?: string;
  areasOfInterest?: string[];
  volunteerInterests?: string[];
  skills?: string[];
  wingInterest?: string;
  photoUrl?: string;
  bloodGroup: string;
  consent?: boolean;
  joinedDate?: string;
  status?: 'Verified' | 'Pending Verification';
}

export interface YuvaEvent {
  id: string;
  title: string;
  category: 'Youth Conclave' | 'Sports Tournament' | 'Blood Camp' | 'Cleanliness Drive' | 'Skill Workshop' | 'Cultural Fest';
  date: string;
  time: string;
  venue: string;
  district: string;
  mandal: string;
  organizer: string;
  contactPerson: string;
  contactPhone: string;
  mapLocation: string;
  description: string;
  expectedAttendees: number;
  volunteersRegistered: number;
  imageUrl?: string;
  isPast?: boolean;
  turnoutStats?: string;
  pastSummary?: string;
}

export interface Leader {
  id: string;
  name: string;
  designation: string;
  level: 'State' | 'District' | 'Mandal' | 'Booth';
  district?: string;
  mandal?: string;
  photoUrl: string;
  shortProfile: string;
  publicEmail: string;
  publicPhone: string;
  socialTwitter?: string;
  socialFacebook?: string;
}

export interface InitiativeItem {
  id: string;
  name: string;
  category: 'Youth Development' | 'Skill Development' | 'Education' | 'Community Service' | 'Environmental Activities' | 'Sports & Cultural Activities' | 'Digital/Technology Initiatives' | 'Awareness Programs' | 'Blood Donation';
  tagline: string;
  objective: string;
  activities: string[];
  participation: string;
  impact: string[];
  photoGallery: string[];
  icon: string;
  badge: string;
}

export interface NewsPost {
  id: string;
  title: string;
  category: 'Organizational Updates' | 'Press Releases' | 'Event Updates' | 'Important Announcements' | 'District Updates' | 'Youth-related Updates';
  date: string;
  author: string;
  organization: string;
  featuredImage: string;
  summary: string;
  content: string;
  tags: string[];
  isAnnouncement?: boolean;
}

export interface MediaPhoto {
  id: string;
  title: string;
  eventName: string;
  district: string;
  date: string;
  imageUrl: string;
  caption: string;
}

export interface MediaVideo {
  id: string;
  title: string;
  category: 'Event videos' | 'Interviews' | 'Speeches' | 'Program highlights';
  duration: string;
  date: string;
  videoUrl: string;
  thumbnailUrl: string;
  speaker: string;
}

export interface DistrictTeamMember {
  id: string;
  name: string;
  designation: string;
  districtId: string;
  districtName: string;
  mandalId: string;
  mandalName: string;
  officeContact: string;
  officialEmail: string;
  responsibilities: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  type: 'Internship' | 'Fellowship' | 'Volunteering';
  duration: string;
  location: string;
  stipend: string;
  description: string;
  requirements: string[];
}
