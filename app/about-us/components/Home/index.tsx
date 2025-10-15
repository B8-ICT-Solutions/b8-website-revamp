import React from 'react';
import { motion } from 'framer-motion';
import CGlassButton from '@/app/components/common/CGlassButton';

const Hero = () => {
  return (
    <section className='mt-[100px] container mx-auto px-5'>
      <div className='relative mt-5 overflow-hidden text-center'>
        {/* About Us button */}
       <CGlassButton title='About Us' className='hidden'/>

        {/* Heading */}
        <motion.h1
          className='text-[50px] md:text-[70px] text-transparent font-medium font-tektur leading-tight bg-clip-text bg-gradient-to-b from-[#7B747E] to-[#7B747E] animate-led'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smoother feel
            delay: 0.6,
          }}
        >
          Managed and <br />
          Professional <br />
          ICT Services Provider
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 1,
          }}
          className='font-poppins text-[12px] md:text-[16px] lg:text-[18px] mt-[25px] max-w-[728px] mx-auto'
        >
        We are a team of passionate engineers dedicated to solving complex problems with innovative technology.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
