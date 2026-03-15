import React from 'react';
import BadgeCard from './BadgeCard';
import { Camera, Map, Zap, Heart } from 'lucide-react';
import './BadgesSection.css';

const BadgesSection: React.FC = () => {
  const badges = [
    {
      icon: <Camera size={24} color="var(--color-primary-sun)" />,
      title: 'Łowca AR',
      description: 'Zeskanuj 5 obiektów AR w parku',
      isEarned: true,
      progressCurrent: 5,
      progressTotal: 5
    },
    {
      icon: <Map size={24} color="var(--color-primary-sun)" />,
      title: 'Odkrywca',
      description: 'Odwiedź 3 różne krainy tematyczne',
      isEarned: false,
      progressCurrent: 1,
      progressTotal: 3
    },
    {
      icon: <Zap size={24} color="var(--color-primary-sun)" />,
      title: 'Szybki Joe',
      description: 'Odwiedź 5 atrakcji w jedną godzinę',
      isEarned: false,
      progressCurrent: 2,
      progressTotal: 5
    },
    {
      icon: <Heart size={24} color="var(--color-primary-sun)" />,
      title: 'Stały Gość',
      description: 'Odwiedź Hossoland po raz drugi',
      isEarned: false,
      progressCurrent: 0,
      progressTotal: 2
    }
  ];

  return (
    <div className="badges-section">
      <div className="section-header">
        <h2 className="section-title">ODZNAKI</h2>
        <button className="ghost-btn">Zobacz wszystkie</button>
      </div>
      <div className="badges-grid">
        {badges.map((badge, idx) => (
          <BadgeCard key={idx} {...badge} />
        ))}
      </div>
    </div>
  );
};

export default BadgesSection;
