// Comprehensive Mock Data for Yuva Sampark Tripura

export const TRIPURA_DISTRICTS = [
  {
    id: "west-tripura",
    name: "West Tripura",
    headquarters: "Agartala",
    registeredCount: 42150,
    volunteersCount: 11200,
    mandals: [
      "Agartala City",
      "Badharghat",
      "Banamalipur",
      "Pratapgarh",
      "Barjala",
      "Ramnagar",
      "Khayerpur",
      "Majlishpur",
      "Mohanpur",
      "Bamutia",
      "Mandwi"
    ]
  },
  {
    id: "gomati",
    name: "Gomati",
    headquarters: "Udaipur",
    registeredCount: 18450,
    volunteersCount: 4900,
    mandals: [
      "Radhakishorpur (Udaipur)",
      "Matabari",
      "Kakraban-Salgarh",
      "Rajnagar",
      "Amarpur",
      "Karbook",
      "Silachari"
    ]
  },
  {
    id: "south-tripura",
    name: "South Tripura",
    headquarters: "Belonia",
    registeredCount: 16800,
    volunteersCount: 4350,
    mandals: [
      "Belonia",
      "Santirbazar",
      "Jolaibari",
      "Manu",
      "Hrishyamukh",
      "Sabroom",
      "Rajnagar South"
    ]
  },
  {
    id: "sepahijala",
    name: "Sepahijala",
    headquarters: "Bishramganj",
    registeredCount: 15300,
    volunteersCount: 3950,
    mandals: [
      "Bishalgarh",
      "Golaghati",
      "Charilam",
      "Nalchar",
      "Sonamura",
      "Boxanagar",
      "Kamalasagar"
    ]
  },
  {
    id: "khowai",
    name: "Khowai",
    headquarters: "Khowai",
    registeredCount: 11200,
    volunteersCount: 2900,
    mandals: [
      "Khowai Town",
      "Ashrambari",
      "Teliamura",
      "Kalyanpur-Pramodnagar",
      "Padmabil"
    ]
  },
  {
    id: "north-tripura",
    name: "North Tripura",
    headquarters: "Dharmanagar",
    registeredCount: 13900,
    volunteersCount: 3600,
    mandals: [
      "Dharmanagar",
      "Jubarajnagar",
      "Panisagar",
      "Kadamtala-Kurti",
      "Kanchanpur",
      "Damchera"
    ]
  },
  {
    id: "unakoti",
    name: "Unakoti",
    headquarters: "Kailashahar",
    registeredCount: 10450,
    volunteersCount: 2750,
    mandals: [
      "Kailashahar",
      "Chandipur",
      "Fatikroy",
      "Pabiachhara",
      "Kumarghat"
    ]
  },
  {
    id: "dhalai",
    name: "Dhalai",
    headquarters: "Ambassa",
    registeredCount: 11200,
    volunteersCount: 2850,
    mandals: [
      "Ambassa",
      "Kamalpur",
      "Surma",
      "Chawmanu",
      "Gandatwisa",
      "Salema"
    ]
  }
];

