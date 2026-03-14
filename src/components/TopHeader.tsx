import React, { useState, useEffect } from 'react';
import './TopHeader.css';

interface TopHeaderProps {
  view?: string;
  animate?: boolean;
}

const TopHeader: React.FC<TopHeaderProps> = ({ view = 'scan', animate = false }) => {
  const isCoupons = view === 'coupons';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Zwijaj nagłówek po przewinięciu o więcej niż 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scannerTitleIcon = "http://localhost:3845/assets/d54033ddcf0e0d43f591789b426edae0695c89bd.svg";
  const couponsTitleIcon = "http://localhost:3845/assets/c2d688fe42fa8efa669a1b98373859eb82f7afa7.svg";
  const scannerBadgeIcon = "http://localhost:3845/assets/8ad90e50969c3d8b79763b59ad77034298a6e6e3.svg";
  const couponsBadgeIcon = "http://localhost:3845/assets/fd698df9d5f9fbcf1387f77dd612862103d9ceb6.svg";

  return (
    <div className={`top-header ${animate ? 'animate-start' : ''} ${isScrolled ? 'collapsed' : ''}`}>
      <div className="header-title">
        <div className="title-icon-wrapper">
          <img src={isCoupons ? couponsTitleIcon : scannerTitleIcon} alt="" className="header-svg-icon" />
        </div>
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
            <img 
              src={isCoupons ? couponsBadgeIcon : scannerBadgeIcon} 
              alt="" 
              className="badge-svg-icon" 
            />
          </div>
        </div>
        
        <div className="progress-bar-bg" key={`bg-${view}`}>
          <div className={`progress-bar-fill ${animate ? 'animate-start' : ''}`} key={`fill-${view}`}></div>
        </div>
        
        <p className="progress-hint">
          Znajdź 3 kolejnych obiektów AR, żeby odblokować nagrodę!
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
