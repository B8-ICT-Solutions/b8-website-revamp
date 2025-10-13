import React from 'react';
import Image from 'next/image';
import CTitle from '@/app/components/common/CTitle';

const CloudComputing = () => {
  return (
    <div className='mt-[80px] p-5 flex flex-col gap-[20px]'>
      <CloudComputingCard />
      <CloudComputingCard />
      <CloudComputingCard />
    </div>
  );
};

const CloudComputingCard = () => {
  const servicesCrystl = () => {
    return (
      <div className='relative flex items-center justify-center'>
        <Image
          src={'/crystal.png'}
          width={37}
          height={40}
          alt={`service-crystal`}
        />
        <Image
          className='absolute'
          src={'/kubu.png'}
          width={20}
          height={20}
          alt={`service-crystal`}
        />
      </div>
    );
  };

  return (
    <div className='h-[223px] w-full border-[1px] border-white/50 p-3'>
      <div className='flex justify-start items-center gap-3'>
        {servicesCrystl()}
        {servicesCrystl()}
        {servicesCrystl()}
        {servicesCrystl()}
      </div>
      <CTitle title='Cloud Computing' className='font-roboto-flex mb-[14px] text-[32px]'/>
      <p className='font-roboto-flex text-[12px]'>B8 ICT Solutions modernized a leading bank’s digital infrastructure with AWS, Kubernetes, and GitOps, delivering a secure, scalable architecture with CI/CD automation, compliance, and improved performance for seamless digital banking.</p>
    </div>
  );
};

export default CloudComputing;
