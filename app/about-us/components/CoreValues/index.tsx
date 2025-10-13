import React from 'react';
import CTitle from '@/app/components/common/CTitle';
import Image from 'next/image';

const CoreValues = () => {
  return (
    <div className='mt-[165px] lg:mt-[120px] text-center'>
      <CTitle title='Our Core Values' />
      <div>
        <div className='grid  h-full container mx-auto px-6 md:px-10 grid-cols-2 md:grid-cols-4 gap-5 lg:'>
          <Image
            src='/coreValues/Innovations.png'
            alt='Innovations'
            width={1200}
            height={1200}
            className='w-full'
            priority
          />
          <Image
            src='/coreValues/Customer.png'
            alt='Customer'
            width={1200}
            height={1200}
            className='w-full'
            priority
          />{' '}
          <Image
            src='/coreValues/Excellence.png'
            alt='Exellence'
            width={1200}
            height={1200}
            className='w-full'
            priority
          />{' '}
          <Image
            src='/coreValues/Integrity.png'
            alt='Integrity'
            width={1200}
            height={1200}
            className='w-full'
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
