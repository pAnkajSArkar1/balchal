import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Play, Shield, Smartphone, CheckCircle2, 
  Users, HeartHandshake, MapPin, Calendar, ArrowRight,
  TrendingUp, Activity, Award, Flame
} from 'lucide-react';

export const Hero = ({ onOpenRegister, onOpenDemo }) => {
  // Animated counters state
  const [counts, setCounts] = useState({
    members: 0,
    volunteers: 0,
    districts: 0,
    events: 0
  });

  useEffect(() => {
    const targets = {
      members: 125000,
      volunteers: 32500,
      districts: 60, // 60 Mandals
      events: 450
    };

    let step = 0;
    const totalSteps = 40;
    const interval = setInterval(() => {
      step++;
      const factor = Math.min(step / totalSteps, 1);
      // ease-out quad
      const ease = 1 - (1 - factor) * (1 - factor);

      setCounts({
        members: Math.floor(targets.members * ease),
        volunteers: Math.floor(targets.volunteers * ease),
        districts: Math.floor(targets.districts * ease),
        events: Math.floor(targets.events * ease)
      });

      if (step >= totalSteps) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-slate-50 tripura-contour-bg">
      {/* Decorative Tripura Tricolor & Cultural Gradients */}
      <div className="absolute top-0 inset-x-0 h-1.5 gradient-tricolor" />
      <div className="absolute top-20 right-0 -mr-40 w-96 h-96 bg-saffron-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 -ml-40 w-96 h-96 bg-royal-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Vector Silhouette of Ujjayanta Palace & Tripura Heritage Skyline */}
      <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none opacity-10 overflow-hidden flex justify-center items-end">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 text-navy-900 fill-current">
          {/* Ujjayanta Palace Dome & Classical Northeast Colonial Architectural Skyline Outline */}
          <path d="M0,120 L0,100 L80,100 L90,85 L110,85 L120,100 L200,100 L210,75 L230,75 L240,100 L350,100 L360,70 L380,70 L390,100 L480,100 L500,60 L520,60 L530,30 L550,20 C570,10 630,10 650,20 L670,30 L680,60 L700,60 L720,100 L810,100 L820,70 L840,70 L850,100 L960,100 L970,75 L990,75 L1000,100 L1080,100 L1090,85 L1110,85 L1120,100 L1200,100 L1200,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron-100/90 border border-saffron-300 text-saffron-900 text-xs sm:text-sm font-bold shadow-sm backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-500">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-saffron-600"></span>
            </span>
            <span className="text-saffron-950 font-black">BJP Yuva Morcha Tripura</span>
            <span className="text-saffron-400">|</span>
            <span className="text-saffron-800">Statewide Digital Youth Empowerment Platform</span>
          </div>
        </div>

        {/* Headline & Subtext */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight leading-[1.15] mb-6">
            Yuva Sampark —{' '}
            <span className="bg-gradient-to-r from-saffron-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Connect Youth
            </span>{' '}
            • Organise Action •{' '}
            <span className="bg-gradient-to-r from-royal-600 to-navy-900 bg-clip-text text-transparent">
              Build Communities
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            A secure, unified digital platform empowering Tripura's youth to register, volunteer, mobilize blood donation, and tap into state & central government opportunities.
          </p>
        </div>

        {/* Interactive CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Primary glowing button */}
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-saffron-700 hover:from-saffron-600 hover:to-saffron-800 text-white font-extrabold text-base shadow-xl shadow-saffron-500/35 hover:shadow-saffron-500/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
          >
            <Flame className="w-5 h-5 text-white fill-white group-hover:scale-110 transition-transform" />
            <span>Join the Movement & Get Digital ID</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Watch Demo button */}
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-navy-900 border border-slate-300 font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full bg-saffron-50 border border-saffron-200 flex items-center justify-center text-saffron-600 group-hover:bg-saffron-600 group-hover:text-white transition-colors">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <span>Watch Demo Video</span>
          </button>
        </div>

        {/* Trust Chips Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>India DPDP Act 2023 Compliant</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
            <Smartphone className="w-4 h-4 text-saffron-600" />
            <span>Web & Mobile Ready (PWA)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-royal-600" />
            <span>Verified Tripura Volunteers</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
            <HeartHandshake className="w-4 h-4 text-rose-600" />
            <span>24/7 State Blood SOS</span>
          </div>
        </div>

        {/* Live Impact Counter Ribbon */}
        <div className="relative">
          {/* Subtle outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-saffron-500/20 via-royal-600/20 to-emerald-500/20 rounded-3xl blur-md" />

          <div className="relative glass-panel rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">
              
              {/* Stat 1: Registered Members */}
              <div className="flex flex-col items-center text-center pt-3 lg:pt-0">
                <div className="p-3 rounded-2xl bg-saffron-50 text-saffron-600 mb-3 border border-saffron-100">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight font-mono">
                  {counts.members.toLocaleString('en-IN')}+
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
                  Registered Members
                </div>
                <div className="text-[11px] text-emerald-600 font-medium mt-0.5 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +1,840 this week
                </div>
              </div>

              {/* Stat 2: Active Volunteers */}
              <div className="flex flex-col items-center text-center pt-3 lg:pt-0">
                <div className="p-3 rounded-2xl bg-royal-600/10 text-royal-600 mb-3 border border-royal-600/20">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight font-mono">
                  {counts.volunteers.toLocaleString('en-IN')}+
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
                  Active Volunteers
                </div>
                <div className="text-[11px] text-emerald-600 font-medium mt-0.5 flex items-center gap-1">
                  <Activity className="w-3 h-3" /> Rapid SOS Ready
                </div>
              </div>

              {/* Stat 3: Districts & Mandals */}
              <div className="flex flex-col items-center text-center pt-3 lg:pt-0">
                <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 mb-3 border border-amber-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight font-mono">
                  8 Dist • {counts.districts} Mandals
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
                  100% Tripura Coverage
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  From Sabroom to Dharmanagar
                </div>
              </div>

              {/* Stat 4: Events & Drives */}
              <div className="flex flex-col items-center text-center pt-3 lg:pt-0">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 mb-3 border border-emerald-100">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight font-mono">
                  {counts.events}+
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
                  Events & Drives Conducted
                </div>
                <div className="text-[11px] text-saffron-600 font-medium mt-0.5">
                  Mega Camps & Skilling
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