export const SCHEMES_DATA = [
  {
    id: "sch-1",
    title: "Tripura Mukhyamantri Yuba Yogayog Yojana",
    category: "State Scholarships",
    type: "Financial Grant",
    subsidyAmount: "₹5,000",
    maxAge: 25,
    minAge: 18,
    targetAudience: "Final year undergraduate college students across Tripura",
    description: "One-time digital empowerment grant directly credited to bank accounts to purchase modern internet-enabled smartphones for digital learning and skilling.",
    eligibility: [
      "Enrolled in final year of government-recognized college/university in Tripura",
      "Annual family income below ₹5 Lakhs",
      "Valid Tripura PRTC (Permanent Resident Certificate)"
    ],
    documentsRequired: ["PRTC Certificate", "College Bonafide / ID", "Aadhaar Card", "Bank Passbook"],
    deadline: "31 Dec 2026",
    portalLink: "https://highereducation.tripura.gov.in",
    popular: true
  },
  {
    id: "sch-2",
    title: "Chief Minister Swavalamban Yojana (CMSY)",
    category: "MSME & PMEGP Loans",
    type: "Subsidized Loan & Grant",
    subsidyAmount: "Up to ₹10 Lakhs (30% Subsidy)",
    maxAge: 40,
    minAge: 18,
    targetAudience: "Unemployed youth launching manufacturing, agri-business, or service units",
    description: "Flagship self-employment scheme of Tripura Government offering subsidized bank loans with upfront 30% capital investment subsidy and 3% interest subvention for 5 years.",
    eligibility: [
      "Minimum 8th pass qualification (10th pass for projects above ₹5 Lakhs)",
      "Tripura Permanent Resident",
      "No default on existing commercial bank loans"
    ],
    documentsRequired: ["Detailed Project Report (DPR)", "Aadhaar & PAN", "PRTC", "Educational Certificate", "Bank Quotation"],
    deadline: "Rolling / Open Throughout Year",
    portalLink: "https://industries.tripura.gov.in",
    popular: true
  },
  {
    id: "sch-3",
    title: "Tripura Tribal Youth Entrepreneurship Grant (T-TYEG)",
    category: "Central Subsidies",
    type: "Seed Capital Grant",
    subsidyAmount: "₹2,50,000 Direct Seed Fund",
    maxAge: 35,
    minAge: 20,
    targetAudience: "Indigenous tribal youth in TTAADC areas starting organic agri, rubber, or bamboo crafts",
    description: "Dedicated central-state joint corpus fund providing non-repayable seed capital for value-addition clusters in bamboo crafts, pineapple processing, and tea nursery setups.",
    eligibility: [
      "Belonging to ST community residing in Tripura / ADC belts",
      "Viable business blueprint for tribal handicraft, eco-tourism, or food processing",
      "Trained under ITDA or TRIFED"
    ],
    documentsRequired: ["ST Community Certificate", "TTAADC Residential Proof", "Project Proposal", "Aadhaar", "Cancelled Cheque"],
    deadline: "15 Jan 2027",
    portalLink: "https://ttaadc.gov.in",
    popular: false
  },
  {
    id: "sch-4",
    title: "PM Employment Generation Programme (PMEGP Tripura)",
    category: "MSME & PMEGP Loans",
    type: "Credit-Linked Capital Subsidy",
    subsidyAmount: "Up to ₹50 Lakhs (35% NER Subsidy)",
    maxAge: 45,
    minAge: 18,
    targetAudience: "Entrepreneurs setting up manufacturing or services micro-enterprises",
    description: "Special North-East Region subsidy providing 35% margin money assistance from Khadi and Village Industries Commission (KVIC) with minimal borrower contribution (5%).",
    eligibility: [
      "Any individual above 18 years of age",
      "At least VIII standard pass for projects costing above ₹10 Lakhs in manufacturing",
      "New micro-enterprises only"
    ],
    documentsRequired: ["KVIC Online Application", "EDP Training Certificate", "Project Report", "Aadhaar & PAN", "Caste Certificate (if applicable)"],
    deadline: "Active 2026-27",
    portalLink: "https://kviconline.gov.in",
    popular: true
  },
  {
    id: "sch-5",
    title: "Tripura Drone Tech & IT Skill Certification (PMKVY 4.0)",
    category: "Skill Training",
    type: "100% Free Training + ₹8,000 Stipend",
    subsidyAmount: "₹8,000 Monthly Stipend + DGCA License",
    maxAge: 30,
    minAge: 18,
    targetAudience: "Science/Diploma/Engineering/General graduates aiming for high-growth tech careers",
    description: "State-of-the-art training in commercial drone piloting, GIS mapping, AI data annotation, and smart agriculture monitoring with 100% placement linkage across Northeast India.",
    eligibility: [
      "Class 12th pass (Science/Vocational) or ITI/Diploma/Graduate",
      "Tripura domicile",
      "Fit for field operations and tech simulations"
    ],
    documentsRequired: ["Mark sheets", "PRTC Tripura", "Passport Photos", "Aadhaar", "Medical Fitness Slip"],
    deadline: "28 Feb 2027",
    portalLink: "https://skilltripura.gov.in",
    popular: true
  },
  {
    id: "sch-6",
    title: "Central Sector Post-Matric Fellowship for Northeast Students",
    category: "State Scholarships",
    type: "Full Tuition + ₹1,500/mo Allowance",
    subsidyAmount: "Full Tuition + ₹18,000/year",
    maxAge: 28,
    minAge: 17,
    targetAudience: "Meritorious students pursuing Post-Graduate & Professional degrees",
    description: "National scholarship portal scheme guaranteeing full waiver of university tuition fees and monthly subsistence allowance for technical, medical, and STEM degrees.",
    eligibility: [
      "Secured minimum 60% marks in previous qualifying exam",
      "Family annual income below ₹2.5 Lakhs",
      "Enrolled in recognized College/IIT/NIT/Central University"
    ],
    documentsRequired: ["NSP Registration", "Income Certificate from Sub-Divisional Magistrate", "Fee Receipt", "Bonafide Certificate"],
    deadline: "20 Nov 2026",
    portalLink: "https://scholarships.gov.in",
    popular: false
  }
];

