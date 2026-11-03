import { Injectable } from '@angular/core';
import { InitiativeItem } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class InitiativesService {
  private readonly initiatives: InitiativeItem[] = [
    {
      id: 'youth-development',
      name: 'Yuva Samvad & Leadership Bootcamps',
      category: 'Youth Development',
      badge: 'Flagship Program',
      tagline: 'Fostering democratic leadership, public speaking, and community problem-solving.',
      icon: 'fa-solid fa-users-rays',
      objective: 'To cultivate grassroots leadership qualities among Tripura youth aged 18-35, providing mentorship in public policy, governance, civic duties, and self-reliance.',
      activities: [
        'Weekend residential leadership workshops in Agartala and district headquarters.',
        'District-level youth parliaments discussing rural economy, connectivity, and education.',
        'Mentorship sessions with elected legislators, civil servants, and social innovators.',
        'Public speaking, policy analysis, and group crisis-simulation exercises.'
      ],
      participation: 'Open to all Tripura college students, young professionals, and social workers. Applications open quarterly via online registration or through local Mandal Youth Incharges.',
      impact: [
        '12,400+ Young citizens trained across 60 assembly constituencies.',
        '48 Youth Parliaments hosted with over 150 actionable civic resolutions submitted to local authorities.',
        '320 Alumni now actively serving as community organizers, village panchayat members, or NGO leads.'
      ],
      photoGallery: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'skill-development',
      name: 'Tripura Yuva Kaushal - Skill Horizons',
      category: 'Skill Development',
      badge: 'Employment & MSME',
      tagline: 'Vocational training in high-demand trades, IT, and tourism hospitality.',
      icon: 'fa-solid fa-screwdriver-wrench',
      objective: 'To bridge the gap between academic education and industry market requirements by facilitating certified short-term vocational courses and job matchmaking.',
      activities: [
        'Tie-ups with PMKVY centres, Tripura State Skill Development Mission (TSSDM), and ITIs.',
        'Hands-on masterclasses in electric vehicle repair, solar panel installation, and agro-processing.',
        'Hospitality and eco-tourism guiding certifications for scenic destinations (Unakoti, Jampui Hills, Neermahal).',
        'Resume clinics and mock interviews with regional recruiters.'
      ],
      participation: 'Free for Tripura domiciles aged 18-30. Enrolment is facilitated through district skill camps and the Yuva Morcha online portal.',
      impact: [
        '8,600+ Youth certified across 14 technical and vocational trades.',
        '64% Direct placement rate or self-employment startup rate within 6 months.',
        '30+ Regional businesses actively hiring from the Yuva Kaushal Talent Pool.'
      ],
      photoGallery: [
        'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'education-scholarships',
      name: 'Tripura Medha & Scholarship Assistance Desks',
      category: 'Education',
      badge: 'Academic Support',
      tagline: 'Ensuring zero dropouts through scholarship handholding and free study libraries.',
      icon: 'fa-solid fa-graduation-cap',
      objective: 'To guarantee that financial constraints do not stop deserving students from completing higher education, competitive exams (TPSC, UPSC, SSC), or professional degrees.',
      activities: [
        'Operating free "Yuva Study Corners" in all 8 district headquarters with high-speed internet and book banks.',
        'Helpdesks assisting students in applying for Mukhyamantri Yuva Yogayog Yojana (MMYYY) and Dr. B.R. Ambedkar Fellowships.',
        'Free weekend crash courses by qualified educators for state civil service prelims and banking exams.',
        'Distribution of notebooks, stationery kits, and digital tablets to meritorious students from disadvantaged families.'
      ],
      participation: 'Any registered student or aspirant can walk into the nearest Mandal Yuva Helpdesk or apply online for counseling and book access.',
      impact: [
        '28,000+ Scholarship application verifications successfully expedited.',
        '1,450+ Aspirants cleared tier-1 of state/national competitive examinations through free guidance.',
        '60 Free Study Corners established across Tripura mandals.'
      ],
      photoGallery: [
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'community-service',
      name: 'Seva Hi Sangathan - Grassroots Community Aid',
      category: 'Community Service',
      badge: 'Social Welfare',
      tagline: 'Standing shoulder to shoulder with the vulnerable during floods, festivals, and winter chill.',
      icon: 'fa-solid fa-hand-holding-heart',
      objective: 'To embody the spirit of selfless service by deploying trained volunteer battalions for elderly assistance, emergency flood relief, and rural welfare.',
      activities: [
        'Emergency flood relief camps providing drinking water, dry rations, and chlorine tablets in low-lying river belts.',
        'Annual "Winter Warmth Drive" distributing blankets and thermal clothing in hilly tribal villages.',
        'Senior citizen assistance cell for medicine delivery and hospital transport during monsoon emergencies.',
        'Renovation of community halls and rural water sources.'
      ],
      participation: 'Any youth willing to dedicate 2 hours a week can join the Mandal Seva Dal through our online volunteer registration.',
      impact: [
        '45,000+ Rations and relief packets delivered during monsoon flooding periods.',
        '18,000+ Warm blankets distributed across Jampui, Gandacherra, and Atharamura hill tracts.',
        'Over 2,500 active Seva Dal volunteers on standby 24/7 across Tripura.'
      ],
      photoGallery: [
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'environmental-activities',
      name: 'Harit Tripura - Green Earth Brigade',
      category: 'Environmental Activities',
      badge: 'Eco Mission',
      tagline: 'Preserving Tripura’s lush forests, biodiversity, and sacred water bodies.',
      icon: 'fa-solid fa-seedling',
      objective: 'To promote ecological responsibility among the youth through massive afforestation, single-use plastic elimination, and water rejuvenation.',
      activities: [
        'Statewide "Ek Ped Maa Ke Naam" mass tree plantation across highway dividers, school campuses, and barren lands.',
        'Comprehensive cleanups of the holy Gomati River, Rudrasagar Lake, and Kalyan Sagar (Matabari).',
        'Youth awareness drives promoting bamboo handicrafts, cloth bags, and segregation of municipal waste.',
        'Student eco-clubs in 100+ schools and colleges.'
      ],
      participation: 'Schools, colleges, youth clubs, and individual volunteers participate in weekly environmental drives.',
      impact: [
        '1,25,000+ Saplings planted and geotagged across 8 districts.',
        '14 Metric tonnes of plastic and silt removed from Rudrasagar and Gomati riverbanks.',
        '50+ Green Eco-Clubs active in state educational institutions.'
      ],
      photoGallery: [
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'sports-cultural',
      name: 'Khel Tripura & Tribal Heritage Festivals',
      category: 'Sports & Cultural Activities',
      badge: 'Sports & Arts',
      tagline: 'Celebrating athletic prowess, traditional tribal arts, and indigenous culture.',
      icon: 'fa-solid fa-volleyball',
      objective: 'To channel youth energy positively into athletics, football, and martial arts, while reviving traditional tribal dance, music, and art forms.',
      activities: [
        'Annual "Yuva Cup Football Championship" engaging 120+ teams from all 8 districts.',
        'Hojagiri, Garia, and Dhamail cultural showcases during youth fest weeks.',
        'Coaching clinics with state champions for athletics, badminton, and archery.',
        'Marathon runs promoting physical fitness and drug-free youth culture.'
      ],
      participation: 'Sports clubs, university teams, and local mandal players register through the events portal.',
      impact: [
        '3,500+ Youth athletes competed in state-level football and archery meets.',
        '40+ Talented indigenous artists awarded cultural scholarships and platform showcases.',
        'Over 10,000 citizens attending annual Yuva Festival in Agartala.'
      ],
      photoGallery: [
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'digital-tech',
      name: 'Digital Saksham Tripura',
      category: 'Digital/Technology Initiatives',
      badge: 'Tech & AI Literacy',
      tagline: 'Equipping rural youth with computer coding, cyber safety, and digital financial tools.',
      icon: 'fa-solid fa-laptop-code',
      objective: 'To democratize technological knowledge, teaching youth web design, coding, UPI/digital banking hygiene, and artificial intelligence fundamentals.',
      activities: [
        'Mobile digital literacy vans visiting remote mandals with laptops and satellite connectivity.',
        'Free beginner coding bootcamps (Python, Web Development, Prompt Engineering).',
        'Cyber security workshops alerting youth against online fraud, deepfakes, and phishing scams.',
        'Assisting local micro-entrepreneurs in setting up Google Maps profiles and UPI QR codes.'
      ],
      participation: 'Students aged 15-28 can attend weekend sessions at district centers or join online webinars.',
      impact: [
        '15,000+ Rural youth educated on cybersecurity and digital payment security.',
        '1,200+ Students completed foundational web development and AI literacy courses.',
        '350+ Small shopkeepers digitalized with UPI and local search discoverability.'
      ],
      photoGallery: [
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'awareness-programs',
      name: 'Nasha Mukt Tripura - Youth Against Substance Abuse',
      category: 'Awareness Programs',
      badge: 'Health & Vigilance',
      tagline: 'A resolute mission to protect young lives from narcotics and illicit trafficking.',
      icon: 'fa-solid fa-shield-halved',
      objective: 'To build a zero-tolerance societal barrier against drug abuse through peer-to-peer counseling, rehabilitation referral helpdesks, and sports alternatives.',
      activities: [
        'Torch rallies and street plays (Nukkad Natak) in vulnerable border townships.',
        'Anonymous youth helpline connecting affected individuals and families to government de-addiction centers.',
        'School and college pledges reaching every high school student in the state.',
        'Youth vigilance teams collaborating with local police to report suspicious activities near educational zones.'
      ],
      participation: 'Open to every citizen, student union, sports club, and parent-teacher association.',
      impact: [
        '75,000+ Students signed the Nasha Mukti Youth Pledge.',
        '340+ Youth referred to professional medical de-addiction and rehabilitation care.',
        'Over 180 street awareness plays performed across weekly village markets (haats).'
      ],
      photoGallery: [
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'blood-donation-hub',
      name: 'Rakta Sampark - 24/7 Emergency Blood Network',
      category: 'Blood Donation',
      badge: 'Life Saver',
      tagline: 'Connecting patients in need with verified youth donors within minutes.',
      icon: 'fa-solid fa-droplet',
      objective: 'To guarantee that no patient across GB Pant Hospital, TMC Hapania, or district hospitals suffers due to shortage of safe voluntary blood.',
      activities: [
        'Maintaining a live, verified registry of youth blood donors across all 8 districts.',
        'Deploying emergency volunteer dispatch teams when rare negative blood types (AB-, O-, B-) are requested.',
        'Organizing mega blood donation drives on national youth day and commemorative occasions.',
        'Educating youth on platelet donation and thalassemia patient adoption.'
      ],
      participation: 'Healthy youth aged 18-50 can register in under 1 minute as voluntary emergency donors on the portal.',
      impact: [
        '4,850+ Emergency blood units mobilized directly saving lives across Tripura.',
        '850+ Verified youth donors currently on 24/7 standby across all 8 districts.',
        '100% Voluntary, zero-cost emergency coordination with state blood banks.'
      ],
      photoGallery: [
        'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
      ]
    }
  ];

  getAll(): InitiativeItem[] {
    return this.initiatives;
  }

  getById(id: string): InitiativeItem | undefined {
    return this.initiatives.find(i => i.id === id);
  }

  getByCategory(cat: string): InitiativeItem[] {
    return this.initiatives.filter(i => i.category === cat);
  }
}
