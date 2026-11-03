import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Shield, Users, Award } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-navy-900 rounded-3xl shadow-2xl border border-royal-600 overflow-hidden text-white">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-royal-700/80 bg-navy-950/50">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-saffron-500"></span>
            </span>
            <div>
              <h3 className="font-bold text-white text-base">Yuva Sampark — Platform Walkthrough & Vision</h3>
              <p className="text-xs text-slate-400">BJP Yuva Morcha Tripura • Digital Transformation 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
          {/* Background Visual Simulation with Tripura Skyline / Ujjayanta Palace motif & animated tech overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-royal-800/60 to-transparent z-10" />
          
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1400&auto=format&fit=crop&q=80"
            alt="Tripura Youth Gathering"
            className="w-full h-full object-cover opacity-50 scale-105 group-hover:scale-100 transition-all duration-700"
          />

          {/* Interactive Simulation Layer */}
          <div className="absolute z-20 text-center px-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/20 border border-saffron-500/40 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Official Digital Ecosystem Tour
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Empowering 1.25 Lakh Tripura Youths
            </h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Discover how Yuva Sampark connects all 8 districts, synchronizes 60 Mandals, operates 24/7 emergency blood donation desks, and streamlines state youth welfare.
            </p>

            {/* Play / Pause Interactive button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-sm shadow-xl shadow-saffron-500/30 transform hover:scale-105 transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Pause Stream</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                  <span>Resume Stream</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 z-30 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:text-saffron-400 transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:text-saffron-400 transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <span className="text-xs font-mono text-slate-300">01:42 / 03:30</span>
            </div>

            {/* Progress track */}
            <div className="flex-1 mx-6 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-saffron-500 rounded-full w-1/2 animate-pulse" />
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-saffron-500/20 text-saffron-400 border border-saffron-500/30">
                1080p HD
              </span>
              <Maximize2 className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Feature Tabs Footer */}
        <div className="p-6 bg-navy-950 flex flex-wrap gap-4 items-center justify-between border-t border-royal-700/80">
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Users className="w-4 h-4 text-saffron-400" /> 60 Mandal Networks
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-4 h-4 text-emerald-400" /> Verified Volunteer Auth
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-4 h-4 text-tripura-gold" /> CM Swavalamban Linkage
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
          >
            Close Player
          </button>
        </div>
      </div>
    </div>
  );
};

