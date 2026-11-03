import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, Award, Calendar, Bell, Users, Phone, 
  Send, BarChart3, CheckCircle2, Clock, MapPin, 
  Search, Filter, Sparkles, QrCode, ArrowUpRight, Check, X
} from 'lucide-react';
import { 
  UPCOMING_EVENTS, 
  MOCK_VOLUNTEERS_ADMIN, 
  TRIPURA_DISTRICTS, 
  DEMO_VOLUNTEER_PROFILE 
} from '../data/tripuraData';
import { useToast } from './Toast';

export const Dashboards = ({ 
  currentRole, 
  onRoleChange, 
  onOpenBroadcast, 
  onCallVolunteer 
}) => {
  const [activeTab, setActiveTab] = useState(currentRole === 'admin' ? 'admin' : 'volunteer');
  const { addToast } = useToast();

  // Synchronize when currentRole prop changes
  React.useEffect(() => {
    if (currentRole === 'admin') setActiveTab('admin');
    else if (currentRole === 'volunteer') setActiveTab('volunteer');
  }, [currentRole]);

  // Volunteer Dashboard State
  const [events, setEvents] = useState(UPCOMING_EVENTS);
  const [activeNotification, setActiveNotification] = useState([
    {
      id: 1,
      title: 'Emergency Blood SOS: West Tripura',
      desc: 'B+ blood donor urgently requested for AGMC & GBP Hospital.',
      time: '18 mins ago',
      unread: true
    },
    {
      id: 2,
      title: 'Youth Sammelan Pass Ready',
      desc: 'Your barcode delegate pass for 12 Dec convention has been generated.',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 3,
      title: 'CM Swavalamban Verification',
      desc: 'District DIC office completed initial verification for your MSME grant.',
      time: '1 day ago',
      unread: false
    }
  ]);

  // Admin Dashboard State
  const [adminSearch, setAdminSearch] = useState('');
  const [adminDistrictFilter, setAdminDistrictFilter] = useState('All');
  const [adminStatusFilter, setAdminStatusFilter] = useState('All');
  const [callLogs, setCallLogs] = useState([
    { name: 'Arindam Bhattacharjee', phone: '+91 94361 11204', duration: '1m 45s', time: '10 mins ago', status: 'Completed' },
    { name: 'Debolina Saha', phone: '+91 98620 99401', duration: '3m 12s', time: '45 mins ago', status: 'Completed' }
  ]);

  // Toggle Event RSVP
  const toggleRsvp = (eventId) => {
    setEvents((prev) =>
      prev.map((evt) => {
        if (evt.id === eventId) {
          const newStatus = !evt.isRsvpd;
          addToast(
            newStatus
              ? `RSVP confirmed for "${evt.title}". Your pass is active!`
              : `RSVP cancelled for "${evt.title}".`,
            newStatus ? 'success' : 'info'
          );
          return { ...evt, isRsvpd: newStatus };
        }
        return evt;
      })
    );
  };

  // Filtered Volunteers for Admin
  const filteredVolunteers = useMemo(() => {
    return MOCK_VOLUNTEERS_ADMIN.filter((v) => {
      const matchDist = adminDistrictFilter === 'All' || v.district === adminDistrictFilter;
      const matchStatus = adminStatusFilter === 'All' || v.status === adminStatusFilter;
      const matchQuery =
        v.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
        v.mandal.toLowerCase().includes(adminSearch.toLowerCase()) ||
        v.id.toLowerCase().includes(adminSearch.toLowerCase());
      return matchDist && matchStatus && matchQuery;
    });
  }, [adminDistrictFilter, adminStatusFilter, adminSearch]);

  return (
    <section id="dashboards" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-saffron-600" /> Multi-Role Interactive Experience
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              Role-Based Dashboard Showcase
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              Experience the dual interface powering Yuva Sampark: the personalized volunteer action workspace and the state command center.
            </p>
          </div>

          {/* Interactive Role Switcher Toggle */}
          <div className="bg-slate-200/80 p-1.5 rounded-2xl flex items-center shadow-inner self-start md:self-auto text-xs font-bold">
            <button
              type="button"
              onClick={() => {
                setActiveTab('volunteer');
                onRoleChange('volunteer');
              }}
              className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'volunteer'
                  ? 'bg-saffron-500 text-white shadow-md'
                  : 'text-slate-700 hover:text-navy-950'
              }`}
            >
              <Award className="w-4 h-4 text-amber-200" />
              <span>Volunteer Workspace</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('admin');
                onRoleChange('admin');
              }}
              className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'admin'
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'text-slate-700 hover:text-navy-950'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-saffron-400" />
              <span>State Admin Command</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: VOLUNTEER DASHBOARD */}
        {/* ======================================================== */}
        {activeTab === 'volunteer' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Volunteer Header Profile Card */}
            <div className="bg-gradient-to-r from-navy-900 via-royal-700 to-navy-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-royal-600/80">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                
                {/* Profile info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={DEMO_VOLUNTEER_PROFILE.avatarUrl}
                      alt={DEMO_VOLUNTEER_PROFILE.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-saffron-400 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded bg-rose-600 font-mono text-[9px] font-black">
                      {DEMO_VOLUNTEER_PROFILE.bloodGroup}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {DEMO_VOLUNTEER_PROFILE.name}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-saffron-500/20 text-saffron-300 border border-saffron-500/40 text-[10px] font-bold uppercase tracking-wider">
                        Active Volunteer
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                      <span>ID: <strong className="font-mono text-saffron-300">{DEMO_VOLUNTEER_PROFILE.id}</strong></span>
                      <span>•</span>
                      <span>{DEMO_VOLUNTEER_PROFILE.mandal}, {DEMO_VOLUNTEER_PROFILE.district}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {DEMO_VOLUNTEER_PROFILE.badges.map((b, i) => (
                        <span key={i} className="text-[10px] bg-white/10 text-saffron-200 px-2 py-0.5 rounded-md border border-white/10">
                          ★ {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Impact Badges & Numbers */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/10 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">
                      {DEMO_VOLUNTEER_PROFILE.volunteerHours} hrs
                    </div>
                    <div className="text-[10px] uppercase font-bold text-slate-300 mt-0.5">
                      Volunteer Service
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/10 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono">
                      {DEMO_VOLUNTEER_PROFILE.points}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-slate-300 mt-0.5">
                      Seva Karma Points
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/10 text-center flex flex-col justify-center items-center">
                    <QrCode className="w-6 h-6 text-saffron-300 mb-1" />
                    <span className="text-[10px] font-mono font-bold text-slate-200">
                      Digital Pass Active
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* 2-Columns: Registered Upcoming Events with Passes (Left) + Notification Feed (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Events & Barcode Passes (2 cols) */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-saffron-600" />
                    <span>Registered Events & Digital Entry Passes</span>
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {events.filter(e => e.isRsvpd).length} Confirmed Passes
                  </span>
                </div>

                <div className="space-y-4">
                  {events.map((evt) => (
                    <div
                      key={evt.id}
                      className={`bg-white rounded-3xl p-5 border transition-all shadow-sm ${
                        evt.isRsvpd ? 'border-saffron-300 ring-1 ring-saffron-400/20' : 'border-slate-200 opacity-80'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-saffron-50 text-saffron-700 px-2 py-0.5 rounded-md">
                              {evt.category}
                            </span>
                            <span className="text-xs text-slate-500 font-mono">
                              {evt.date} • {evt.time}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-navy-950">{evt.title}</h4>
                          <p className="text-xs text-slate-600 flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                            <span>{evt.venue}</span>
                          </p>

                          <div className="flex flex-wrap gap-2 text-[11px] text-slate-500 pt-1">
                            {evt.highlights.map((h, i) => (
                              <span key={i} className="bg-slate-100 px-2 py-0.5 rounded-md">
                                • {h}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Barcode & Pass Card */}
                        <div className="sm:w-48 bg-slate-50 border border-slate-200 rounded-2xl p-3 flex flex-col justify-between items-center text-center shrink-0">
                          {evt.isRsvpd ? (
                            <>
                              <div className="w-full">
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mb-1">
                                  ✓ Delegate Confirmed
                                </span>
                                {/* Simulated 1D / 2D Barcode */}
                                <div className="h-8 w-full bg-slate-900 rounded flex items-center justify-around px-2 my-1">
                                  <div className="w-1 h-6 bg-white" />
                                  <div className="w-2 h-6 bg-white" />
                                  <div className="w-0.5 h-6 bg-white" />
                                  <div className="w-1.5 h-6 bg-white" />
                                  <div className="w-1 h-6 bg-white" />
                                  <div className="w-2 h-6 bg-white" />
                                  <div className="w-0.5 h-6 bg-white" />
                                </div>
                                <p className="text-[9px] font-mono text-slate-500">
                                  PASS: {evt.passCode}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => toggleRsvp(evt.id)}
                                className="mt-2 text-[11px] text-rose-600 hover:underline font-semibold"
                              >
                                Cancel Pass
                              </button>
                            </>
                          ) : (
                            <div className="my-auto py-2">
                              <p className="text-xs text-slate-500 mb-2">Registration Open</p>
                              <button
                                type="button"
                                onClick={() => toggleRsvp(evt.id)}
                                className="px-4 py-2 bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                              >
                                Reserve Pass
                              </button>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Notification Feed (1 col) */}
              <div className="lg:col-span-1 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-saffron-600" />
                    <span>State Dispatch Feed</span>
                  </h3>
                  <span className="text-xs text-saffron-600 font-bold bg-saffron-50 px-2 py-0.5 rounded-full">
                    2 New
                  </span>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
                  {activeNotification.map((n) => (
                    <div
                      key={n.id}
                      className={`p-3.5 rounded-2xl border transition-all ${
                        n.unread
                          ? 'bg-orange-50/50 border-saffron-200'
                          : 'bg-slate-50 border-slate-100 opacity-70'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-xs font-bold text-navy-950">{n.title}</h4>
                        <span className="text-[10px] text-slate-400 whitespace-nowrap">{n.time}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{n.desc}</p>
                    </div>
                  ))}

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => addToast('Notification history synchronized with Tripura Central Desk.', 'info')}
                      className="text-xs font-bold text-saffron-600 hover:underline"
                    >
                      Mark all as read
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: STATE ADMIN DASHBOARD */}
        {/* ======================================================== */}
        {activeTab === 'admin' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Admin Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Total Registrations
                </span>
                <div className="text-2xl sm:text-3xl font-black text-navy-950 font-mono">
                  1,28,450
                </div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                  ↑ 9.4% MoM Growth
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Active Volunteers
                </span>
                <div className="text-2xl sm:text-3xl font-black text-saffron-600 font-mono">
                  34,820
                </div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                  60 Mandals Synchronized
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Blood SOS Donors
                </span>
                <div className="text-2xl sm:text-3xl font-black text-rose-600 font-mono">
                  9,430
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-1">
                  Avg response: 18 mins
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    State Dispatch
                  </span>
                  <div className="text-sm font-bold text-navy-900">
                    Instant Messaging
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenBroadcast}
                  className="mt-2 py-2 px-3 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Broadcast</span>
                </button>
              </div>
            </div>

            {/* District-wise Registration SVG/CSS Charts */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-saffron-600" />
                    <span>District-wise Registration & Volunteer Penetration</span>
                  </h3>
                  <p className="text-xs text-slate-500">Live breakdown across all 8 administrative zones in Tripura</p>
                </div>
                <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-xl">
                  Benchmark: 15,000 / District
                </span>
              </div>

              {/* Bar Chart Visual */}
              <div className="space-y-3">
                {TRIPURA_DISTRICTS.map((d) => {
                  const maxTarget = 45000;
                  const regPercent = Math.min((d.registeredCount / maxTarget) * 100, 100);
                  const volPercent = Math.min((d.volunteersCount / 12000) * 100, 100);

                  return (
                    <div key={d.id} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-navy-950">{d.name}</span>
                        <div className="flex gap-4 font-mono text-[11px]">
                          <span className="text-slate-600">{d.registeredCount.toLocaleString('en-IN')} Members</span>
                          <span className="text-saffron-600 font-bold">{d.volunteersCount.toLocaleString('en-IN')} Volunteers</span>
                        </div>
                      </div>
                      
                      {/* Bar tracks */}
                      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                        <div
                          style={{ width: `${regPercent}%` }}
                          className="h-full bg-gradient-to-r from-navy-900 to-royal-600 rounded-full transition-all duration-700"
                          title={`Registered: ${d.registeredCount}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-navy-900" /> Total Enrolled Members
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-saffron-500" /> Active Cadre Volunteers
                </span>
              </div>
            </div>

            {/* Volunteer Roster Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Table Controls */}
              <div className="p-6 border-b border-slate-100 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
                      <Users className="w-5 h-5 text-saffron-600" />
                      <span>Cadre & Volunteer Roster</span>
                    </h3>
                    <p className="text-xs text-slate-500">Search, direct call, and verify grassroots youth leaders</p>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenBroadcast}
                    className="px-4 py-2 bg-navy-900 hover:bg-navy-850 text-white text-xs font-bold rounded-xl shadow-sm flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-saffron-400" />
                    <span>Broadcast to Filtered ({filteredVolunteers.length})</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search volunteer name or ID..."
                      value={adminSearch}
                      onChange={(e) => setAdminSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-navy-950 focus:outline-none focus:ring-1 focus:ring-saffron-500"
                    />
                  </div>

                  <select
                    value={adminDistrictFilter}
                    onChange={(e) => setAdminDistrictFilter(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-navy-950 focus:outline-none"
                  >
                    <option value="All">All 8 Districts</option>
                    {TRIPURA_DISTRICTS.map((d) => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>

                  <select
                    value={adminStatusFilter}
                    onChange={(e) => setAdminStatusFilter(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-navy-950 focus:outline-none"
                  >
                    <option value="All">All Verification Statuses</option>
                    <option value="Active">Active Only</option>
                    <option value="Pending Verification">Pending Verification</option>
                  </select>
                </div>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-400 uppercase tracking-wider text-[10px] font-bold border-b border-slate-100">
                    <tr>
                      <th className="py-3.5 px-6">Volunteer Profile</th>
                      <th className="py-3.5 px-6">District / Mandal</th>
                      <th className="py-3.5 px-6">Blood Group</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6">Hours</th>
                      <th className="py-3.5 px-6 text-right">Direct Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredVolunteers.map((vol) => (
                      <tr key={vol.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6">
                          <div className="font-bold text-navy-950 text-sm">{vol.name}</div>
                          <div className="text-[11px] font-mono text-slate-400">{vol.id}</div>
                          <div className="flex gap-1 mt-1">
                            {vol.skills.map((s, i) => (
                              <span key={i} className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                                {s}
                              </span>
                            ))}
                          </div>
                        </td>

                        <td className="py-4 px-6">
                          <div className="font-semibold text-slate-800">{vol.mandal}</div>
                          <div className="text-slate-400 text-[11px]">{vol.district}</div>
                        </td>

                        <td className="py-4 px-6">
                          <span className="font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                            {vol.bloodGroup}
                          </span>
                        </td>

                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            vol.status === 'Active'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            {vol.status}
                          </span>
                        </td>

                        <td className="py-4 px-6 font-mono font-bold text-slate-700">
                          {vol.volunteerHours} hrs
                        </td>

                        <td className="py-4 px-6 text-right">
                          <button
                            type="button"
                            onClick={() => onCallVolunteer({
                              name: vol.name,
                              phone: vol.phone,
                              role: `Volunteer (${vol.mandal})`,
                              district: vol.district
                            })}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-saffron-50 hover:bg-saffron-100 text-saffron-700 font-bold rounded-xl border border-saffron-200 shadow-sm transition-all"
                          >
                            <Phone className="w-3 h-3 text-saffron-600" />
                            <span>Call</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredVolunteers.length === 0 && (
                <div className="p-8 text-center text-slate-500 text-xs">
                  No volunteers matching this search filter.
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

