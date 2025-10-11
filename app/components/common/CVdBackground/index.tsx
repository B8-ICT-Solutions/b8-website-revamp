import clsx from 'clsx';
import React from 'react';

interface CVdBackgroundProps {
  className?: string;
}

const CVdBackground: React.FC<CVdBackgroundProps> = ({ className }) => {
  return (
    <video
      className={clsx(
        'fixed top-0 left-0 w-full scale-[1.9]   h-full object-cover -z-10',
        className
      )}
      src="/Aura.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default CVdBackground;
