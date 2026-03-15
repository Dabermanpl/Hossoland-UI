import React from 'react';
import { FerrisWheel, Utensils, Info, Camera, MapPin } from 'lucide-react';
import type { IParkPOI } from '../data/poiData';
import './POIMarker.css';

export type MarkerDetailLevel = 'full' | 'icon' | 'dot';

interface POIMarkerProps {
  poi: IParkPOI;
  onClick: () => void;
  isActive: boolean;
  detailLevel: MarkerDetailLevel;
}

const POIMarker: React.FC<POIMarkerProps> = ({ poi, onClick, isActive, detailLevel }) => {
  const getIcon = () => {
    const iconSize = detailLevel === 'icon' ? 16 : 20;
    switch (poi.category) {
      case 'attraction':
      case 'attraction_kids':
        return <FerrisWheel size={iconSize} />;
      case 'food':
        return <Utensils size={iconSize} />;
      case 'ar_node':
        return <Camera size={iconSize} />;
      case 'toilet':
      case 'info':
        return <Info size={iconSize} />;
      default:
        return <MapPin size={iconSize} />;
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

  // Higher z-index for attractions and AR nodes
  const getZIndex = () => {
    if (isActive) return 100;
    if (poi.category === 'attraction' || poi.category === 'ar_node') return 50;
    return 10;
  };

  if (detailLevel === 'dot') {
    return (
      <div 
        className={`poi-marker dot-mode ${getThemeClass()} ${isActive ? 'active' : ''}`}
        style={{ left: `${poi.x}px`, top: `${poi.y}px`, zIndex: getZIndex() }}
        onClick={(e) => { e.stopPropagation(); onClick(); }}
      >
        <div className="marker-dot" title={poi.name} />
      </div>
    );
  }

  return (
    <div 
      className={`poi-marker ${detailLevel}-mode ${getThemeClass()} ${isActive ? 'active' : ''}`}
      style={{ left: `${poi.x}px`, top: `${poi.y}px`, zIndex: getZIndex() }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <div className="marker-container">
        <div className="marker-pin">
          {getIcon()}
          {detailLevel === 'full' && poi.status === 'open' && poi.waitTimeMinutes !== undefined && poi.waitTimeMinutes > 0 && (
            <div className="marker-wait-time">
              {poi.waitTimeMinutes} min
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default POIMarker;
