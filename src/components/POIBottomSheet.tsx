import React from 'react';
import { Navigation, X, Ruler, Clock, Star, MapPin, Scan, ChevronRight } from 'lucide-react';
import type { IParkPOI } from '../data/poiData';
import './POIBottomSheet.css';

interface POIBottomSheetProps {
  poi: IParkPOI | null;
  onClose: () => void;
}

const POIBottomSheet: React.FC<POIBottomSheetProps> = ({ poi, onClose }) => {
  if (!poi) return null;

  const getWaitTimeColorClass = (minutes: number) => {
    if (minutes < 15) return '';
    if (minutes < 30) return 'warning';
    return 'danger';
  };

  const getWaitTimeMsg = (minutes: number) => {
    if (minutes < 15) return 'Krótka kolejka – ruszaj!';
    if (minutes < 30) return 'Umiarkowany czas oczekiwania.';
    return 'Długa kolejka – wróć później.';
  };

  return (
    <div className="sheet-overlay">
      <div className="poi-bottom-sheet">
        <div className="sheet-content">
          <div className="sheet-hero">
            {poi.arPoints && (
              <div className="ar-points-badge">
                <Star size={16} fill="currentColor" />
                <span>+{poi.arPoints} pkt</span>
              </div>
            )}
            
            <div className="zone-badge-overlay">
              {poi.zone}
            </div>

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
            <div className="info-header">
              <h2 className="poi-name">{poi.name}</h2>
              <p className="poi-slogan">{poi.category === 'attraction' ? 'Przejmij ster!' : 'Odkryj magię Hossolandu!'}</p>
              
              <div className="live-status-row">
                <div className={`status-dot ${poi.status}`} />
                <div className="status-text">
                  <span>{poi.status === 'open' ? 'Otwarte' : 'Zamknięte'}</span>
                  <div className="status-separator" />
                  <MapPin size={14} />
                  <span>330 m stąd</span>
                </div>
              </div>
            </div>

            {poi.waitTimeMinutes !== undefined && (
              <div className={`wait-time-card ${getWaitTimeColorClass(poi.waitTimeMinutes)}`}>
                <div className="wait-icon-container">
                  <Clock size={24} color={poi.waitTimeMinutes >= 30 ? '#ef4444' : '#22c55e'} />
                </div>
                <div className="wait-info">
                  <h4>{poi.waitTimeMinutes} min</h4>
                  <p>{getWaitTimeMsg(poi.waitTimeMinutes)}</p>
                </div>
              </div>
            )}

            <div className="poi-details-section">
              <h3 className="section-title">O Atrakcji</h3>
              <p className="poi-description">
                {poi.description || 'Zapraszamy do skorzystania z tej wyjątkowej atrakcji! Poczuj niesamowite emocje w samym sercu krainy.'}
              </p>

              {(poi.minHeightAlone || poi.minHeightWithGuardian) ? (
                <div className="requirement-box">
                  <Ruler size={20} color="#0b8dce" />
                  <span>Minimalna wysokość: {poi.minHeightAlone || poi.minHeightWithGuardian} cm</span>
                </div>
              ) : null}
            </div>

            <div className="ar-module">
              <div className="ar-header">
                <Scan size={24} />
                <h3>Skaner AR</h3>
              </div>
              <p className="ar-description">
                Zeskanuj obiekt AR przy {poi.name} i zdobądź {poi.arPoints || 50} punktów grywalizacji!
              </p>
              <button className="ar-cta-btn">
                <Scan size={18} />
                Otwórz Skaner AR
                <ChevronRight size={18} style={{ marginLeft: 'auto' }} />
              </button>
            </div>
          </div>
        </div>

        <div className="sheet-sticky-footer">
          <button className="navigate-cta-btn">
            <Navigation size={20} fill="currentColor" />
            Nawiguj do atrakcji
          </button>
        </div>
      </div>
    </div>
  );
};

export default POIBottomSheet;
