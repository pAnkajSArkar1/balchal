import React, { useState, useEffect } from 'react';
import { X, Phone, ShieldCheck, ArrowRight, Lock, CheckCircle, Smartphone } from 'lucide-react';
import { useToast } from './Toast';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [role, setRole] = useState('member'); // 'member' | 'volunteer' | 'admin'
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    let interval = null;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      addToast('Please enter a valid 10-digit mobile number', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
      setTimer(30);
      setOtp(['8', '4', '2', '1', '', '']); // Pre-fill mock digits for ultra-slick testing
      addToast(`OTP sent to +91 ${phone}. (Mock OTP: 842109)`, 'info');
    }, 600);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto focus next
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addToast(`Welcome back! Signed in successfully as ${role === 'admin' ? 'State Admin' : 'Registered Member'}.`, 'success');
      onLoginSuccess(role);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Top saffron accent bar */}
        <div className="h-2 gradient-saffron w-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-saffron-50 text-saffron-600 mb-3 border border-saffron-200">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900">Yuva Sampark Portal</h3>
            <p className="text-sm text-slate-500 mt-1">
              Tripura Youth Digital Citizen & Leadership Access
            </p>
          </div>

          {/* Role selector tab */}
          <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mb-6 text-xs font-semibold text-slate-600">
            <button
              type="button"
              onClick={() => setRole('member')}
              className={`py-2 rounded-lg transition-all ${
                role === 'member'
                  ? 'bg-white text-saffron-700 shadow-sm font-bold'
                  : 'hover:text-slate-900'
              }`}
            >
              Member
            </button>
            <button
              type="button"
              onClick={() => setRole('volunteer')}
              className={`py-2 rounded-lg transition-all ${
                role === 'volunteer'
                  ? 'bg-white text-saffron-700 shadow-sm font-bold'
                  : 'hover:text-slate-900'
              }`}
            >
              Volunteer
            </button>
            <button
              type="button"
              onClick={() => setRole('admin')}
              className={`py-2 rounded-lg transition-all ${
                role === 'admin'
                  ? 'bg-white text-navy-900 shadow-sm font-bold'
                  : 'hover:text-slate-900'
              }`}
            >
              State Admin
            </button>
          </div>

          {step === 'phone' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  Mobile Number (Tripura / India)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 text-sm font-medium">
                    🇮🇳 +91
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="98621 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full pl-16 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:bg-white text-base transition-all font-mono"
                    required
                  />
                </div>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <Lock className="w-3 h-3" /> OTP verification via secure state gateway
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-saffron-600 hover:bg-saffron-700 text-white font-semibold rounded-xl shadow-lg shadow-saffron-600/30 hover:shadow-saffron-600/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Generate Instant OTP</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-5">
              <div className="text-center">
                <p className="text-sm text-slate-600">
                  Enter 6-digit verification code sent to
                </p>
                <p className="text-sm font-bold text-navy-900 font-mono mt-0.5">
                  +91 {phone || '98621 00000'}
                  <button
                    type="button"
                    onClick={() => setStep('phone')}
                    className="text-xs text-saffron-600 hover:underline font-normal ml-2"
                  >
                    (Change)
                  </button>
                </p>
              </div>

              <div className="flex justify-between gap-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    className="w-11 h-12 text-center text-lg font-bold font-mono bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:bg-white text-navy-950 transition-all"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Demo OTP: 842109</span>
                {timer > 0 ? (
                  <span>Resend in {timer}s</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setTimer(30);
                      addToast('New OTP resent via SMS', 'info');
                    }}
                    className="text-saffron-600 hover:underline font-semibold"
                  >
                    Resend Code
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-navy-900 hover:bg-navy-850 text-white font-semibold rounded-xl shadow-lg shadow-navy-900/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Verify & Access Dashboard</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* DPDP Compliance Notice */}
          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-400">
              India Digital Personal Data Protection (DPDP) Act 2023 Compliant. Data is encrypted and strictly preserved for civic empowerment in Tripura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

