import React from 'react';
import CouponItem from './CouponItem';
import './CouponsSection.css';

const CouponsSection: React.FC = () => {
  const coupons = [
    {
      id: 1,
      title: '20% zniżki na Karczma Wikinga',
      description: 'Pokaż kasjerowi kod i ciesz się zniżką na cały rachunek!',
      location: 'Kraina Wikingów',
      validUntil: '13.03.2026',
      code: 'WIKIING20',
      icon: 'drumstick'
    },
    {
      id: 2,
      title: '20% zniżki na Karczma Wikinga',
      description: 'Pokaż kasjerowi kod i ciesz się zniżką na cały rachunek!',
      location: 'Kraina Wikingów',
      validUntil: '13.03.2026',
      code: 'WIKIING20',
      icon: 'drumstick'
    },
    {
      id: 3,
      title: '20% zniżki na Karczma Wikinga',
      description: 'Pokaż kasjerowi kod i ciesz się zniżką na cały rachunek!',
      location: 'Kraina Wikingów',
      validUntil: '13.03.2026',
      code: 'WIKIING20',
      icon: 'drumstick'
    }
  ];

  return (
    <div className="coupons-section">
      <div className="coupons-list">
        {coupons.map((coupon) => (
          <CouponItem key={coupon.id} {...coupon} />
        ))}
      </div>
    </div>
  );
};

export default CouponsSection;
