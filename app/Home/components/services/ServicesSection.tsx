import Image from 'next/image';
import React from 'react';

const ServicesSection = () => {
  return (
    <div className='pt-[123px] text-center'>
      <h3 className='text-3xl font-roboto-flex font-normal'>Services</h3>
      <h3 className='text-[58px] mb-[65px] font-tektur mt-[40px] bg-gradient-to-t from-[#7B747E] to-[#FFFFFF] bg-clip-text text-transparent'>
        Professional Services
      </h3>

      <div className='relative h-[564px] '>
        <div className='h-[111px] w-[100svw] absolute top-0 z-10 border-t border-b border-white'></div>

        <div className='h-[1px] w-[100svw] absolute bottom-0 z-10 mt-[453px] border-t border-b border-white'></div>

        <div className='grid h-full  container mx-auto px-6 md:px-10 grid-cols-1 md:grid-cols-3'>
          <div className='bg-black w-full h-full relative'>

          <Image   src='/line16.png' alt='line' height={564} width={300} className='border-2 h-[564px] right-[-48px] w-[51px] absolute z-20'/>
           
          

          </div>
           <div className='bg-black w-full h-full relative'>

          <Image   src='/line16.png' alt='line' height={564} width={300} className='border-2 h-[564px] right-[-48px] w-[51px] absolute'/>
           
          

          </div>
        
          <div className='bg-black w-full h-full '>1</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
