
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const BlurImage: React.FC<BlurImageProps> = ({ 
  src, 
  alt, 
  className, 
  width, 
  height 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted/20 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-all duration-500",
          isLoading ? "scale-110 blur-xl" : "scale-100 blur-0"
        )}
      />
    </div>
  );
};

export default BlurImage;
