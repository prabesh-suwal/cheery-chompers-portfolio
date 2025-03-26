
import React from 'react';

interface CertificateIconProps {
  className?: string;
  size?: number;
}

const CertificateIcon: React.FC<CertificateIconProps> = ({ 
  className, 
  size = 24 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M16 10h.01" />
      <path d="M7 10h5" />
      <path d="M7 14h5" />
      <path d="M16 14h.01" />
      <path d="M8 3v3" />
      <path d="M16 3v3" />
      <path d="M12 17v4" />
      <path d="M14.5 20l-2.5 1 -2.5 -1" />
    </svg>
  );
};

export default CertificateIcon;
