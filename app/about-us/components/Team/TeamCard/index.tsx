import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TeamCard = () => {
  return (
    <div className='relative'>
      {/* Background Frame */}
      <Image
        src='/teamFrame.png'
        alt='frame'
        width={1600}
        height={1600}
        className='w-full'
        priority
      />

      {/* Person Image Animation (scroll-triggered, 2s deep reveal) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 2, // 👈 deep 2s cinematic reveal
          ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier curve
        }}
        className='absolute top-0 left-0 right-0 bottom-0 w-full h-full'
      >
        <Image
          src='/pm.png'
          alt='personImage'
          width={1600}
          height={1600}
          className='w-full h-full object-cover'
          priority
        />
      </motion.div>

      {/* Info Overlay */}
      <div className='glass-bg font-roboto-flex flex flex-col items-start px-5 justify-center h-[50px] md:h-[100px] w-full absolute bottom-[0px] left-0 right-0 rounded-none bg-[#FFFFFF1A]'>
        <h3 className='text-[12px] md:text-[20px]'>Phone Myint Thaw</h3>
        <p className='text-[10px] md:text-[12px]'>Project Manager</p>
      </div>
    </div>
  );
};

export default TeamCard;
