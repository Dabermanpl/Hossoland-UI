import React from 'react';
import './HowItWorks.css';

const Step: React.FC<{ number: number; text: string }> = ({ number, text }) => (
  <div className="hiw-step">
    <div className="step-number">{number}</div>
    <p className="step-text">{text}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <div className="how-it-works">
      <h3 className="text-h3">Jak działa Skaner AR?</h3>
      <div className="steps-container">
        <Step 
          number={1} 
          text="Znajdź oznaczony obiekt AR w parku (złota gwiazda na mapie)" 
        />
        <Step 
          number={2} 
          text="Otwórz Skaner AR i skieruj kamerę na obiekt" 
        />
        <Step 
          number={3} 
          text="Odblokuj animację i zdobądź punkty grywalizacji!" 
        />
      </div>
    </div>
  );
};

export default HowItWorks;
