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
      willChange: 'transform',        // 🔹 hint browser to use GPU
      transform: 'translateZ(0)',     // 🔹 force layer compositing
    }}
    className='md:left-[calc(43%-9px)] h-[685px] md:w-[57%] left-0 w-full '
  >
    <Image
      src='/glass.png'
      alt='glass'
      fill
      priority
      style={{
        objectFit: 'cover',
        opacity: 1,
      }}
    />
  </div>
  
  );
};

export default GlassImage;
