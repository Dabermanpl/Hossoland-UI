import React, { useState, useRef, useMemo } from 'react';
import './MapSection.css';
import MapFilterBar from './MapFilterBar';
import POIMarker from './POIMarker';
import POIBottomSheet from './POIBottomSheet';
import MapControls from './MapControls';
import { hossolandPOIs } from '../data/poiData';
import type { IParkPOI, POICategory } from '../data/poiData';

// Constants for clustering
const CLUSTER_RADIUS = 60; // Pixels

const MapSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<POICategory | 'all'>('all');
  const [userHeight, setUserHeight] = useState<number>(150);
  const [selectedPOI, setSelectedPOI] = useState<IParkPOI | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Filter POIs based on category and height
  const filteredPOIs = useMemo(() => {
    return hossolandPOIs.filter(poi => {
      if (activeCategory !== 'all' && poi.category !== activeCategory) {
        if (!(activeCategory === 'attraction' && poi.category === 'attraction_kids')) {
          return false;
        }
      }
      if (poi.category === 'attraction' || poi.category === 'attraction_kids') {
        const minRequired = poi.minHeightWithGuardian || poi.minHeightAlone || 0;
        if (userHeight < minRequired) return false;
      }
      return true;
    });
  }, [activeCategory, userHeight]);

  // Determine marker state based on zoomLevel
  const markerDetailLevel = useMemo(() => {
    if (zoomLevel >= 1.5) return 'full';
    if (zoomLevel >= 1.0) return 'icon';
    return 'dot';
  }, [zoomLevel]);

  // Simple clustering logic: grouping nearby markers if zoom is low
  const clusters = useMemo(() => {
    if (zoomLevel >= 1.5) {
      return filteredPOIs.map(poi => ({ isCluster: false, poi, id: poi.id }));
    }

    const result: any[] = [];
    const processed = new Set<string>();

    filteredPOIs.forEach(poi => {
      if (processed.has(poi.id)) return;

      const nearby = filteredPOIs.filter(other => {
        if (processed.has(other.id)) return false;
        const dist = Math.sqrt(Math.pow(poi.x - other.x, 2) + Math.pow(poi.y - other.y, 2));
        return dist < CLUSTER_RADIUS / zoomLevel;
      });

      if (nearby.length > 1) {
        // Create a cluster
        const avgX = nearby.reduce((sum, p) => sum + p.x, 0) / nearby.length;
        const avgY = nearby.reduce((sum, p) => sum + p.y, 0) / nearby.length;
        result.push({
          isCluster: true,
          id: `cluster-${nearby[0].id}`,
          x: avgX,
          y: avgY,
          count: nearby.length,
          points: nearby
        });
        nearby.forEach(p => processed.has(p.id) || processed.add(p.id));
      } else {
        result.push({ isCluster: false, poi, id: poi.id });
        processed.add(poi.id);
      }
    });

    return result;
  }, [filteredPOIs, zoomLevel]);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  
  const handleRecenter = () => {
    setZoomLevel(1);
    if (viewportRef.current) {
      viewportRef.current.scrollTo({
        left: (1470 - viewportRef.current.clientWidth) / 2,
        top: (836 - viewportRef.current.clientHeight) / 2,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="map-section">
      <div className="map-viewport" ref={viewportRef}>
        <div 
          className="map-container"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: '0 0' }}
        >
          <img src="/Hossoland-UI/park-map.png" alt="Map" className="park-map-image" 
            onError={(e) => { (e.target as HTMLImageElement).src = '/park-map.png'; }} />
          
          <div className="markers-layer">
            {clusters.map(node => {
              if (node.isCluster) {
                return (
                  <div 
                    key={node.id} 
                    className="cluster-marker"
                    style={{ left: `${node.x}px`, top: `${node.y}px` }}
                    onClick={() => setZoomLevel(prev => Math.min(prev + 0.5, 2.5))}
                  >
                    <div className="cluster-content">{node.count}</div>
                  </div>
                );
              }
              return (
                <POIMarker
                  key={node.poi.id}
                  poi={node.poi}
                  onClick={() => setSelectedPOI(node.poi)}
                  isActive={selectedPOI?.id === node.poi.id}
                  detailLevel={markerDetailLevel}
                />
              );
            })}
          </div>
        </div>
      </div>

      <MapFilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory}
        userHeight={userHeight} onHeightChange={setUserHeight} />
      <MapControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} onRecenter={handleRecenter} />
      <POIBottomSheet poi={selectedPOI} onClose={() => setSelectedPOI(null)} />
    </div>
  );
};

export default MapSection;
