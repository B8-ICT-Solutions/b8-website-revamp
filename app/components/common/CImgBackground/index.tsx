import React from 'react';
import Image from 'next/image';

const CImgBackground = () => {
  return (
    <div className="relative w-full h-[100svh]">
      <Image
        src="/contactUsBg.png"
        alt="Glass background"
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

export default CImgBackground;
