# Yuva Sampark — Tripura Youth Digital Platform
### BJP Yuva Morcha Tripura (BJYM Tripura)

> **"Connect Youth • Organise Action • Build Communities"**

An ultra-modern, high-end, responsive single-page web portal and interactive frontend empowering Tripura's youth to register, volunteer, mobilize emergency blood donation, and tap into state and central government opportunities.

---

## 🎨 Visual Language & Design System

- **Primary Colors**: Deep Warm Saffron / Amber (`#F97316`, `#EA580C`, `#C2410C`)
- **Secondary / Accent Colors**: Royal Navy & Slate (`#0B192C`, `#1E3E62`, `#0F172A`)
- **Surfaces**: Crisp white cards, subtle glassmorphism (`backdrop-blur-md bg-white/80`), refined border outlines (`border-slate-200/80`), soft elevation shadows.
- **Typography**: Clean sans-serif (*Plus Jakarta Sans* & *Inter*) with bold numerical counters for impact stats.
- **Cultural Accents**: Tripura cultural touches — vector silhouette/skyline of **Ujjayanta Palace**, topography contour line accents, and Indian tricolor micro-accents.

---

## 🚀 Key Portal Features & Interactive Modules

### 1. Sticky Navbar & Role Switcher Pill
- **Interactive Role Switcher**: Quick toggle switch `[ Public View | Member View | State Admin View ]` that dynamically changes the active dashboard and view on the page with tactile toast notifications.
- **Action Buttons**:
  - `Sign In`: Opens clean authentication modal with Mobile OTP tabs, countdown timer, and role login.
  - `Join Movement / Register`: Smoothly scrolls to the 3-step Digital ID Generator.
- **Mobile Drawer**: Responsive slide-out sheet drawer with quick navigation links and role toggles.

### 2. Ultra-Polished Hero Section
- Dynamic headline & subtext with glowing action buttons:
  - **"Join the Movement"**: Primary glowing action button.
  - **"Watch Demo"**: Opens interactive video player modal with Tripura youth walkthrough stream.
- **Trust Chips Row**:
  - 🛡️ India DPDP Act 2023 Compliant
  - 📱 Web & Mobile Ready (PWA)
  - 🏅 Verified Tripura Volunteers
  - 🩸 24/7 State Blood SOS
- **Live Impact Counter Ribbon**: Animated incremental counters for:
  - **1,25,000+** Registered Members
  - **32,500+** Active Volunteers
  - **8 Districts & 60 Mandals** (100% Tripura Coverage)
  - **450+** Events & Drives Conducted

### 3. Tripura Youth Opportunities & Govt Schemes Hub
- Filter tabs: `[ All | State Scholarships | Central Subsidies | MSME & PMEGP Loans | Skill Training ]` + live keyword search.
- Includes flagship schemes:
  - *Tripura Mukhyamantri Yuba Yogayog Yojana (MMYYY)* (₹5,000 smartphone grant)
  - *Chief Minister Swavalamban Yojana (CMSY)* (Up to ₹10 Lakhs with 30% capital subsidy)
  - *PM Employment Generation Programme (PMEGP Tripura)* (Up to ₹50 Lakhs with 35% NER subsidy)
  - *Tripura Tribal Youth Entrepreneurship Grant (T-TYEG)* (₹2.5 Lakhs seed grant)
  - *Tripura Drone Tech & IT Skill Certification (PMKVY 4.0)* (100% Free + ₹8,000 stipend)
  - *Central Sector Post-Matric Fellowship*
- **Interactive Eligibility Checker Modal**: Enter age, domicile (PRTC Yes/No), qualification, and income to dynamically calculate matching grants and subsidies.

### 4. Blood Donation & Rapid Response Network
- **Live SOS Ticker**: Live emergency banner with pulsing alerts for AGMC & GBP Hospital Agartala, Gomati District Hospital, IGM Hospital, etc.
- **Cascading "Find Donors" Search**: Select Blood Group (`A+`, `A-`, `B+`, `B-`, `O+`, `O-`, `AB+`, `AB-`) + Select from all 8 Tripura districts.
- **Direct Donor Actions**:
  - `Request Call`: Opens simulated VoLTE hotline modal with auto-call timer and CRM logging.
  - `Send Alert`: Sends instant SMS & WhatsApp notification ping.
- **"Pledge Blood" RSVP Card**: One-click registration form that adds new donors live to the emergency pool.

### 5. Searchable District & Mandal Leadership Directory
- **Cascading Filter**: Select any of the 8 Tripura districts (West Tripura, Sepahijala, Khowai, Gomati, South Tripura, Dhalai, Unakoti, North Tripura), and the Mandal dropdown automatically populates the genuine mandals for that district!
- **Leadership Profile Cards**: Official photo, designation, assigned area/booths, and masked contact details.
- **"Connect" Modal**: Send representations, request office appointments, or report youth grievances.

### 6. Dynamic Membership Card Generator
- **3-Step Registration**:
  - *Step 1*: Personal Info (Name, DOB, Gender, Mobile, Blood Group, Email)
  - *Step 2*: Location (District, Mandal, Assembly Constituency, Address)
  - *Step 3*: Skills & Volunteer Wings (First Aid, Disaster Relief, Digital Media, etc.)
- **Instant Digital ID Card Preview**: Real-time live updating preview of a physical-style membership card with cardholder photo, QR code, unique Membership ID (e.g. `TR-AGT-2026-8841`), and "Download / Save Card" button with confetti celebration!

### 7. Multi-Role Dashboard Showcase
- **Volunteer Workspace**: Membership badge, registered upcoming events with barcode passes, notification feed, and volunteer hours badge.
- **State Admin Command**:
  - Key metrics overview (1.28L registered, 34.8K volunteers, 9.4K blood units).
  - District-wise registration and volunteer penetration charts.
  - Volunteer Roster Table with filter and search.
  - `Broadcast Message` modal (custom SMS / WhatsApp blast simulation with audience reach calculation).
  - `Call` button with automated call logging.

### 8. Security, Trust & Footer
- Five-Tier Administrative Hierarchy diagram (Super Admin → State → District → Mandal → Booth).
- Data Protection (DPDP Act 2023), End-to-End Encryption, and High Availability.
- Footer with Tripura helplines (1800-345-YUVA, 104/108), quick links, and cultural tribute.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom saffron & navy design tokens
- **Icons**: Lucide-React
- **Micro-Interactions**: Canvas-Confetti, CSS Keyframe animations, Glassmorphism
- **Self-Contained Data**: Rich mock datasets in `src/data/tripuraData.js`

---

## 🏃 How to Run

### Development Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build:
```bash
npm run build
```
Built files are generated in `dist/`.

### Running on XAMPP (Apache):
Since the project is situated inside `c:\xampp\htdocs\My_Personal_Projects\balchal`:
Simply start Apache in XAMPP and open:
[http://localhost/My_Personal_Projects/balchal/](http://localhost/My_Personal_Projects/balchal/)
(The root `index.php` automatically routes to `dist/`).

