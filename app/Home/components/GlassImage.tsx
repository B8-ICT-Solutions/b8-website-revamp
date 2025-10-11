import React from 'react';
import Image from 'next/image';

const GlassImage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: -72,
        zIndex: 5,
        mixBlendMode: 'color-dodge', // <-- apply to wrapper
        pointerEvents: 'none', // optional
      }}
      className='md:left-[43%] h-[685px] md:w-[57%] left-0 w-full '
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
