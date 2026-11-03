import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sparkles, User, ShieldCheck, HeartHandshake, 
  ChevronRight, Smartphone, LogIn, Award, Building2, Flame
} from 'lucide-react';

export const Navbar = ({ 
  currentRole, 
  onRoleChange, 
  onOpenAuth, 
  onOpenRegister 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Youth Schemes', href: '#schemes' },
    { label: 'Blood Network', href: '#blood-bank' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'ID Generator', href: '#membership-card' },
    { label: 'Dashboards', href: '#dashboards' },
    { label: 'Trust & Security', href: '#security' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-md py-3'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Emblem */}
            <a href="#hero" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                {/* Tripura Saffron-Navy Emblem badge */}
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-saffron-600 via-saffron-500 to-amber-400 flex items-center justify-center shadow-lg shadow-saffron-500/25 group-hover:scale-105 transition-transform">
                  <Flame className="w-6 h-6 text-white fill-white" />
                </div>
                {/* Subtle tricolor mini dot */}
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white shadow">
                  <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-navy-900 group-hover:text-saffron-600 transition-colors">
                    YUVA SAMPARK
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-saffron-100 text-saffron-800">
                    Tripura
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
                  <span className="text-saffron-700 font-bold">BJYM</span>
                  <span>•</span>
                  <span>Connect • Engage • Serve</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-saffron-600 transition-colors py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Interactive Role Switcher Pill & Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Role Switcher Pill */}
              <div className="bg-slate-100/90 border border-slate-200/80 p-1 rounded-full flex items-center shadow-inner text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => onRoleChange('public')}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    currentRole === 'public'
                      ? 'bg-white text-navy-900 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  Public View
                </button>
                <button
                  type="button"
                  onClick={() => onRoleChange('volunteer')}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    currentRole === 'volunteer'
                      ? 'bg-saffron-500 text-white shadow-md font-bold'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-200" />
                  Member View
                </button>
                <button
                  type="button"
                  onClick={() => onRoleChange('admin')}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    currentRole === 'admin'
                      ? 'bg-navy-900 text-white shadow-md font-bold'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  <ShieldCheck className="w-3 h-3 text-saffron-400" />
                  State Admin
                </button>
              </div>

              {/* Action Buttons */}
              <button
                type="button"
                onClick={onOpenAuth}
                className="px-3.5 py-2 text-xs font-bold text-navy-900 hover:text-saffron-600 hover:bg-saffron-50 rounded-xl transition-all border border-slate-200 flex items-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>

              <button
                type="button"
                onClick={onOpenRegister}
                className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-saffron-500 via-saffron-600 to-saffron-700 hover:from-saffron-600 hover:to-saffron-800 rounded-xl shadow-md shadow-saffron-500/25 hover:shadow-saffron-500/40 transition-all flex items-center gap-1.5 transform hover:-translate-y-0.5"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Join Movement</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenRegister}
                className="px-3 py-1.5 text-xs font-bold text-white bg-saffron-600 rounded-lg shadow-sm"
              >
                Join Us
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-navy-900 rounded-xl hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer / Slide-out sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl z-50 flex flex-col p-6 animate-in slide-in-from-right duration-300 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-saffron-600 flex items-center justify-center text-white">
                  <Flame className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-navy-900">Yuva Sampark</h4>
                  <p className="text-[10px] text-slate-500">Tripura Youth Portal</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-800 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Role Switcher */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Switch Active View</p>
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
                <button
                  onClick={() => {
                    onRoleChange('public');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 rounded-lg text-center ${currentRole === 'public' ? 'bg-white text-navy-900 shadow font-bold' : ''}`}
                >
                  Public
                </button>
                <button
                  onClick={() => {
                    onRoleChange('volunteer');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 rounded-lg text-center ${currentRole === 'volunteer' ? 'bg-saffron-500 text-white shadow font-bold' : ''}`}
                >
                  Member
                </button>
                <button
                  onClick={() => {
                    onRoleChange('admin');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 rounded-lg text-center ${currentRole === 'admin' ? 'bg-navy-900 text-white shadow font-bold' : ''}`}
                >
                  Admin
                </button>
              </div>
            </div>

            {/* Navigation list */}
            <div className="space-y-1 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Quick Navigation</p>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="mt-auto pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-3 rounded-xl border border-slate-300 font-bold text-sm text-navy-900 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In via Mobile OTP</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Register & Get Digital Card</span>
              </button>

              <div className="pt-2 text-center text-[11px] text-slate-400">
                Helpline: 1800-345-YUVA • Agartala, Tripura
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

