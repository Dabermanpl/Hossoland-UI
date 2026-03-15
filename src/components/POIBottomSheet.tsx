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
    <div className="sheet-overlay">
      <div className="poi-bottom-sheet">
        <div className="sheet-content">
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
            <button className="close-sheet-btn" onClick={onClose} aria-label="Zamknij">
              <X size={24} />
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
                  <Clock size={18} />
                  <span>{poi.waitTimeMinutes} min oczekiwania</span>
                </div>
              )}
              {(poi.minHeightWithGuardian || poi.minHeightAlone) && (
                <div className="quick-stat">
                  <Ruler size={18} />
                  <span>Wymagany wzrost: {poi.minHeightWithGuardian || poi.minHeightAlone} cm</span>
                </div>
              )}
            </div>

            <p className="poi-description">
              {poi.description || 'Zapraszamy do skorzystania z tej wyjątkowej atrakcji! Odkryj magię Hossolandu i baw się dobrze z całą rodziną.'}
            </p>
          </div>
        </div>

        <div className="sheet-sticky-footer">
          <button className="navigate-cta-btn">
            <Navigation size={20} fill="currentColor" />
            Prowadź do atrakcji
          </button>
        </div>
      </div>
    </div>
  );
};

export default POIBottomSheet;
