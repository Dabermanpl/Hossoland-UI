import React, { useState, useRef } from 'react';
import './MapSection.css';
import MapFilterBar from './MapFilterBar';
import POIMarker from './POIMarker';
import POIBottomSheet from './POIBottomSheet';
import MapControls from './MapControls';
import { hossolandPOIs } from '../data/poiData';
import type { IParkPOI, POICategory } from '../data/poiData';

const MapSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<POICategory | 'all'>('all');
  const [userHeight, setUserHeight] = useState<number>(150); // Default 150cm (adult)
  const [selectedPOI, setSelectedPOI] = useState<IParkPOI | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const viewportRef = useRef<HTMLDivElement>(null);

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

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRecenter = () => {
    setZoomLevel(1);
    if (viewportRef.current) {
      const container = viewportRef.current;
      // Scroll to center of the map
      container.scrollTo({
        left: (1470 - container.clientWidth) / 2,
        top: (836 - container.clientHeight) / 2,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="map-section">
      <div className="map-viewport" ref={viewportRef}>
        <div 
          className="map-container"
          style={{ 
            transform: `scale(${zoomLevel})`,
            transformOrigin: '0 0'
          }}
        >
          <img 
            src="/Hossoland-UI/park-map.png" 
            alt="Park Map" 
            className="park-map-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.includes('/Hossoland-UI/')) {
                // If the prefixed path fails (local dev), try the root path
                target.src = '/park-map.png';
              }
            }}
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

      <MapControls 
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onRecenter={handleRecenter}
      />

      <POIBottomSheet
        poi={selectedPOI}
        onClose={() => setSelectedPOI(null)}
      />
    </div>
  );
};

export default MapSection;
