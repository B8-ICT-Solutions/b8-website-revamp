'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTitle from '@/app/components/common/CTitle';

const Aboutb8: React.FC = () => {
  return (
    <>
      <div className='mt-20 relative xl:h-[450px]'>
        <div className='container mx-auto pt-5 md:pt-0 text-center relative'>
          {/* Title */}
          <CTitle title='About B8' />

          {/* Left Image with overlay text */}
          <div className='relative xl:absolute top-0 left-0 xl:w-1/2 h-[290px] xl:h-[450px] z-10'>
            <Image
              src='/aboutb8alyer.png'
              alt='about overlay'
              fill
              priority
              className='object-cover border-2'
              style={{
                maskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
              }}
            />

            <div className='absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2 w-4/5 md:w-[390px] px-4 py-5 border font-poppins text-[14px] bg-black/30 backdrop-blur-sm'>
              We are proud to be one of the few AWS Advanced Tier Partners in
              Myanmar, demonstrating our expertise in cloud infrastructure and
              commitment to delivering world-class solutions on the AWS
              platform.
            </div>
          </div>

          {/* Right Image with fade-in for desktop */}
          <motion.div
            className='xl:absolute hidden xl:block top-[140px] left-[40%] w-[61%] h-[300px] z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src='/awspartner.png'
              alt='awspartner'
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </div>

        {/* Mobile Responsive Image */}
        <div className='w-full xl:hidden relative mt-10 aspect-[16/9]'>
          <Image
            src='/mobileAwsPartner.png'
            alt='awspartner'
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* Learn More Button */}
        <div className='flex xl:hidden justify-center mt-10'>
          <button className='w-[171px] cursor-pointer border border-white h-[60px]'>
            Learn more
          </button>
        </div>
      </div>

      {/* Desktop Learn More Button */}
      <div className='xl:flex hidden justify-start mt-10 md:mt-20'>
        <button className='w-[171px] cursor-pointer border border-white h-[60px]'>
          Learn more
        </button>
      </div>
    </>
  );
};

export default Aboutb8;
