'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import React from 'react';

type CTitleProps = {
  title: string;
  className?: string;
};

const CTitle: React.FC<CTitleProps> = ({ title, className }) => {
  // If the user passes zzzzzzzany class containing "mb-", skip the default mb-[65px]
  const hasCustomMargin = className?.includes('mb-');
  const hasFontSize = className?.includes('md:text-[20px]');


  return (
    <motion.h3
      className={clsx(
        'text-[28px]  font-tektur mt-[15px] md:mt-[40px]',
        'bg-gradient-to-t from-[#7B747E] to-[#FFFFFF] bg-clip-text text-transparent',
        'will-change-transform will-change-opacity transform-gpu',
        hasCustomMargin ? '' : 'mb-[65px]', // ✅ default margin only if user didn’t override
        hasFontSize?'':'md:text-[58px]',
        className
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h3>
  );
};

export default CTitle;
