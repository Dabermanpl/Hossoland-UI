import React from 'react';
import ARItem from './ARItem';
import './ARSection.css';

const ARSection: React.FC = () => {
  const objects = [
    { name: 'Posąg Syrenki', location: 'Miasto Syrenki', points: 50, found: true, icon: 'waves' as const },
    { name: 'Posąg Feniksa', location: 'Baltambrya', points: 60, found: false, icon: 'zap' as const },
    { name: 'Mjolnir Thora', location: 'Kraina Wikingów', points: 55, found: false, icon: 'hammer' as const },
    { name: 'Rzeźba Smoka Igora', location: 'Smocza Dolina', points: 70, found: false, icon: 'ghost' as const },
  ];

  return (
    <div className="ar-section">
      <h2 className="text-h2">OBIEKTY AR W PARKU</h2>
      <div className="ar-list">
        {objects.map((obj, index) => (
          <ARItem key={index} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default ARSection;
