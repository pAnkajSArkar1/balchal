import React, { useState } from 'react';
import { X, Send, MessageSquare, Radio, Users, CheckCheck, Sparkles, Filter } from 'lucide-react';
import { useToast } from './Toast';
import { TRIPURA_DISTRICTS } from '../data/tripuraData';

export const BroadcastModal = ({ isOpen, onClose, onBroadcastSent }) => {
  const [channel, setChannel] = useState('both'); // 'sms' | 'whatsapp' | 'both'
  const [districtFilter, setDistrictFilter] = useState('all');
  const [targetAudience, setTargetAudience] = useState('all'); // 'all' | 'blood_donors' | 'active_volunteers'
  const [template, setTemplate] = useState('emergency');
  const [customText, setCustomText] = useState(
    'Yuva Sampark Alert: Urgent youth volunteer mobilization required for state blood donation drive. Report to your Mandal Convenor by 9:00 AM.'
  );
  const [isSending, setIsSending] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  // Calculate simulated recipient count
  const calculateRecipients = () => {
    let base = 32500;
    if (districtFilter !== 'all') {
      const dist = TRIPURA_DISTRICTS.find((d) => d.name === districtFilter);
      base = dist ? dist.volunteersCount : 4000;
    }
    if (targetAudience === 'blood_donors') base = Math.floor(base * 0.35);
    if (targetAudience === 'active_volunteers') base = Math.floor(base * 0.7);
    return base.toLocaleString('en-IN');
  };

  const handleTemplateChange = (e) => {
    const val = e.target.value;
    setTemplate(val);
    if (val === 'emergency') {
      setCustomText('Yuva Sampark Alert: Urgent youth volunteer mobilization required for upcoming blood donation drive. Report to your Mandal Convenor.');
    } else if (val === 'scheme') {
      setCustomText('State Scheme Reminder: Chief Minister Swavalamban Yojana (CMSY) applications open for youth entrepreneurs with 30% subsidy. Check Yuva Sampark app.');
    } else if (val === 'rally') {
      setCustomText('Yuva Sankalp Sammelan: All Mandal volunteers assemble at Swami Vivekananda Maidan on 12th Dec at 10 AM. Carry digital volunteer ID.');
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      addToast(
        `Broadcast broadcasted to ${calculateRecipients()} youth recipients in ${districtFilter === 'all' ? 'All Tripura' : districtFilter} via ${channel.toUpperCase()}!`,
        'success'
      );
      if (onBroadcastSent) {
        onBroadcastSent({
          target: `${districtFilter === 'all' ? 'All Districts' : districtFilter} (${targetAudience})`,
          channel,
          message: customText,
          time: 'Just now',
          recipients: calculateRecipients()
        });
      }
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-navy-900 text-white flex items-center justify-between border-b border-royal-700">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-saffron-500/20 text-saffron-400 border border-saffron-500/30">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold">State Broadcast Console</h3>
              <p className="text-xs text-slate-300">Push SMS & WhatsApp alerts to verified youth rosters</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSend} className="p-6 space-y-4">
          {/* Target Audience Filters */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Target District:</label>
              <select
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:ring-1 focus:ring-saffron-500 focus:outline-none"
              >
                <option value="all">All 8 Tripura Districts</option>
                {TRIPURA_DISTRICTS.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name} ({d.volunteersCount} vols)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Audience Segment:</label>
              <select
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:ring-1 focus:ring-saffron-500 focus:outline-none"
              >
                <option value="all">All Registered Volunteers</option>
                <option value="blood_donors">Verified Blood Donors Pool</option>
                <option value="active_volunteers">Active Brigade Leaders</option>
              </select>
            </div>
          </div>

          {/* Delivery Channel */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">Dispatch Channel:</label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setChannel('whatsapp')}
                className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 font-semibold transition-all ${
                  channel === 'whatsapp'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setChannel('sms')}
                className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 font-semibold transition-all ${
                  channel === 'sms'
                    ? 'bg-saffron-50 border-saffron-500 text-saffron-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Send className="w-3.5 h-3.5 text-saffron-600" /> SMS Gateway
              </button>
              <button
                type="button"
                onClick={() => setChannel('both')}
                className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 font-semibold transition-all ${
                  channel === 'both'
                    ? 'bg-navy-900 border-navy-900 text-white shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Dual Push
              </button>
            </div>
          </div>

          {/* Template select */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Pre-approved Quick Template:</label>
            <select
              value={template}
              onChange={handleTemplateChange}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-saffron-500"
            >
              <option value="emergency">🚨 Emergency Blood / Disaster Mobilization</option>
              <option value="scheme">💼 Tripura State Scheme / Subsidy Alert</option>
              <option value="rally">🚩 Sammelan & Youth Rally Assembly Notice</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <div className="flex justify-between items-center mb-1 text-xs">
              <label className="font-semibold text-slate-700">Message Content:</label>
              <span className="text-slate-400 font-mono">{customText.length} / 240 chars</span>
            </div>
            <textarea
              rows={4}
              maxLength={240}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-sans text-slate-800 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:bg-white resize-none transition-all"
              required
            />
          </div>

          {/* Recipient summary badge */}
          <div className="p-3 bg-saffron-50 border border-saffron-200/80 rounded-2xl flex items-center justify-between text-xs text-saffron-900">
            <span className="flex items-center gap-2 font-semibold">
              <Users className="w-4 h-4 text-saffron-600" /> Estimated Reach:
            </span>
            <span className="font-black text-sm font-mono text-saffron-700">
              {calculateRecipients()} Volunteers
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSending}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white text-xs font-bold shadow-lg shadow-saffron-500/25 flex items-center gap-2 disabled:opacity-70 transition-all"
            >
              {isSending ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Broadcast</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

