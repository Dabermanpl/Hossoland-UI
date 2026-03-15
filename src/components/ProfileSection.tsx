import React from 'react';
import ProfileHero from './ProfileHero';
import BadgesSection from './BadgesSection';
import CurrentVisitSection from './CurrentVisitSection';
import SettingsList from './SettingsList';
import './ProfileSection.css';

interface ProfileSectionProps {
  onBuyTickets: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ onBuyTickets }) => {
  // Mock data for the profile
  const profileData = {
    userName: 'Tomasz Nowak',
    guestId: 'HS-482910',
    points: 1250,
    badges: 1,
    coupons: 3,
    isVisitActive: false // Set to false to show the "Buy tickets" CTA
  };

  return (
    <div className="profile-section">
      <ProfileHero 
        userName={profileData.userName}
        guestId={profileData.guestId}
        points={profileData.points}
        badges={profileData.badges}
        coupons={profileData.coupons}
      />
      
      <div className="profile-content">
        <BadgesSection />
        
        <CurrentVisitSection 
          isActive={profileData.isVisitActive} 
          onBuyTickets={onBuyTickets}
        />
        
        <SettingsList />
      </div>
    </div>
  );
};

export default ProfileSection;
