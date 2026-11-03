import React, { useState, useEffect } from 'react';
import { X, Phone, PhoneOff, Mic, MicOff, Volume2, ShieldCheck, User } from 'lucide-react';
import { useToast } from './Toast';

export const CallModal = ({ isOpen, onClose, contact, onCallLogged }) => {
  const [callStatus, setCallStatus] = useState('ringing'); // 'ringing' | 'connected' | 'ended'
  const [seconds, setSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    let timer = null;
    if (isOpen) {
      setCallStatus('ringing');
      setSeconds(0);

      // Auto-connect after 2 seconds for high polish simulation
      const connectTimeout = setTimeout(() => {
        setCallStatus('connected');
      }, 2200);

      return () => clearTimeout(connectTimeout);
    }
  }, [isOpen]);

  useEffect(() => {
    let interval = null;
    if (callStatus === 'connected') {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callStatus]);

  if (!isOpen || !contact) return null;

  const handleEndCall = () => {
    setCallStatus('ended');
    const durationFormatted = `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    addToast(`Call ended with ${contact.name}. Duration: ${durationFormatted}. Call log recorded.`, 'info');
    if (onCallLogged) {
      onCallLogged({
        name: contact.name,
        phone: contact.phone,
        role: contact.role || contact.badge || 'Volunteer',
        duration: durationFormatted,
        time: 'Just now',
        status: 'Completed'
      });
    }
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const formatTimer = (sec) => {
    const mins = Math.floor(sec / 60).toString().padStart(2, '0');
    const rem = (sec % 60).toString().padStart(2, '0');
    return `${mins}:${rem}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-gradient-to-b from-navy-900 to-navy-950 text-white rounded-3xl shadow-2xl border border-royal-600 p-6 text-center overflow-hidden">
        {/* State Banner */}
        <div className="text-[11px] text-saffron-400 font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 mb-6">
          <ShieldCheck className="w-3.5 h-3.5" /> Yuva Sampark Secure Hotline
        </div>

        {/* Contact Avatar / Pulse */}
        <div className="relative mx-auto w-24 h-24 mb-4">
          {callStatus === 'ringing' && (
            <span className="absolute inset-0 rounded-full bg-saffron-500/30 animate-ping" />
          )}
          <div className="relative w-full h-full rounded-full bg-royal-700 border-2 border-saffron-500 overflow-hidden flex items-center justify-center shadow-lg">
            {contact.avatar ? (
              <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
            ) : (
              <User className="w-10 h-10 text-slate-300" />
            )}
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-1">{contact.name}</h4>
        <p className="text-xs text-slate-300 mb-1">{contact.role || contact.district || 'Tripura Volunteer'}</p>
        <p className="text-xs font-mono text-saffron-300 mb-6">{contact.phone}</p>

        {/* Call Status Badge */}
        <div className="mb-8">
          {callStatus === 'ringing' ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium animate-pulse">
              <Phone className="w-3 h-3" /> Calling via VoLTE State Gateway...
            </div>
          ) : callStatus === 'connected' ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Connected • {formatTimer(seconds)}
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs">
              Call Disconnected
            </div>
          )}
        </div>

        {/* In-Call Controls */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className={`p-3 rounded-full border transition-all ${
              isMuted
                ? 'bg-rose-500/30 border-rose-500 text-rose-300'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            }`}
          >
            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          <button
            type="button"
            onClick={handleEndCall}
            className="p-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-xl shadow-rose-600/50 transform hover:scale-110 transition-all"
          >
            <PhoneOff className="w-6 h-6" />
          </button>

          <a
            href={`tel:${contact.phone?.replace(/\s+/g, '')}`}
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
            title="Dial directly on phone"
          >
            <Volume2 className="w-5 h-5" />
          </a>
        </div>

        <p className="text-[10px] text-slate-400">
          Simulated call interface with automated CRM logging for State Leadership records.
        </p>
      </div>
    </div>
  );
};

