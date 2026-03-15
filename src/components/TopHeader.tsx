import React, { useState, useEffect } from 'react';
import './TopHeader.css';
import ScanIcon from './ScanIcon';

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

  const couponsTitleIcon = "http://localhost:3845/assets/c2d688fe42fa8efa669a1b98373859eb82f7afa7.svg";
  const scannerBadgeIcon = "http://localhost:3845/assets/33ecb30aa5411eafeb7ad53bf519832075c00ed9.svg";
  const couponsBadgeIcon = "http://localhost:3845/assets/fd698df9d5f9fbcf1387f77dd612862103d9ceb6.svg";

  return (
    <div className={`top-header ${animate ? 'animate-start' : ''} ${isScrolled ? 'collapsed' : ''}`}>
      <div className="header-title">
        <div className="title-icon-wrapper">
          {isCoupons ? (
            <img src={couponsTitleIcon} alt="" className="header-svg-icon" />
          ) : (
            <ScanIcon color="white" size={22} className="header-svg-icon" />
          )}
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
