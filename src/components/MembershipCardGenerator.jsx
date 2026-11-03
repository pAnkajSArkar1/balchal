import React, { useState, useMemo } from 'react';
import { 
  Sparkles, Download, CheckCircle, ArrowRight, ArrowLeft, 
  ShieldCheck, QrCode, User, MapPin, Droplet, Award, 
  Calendar, Phone, Mail, Flame, Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRIPURA_DISTRICTS } from '../data/tripuraData';
import { useToast } from './Toast';

export const MembershipCardGenerator = () => {
  const [step, setStep] = useState(1);
  const { addToast } = useToast();

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Rajdeep Chakraborty',
    dob: '2001-08-15',
    gender: 'Male',
    phone: '98621 04821',
    email: 'rajdeep.tripura@gmail.com',
    bloodGroup: 'O+',
    district: 'West Tripura',
    mandal: 'Banamalipur',
    constituency: '09-Banamalipur AC',
    address: 'Melarmath, Agartala',
    profession: 'Graduate Student / Tech Volunteer',
    skills: ['First Aid & Blood Donor', 'Disaster Relief', 'Digital Media Outreach'],
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    memberId: 'TR-AGT-2026-8841',
    issuedDate: '11/2026',
    validUntil: '12/2028'
  });

  // Available Mandals based on district
  const availableMandals = useMemo(() => {
    const d = TRIPURA_DISTRICTS.find((item) => item.name === formData.district);
    return d ? d.mandals : ['Central Mandal'];
  }, [formData.district]);

  const handleDistrictChange = (dist) => {
    const d = TRIPURA_DISTRICTS.find((item) => item.name === dist);
    setFormData((prev) => ({
      ...prev,
      district: dist,
      mandal: d ? d.mandals[0] : 'Central'
    }));
  };

  const handleSkillToggle = (skill) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(skill);
      if (exists) {
        return { ...prev, skills: prev.skills.filter((s) => s !== skill) };
      } else {
        return { ...prev, skills: [...prev.skills, skill] };
      }
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Completed registration
      triggerCelebration();
    }
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F97316', '#0B192C', '#15803D', '#EAB308']
    });
    addToast('🎉 Digital Membership Card issued and activated successfully!', 'success');
  };

  const handleDownload = () => {
    triggerCelebration();
    window.print();
  };

  return (
    <section id="membership-card" className="py-20 bg-gradient-to-b from-slate-50 via-orange-50/30 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5 text-saffron-600 fill-saffron-600" /> Instant Digital Identification
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Digital Membership Card & Onboarding Generator
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Join the BJP Yuva Morcha Tripura digital brigade. Complete the 3-step verification to generate and download your official QR-verified youth ID card in real-time.
          </p>
        </div>

        {/* 2-Column Layout: Form (Left) & Physical-Style Live Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Multi-step interactive registration form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
            
            {/* Step Progress Tracker */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                  step >= 1 ? 'bg-saffron-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  1
                </span>
                <span className="text-xs font-bold text-slate-700 hidden sm:inline">Personal Info</span>
              </div>
              <div className="h-0.5 w-8 bg-slate-200" />
              <div className="flex items-center gap-2">
                <span className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                  step >= 2 ? 'bg-saffron-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  2
                </span>
                <span className="text-xs font-bold text-slate-700 hidden sm:inline">Location & Mandal</span>
              </div>
              <div className="h-0.5 w-8 bg-slate-200" />
              <div className="flex items-center gap-2">
                <span className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                  step === 3 ? 'bg-saffron-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  3
                </span>
                <span className="text-xs font-bold text-slate-700 hidden sm:inline">Skills & Interests</span>
              </div>
            </div>

            <form onSubmit={handleNext} className="space-y-4">
              
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider text-saffron-700">
                    Step 1: Personal Identity & Contact
                  </h3>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name (as per Govt ID):</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Date of Birth:</label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Gender:</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Mobile (Tripura):</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Blood Group:</label>
                      <select
                        value={formData.bloodGroup}
                        onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-rose-600 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                      >
                        {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
                          <option key={bg} value={bg}>{bg}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address:</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Location */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider text-saffron-700">
                    Step 2: Tripura District & Mandal Affiliation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Home District:</label>
                      <select
                        value={formData.district}
                        onChange={(e) => handleDistrictChange(e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                      >
                        {TRIPURA_DISTRICTS.map((d) => (
                          <option key={d.id} value={d.name}>{d.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Mandal:</label>
                      <select
                        value={formData.mandal}
                        onChange={(e) => setFormData({ ...formData, mandal: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                      >
                        {availableMandals.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Assembly Constituency:</label>
                    <input
                      type="text"
                      value={formData.constituency}
                      onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                      placeholder="e.g. 09-Banamalipur AC"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Residential Address / Ward:</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Skills & Interests */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider text-saffron-700">
                    Step 3: Profession, Skills & Volunteer Wing
                  </h3>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Current Profession / Status:</label>
                    <input
                      type="text"
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-navy-950 focus:ring-2 focus:ring-saffron-500 focus:bg-white"
                      placeholder="e.g. Engineering Student, Entrepreneur, Teacher..."
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-2">Volunteer Interests (Select all that apply):</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        'First Aid & Blood Donor',
                        'Disaster Relief',
                        'Digital Media Outreach',
                        'Event Management',
                        'Tribal Youth Engagement',
                        'Sports & Fitness Drive',
                        'Govt Schemes Assistance',
                        'Environmental Swachhata'
                      ].map((skill) => (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => handleSkillToggle(skill)}
                          className={`p-2.5 rounded-xl border text-left font-medium transition-all flex items-center justify-between ${
                            formData.skills.includes(skill)
                              ? 'bg-saffron-50 border-saffron-500 text-saffron-900 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <span className="truncate">{skill}</span>
                          {formData.skills.includes(skill) && (
                            <CheckCircle className="w-3.5 h-3.5 text-saffron-600 shrink-0 ml-1" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Photo avatar selector */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Choose Photo Avatar:</label>
                    <div className="flex items-center gap-3">
                      {[
                        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80'
                      ].map((url, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({ ...formData, avatarUrl: url })}
                          className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                            formData.avatarUrl === url ? 'border-saffron-600 scale-105 shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={url} alt="Avatar" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Form Buttons */}
              <div className="pt-4 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white text-xs font-bold shadow-md shadow-saffron-500/25 flex items-center gap-2 group"
                >
                  <span>{step === 3 ? 'Generate & Activate Card' : 'Continue to Next Step'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Physical-Style Digital Membership Card Preview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="w-full text-center mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Live Interactive Preview
              </span>
            </div>

            {/* Physical-Style Membership Card Container */}
            <div className="w-full max-w-sm rounded-3xl p-6 bg-gradient-to-br from-navy-950 via-royal-700 to-navy-900 text-white shadow-2xl border-2 border-saffron-500/40 relative overflow-hidden group select-none">
              
              {/* Holographic Saffron diagonal sheen */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-bl from-saffron-400/20 via-transparent to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-1.5 gradient-tricolor" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-saffron-500 to-amber-400 flex items-center justify-center text-white shadow-md">
                    <Flame className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wider uppercase text-white">YUVA SAMPARK</h4>
                    <p className="text-[9px] text-saffron-300 font-bold uppercase tracking-widest">BJP Yuva Morcha Tripura</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono font-bold bg-white/10 px-2 py-0.5 rounded text-slate-200 border border-white/20">
                    DIGITAL ID
                  </span>
                </div>
              </div>

              {/* Card Body: Photo & Credentials */}
              <div className="flex gap-4 items-center mb-4">
                <div className="relative shrink-0">
                  <img
                    src={formData.avatarUrl}
                    alt={formData.fullName}
                    className="w-20 h-24 rounded-2xl object-cover border-2 border-saffron-400 shadow-lg"
                  />
                  <span className="absolute -bottom-2 -right-1 px-1.5 py-0.5 bg-rose-600 rounded text-[9px] font-black font-mono shadow">
                    {formData.bloodGroup}
                  </span>
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-extrabold text-white leading-tight">
                    {formData.fullName || 'Member Name'}
                  </h3>
                  <p className="text-[11px] text-saffron-300 font-medium">
                    {formData.profession || 'Youth Volunteer'}
                  </p>
                  <p className="text-[10px] text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-saffron-400 shrink-0" />
                    <span className="truncate">{formData.mandal}, {formData.district}</span>
                  </p>
                  <p className="text-[10px] text-slate-300 font-mono">
                    ID: <strong className="text-white tracking-wider">{formData.memberId}</strong>
                  </p>
                </div>
              </div>

              {/* Skills / Interests Pill Row */}
              <div className="mb-4">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Volunteer Wings:
                </span>
                <div className="flex flex-wrap gap-1">
                  {formData.skills.slice(0, 3).map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-medium bg-white/10 text-saffron-200 px-2 py-0.5 rounded-md border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom: QR Verification & Dates */}
              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[10px] text-slate-300">
                <div>
                  <p className="text-[8px] uppercase tracking-wider text-slate-400">Valid Through</p>
                  <p className="font-mono font-bold text-white">{formData.validUntil}</p>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded-xl border border-white/15">
                  <QrCode className="w-7 h-7 text-white" />
                  <div className="text-[8px] leading-tight text-slate-200">
                    <span className="font-bold block text-emerald-400">VERIFIED</span>
                    <span>State Registry</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download / Print Actions */}
            <div className="w-full max-w-sm mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleDownload}
                className="py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-saffron-400" />
                <span>Download Card</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-navy-950 font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Print Card</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-3 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Digital Card recognized for BJYM Youth Conventions</span>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

