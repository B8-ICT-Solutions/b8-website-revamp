'use client';
import React from 'react';
import Image from 'next/image';
import CGradientBackground from '../CGradientBackground';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about-us' },
  { name: 'Services', link: '/services' },
  { name: 'Blogs', link: '/blogs' },
  { name: 'Contact Us', link: '/contact-us' },
];

const CFooter = () => {
  return (
    <div className='mt-[133px] relative w-full overflow-hidden lg:h-[480px]'>
      {/* Gradient Background */}
      <CGradientBackground />

      {/* Background Image with soft gradient overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/cfooter.png'
          alt='footer background'
          fill
          priority
          className='object-cover opacity-90'
        />
        <div
          className='absolute inset-0'
          style={{
            backgroundColor: '#3D0A8B',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Footer Content */}
      <div className='relative container mx-auto z-10 flex flex-col lg:flex-row items-center justify-between text-white px-6 md:px-12 py-12 lg:py-16 gap-10 lg:gap-0'>
        {/* Animated Title */}
        <motion.h1
          className='text-[40px] sm:text-[36px] md:text-[48px] lg:text-[50px] text-center lg:text-left font-tektur font-medium leading-snug bg-clip-text text-transparent bg-gradient-to-b from-[#7B747E] to-[#7B747E] animate-led'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Managed and <br />
          Professional <br />
          ICT Services <br /> Provider
        </motion.h1>

        {/* Links Grid */}
        <motion.div
          className='grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-[14px] sm:text-[16px] font-inter text-center justify-between w-full xl:w-auto lg:text-left'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {navLinks.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.link}
                className='text-lg cursor-pointer hover:text-[#C3A9FF] hover:underline transition-all duration-300'
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className='w-full sm:w-[350px] backdrop-blur-md bg-white/10 border border-white/20 p-5 sm:p-6 rounded-2xl shadow-lg'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h3 className='text-[18px] sm:text-[20px] font-inter font-semibold mb-4'>
            Contact Us
          </h3>

          <div className='flex flex-col gap-3'>
            <input
              className='h-[45px] sm:h-[50px] border border-white/30 bg-transparent px-3 outline-none text-white placeholder-white/70 rounded-md focus:border-[#C3A9FF] transition-all'
              placeholder='Reason'
            />
            <textarea
              className='h-[90px] sm:h-[100px] border border-white/30 bg-transparent px-3 py-2 outline-none text-white placeholder-white/70 rounded-md focus:border-[#C3A9FF] transition-all'
              placeholder='Details'
            />
            <motion.button
              className='group flex items-center justify-between h-[45px] pl-4 rounded-md transition-all border-2 border-white/20 overflow-hidden cursor-pointer relative'
              whileTap={{ scale: 0.97 }} // Keep tap feedback only
            >
              {/* Button Text */}
              <span className='text-[14px] sm:text-[16px] font-inter z-10 relative'>
                Send message
              </span>

              {/* Background fill (right to left) */}
              <div className='absolute inset-0 bg-[#6817E5] w-0 right-0 group-hover:w-full transition-all duration-300 ease-in-out z-0'></div>

              {/* Arrow */}
              <div className='relative z-10 flex items-center justify-center h-full w-[45px]'>
                <Image
                  src='/rightArrow.svg'
                  alt='arrow'
                  height={22}
                  width={20}
                />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CFooter;
