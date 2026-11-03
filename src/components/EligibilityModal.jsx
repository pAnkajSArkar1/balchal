import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Sparkles, Filter, ExternalLink, ArrowRight } from 'lucide-react';
import { SCHEMES_DATA } from '../data/tripuraData';

export const EligibilityModal = ({ isOpen, onClose, preselectedSchemeId }) => {
  const [age, setAge] = useState(23);
  const [hasPrtc, setHasPrtc] = useState(true);
  const [status, setStatus] = useState('student');
  const [incomeRange, setIncomeRange] = useState('below_2.5L');

  if (!isOpen) return null;

  // Compute eligible schemes based on inputs
  const matchedSchemes = SCHEMES_DATA.map((scheme) => {
    let isEligible = true;
    let reasons = [];

    if (!hasPrtc) {
      isEligible = false;
      reasons.push('Tripura PRTC required');
    }
    if (age < scheme.minAge || age > scheme.maxAge) {
      isEligible = false;
      reasons.push(`Age must be between ${scheme.minAge} and ${scheme.maxAge}`);
    }
    if (scheme.id === 'sch-1' && status !== 'student') {
      isEligible = false;
      reasons.push('Must be an enrolled college student');
    }
    if (scheme.id === 'sch-3' && status !== 'tribal_entrepreneur') {
      // tribal specific
      if (status !== 'tribal_entrepreneur' && status !== 'entrepreneur') {
        isEligible = false;
        reasons.push('Must be indigenous/tribal youth entrepreneur');
      }
    }
    if (scheme.id === 'sch-6' && incomeRange === 'above_5L') {
      isEligible = false;
      reasons.push('Annual income must be below ₹2.5 Lakhs');
    }

    return {
      ...scheme,
      isEligible,
      reasons
    };
  });

  const eligibleCount = matchedSchemes.filter((s) => s.isEligible).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Instant Scheme Eligibility Engine</h3>
              <p className="text-xs text-saffron-100">Check matching grants, subsidies & student allowances in Tripura</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Parameters */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Age Slider */}
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-1.5 font-semibold text-slate-700">
              <span>Your Current Age:</span>
              <span className="text-sm font-bold text-saffron-600 font-mono px-2 py-0.5 bg-saffron-50 rounded-lg">
                {age} Years
              </span>
            </div>
            <input
              type="range"
              min="16"
              max="45"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full accent-saffron-500 cursor-pointer"
            />
          </div>

          {/* Domicile Check */}
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <span className="font-semibold text-slate-700 mb-1">Tripura Permanent Resident (PRTC)?</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setHasPrtc(true)}
                className={`flex-1 py-1.5 rounded-xl font-medium transition-all ${
                  hasPrtc
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                ✓ Yes (PRTC Holder)
              </button>
              <button
                type="button"
                onClick={() => setHasPrtc(false)}
                className={`flex-1 py-1.5 rounded-xl font-medium transition-all ${
                  !hasPrtc
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Occupation / Profile */}
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
            <label className="font-semibold text-slate-700 block mb-1">Profile / Current Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-1 focus:ring-saffron-500 font-medium"
            >
              <option value="student">Undergraduate / College Student</option>
              <option value="entrepreneur">Aspiring Youth Entrepreneur</option>
              <option value="tribal_entrepreneur">Tribal / TTAADC Area Entrepreneur</option>
              <option value="unemployed">Job Seeker / Skilling Trainee</option>
            </select>
          </div>

          {/* Income Bracket */}
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
            <label className="font-semibold text-slate-700 block mb-1">Annual Family Income:</label>
            <select
              value={incomeRange}
              onChange={(e) => setIncomeRange(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-1 focus:ring-saffron-500 font-medium"
            >
              <option value="below_2.5L">Below ₹2.5 Lakhs / year</option>
              <option value="2.5L_5L">₹2.5 Lakhs – ₹5.0 Lakhs / year</option>
              <option value="above_5L">Above ₹5.0 Lakhs / year</option>
            </select>
          </div>
        </div>

        {/* Results Banner */}
        <div className="px-6 py-3 bg-saffron-50/60 border-b border-saffron-100 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">
            Results based on your inputs:
          </span>
          <span className="font-bold text-saffron-700 bg-saffron-100 px-2.5 py-1 rounded-full">
            {eligibleCount} of {SCHEMES_DATA.length} Schemes Eligible
          </span>
        </div>

        {/* Schemes List with Matches */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {matchedSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className={`p-4 rounded-2xl border transition-all ${
                scheme.isEligible
                  ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-300'
                  : 'bg-slate-50/50 border-slate-200 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      {scheme.category}
                    </span>
                    {scheme.isEligible ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 100% Eligible
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                        <AlertCircle className="w-3 h-3 text-rose-600" /> Criteria Mismatch
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-navy-900">{scheme.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{scheme.description}</p>
                  
                  {/* Benefit Pill */}
                  <div className="mt-2.5 flex flex-wrap gap-2 text-xs">
                    <span className="font-bold text-saffron-700 bg-saffron-100 px-2.5 py-1 rounded-lg">
                      Grant: {scheme.subsidyAmount}
                    </span>
                    <span className="text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                      Age Bracket: {scheme.minAge} – {scheme.maxAge} yrs
                    </span>
                  </div>

                  {!scheme.isEligible && (
                    <div className="mt-2 text-[11px] text-rose-600">
                      Reason: {scheme.reasons.join(', ')}
                    </div>
                  )}
                </div>

                <div>
                  <a
                    href={scheme.portalLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      scheme.isEligible
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20'
                        : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <span>Apply</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-navy-900 hover:bg-navy-850 text-white font-semibold text-xs rounded-xl shadow-md transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

