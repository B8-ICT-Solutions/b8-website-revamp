import React from 'react';
import Image from 'next/image';

const GlassImage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: -72,
        zIndex: 5,
        mixBlendMode: 'color-dodge',
        pointerEvents: 'none',
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
      className='xl:left-[calc(43%-5px)] h-[685px] xl:w-[57%] left-0 w-full relative overflow-hidden'
    >
      <Image
        src='/glass.png'
        alt='glass'
        fill
        priority
        style={{
          objectFit: 'cover',
          opacity: 1,
          // Mask fades the top and bottom gently
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
    </div>
  );
};

export default GlassImage;
