import React from 'react';
import { FerrisWheel, Utensils, Info, Camera, MapPin } from 'lucide-react';
import type { IParkPOI } from '../data/poiData';
import './POIMarker.css';

interface POIMarkerProps {
  poi: IParkPOI;
  onClick: () => void;
  isActive: boolean;
}

const POIMarker: React.FC<POIMarkerProps> = ({ poi, onClick, isActive }) => {
  const getIcon = () => {
    switch (poi.category) {
      case 'attraction':
      case 'attraction_kids':
        return <FerrisWheel size={20} />;
      case 'food':
        return <Utensils size={20} />;
      case 'ar_node':
        return <Camera size={20} />;
      case 'toilet':
      case 'info':
        return <Info size={20} />;
      default:
        return <MapPin size={20} />;
    }
  };

  const getThemeClass = () => {
    switch (poi.category) {
      case 'attraction':
      case 'attraction_kids':
        return 'theme-elephant';
      case 'food':
        return 'theme-mosque';
      case 'ar_node':
        return 'theme-sun pulse';
      case 'toilet':
      case 'info':
        return 'theme-mine-shaft';
      default:
        return '';
    }
  };

  return (
    <div 
      className={`poi-marker ${getThemeClass()} ${isActive ? 'active' : ''}`}
      style={{ left: `${poi.x}px`, top: `${poi.y}px` }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <div className="marker-container">
        <div className="marker-pin">
          {getIcon()}
          {poi.status === 'open' && poi.waitTimeMinutes !== undefined && poi.waitTimeMinutes > 0 && (
            <div className="marker-wait-time">
              {poi.waitTimeMinutes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default POIMarker;