export const BLOOD_URGENT_ALERTS = [
  {
    id: "alert-1",
    bloodGroup: "B+",
    hospital: "AGMC & GBP Hospital, Agartala",
    unit: "Trauma ICU - Ward 4",
    urgency: "CRITICAL",
    contactName: "Blood Bank Helpdesk AGMC",
    phone: "+91 94361 24501",
    timestamp: "12 mins ago",
    district: "West Tripura"
  },
  {
    id: "alert-2",
    bloodGroup: "O-",
    hospital: "Gomati District Hospital, Tepania",
    unit: "Maternity Emergency",
    urgency: "VERY URGENT",
    contactName: "Emergency Medical Officer",
    phone: "+91 98620 41209",
    timestamp: "38 mins ago",
    district: "Gomati"
  },
  {
    id: "alert-3",
    bloodGroup: "A+",
    hospital: "IGM Hospital, Agartala",
    unit: "Pediatric Care",
    urgency: "URGENT",
    contactName: "Yuva Seva Kendra",
    phone: "+91 94364 88200",
    timestamp: "1 hour ago",
    district: "West Tripura"
  },
  {
    id: "alert-4",
    bloodGroup: "AB-",
    hospital: "North Tripura District Hospital, Dharmanagar",
    unit: "Dialysis Unit",
    urgency: "CRITICAL",
    contactName: "Red Ribbon Coordinator",
    phone: "+91 94365 77123",
    timestamp: "2 hours ago",
    district: "North Tripura"
  }
];

export const MOCK_DONORS = [
  {
    id: "don-1",
    name: "Debashis Debnath",
    bloodGroup: "B+",
    district: "West Tripura",
    mandal: "Banamalipur",
    city: "Agartala",
    phone: "+91 98621 543XX",
    totalDonations: 8,
    lastDonated: "4 months ago",
    available: true,
    badge: "Champion Donor"
  },
  {
    id: "don-2",
    name: "Tanmoy Bhattacharjee",
    bloodGroup: "O+",
    district: "West Tripura",
    mandal: "Agartala City",
    city: "Agartala",
    phone: "+91 94361 789XX",
    totalDonations: 12,
    lastDonated: "5 months ago",
    available: true,
    badge: "Gold Donor"
  },
  {
    id: "don-3",
    name: "Priyanka Tripura",
    bloodGroup: "A+",
    district: "Gomati",
    mandal: "Radhakishorpur (Udaipur)",
    city: "Udaipur",
    phone: "+91 97740 312XX",
    totalDonations: 5,
    lastDonated: "3 months ago",
    available: true,
    badge: "Star Donor"
  },
  {
    id: "don-4",
    name: "Biplab Das",
    bloodGroup: "O-",
    district: "West Tripura",
    mandal: "Badharghat",
    city: "Agartala",
    phone: "+91 98625 994XX",
    totalDonations: 6,
    lastDonated: "6 months ago",
    available: true,
    badge: "Rare LifeSaver"
  },
  {
    id: "don-5",
    name: "Subrata Reang",
    bloodGroup: "AB+",
    district: "South Tripura",
    mandal: "Belonia",
    city: "Belonia",
    phone: "+91 94364 120XX",
    totalDonations: 4,
    lastDonated: "2 months ago",
    available: true,
    badge: "Youth Volunteer"
  },
  {
    id: "don-6",
    name: "Abhijit Chakraborty",
    bloodGroup: "A-",
    district: "Sepahijala",
    mandal: "Bishalgarh",
    city: "Bishalgarh",
    phone: "+91 98561 283XX",
    totalDonations: 7,
    lastDonated: "4 months ago",
    available: true,
    badge: "Rare LifeSaver"
  },
  {
    id: "don-7",
    name: "Sneha Roy",
    bloodGroup: "B+",
    district: "North Tripura",
    mandal: "Dharmanagar",
    city: "Dharmanagar",
    phone: "+91 97744 551XX",
    totalDonations: 3,
    lastDonated: "7 months ago",
    available: true,
    badge: "Youth Volunteer"
  },
  {
    id: "don-8",
    name: "Manoj Jamatia",
    bloodGroup: "O+",
    district: "Gomati",
    mandal: "Amarpur",
    city: "Amarpur",
    phone: "+91 94363 874XX",
    totalDonations: 9,
    lastDonated: "3 months ago",
    available: true,
    badge: "Champion Donor"
  },
  {
    id: "don-9",
    name: "Rajesh Paul",
    bloodGroup: "AB-",
    district: "Khowai",
    mandal: "Teliamura",
    city: "Teliamura",
    phone: "+91 98620 663XX",
    totalDonations: 5,
    lastDonated: "5 months ago",
    available: true,
    badge: "Rare LifeSaver"
  },
  {
    id: "don-10",
    name: "Koushik Ghosh",
    bloodGroup: "B-",
    district: "Unakoti",
    mandal: "Kailashahar",
    city: "Kailashahar",
    phone: "+91 94362 101XX",
    totalDonations: 4,
    lastDonated: "4 months ago",
    available: true,
    badge: "Youth Volunteer"
  },
  {
    id: "don-11",
    name: "Sunil Sarkar",
    bloodGroup: "A+",
    district: "Dhalai",
    mandal: "Ambassa",
    city: "Ambassa",
    phone: "+91 98623 445XX",
    totalDonations: 6,
    lastDonated: "6 months ago",
    available: true,
    badge: "Star Donor"
  },
  {
    id: "don-12",
    name: "Ananya Saha",
    bloodGroup: "O+",
    district: "West Tripura",
    mandal: "Ramnagar",
    city: "Agartala",
    phone: "+91 98622 990XX",
    totalDonations: 5,
    lastDonated: "5 months ago",
    available: true,
    badge: "Star Donor"
  }
];

