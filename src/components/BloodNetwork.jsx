import React, { useState, useMemo } from 'react';
import { 
  HeartHandshake, AlertOctagon, Phone, MessageSquare, 
  MapPin, CheckCircle2, ShieldCheck, Droplet, Search, 
  Send, Sparkles, UserPlus, ArrowRight, Clock, Award
} from 'lucide-react';
import { BLOOD_URGENT_ALERTS, MOCK_DONORS, TRIPURA_DISTRICTS } from '../data/tripuraData';
import { useToast } from './Toast';

export const BloodNetwork = ({ onCallDonor }) => {
  const [bloodGroup, setBloodGroup] = useState('All');
  const [district, setDistrict] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [donorsList, setDonorsList] = useState(MOCK_DONORS);
  const { addToast } = useToast();

  // Pledge Form State
  const [pledgeName, setPledgeName] = useState('');
  const [pledgePhone, setPledgePhone] = useState('');
  const [pledgeGroup, setPledgeGroup] = useState('O+');
  const [pledgeDistrict, setPledgeDistrict] = useState('West Tripura');
  const [pledgeMandal, setPledgeMandal] = useState('Agartala City');
  const [isPledging, setIsPledging] = useState(false);

  // Available mandals for pledge form based on selected pledgeDistrict
  const availablePledgeMandals = useMemo(() => {
    const d = TRIPURA_DISTRICTS.find((item) => item.name === pledgeDistrict);
    return d ? d.mandals : ['Central Mandal'];
  }, [pledgeDistrict]);

  const bloodGroups = ['All', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  // Filtered Donors
  const filteredDonors = useMemo(() => {
    return donorsList.filter((d) => {
      const matchGroup = bloodGroup === 'All' || d.bloodGroup === bloodGroup;
      const matchDistrict = district === 'All' || d.district === district;
      const matchSearch =
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.mandal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.city.toLowerCase().includes(searchTerm.toLowerCase());
      return matchGroup && matchDistrict && matchSearch;
    });
  }, [donorsList, bloodGroup, district, searchTerm]);

  // Handle Send Alert to Donor
  const handleSendAlert = (donor) => {
    addToast(
      `Emergency notification ping sent to ${donor.name} (${donor.bloodGroup}) via SMS & WhatsApp!`,
      'success'
    );
  };

  // Handle Pledge Blood
  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    if (!pledgeName || pledgePhone.length < 10) {
      addToast('Please enter your full name and 10-digit mobile number', 'error');
      return;
    }
    setIsPledging(true);

    setTimeout(() => {
      setIsPledging(false);
      const newDonor = {
        id: `don-${Date.now()}`,
        name: pledgeName,
        bloodGroup: pledgeGroup,
        district: pledgeDistrict,
        mandal: pledgeMandal,
        city: pledgeMandal,
        phone: `+91 ${pledgePhone.slice(0, 5)} XX${pledgePhone.slice(-2)}`,
        totalDonations: 0,
        lastDonated: 'Ready to Donate',
        available: true,
        badge: 'Newly Pledged Hero'
      };

      setDonorsList((prev) => [newDonor, ...prev]);
      addToast(
        `Dhanyawad ${pledgeName}! You are now enrolled in Tripura's Emergency Blood Lifeline.`,
        'success'
      );
      setPledgeName('');
      setPledgePhone('');
    }, 800);
  };

  return (
    <section id="blood-bank" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative blood glow */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Droplet className="w-3.5 h-3.5 text-rose-600 fill-rose-600" /> 24/7 State Emergency Lifeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Tripura Blood Donation & Rapid Response Network
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Instant connectivity between hospital emergency trauma units and verified youth donors across all 8 districts.
          </p>
        </div>

        {/* Live Urgent Requests Ticker Banner */}
        <div className="mb-10 bg-gradient-to-r from-rose-950 via-rose-900 to-navy-950 rounded-2xl p-4 text-white shadow-xl border border-rose-800/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <span className="flex h-3.5 w-3.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500"></span>
              </span>
              <div className="flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-rose-400" />
                <span className="text-xs uppercase font-extrabold tracking-wider bg-rose-500/30 text-rose-200 px-2 py-0.5 rounded border border-rose-500/50">
                  Live SOS Alerts
                </span>
              </div>
            </div>

            {/* Marquee or Scrolling Item Container */}
            <div className="flex-1 overflow-x-auto py-1 scrollbar-none flex gap-4">
              {BLOOD_URGENT_ALERTS.map((alert) => (
                <div
                  key={alert.id}
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-rose-500/30 rounded-xl px-4 py-2 shrink-0 flex items-center gap-3 transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-rose-600 text-white font-black font-mono flex items-center justify-center text-sm shadow">
                    {alert.bloodGroup}
                  </span>
                  <div className="text-left text-xs">
                    <p className="font-bold text-white flex items-center gap-2">
                      <span>{alert.hospital}</span>
                      <span className="text-[10px] text-rose-300 font-mono">({alert.district})</span>
                    </p>
                    <p className="text-[11px] text-slate-300 flex items-center gap-2">
                      <span>{alert.unit}</span>
                      <span>•</span>
                      <span className="text-rose-400 font-semibold">{alert.timestamp}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onCallDonor({
                        name: alert.contactName,
                        phone: alert.phone,
                        role: `Hospital SOS Coordinator (${alert.hospital})`,
                        district: alert.district
                      });
                    }}
                    className="ml-2 px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold flex items-center gap-1 shadow-sm transition-all"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Desk</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Section: Find Donors (Left) + Pledge Blood Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Find Donors Search & List (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Cascading Filter Bar */}
            <div className="glass-panel p-5 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-navy-950 flex items-center gap-2">
                  <Search className="w-4 h-4 text-saffron-600" />
                  <span>Search Verified Donors Pool</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium font-mono">
                  {filteredDonors.length} Verified Available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Select Blood Group */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Select Blood Group:
                  </label>
                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-navy-900 focus:ring-1 focus:ring-rose-500 focus:outline-none"
                  >
                    {bloodGroups.map((bg) => (
                      <option key={bg} value={bg}>
                        {bg === 'All' ? 'All Blood Groups' : `Group ${bg}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select District (Cascading) */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Select District:
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-navy-900 focus:ring-1 focus:ring-rose-500 focus:outline-none"
                  >
                    <option value="All">All 8 Districts</option>
                    {TRIPURA_DISTRICTS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Keyword Search */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Search Mandal / City:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Agartala, Udaipur..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-navy-900 placeholder-slate-400 focus:ring-1 focus:ring-rose-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Donors Output Cards List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredDonors.map((donor) => (
                <div
                  key={donor.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex flex-col items-center justify-center text-rose-600 font-mono font-black shadow-sm shrink-0">
                        <span className="text-base leading-none">{donor.bloodGroup}</span>
                        <span className="text-[9px] font-sans font-semibold uppercase text-rose-500 mt-0.5">Donor</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-navy-950 text-sm">{donor.name}</h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" title="Verified Tripura Youth" />
                        </div>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{donor.mandal}, {donor.district}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs py-2 px-3 bg-slate-50 rounded-xl mb-3 border border-slate-100">
                    <span className="text-slate-500 text-[11px]">
                      Donations: <strong className="text-navy-900 font-mono">{donor.totalDonations} times</strong>
                    </span>
                    <span className="text-[11px] font-bold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded-full">
                      {donor.badge}
                    </span>
                  </div>

                  {/* Actions: Request Call & Send Alert */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onCallDonor({
                        name: donor.name,
                        phone: donor.phone,
                        role: `Blood Donor (${donor.bloodGroup})`,
                        district: donor.district
                      })}
                      className="py-2 px-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Request Call</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSendAlert(donor)}
                      className="py-2 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs border border-rose-200 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5 text-rose-600" />
                      <span>Send Alert</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredDonors.length === 0 && (
              <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-300 p-6">
                <Droplet className="w-10 h-10 text-rose-300 mx-auto mb-2" />
                <p className="text-navy-900 font-bold">No verified donors matched this specific criteria</p>
                <p className="text-xs text-slate-500 mt-1">Try switching to 'All Districts' or reset filters.</p>
              </div>
            )}
          </div>

          {/* Right Column: "Pledge Blood" RSVP Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-rose-900 via-rose-950 to-navy-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-rose-800 sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  <UserPlus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Pledge Blood RSVP</h3>
                  <p className="text-xs text-rose-200">Join Tripura's Emergency Hero Roster</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                One unit of blood saves three lives. Pledge yourself as a standby donor for hospital emergencies across Tripura.
              </p>

              <form onSubmit={handlePledgeSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-200 block mb-1">Your Full Name:</label>
                  <input
                    type="text"
                    placeholder="e.g. Sourav Karmakar"
                    value={pledgeName}
                    onChange={(e) => setPledgeName(e.target.value)}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-rose-400 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-200 block mb-1">Mobile Phone (Tripura):</label>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="98621 00000"
                    value={pledgePhone}
                    onChange={(e) => setPledgePhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full p-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-rose-400 font-mono"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-slate-200 block mb-1">Blood Group:</label>
                    <select
                      value={pledgeGroup}
                      onChange={(e) => setPledgeGroup(e.target.value)}
                      className="w-full p-2.5 bg-slate-900 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-rose-400 font-bold"
                    >
                      {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
                        <option key={bg} value={bg}>
                          {bg}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-200 block mb-1">District:</label>
                    <select
                      value={pledgeDistrict}
                      onChange={(e) => setPledgeDistrict(e.target.value)}
                      className="w-full p-2.5 bg-slate-900 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-rose-400 font-medium"
                    >
                      {TRIPURA_DISTRICTS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-200 block mb-1">Mandal / Area:</label>
                  <select
                    value={pledgeMandal}
                    onChange={(e) => setPledgeMandal(e.target.value)}
                    className="w-full p-2.5 bg-slate-900 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-rose-400 font-medium"
                  >
                    {availablePledgeMandals.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPledging}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-xs shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 group transition-all"
                  >
                    {isPledging ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <HeartHandshake className="w-4 h-4" />
                        <span>Pledge Blood Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Masked phone privacy protection enabled.</span>
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

