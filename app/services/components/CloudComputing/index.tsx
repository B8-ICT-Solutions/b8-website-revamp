import React from 'react';
import Image from 'next/image';
import CTitle from '@/app/components/common/CTitle';
import { motion } from 'framer-motion';

const CloudComputing = () => {
  return (
    <div className='mt-[80px] xl:mt-[140px] p-5 flex flex-col gap-[20px] lg:gap-y-[30px] lg:gap-0 md:grid grid-cols-3 container mx-auto'>
      <CloudComputingCard />
      <CloudComputingCard />
      <CloudComputingCard />
      <CloudComputingCard />
      <CloudComputingCard />
      <CloudComputingCard />
    </div>
  );
};

const CloudComputingCard = () => {
  // Animated crystal set
  const servicesCrystal = () => {
    return (
      <motion.div
        className='relative flex items-center justify-center'
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
      >
        {/* Main crystal softly rotating */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <Image
            src={'/crystal.png'}
            width={37}
            height={40}
            alt='service-crystal'
          />
        </motion.div>

        {/* Inner glow crystal floating gently */}
        <motion.div
          className='absolute'
          animate={{
            y: [0, -6, 0, 4, 0],
            opacity: [1, 0.6, 1],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <Image
            src={'/kubu.png'}
            width={20}
            height={20}
            alt='inner-crystal'
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className='w-full border-[1px] border-white/20 p-3 lg:p-5 hover:border-white/30 transition-all duration-300'
    >
      {/* Crystal Row */}
      <div className='flex justify-start items-center gap-3 mb-3'>
        {servicesCrystal()}
        {servicesCrystal()}
        {servicesCrystal()}
        {servicesCrystal()}
      </div>

      {/* Title */}
      <CTitle
        title='Cloud Computing'
        className='font-roboto-flex mb-[14px] text-[32px] lg:text-[40px]'
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
        className='font-roboto-flex text-[12px] lg:text-[16px] text-[#7B747E]'
      >
        B8 ICT Solutions modernized a leading bank’s digital infrastructure with
        AWS, Kubernetes, and GitOps, delivering a secure, scalable architecture
        with CI/CD automation, compliance, and improved performance for seamless
        digital banking.
      </motion.p>
    </motion.div>
  );
};

export default CloudComputing;
