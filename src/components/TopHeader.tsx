import React from 'react';
import { Trophy, Ticket } from 'lucide-react';
import './TopHeader.css';

interface TopHeaderProps {
  view?: string;
  animate?: boolean;
}

const TopHeader: React.FC<TopHeaderProps> = ({ view = 'scan', animate = false }) => {
  const isCoupons = view === 'coupons';

  return (
    <div className={`top-header ${animate ? 'animate-start' : ''}`}>
      <div className="header-title">
        {isCoupons ? (
          <Ticket size={22} color="white" />
        ) : (
          <div className="scanner-icon-mini">
            <div className="corner tl"></div>
            <div className="corner tr"></div>
            <div className="corner bl"></div>
            <div className="corner br"></div>
          </div>
        )}
        <h1 className="text-h1">{isCoupons ? 'Moje kupony' : 'Skaner AR'}</h1>
      </div>
      
      <div className="points-container">
        <div className="points-flex">
          <div className="points-info">
            <p className="points-label">
              {isCoupons ? 'Masz aktywnych kuponów' : 'Twoje punkty'}
            </p>
            <p className="points-value">
              <span className="value-current">{isCoupons ? '3' : '50'}</span>
              <span className="value-total"> / 235 pkt</span>
            </p>
          </div>
          <div className="trophy-badge">
            {isCoupons ? (
              <Ticket size={26} color="var(--color-orange-gold-drop)" />
            ) : (
              <Trophy size={26} color="var(--color-orange-gold-drop)" />
            )}
          </div>
        </div>
        
        <div className="progress-bar-bg">
          <div className={`progress-bar-fill ${animate ? 'animate-start' : ''}`}></div>
        </div>
        
        <p className="progress-hint">
          Znajdź 3 kolejnych obiektów AR, żeby odblokować nagrodę!
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
