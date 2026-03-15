import React from 'react';
import Stepper from './Stepper';
import './TicketRow.css';

interface TicketRowProps {
  name: string;
  subtitle: string;
  price: number;
  count: number;
  onCountChange: (newCount: number) => void;
}

const TicketRow: React.FC<TicketRowProps> = ({ 
  name, 
  subtitle, 
  price, 
  count, 
  onCountChange 
}) => {
  return (
    <div className="ticket-row">
      <div className="ticket-info">
        <h3 className="font-heading-bold">{name}</h3>
        <p className="font-body-regular">{subtitle}</p>
        <span className="font-heading-regular">{price} zł</span>
      </div>
      <Stepper value={count} onChange={onCountChange} />
    </div>
  );
};

export default TicketRow;
