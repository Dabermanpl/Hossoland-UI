import React, { useState } from 'react';
import TicketRow from './TicketRow';
import './TicketsSection.css';

interface CartState {
  normal: number;
  reduced: number;
  child: number;
  parking: number;
}

interface TicketsSectionProps {
  onCheckout: (cart: CartState) => void;
}

const TicketsSection: React.FC<TicketsSectionProps> = ({ onCheckout }) => {
  const [cart, setCart] = useState<CartState>({
    normal: 0,
    reduced: 0,
    child: 0,
    parking: 0
  });

  const ticketTypes = [
    { id: 'normal', name: 'Bilet Normalny', subtitle: 'Powyżej 120 cm, cały dzień', price: 179 },
    { id: 'reduced', name: 'Bilet Ulgowy', subtitle: 'Do 120 cm / seniorzy', price: 139 },
    { id: 'child', name: 'Bilet Dziecko', subtitle: 'Dziecko poniżej 85 cm', price: 1 },
    { id: 'parking', name: 'Parking', subtitle: 'Miejsce postojowe na cały dzień', price: 20 }
  ];

  const handleCountChange = (id: keyof CartState, newCount: number) => {
    setCart(prev => ({ ...prev, [id]: newCount }));
  };

  const totalPrice = 
    cart.normal * 179 + 
    cart.reduced * 139 + 
    cart.child * 1 + 
    cart.parking * 20;

  const totalCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="tickets-section">
      <div className="tickets-list">
        <h2 className="section-title font-heading-bold">Wybierz bilety</h2>
        {ticketTypes.map(type => (
          <TicketRow 
            key={type.id}
            name={type.name}
            subtitle={type.subtitle}
            price={type.price}
            count={cart[type.id as keyof CartState]}
            onCountChange={(val) => handleCountChange(type.id as keyof CartState, val)}
          />
        ))}
      </div>

      {totalCount > 0 && (
        <div className="cart-summary-sticky">
          <div className="summary-info">
            <span className="summary-label">Suma do zapłaty</span>
            <span className="summary-price">{totalPrice} zł</span>
          </div>
          <button 
            className="checkout-btn"
            onClick={() => onCheckout(cart)}
          >
            Kupuję bilety
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketsSection;
