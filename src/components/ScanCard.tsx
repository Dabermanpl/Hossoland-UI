import React from 'react';
import './ScanCard.css';

const ScanCard: React.FC = () => {
  return (
    <div className="scan-card">
      <div className="scan-overlay"></div>
      <div className="scan-content">
        <div className="scan-icon-wrapper">
          <div className="scan-brackets"></div>
          <div className="scan-brackets-bottom"></div>
          <div className="scan-line"></div>
        </div>
        <h2 className="scan-title">Dotknij, aby zeskanować</h2>
        <p className="scan-subtitle">Skieruj kamerę na obiekt AR w parku</p>
      </div>
    </div>
  );
};

export default ScanCard;
