import React from 'react';
import type { POICategory } from '../data/poiData';
import './MapFilterBar.css';

interface MapFilterBarProps {
  activeCategory: POICategory | 'all';
  onCategoryChange: (category: POICategory | 'all') => void;
  userHeight: number;
  onHeightChange: (height: number) => void;
}

const MapFilterBar: React.FC<MapFilterBarProps> = ({ 
  activeCategory, 
  onCategoryChange, 
  userHeight, 
  onHeightChange 
}) => {
  const categories: { label: string, value: POICategory | 'all' }[] = [
    { label: 'Wszystko', value: 'all' },
    { label: 'Atrakcje', value: 'attraction' },
    { label: 'Dla dzieci', value: 'attraction_kids' },
    { label: 'Gastronomia', value: 'food' },
    { label: 'Toalety', value: 'toilet' },
    { label: 'Skaner AR', value: 'ar_node' },
  ];

  const heights = [80, 90, 100, 110, 120, 130, 140, 150];

  return (
    <div className="map-filter-bar">
      <div className="filter-row categories">
        {categories.map(cat => (
          <button 
            key={cat.value}
            className={`filter-chip ${activeCategory === cat.value ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      
      <div className="filter-row height">
        <span className="height-label">Wzrost:</span>
        <div className="height-chips-scroll">
          {heights.map(h => (
            <button 
              key={h}
              className={`height-chip ${userHeight === h ? 'active' : ''}`}
              onClick={() => onHeightChange(h)}
            >
              {h === 150 ? 'Dorosły' : `${h} cm`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapFilterBar;
