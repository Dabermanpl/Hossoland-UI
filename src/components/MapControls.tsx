import React from 'react';
import { Plus, Minus, Target } from 'lucide-react';
import './MapControls.css';

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onRecenter: () => void;
}

const MapControls: React.FC<MapControlsProps> = ({ onZoomIn, onZoomOut, onRecenter }) => {
  return (
    <div className="map-controls">
      <button className="control-btn" onClick={onZoomIn} title="Powiększ">
        <Plus size={24} />
      </button>
      <button className="control-btn" onClick={onZoomOut} title="Pomniejsz">
        <Minus size={24} />
      </button>
      <button className="control-btn recenter-btn" onClick={onRecenter} title="Wyśrodkuj">
        <Target size={24} />
      </button>
    </div>
  );
};

export default MapControls;
