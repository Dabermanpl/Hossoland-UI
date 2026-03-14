import React from 'react';
import './ScanCard.css';

const ScanCard: React.FC = () => {
  const figmaBracketsIcon = "http://localhost:3845/assets/1210b051790610969e9d6d3fcaee350192b03d07.svg";

  return (
    <div className="scan-card">
      <div className="scan-overlay"></div>
      <div className="scan-content">
        <div className="scan-icon-wrapper">
          <img 
            src={figmaBracketsIcon} 
            alt="Scan area" 
            className="scan-brackets-svg"
          />
          <div className="scan-line"></div>
        </div>
        <h2 className="scan-title">Dotknij, aby zeskanować</h2>
        <p className="scan-subtitle">Skieruj kamerę na obiekt AR w parku</p>
      </div>
    </div>
  );
};

export default ScanCard;
