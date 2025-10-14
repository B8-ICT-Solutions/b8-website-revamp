import React from 'react';
import { motion } from 'framer-motion';
import CTitle from '@/app/components/common/CTitle';
import Image from 'next/image';

const CoreValues = () => {
  // Define animation variants for consistent steady motion
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='mt-[165px] lg:mt-[120px] text-center'>
      <CTitle title='Our Core Values' />

      <motion.div
        className='grid h-full container mx-auto px-6 md:px-10 grid-cols-2 md:grid-cols-4 gap-5'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.25 }} // smooth, steady stagger
      >
        {/* Innovation */}
        <motion.div
          variants={cardVariants}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Image
            src='/coreValues/Innovations.png'
            alt='Innovations'
            width={1200}
            height={1200}
            className='w-full'
            priority
          />
        </motion.div>

        {/* Customer */}
        <motion.div
          variants={cardVariants}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Image
            src='/coreValues/Customer.png'
            alt='Customer'
            width={1200}
            height={1200}
            className='w-full'
            priority
          />
        </motion.div>

        {/* Excellence */}
        <motion.div
          variants={cardVariants}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Image
            src='/coreValues/Excellence.png'
            alt='Excellence'
            width={1200}
            height={1200}
            className='w-full'
            priority
          />
        </motion.div>

        {/* Integrity */}
        <motion.div
          variants={cardVariants}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Image
            src='/coreValues/Integrity.png'
            alt='Integrity'
            width={1200}
            height={1200}
            className='w-full'
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoreValues;
