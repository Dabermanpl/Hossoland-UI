import React from 'react';
import { MapPin, Clock, ChevronRight, Drumstick } from 'lucide-react';
import './CouponItem.css';

interface CouponItemProps {
  title: string;
  description: string;
  location: string;
  validUntil: string;
  code: string;
}

const CouponItem: React.FC<CouponItemProps> = ({ title, description, location, validUntil, code }) => {
  return (
    <div className="coupon-item">
      <div className="coupon-top">
        <div className="coupon-icon-bg">
          <Drumstick size={24} color="var(--color-orange-gold-drop)" />
        </div>
        <div className="coupon-info">
          <h3 className="coupon-title">{title}</h3>
          <p className="coupon-description">{description}</p>
          <div className="coupon-meta">
            <div className="meta-item">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
            <div className="meta-item">
              <Clock size={14} />
              <span>do {validUntil}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="coupon-divider">
        <div className="notch left"></div>
        <div className="dash-line"></div>
        <div className="notch right"></div>
      </div>
      
      <div className="coupon-bottom">
        <div className="coupon-code-section">
          <p className="code-label">Kod kuponu</p>
          <p className="coupon-code">{code}</p>
        </div>
        <button className="use-button">
          <span>Użyj</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default CouponItem;
