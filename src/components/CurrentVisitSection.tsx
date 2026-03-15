import React from 'react';
import { Calendar, Clock, MapPin, Footprints, Ticket } from 'lucide-react';
import './CurrentVisitSection.css';

interface CurrentVisitSectionProps {
  isActive: boolean;
  onBuyTickets: () => void;
}

const CurrentVisitSection: React.FC<CurrentVisitSectionProps> = ({ isActive, onBuyTickets }) => {
  if (!isActive) {
    return (
      <div className="current-visit-section inactive">
        <div className="cta-card">
          <div className="cta-icon">
            <Ticket size={32} color="var(--color-primary-sun)" />
          </div>
          <div className="cta-content">
            <h3 className="cta-title">Brak aktywnej wizyty</h3>
            <p className="cta-desc">Zaplanuj swoją przygodę w Hossolandzie już teraz!</p>
            <button className="cta-btn" onClick={onBuyTickets}>
              Kup bilety
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="current-visit-section active">
      <h2 className="section-title">AKTUALNA WIZYTA</h2>
      <div className="visit-card">
        <div className="visit-grid">
          <div className="visit-item">
            <Calendar size={18} className="visit-icon" />
            <div className="visit-info">
              <span className="visit-label">Data</span>
              <span className="visit-value">15 Marca 2026</span>
            </div>
          </div>
          <div className="visit-item">
            <Clock size={18} className="visit-icon" />
            <div className="visit-info">
              <span className="visit-label">Wejście</span>
              <span className="visit-value">10:15</span>
            </div>
          </div>
          <div className="visit-item">
            <MapPin size={18} className="visit-icon" />
            <div className="visit-info">
              <span className="visit-label">Atrakcje</span>
              <span className="visit-value">12 odwiedzonych</span>
            </div>
          </div>
          <div className="visit-item">
            <Footprints size={18} className="visit-icon" />
            <div className="visit-info">
              <span className="visit-label">Dystans</span>
              <span className="visit-value">4.2 km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentVisitSection;
