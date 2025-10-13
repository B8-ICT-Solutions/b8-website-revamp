import React from 'react';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className='flex flex-col  xl:flex-row mt-[50px] md:mt-[80px] lg:mt-[100px] items-center justify-center gap-[50px] md:gap-0 order-2 px-5 '>
      <div className='md:w-[80%] lg:w-[45%] border-[0.05px] border-gray-200/50 order-2 md:order-0'>
        <p className='font-roboto-flex text-[16px] font-normal text-center md:text-start p-3 lg:p-5'>
          Established in 2023, B8 is a global team currently operating in
          Asia-Pacific Region. We specialize in Cloud Infrastructure and we have
          also expanded our team to provide on-premises solutions to our
          valuable clients. What makes B8 different from a typical service
          provider is the SLA we can guarantee and the instant response,
          whatever it is because of incident or just for a simple consultation.
          We currently have strong partnerships with rapidly growing startups in
          Southeast Asia, such as Dinger. If you are looking for the talent pool
          for whether end-to-end or managed services; with the intention of
          minimal disruption for your infrastructure, you are at the right
          place.
        </p>
      </div>
      <div className='md:w-[50%]   flex flex-col md:flex-row justify-center items-center gap-[44px] '>
        <Image
          src='/b8MobileLogo.png'
          alt='logo'
          width={167}
          height={167}
          priority
          className='z-[999]  lg:w-[212px] lg:h-[212px]'
        />
        <Image
          src='/mobileAwsPartner.png'
          alt='logo'
          width={300}
          height={300}
          priority
          className='lg:w-[350] lg:h-[250px]'
        />
      </div>
    </div>
  );
};

export default Intro;
