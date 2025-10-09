import Image from 'next/image';
import React from 'react';

const Content = () => {
  return (
    <div className='max-w-[600px]'>
      <Image src='/singleLogo.png' width={63} height={87} alt='logo' />
      <div className='relative mt-5'>
        <h1 className='text-[60px] md:text-[60px] text-transparent font-medium font-tektur leading-tight bg-clip-text bg-gradient-to-b from-[#7B747E] to-[#7B747E] animate-led'>
          Managed and <br />
          Professional <br />
          ICT Services Provider
        </h1>
      </div>
    </div>
  );
};

export default Content;