export const LEADERSHIP_DIRECTORY = [
  {
    id: "lead-1",
    name: "Sushanta Deb",
    role: "State President, BJYM Tripura",
    hierarchy: "State Leadership",
    district: "West Tripura",
    mandal: "Banamalipur",
    area: "State Headquarters, Agartala",
    phone: "+91 94361 2XXXX",
    email: "president.bjym@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    achievements: "Spearheaded Statewide Youth Viksit Tripura Yatra & 25,000+ Blood Donations",
    status: "Active"
  },
  {
    id: "lead-2",
    name: "Rana Pratap Ghosh",
    role: "State General Secretary (Org)",
    hierarchy: "State Leadership",
    district: "West Tripura",
    mandal: "Agartala City",
    area: "Central Zone Coordinator",
    phone: "+91 94362 3XXXX",
    email: "org.secy@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    achievements: "Organizer of 60 Mandal Bootcamps and Digital IT Cells",
    status: "Active"
  },
  {
    id: "lead-3",
    name: "Barnali Debbarma",
    role: "State Vice President & Tribal Wing In-Charge",
    hierarchy: "State Leadership",
    district: "Sepahijala",
    mandal: "Charilam",
    area: "ADC Region Coordinator",
    phone: "+91 98620 4XXXX",
    email: "barnali.tribal@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    achievements: "Mobilized 8,000+ Indigenous Youth into PMKVY Skilling & Startups",
    status: "Active"
  },
  {
    id: "lead-4",
    name: "Amitabha Majumder",
    role: "District President",
    hierarchy: "District Leadership",
    district: "West Tripura",
    mandal: "Badharghat",
    area: "West Tripura District",
    phone: "+91 94365 5XXXX",
    email: "west.president@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    achievements: "Led largest blood donation drive in Agartala with 1,200 donors in 48 hrs",
    status: "Active"
  },
  {
    id: "lead-5",
    name: "Dipankar Roy",
    role: "District President",
    hierarchy: "District Leadership",
    district: "Gomati",
    mandal: "Radhakishorpur (Udaipur)",
    area: "Gomati District",
    phone: "+91 98621 6XXXX",
    email: "gomati.lead@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    achievements: "Coordinated Matabari Temple eco-drive & pilgrimage volunteer cell",
    status: "Active"
  },
  {
    id: "lead-6",
    name: "Sudip Dasgupta",
    role: "District President",
    hierarchy: "District Leadership",
    district: "South Tripura",
    mandal: "Belonia",
    area: "South Tripura District",
    phone: "+91 94364 7XXXX",
    email: "south.lead@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    achievements: "Maitri Setu border youth exchange & sports festival convenor",
    status: "Active"
  },
  {
    id: "lead-7",
    name: "Pallab Kanti Deb",
    role: "District President",
    hierarchy: "District Leadership",
    district: "North Tripura",
    mandal: "Dharmanagar",
    area: "North Tripura District",
    phone: "+91 97743 8XXXX",
    email: "north.lead@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    achievements: "Expanded Yuva Sampark digital enrollment to 95% mandals in North",
    status: "Active"
  },
  {
    id: "lead-8",
    name: "Surajit Reang",
    role: "District President",
    hierarchy: "District Leadership",
    district: "Dhalai",
    mandal: "Ambassa",
    area: "Dhalai District",
    phone: "+91 98628 9XXXX",
    email: "dhalai.lead@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    achievements: "Organized forest conservation & agro-processing workshops",
    status: "Active"
  },
  {
    id: "lead-9",
    name: "Moumita Sen",
    role: "Mandal President",
    hierarchy: "Mandal Leadership",
    district: "West Tripura",
    mandal: "Ramnagar",
    area: "Ramnagar Mandal & Booth 1-24",
    phone: "+91 94361 9XXXX",
    email: "ramnagar.morcha@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    achievements: "Conducted 14 door-to-door welfare awareness drives",
    status: "Active"
  },
  {
    id: "lead-10",
    name: "Subhashis Saha",
    role: "Mandal President",
    hierarchy: "Mandal Leadership",
    district: "Sepahijala",
    mandal: "Bishalgarh",
    area: "Bishalgarh Central Mandal",
    phone: "+91 98622 1XXXX",
    email: "bishalgarh.bjym@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    achievements: "Mobilized 450 youths for river cleanup & disaster rescue training",
    status: "Active"
  },
  {
    id: "lead-11",
    name: "Purnima Chakma",
    role: "Mandal President",
    hierarchy: "Mandal Leadership",
    district: "Unakoti",
    mandal: "Kailashahar",
    area: "Kailashahar Mandal",
    phone: "+91 97741 2XXXX",
    email: "kailashahar.morcha@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    achievements: "Championed Unakoti Heritage site restoration volunteer drives",
    status: "Active"
  },
  {
    id: "lead-12",
    name: "Bikash Choudhury",
    role: "Mandal President",
    hierarchy: "Mandal Leadership",
    district: "Khowai",
    mandal: "Teliamura",
    area: "Teliamura Mandal",
    phone: "+91 98627 3XXXX",
    email: "teliamura.lead@tripura.org.in",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80",
    achievements: "Established 24/7 emergency blood donation fast-response team",
    status: "Active"
  }
];

