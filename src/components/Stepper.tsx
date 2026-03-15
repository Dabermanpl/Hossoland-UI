import React from 'react';
import { Minus, Plus } from 'lucide-react';
import './Stepper.css';

interface StepperProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

const Stepper: React.FC<StepperProps> = ({ value, onChange, min = 0, max = 99 }) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="stepper">
      <button 
        className="stepper-btn" 
        onClick={handleDecrement}
        disabled={value <= min}
      >
        <Minus size={16} />
      </button>
      <span className="stepper-value">{value}</span>
      <button 
        className="stepper-btn" 
        onClick={handleIncrement}
        disabled={value >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default Stepper;
