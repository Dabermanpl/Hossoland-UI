import ScanIcon from './ScanIcon';
import './ScanCard.css';

const ScanCard: React.FC = () => {
  return (
    <div className="scan-card">
      <div className="scan-content">
        <div className="scan-icon-wrapper">
          <ScanIcon color="white" size={48} className="scan-brackets-svg" />
          <div className="scan-line"></div>
        </div>
        <h2 className="scan-title">Dotknij, aby zeskanować</h2>
        <p className="scan-subtitle">Skieruj kamerę na obiekt AR w parku</p>
      </div>
    </div>
  );
};

export default ScanCard;
