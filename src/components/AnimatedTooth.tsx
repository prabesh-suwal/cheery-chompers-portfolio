
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedToothProps {
  className?: string;
  color?: string;
  size?: number;
  animationType?: 'float' | 'pulse' | 'wiggle' | 'rotate';
}

const AnimatedTooth: React.FC<AnimatedToothProps> = ({
  className,
  color = '#33C3F0',
  size = 60,
  animationType = 'float'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getAnimation = () => {
    switch (animationType) {
      case 'float': return 'animate-float';
      case 'pulse': return 'animate-pulse-gentle';
      case 'wiggle': return 'animate-wiggle';
      case 'rotate': return 'animate-rotate-gentle';
      default: return 'animate-float';
    }
  };

  return (
    <div 
      className={cn(
        getAnimation(),
        isHovered ? 'scale-110' : 'scale-100',
        'transition-transform duration-300 cursor-pointer',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 4.5C10.5 4.5 9.5 5 8.5 5.5C7.5 6 6.5 6.5 4.5 6.5C4 6.5 3 6.5 2 5.5C2 10.5 2 12.5 3 15.5C4 18.5 6.5 20 9.5 20C10.5 20 11 19.5 12 19.5C13 19.5 13.5 20 14.5 20C17.5 20 20 18.5 21 15.5C22 12.5 22 10.5 22 5.5C21 6.5 20 6.5 19.5 6.5C17.5 6.5 16.5 6 15.5 5.5C14.5 5 13.5 4.5 12 4.5Z" 
          fill={isHovered ? '#A8E6CF' : color}
          strokeWidth="1.5"
          stroke={isHovered ? '#7DDFC3' : '#2DADC9'}
        />
      </svg>
    </div>
  );
};

export default AnimatedTooth;
