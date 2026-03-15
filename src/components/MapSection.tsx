import React, { useState } from 'react';
import './MapSection.css';
import MapFilterBar from './MapFilterBar';
import POIMarker from './POIMarker';
import POIBottomSheet from './POIBottomSheet';
import { hossolandPOIs } from '../data/poiData';
import type { IParkPOI, POICategory } from '../data/poiData';

const MapSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<POICategory | 'all'>('all');
  const [userHeight, setUserHeight] = useState<number>(150); // Default 150cm (adult)
  const [selectedPOI, setSelectedPOI] = useState<IParkPOI | null>(null);

  const filteredPOIs = hossolandPOIs.filter(poi => {
    // Category filter
    if (activeCategory !== 'all' && poi.category !== activeCategory) {
      if (activeCategory === 'attraction' && poi.category === 'attraction_kids') {
        // Include kids attractions when "Attractions" is selected
      } else {
        return false;
      }
    }

    // Height filter (only for attractions)
    if (poi.category === 'attraction' || poi.category === 'attraction_kids') {
      const minRequired = poi.minHeightWithGuardian || poi.minHeightAlone || 0;
      if (userHeight < minRequired) return false;
    }

    return true;
  });

  return (
    <div className="map-section">
      <div className="map-viewport">
        <div className="map-container">
          <img 
            src="/park-map.png" 
            alt="Park Map" 
            className="park-map-image"
          />
          <div className="markers-layer">
            {filteredPOIs.map(poi => (
              <POIMarker 
                key={poi.id} 
                poi={poi} 
                onClick={() => setSelectedPOI(poi)}
                isActive={selectedPOI?.id === poi.id}
              />
            ))}
          </div>
        </div>
      </div>

      <MapFilterBar 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        userHeight={userHeight}
        onHeightChange={setUserHeight}
      />

      <POIBottomSheet 
        poi={selectedPOI} 
        onClose={() => setSelectedPOI(null)}
      />
    </div>
  );
};

export default MapSection;
