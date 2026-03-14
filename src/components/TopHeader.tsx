import React, { useState, useEffect } from 'react';
import { Trophy, Ticket } from 'lucide-react';
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

  const scannerIcon = "http://localhost:3845/assets/598eeed88eaf721f35321849cbe13a790d161e53.svg";
  const couponsIcon = "http://localhost:3845/assets/c2d688fe42fa8efa669a1b98373859eb82f7afa7.svg";

  return (
    <div className={`top-header ${animate ? 'animate-start' : ''} ${isScrolled ? 'collapsed' : ''}`}>
      <div className="header-title">
        <div className="title-icon-wrapper">
          <img src={isCoupons ? couponsIcon : scannerIcon} alt="" className="header-svg-icon" />
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
