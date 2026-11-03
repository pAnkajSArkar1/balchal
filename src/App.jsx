import React, { useState } from 'react';
import { ToastProvider, useToast } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SchemesHub } from './components/SchemesHub';
import { BloodNetwork } from './components/BloodNetwork';
import { LeadershipDirectory } from './components/LeadershipDirectory';
import { MembershipCardGenerator } from './components/MembershipCardGenerator';
import { Dashboards } from './components/Dashboards';
import { SecuritySection } from './components/SecuritySection';
import { Footer } from './components/Footer';

// Modals
import { AuthModal } from './components/AuthModal';
import { VideoModal } from './components/VideoModal';
import { EligibilityModal } from './components/EligibilityModal';
import { BroadcastModal } from './components/BroadcastModal';
import { CallModal } from './components/CallModal';
import { ConnectModal } from './components/ConnectModal';

const AppContent = () => {
  // Global View / Role State
  const [currentRole, setCurrentRole] = useState('public'); // 'public' | 'volunteer' | 'admin'

  // Modals
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [preselectedSchemeId, setPreselectedSchemeId] = useState(null);
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);
  const [callingContact, setCallingContact] = useState(null);
  const [connectingLeader, setConnectingLeader] = useState(null);

  const { addToast } = useToast();

  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    if (newRole === 'public') {
      addToast('Switched to Public Citizen View.', 'info');
    } else if (newRole === 'volunteer') {
      addToast('Switched to Volunteer Member View. Workspace updated.', 'success');
      // Smooth scroll to dashboards if volunteer
      const el = document.getElementById('dashboards');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (newRole === 'admin') {
      addToast('Switched to State Admin View. Command console active.', 'success');
      const el = document.getElementById('dashboards');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRegister = () => {
    const el = document.getElementById('membership-card');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenEligibility = (schemeId = null) => {
    setPreselectedSchemeId(schemeId);
    setIsEligibilityOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-saffron-500 selection:text-white">
      {/* Sticky Header with Brand Emblem & Role Switcher */}
      <Navbar
        currentRole={currentRole}
        onRoleChange={handleRoleChange}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenRegister={handleOpenRegister}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenRegister={handleOpenRegister}
          onOpenDemo={() => setIsVideoOpen(true)}
        />

        {/* Section A: Tripura Youth Opportunities & Govt Schemes */}
        <SchemesHub
          onOpenEligibility={handleOpenEligibility}
        />

        {/* Section B: Blood Donation & Urgent Request Network */}
        <BloodNetwork
          onCallDonor={(contact) => setCallingContact(contact)}
        />

        {/* Section C: Searchable District & Mandal Leadership Directory */}
        <LeadershipDirectory
          onConnectLeader={(leader) => setConnectingLeader(leader)}
          onCallLeader={(contact) => setCallingContact(contact)}
        />

        {/* Section D: Dynamic Membership Card Generator */}
        <MembershipCardGenerator />

        {/* Section 5: Multi-Role Dashboard Showcase */}
        <Dashboards
          currentRole={currentRole}
          onRoleChange={handleRoleChange}
          onOpenBroadcast={() => setIsBroadcastOpen(true)}
          onCallVolunteer={(contact) => setCallingContact(contact)}
        />

        {/* Section 6: Security & DPDP Compliance */}
        <SecuritySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(role) => handleRoleChange(role)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <EligibilityModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        preselectedSchemeId={preselectedSchemeId}
      />

      <BroadcastModal
        isOpen={isBroadcastOpen}
        onClose={() => setIsBroadcastOpen(false)}
        onBroadcastSent={(data) => {
          addToast(`Broadcast record saved to Tripura State Admin Log.`, 'success');
        }}
      />

      <CallModal
        isOpen={Boolean(callingContact)}
        onClose={() => setCallingContact(null)}
        contact={callingContact}
      />

      <ConnectModal
        isOpen={Boolean(connectingLeader)}
        onClose={() => setConnectingLeader(null)}
        leader={connectingLeader}
      />
    </div>
  );
};

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

