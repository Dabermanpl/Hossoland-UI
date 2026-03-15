import React from 'react';

interface ScanIconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ScanIcon: React.FC<ScanIconProps> = ({ 
  color = 'currentColor', 
  size = 24, 
  className = '',
  style = {}
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`scan-icon-svg ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  );
};

export default ScanIcon;
