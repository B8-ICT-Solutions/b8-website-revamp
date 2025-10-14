import React from 'react';
import Image from 'next/image';
import CTitle from '@/app/components/common/CTitle';

const BlogCard = () => {

  // Reusable crystal component
  const MainCrystl = ({ text }: { text?: string }) => (
    <div className='relative flex items-center justify-center'>
      {/* Main crystal */}
      <Image
        src={'/crystal.png'}
        width={37}
        height={40}
        alt='service-crystal'
      />

      {/* Inner glow crystal */}
      <div className='absolute flex items-center justify-center'>
        {text ? (
          <span className='text-white font-bold'>{text}</span>
        ) : (
          <Image
            src={'/kubu.png'}
            width={20}
            height={20}
            alt='inner-crystal'
          />
        )}
      </div>
    </div>
  );

  return (
    <div className='border p-[16px] pb-[24px] border-white/50 relative overflow-hidden'>
      {/* Background image */}
      <Image
        src='/blogBg.png'
        alt='Blog background'
        fill
        className='absolute top-0 lg:hidden left-0 object-cover -z-10'
      />

      <div className='flex justify-between p-2 relative z-10'>
        <div className='w-[100px] h-[40px] border-white/30 border bg-white/10 flex items-center justify-center text-[12px] font-inter'>
          Case Study
        </div>

        <div className='flex gap-3'>
          <MainCrystl />
          <MainCrystl />
          <MainCrystl text="4+" />
        </div>
      </div>

      <div className='relative z-10'>
        <CTitle title='Modernizing Digital Banking with AWS and DevOps at Leading Financial Institution' className='mb-0 lg:text-[30px]' />
        <p className='text-[#7B747E] font-inter text-[12px] mt-2'>
          B8 ICT Solutions modernized a leading bank’s digital infrastructure with AWS, Kubernetes, and GitOps, delivering a secure, scalable architecture with CI/CD automation, compliance, and improved performance for seamless digital banking.
        </p>
        <div className='text-[24px] font-roboto-flex flex gap-3 mt-[20px]'>
          <p>More</p>
          <Image src='/arrow.svg' alt='arrow' height={16} width={7} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
