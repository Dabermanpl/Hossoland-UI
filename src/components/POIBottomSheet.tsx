import React from 'react';
import { Navigation, X, Ruler, Clock } from 'lucide-react';
import type { IParkPOI } from '../data/poiData';
import './POIBottomSheet.css';

interface POIBottomSheetProps {
  poi: IParkPOI | null;
  onClose: () => void;
}

const POIBottomSheet: React.FC<POIBottomSheetProps> = ({ poi, onClose }) => {
  if (!poi) return null;

  return (
    <div className="sheet-overlay" onClick={onClose}>
      <div className="poi-bottom-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-hero">
          {poi.imageUrl ? (
            <img 
              src={poi.imageUrl} 
              alt={poi.name} 
              className="poi-hero-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.classList.add('image-fallback');
              }}
            />
          ) : (
            <div className="sheet-hero-placeholder" />
          )}
          <div className="sheet-handle" onClick={onClose}></div>
          <button className="close-sheet-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="sheet-body">
          <div className="sheet-header">
            <span className="zone-tag">{poi.zone}</span>
            <h2 className="poi-name">{poi.name}</h2>
          </div>

          <div className="poi-quick-stats">
            {poi.waitTimeMinutes !== undefined && (
              <div className="quick-stat">
                <Clock size={16} />
                <span>{poi.waitTimeMinutes} min oczekiwania</span>
              </div>
            )}
            {(poi.minHeightWithGuardian || poi.minHeightAlone) && (
              <div className="quick-stat">
                <Ruler size={16} />
                <span>Od {poi.minHeightWithGuardian || poi.minHeightAlone} cm wzrostu</span>
              </div>
            )}
          </div>

          <p className="poi-description">
            {poi.description || 'Zapraszamy do skorzystania z atrakcji w sercu Hossolandu!'}
          </p>

          <div className="sheet-footer">
            <button className="navigate-cta-btn">
              <Navigation size={18} fill="white" />
              Prowadź do celu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POIBottomSheet;
