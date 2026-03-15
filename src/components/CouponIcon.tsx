import React from 'react';

interface CouponIconProps {
  color?: string;
  size?: number;
  className?: string;
}

const CouponIcon: React.FC<CouponIconProps> = ({ 
  color = 'currentColor', 
  size = 24, 
  className = ''
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M27.25 3.5H4.75C3.37 3.5 2.25 4.62 2.25 6V9.75C3.63 9.75 4.75 10.87 4.75 12.25C4.75 13.63 3.63 14.75 2.25 14.75V18.5C2.25 19.88 3.37 21 4.75 21H27.25C28.63 21 29.75 19.88 29.75 18.5V14.75C28.37 14.75 27.25 13.63 27.25 12.25C27.25 10.87 28.37 9.75 29.75 9.75V6C29.75 4.62 28.63 3.5 27.25 3.5ZM27.25 8.24C25.54 8.78 24.25 10.37 24.25 12.25C24.25 14.13 25.54 15.72 27.25 16.26V18.5H4.75V16.26C6.46 15.72 7.75 14.13 7.75 12.25C7.75 10.37 6.46 8.78 4.75 8.24V6H27.25V8.24ZM14.75 17.25H17.25V14.75H14.75V17.25ZM14.75 13.5H17.25V11H14.75V13.5ZM14.75 9.75H17.25V7.25H14.75V9.75Z" 
        fill={color}
      />
    </svg>
  );
};

export default CouponIcon;
