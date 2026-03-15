import React from 'react';
import { Star, Trophy, Ticket } from 'lucide-react';
import './ProfileHero.css';

interface ProfileHeroProps {
  userName: string;
  guestId: string;
  points: number;
  badges: number;
  coupons: number;
}

const ProfileHero: React.FC<ProfileHeroProps> = ({ userName, guestId, points, badges, coupons }) => {
  return (
    <div className="profile-hero">
      <div className="profile-info">
        <div className="avatar-placeholder">
          {userName.charAt(0)}
        </div>
        <div className="user-details">
          <h2 className="user-name">{userName}</h2>
          <p className="guest-id">ID Gościa: {guestId}</p>
        </div>
      </div>
      
      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-icon-wrapper">
            <Star size={24} color="var(--color-primary-sun)" />
          </div>
          <div className="stat-content">
            <span className="stat-value">{points}</span>
            <span className="stat-label">Punkty AR</span>
          </div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon-wrapper">
            <Trophy size={24} color="var(--color-primary-sun)" />
          </div>
          <div className="stat-content">
            <span className="stat-value">{badges}</span>
            <span className="stat-label">Odznaki</span>
          </div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon-wrapper">
            <Ticket size={24} color="var(--color-primary-sun)" />
          </div>
          <div className="stat-content">
            <span className="stat-value">{coupons}</span>
            <span className="stat-label">Kupony</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
