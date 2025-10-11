'use client'
import { fadeInUp } from '@/app/utils/animations';
import { motion } from 'framer-motion';
import React from 'react';

type CTitleProps = {
  title: string;
};

const CTitle: React.FC<CTitleProps> = ({ title }) => {
  return (
    <motion.h3
      className=' text-[28px] md:text-[58px] mb-[65px] font-tektur mt-[15px] md:mt-[40px] bg-gradient-to-t from-[#7B747E] to-[#FFFFFF] bg-clip-text text-transparent'
      initial='hidden'
      whileInView='visible'
      variants={fadeInUp}
      custom={0.2}
      viewport={{once:true}}
    >
      {title}
    </motion.h3>
  );
};

export default CTitle;
