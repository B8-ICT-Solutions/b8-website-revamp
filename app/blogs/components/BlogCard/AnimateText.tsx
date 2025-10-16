'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimateTextProps {
  description: string;
}

const AnimateText: React.FC<AnimateTextProps> = ({ description }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true }}
      className='text-[#7B747E] font-inter text-[12px] line-clamp-3 flex-1'
    >
      {description}
    </motion.p>
  );
};

export default AnimateText;
