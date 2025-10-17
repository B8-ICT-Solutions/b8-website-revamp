'use client';
import { motion } from 'framer-motion';
import React from 'react';

const HeroText = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true }}
      className=' z-50 absolute text-white/80 font-roboto-flex xl:text-[18px] top-[530px] 2xl:top-[700px] w-[370px]  font-medium left-[43%] hidden xl:block '
    >
      B8 helps to manage your technology infrastructure, from consultation to
      execution.
    </motion.p>
  );
};

export default HeroText;
