import React, { useState } from 'react';
import { X, Send, User, MapPin, Mail, Phone, Calendar, MessageSquare, CheckCircle } from 'lucide-react';
import { useToast } from './Toast';

export const ConnectModal = ({ isOpen, onClose, leader }) => {
  const [purpose, setPurpose] = useState('meeting');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  if (!isOpen || !leader) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      addToast(`Representation dispatched to ${leader.name}'s office. Reference ID: TR-REP-${Math.floor(1000 + Math.random() * 9000)}.`, 'success');
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-navy-900 to-royal-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={leader.avatar}
              alt={leader.name}
              className="w-12 h-12 rounded-2xl object-cover border-2 border-saffron-500 shadow-md"
            />
            <div>
              <h3 className="font-bold text-base text-white">{leader.name}</h3>
              <p className="text-xs text-saffron-300 font-medium">{leader.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs flex flex-wrap justify-between gap-2 text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-saffron-600" /> {leader.area}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Mail className="w-3.5 h-3.5 text-royal-600" /> {leader.email}
            </span>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Purpose of Connection:</label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setPurpose('meeting')}
                className={`py-2 px-2.5 rounded-xl border text-center font-semibold transition-all ${
                  purpose === 'meeting'
                    ? 'bg-saffron-50 border-saffron-500 text-saffron-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                Office Meeting
              </button>
              <button
                type="button"
                onClick={() => setPurpose('grievance')}
                className={`py-2 px-2.5 rounded-xl border text-center font-semibold transition-all ${
                  purpose === 'grievance'
                    ? 'bg-saffron-50 border-saffron-500 text-saffron-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                Youth Grievance
              </button>
              <button
                type="button"
                onClick={() => setPurpose('collab')}
                className={`py-2 px-2.5 rounded-xl border text-center font-semibold transition-all ${
                  purpose === 'collab'
                    ? 'bg-saffron-50 border-saffron-500 text-saffron-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                Event / Program
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Your Full Name:</label>
              <input
                type="text"
                placeholder="e.g. Joydeep Saha"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-1 focus:ring-saffron-500"
                required
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Contact Phone:</label>
              <input
                type="tel"
                placeholder="+91 98620 XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-1 focus:ring-saffron-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Subject & Message Summary:</label>
            <textarea
              rows={3}
              placeholder="Briefly state the context or question for the leadership team..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-saffron-500"
              required
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold shadow-md shadow-saffron-600/30 flex items-center gap-2"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Request</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

