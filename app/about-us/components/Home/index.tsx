import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='mt-[100px] container mx-auto px-5'>
      <div className='relative mt-5 overflow-hidden text-center'>
        {/* About Us button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            delay: 0.3,
          }}
          className='hidden md:flex justify-center'
        >
          <button className='glass-button font-inter w-[172px] flex items-center justify-center gap-2.5 mb-[20px]'>
            <Image src='/diamond.png' alt='dia' width={20} height={20} />
            <span>About Us</span>
          </button>
        </motion.div>

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
          className='font-roboto-flex text-[12px] md:text-[16px] mt-[25px] max-w-[728px] mx-auto'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          rhoncus volutpat ex sit amet interdum. Vestibulum ut ultricies ipsum.
          Maecenas tincidunt orci tempor lorem venenatis, lacinia ornare.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
