import clsx from 'clsx';
import React from 'react';

interface CGradientBackgroundProps {
  className?: string;
}

const CGradientBackground: React.FC<CGradientBackgroundProps> = ({
  className,
}) => {
  return (
    <div
      className={clsx(
        'absolute inset-0 z-0 bg-gradient-to-b from-[#19013ece] to-[#1B082A00]',
        className
      )}
    />
  );
};

export default CGradientBackground;
