import CTitle from '@/app/components/common/CTitle';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='mt-[100px] text-center px-5 container mx-auto mb-[75px] lg:mb-[120px]'>
      <CTitle
        title='Our Blogs'
        className='text-[40px] lg:text-[70px] mb-[20px] p-0 font-medium'
      />
      <motion.p
        className='z-[999] text-white font-roboto-flex text-[16px] lg:text-[18px]'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
      >
       Insights, case studies, and news from the B8 ICT Solutions team.
      </motion.p>
    </div>
  );
};

export default Hero;