export const UPCOMING_EVENTS = [
  {
    id: "evt-1",
    title: "Tripura Yuva Sankalp Maha Sammelan 2026",
    category: "Mega Convention",
    date: "12 Dec 2026",
    time: "10:30 AM - 04:30 PM",
    venue: "Swami Vivekananda Maidan (Astabal Ground), Agartala",
    district: "West Tripura",
    expectedFootfall: "25,000+ Delegates",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
    highlights: ["Address by State Leadership & Chief Minister", "Launch of AI Digital Skills Initiative", "Honoring 100 Young Innovators of Tripura"],
    isRsvpd: true,
    passCode: "TR-YS-88219"
  },
  {
    id: "evt-2",
    title: "Statewide Mega Blood Donation & Health Drive",
    category: "Social Drive",
    date: "18 Dec 2026",
    time: "08:00 AM - 05:00 PM",
    venue: "Rabindra Satabarshiki Bhavan, Agartala & All District Hospitals",
    district: "West Tripura",
    expectedFootfall: "3,500+ Donors Target",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80",
    highlights: ["Free blood testing & health checkup", "Instant Digital Donor ID card issuance", "Complimentary nutrition kit"],
    isRsvpd: false,
    passCode: "TR-BLD-04192"
  },
  {
    id: "evt-3",
    title: "Tripura Tech, Drone & Agri-Innovation Summit",
    category: "Skilling & Innovation",
    date: "24 Dec 2026",
    time: "09:30 AM - 06:00 PM",
    venue: "Tripura University Auditorium, Suryamaninagar",
    district: "West Tripura",
    expectedFootfall: "4,000+ Tech Enthusiasts",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80",
    highlights: ["Live drone piloting demonstrations", "VC Seed-funding pitch for 20 shortlisted startups", "Hands-on robotics workshop"],
    isRsvpd: false,
    passCode: "TR-TCH-77312"
  },
  {
    id: "evt-4",
    title: "Viksit Tripura Youth Marathon & Swachhata Rally",
    category: "Sports & Culture",
    date: "05 Jan 2027",
    time: "06:00 AM - 10:00 AM",
    venue: "Ujjayanta Palace Front Gate to MBB College Ground",
    district: "West Tripura",
    expectedFootfall: "10,000+ Runners",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&auto=format&fit=crop&q=80",
    highlights: ["10K & 5K timed runs with cash prizes", "Medals and e-certificates for all finishers", "Clean Agartala pledge drive"],
    isRsvpd: true,
    passCode: "TR-RUN-11094"
  }
];

