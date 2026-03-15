import React from 'react';
import { CheckCircle, Map as MapIcon } from 'lucide-react';
import './PaymentSuccessSection.css';

interface PaymentSuccessSectionProps {
  onBackToMap: () => void;
}

const PaymentSuccessSection: React.FC<PaymentSuccessSectionProps> = ({ onBackToMap }) => {
  return (
    <div className="payment-success-section">
      <div className="success-content">
        <div className="success-icon-wrapper">
          <CheckCircle size={80} color="var(--color-primary-sun)" />
        </div>
        <h2 className="font-heading-bold">Gotowe!</h2>
        <p className="font-body-regular">
          Twoje bilety zostały wygenerowane i wysłane na adres e-mail. 
          Do zobaczenia w Hossolandzie!
        </p>
        <button className="back-btn" onClick={onBackToMap}>
          <MapIcon size={20} />
          Wróć do mapy
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessSection;
