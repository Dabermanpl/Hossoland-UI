import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './BadgeCard.css';

interface BadgeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isEarned: boolean;
  progressCurrent?: number;
  progressTotal?: number;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ 
  icon, 
  title, 
  description, 
  isEarned, 
  progressCurrent = 0, 
  progressTotal = 1 
}) => {
  const progressPercent = Math.min((progressCurrent / progressTotal) * 100, 100);

  return (
    <div className={`badge-card ${isEarned ? 'earned' : 'locked'}`}>
      <div className="badge-icon-container">
        {icon}
        {isEarned && (
          <div className="earned-check">
            <CheckCircle2 size={16} color="#4CAF50" fill="white" />
          </div>
        )}
      </div>
      
      <div className="badge-details">
        <h3 className="badge-title">{title}</h3>
        <p className="badge-desc">{description}</p>
        
        {!isEarned && (
          <div className="badge-progress">
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <span className="progress-text">
              {progressCurrent}/{progressTotal}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeCard;