export const MOCK_VOLUNTEERS_ADMIN = [
  {
    id: "VOL-TR-901",
    name: "Arindam Bhattacharjee",
    district: "West Tripura",
    mandal: "Banamalipur",
    phone: "+91 94361 11204",
    bloodGroup: "O+",
    status: "Active",
    volunteerHours: 84,
    skills: ["First Aid", "Event Management", "Public Speaking"],
    joinedDate: "14 Feb 2025"
  },
  {
    id: "VOL-TR-902",
    name: "Debolina Saha",
    district: "Gomati",
    mandal: "Radhakishorpur (Udaipur)",
    phone: "+91 98620 99401",
    bloodGroup: "B+",
    status: "Active",
    volunteerHours: 120,
    skills: ["Social Media & IT", "Graphic Design", "Blood Donor Desk"],
    joinedDate: "03 Jan 2025"
  },
  {
    id: "VOL-TR-903",
    name: "Jiten Tripura",
    district: "South Tripura",
    mandal: "Santirbazar",
    phone: "+91 97740 45672",
    bloodGroup: "A+",
    status: "Pending Verification",
    volunteerHours: 32,
    skills: ["Tribal Outreach", "Field Logistics", "Sports Training"],
    joinedDate: "28 Oct 2026"
  },
  {
    id: "VOL-TR-904",
    name: "Rimi Das",
    district: "North Tripura",
    mandal: "Dharmanagar",
    phone: "+91 94364 88391",
    bloodGroup: "AB+",
    status: "Active",
    volunteerHours: 64,
    skills: ["Medical Relief", "Counseling", "Documentation"],
    joinedDate: "19 Mar 2025"
  },
  {
    id: "VOL-TR-905",
    name: "Prasenjit Debbarma",
    district: "Sepahijala",
    mandal: "Bishalgarh",
    phone: "+91 98625 33410",
    bloodGroup: "O-",
    status: "Active",
    volunteerHours: 96,
    skills: ["Disaster Response", "Crowd Control", "Vehicle Fleet"],
    joinedDate: "11 Dec 2024"
  },
  {
    id: "VOL-TR-906",
    name: "Sarmistha Roy",
    district: "Khowai",
    mandal: "Teliamura",
    phone: "+91 94362 77109",
    bloodGroup: "B-",
    status: "Pending Verification",
    volunteerHours: 18,
    skills: ["Education Drive", "Women Wing Mobilization"],
    joinedDate: "01 Nov 2026"
  },
  {
    id: "VOL-TR-907",
    name: "Kalyan Ghosh",
    district: "Unakoti",
    mandal: "Kailashahar",
    phone: "+91 97745 22108",
    bloodGroup: "A-",
    status: "Active",
    volunteerHours: 52,
    skills: ["Photography", "Press Liaison", "Sound Engineering"],
    joinedDate: "15 Apr 2025"
  },
  {
    id: "VOL-TR-908",
    name: "Abhijit Paul",
    district: "Dhalai",
    mandal: "Ambassa",
    phone: "+91 98627 66504",
    bloodGroup: "B+",
    status: "Active",
    volunteerHours: 76,
    skills: ["Trekking Guide", "Emergency Blood Desk"],
    joinedDate: "05 Jun 2025"
  }
];

export const DEMO_VOLUNTEER_PROFILE = {
  name: "Rajdeep Chakraborty",
  id: "TR-AGT-2026-8841",
  district: "West Tripura",
  mandal: "Banamalipur",
  assembly: "09-Banamalipur AC",
  role: "Youth Brigade Volunteer & Blood Donor",
  bloodGroup: "O+",
  volunteerHours: 94,
  points: 1850,
  badges: ["Master Organizer", "Gold Blood Donor", "Digital Ambassador", "Flood Relief Hero"],
  validThru: "12/2028",
  qrPayload: "https://yuvasampark.tripura.gov.in/verify/TR-AGT-2026-8841",
  avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80"
};

