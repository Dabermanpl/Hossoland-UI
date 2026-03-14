import React from 'react';
import { Waves, Zap, Hammer, Ghost, MapPin, Check, Navigation, Star } from 'lucide-react';
import './ARItem.css';

interface ARItemProps {
  name: string;
  location: string;
  points: number;
  found?: boolean;
  icon: 'waves' | 'zap' | 'hammer' | 'ghost';
}

const ARItem: React.FC<ARItemProps> = ({ name, location, points, found, icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'waves': return <Waves size={24} color="white" />;
      case 'zap': return <Zap size={24} color="white" />;
      case 'hammer': return <Hammer size={24} color="white" />;
      case 'ghost': return <Ghost size={24} color="white" />;
      default: return null;
    }
  };

  return (
    <div className={`ar-item ${found ? 'found' : ''}`}>
      <div className="item-icon-bg bg-cyan">
        {renderIcon()}
      </div>
      
      <div className="item-content">
        <div className="item-title-row">
          <h3 className="item-name">{name}</h3>
          {found && (
            <div className="found-badge">
              <Check size={12} color="var(--color-cyan-primary)" />
              <span>Znaleziony</span>
            </div>
          )}
        </div>
        <div className="item-location">
          <MapPin size={10} />
          <span>{location}</span>
        </div>
      </div>
      
      <div className="item-actions">
        <div className="item-points">
          <Star size={13} fill="var(--color-orange-gold-drop)" color="var(--color-orange-gold-drop)" />
          <span>+{points}</span>
        </div>
        {!found && (
          <button className="go-button">
            <Navigation size={14} color="var(--color-cyan-primary)" />
            <span>Idź</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ARItem;
