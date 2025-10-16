/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CGradientBackground from './components/common/CGradientBackground';

interface Circle {
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  opacity: number;
  duration: number;
}

const NotFound: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const generated: Circle[] = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 50 + Math.random() * 150,
      dx: -50 + Math.random() * 100,
      dy: -50 + Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.2,
      duration: 20 + Math.random() * 10,
    }));

    setCircles(generated);
  }, []);

  return (
    <div className='relative w-full h-[100svh] overflow-hidden isolate bg-gradient-to-b from-[#19013e] to-[#1B082A]'>
      {/* Background gradients */}
      <CGradientBackground />

      {/* Animated floating circles */}
      <div className='absolute inset-0 overflow-hidden'>
        {circles.map((circle, index) => (
          <motion.div
            key={index}
            className='absolute rounded-full bg-white/10'
            initial={{ x: `${circle.x}%`, y: `${circle.y}%`, opacity: 0 }}
            animate={{
              x: `${circle.x + circle.dx}%`,
              y: `${circle.y + circle.dy}%`,
              opacity: circle.opacity,
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{
              width: circle.size,
              height: circle.size,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      {/* Main 404 section */}
      <div className='flex items-center justify-center h-full relative z-10 flex-wrap text-center '>
        {/* “Sorry” text — hidden on mobile */}
        <motion.p
          className='absolute top-[200px] font-roboto-flex text-white hidden lg:block'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Sorry
        </motion.p>

        {/* First “4” */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='relative text-[130px] md:text-[250px] lg:text-[327px] font-roboto-flex bg-gradient-to-b from-[#FFFFFF] to-[#7B747E] text-transparent bg-clip-text font-extralight'
        >
          4
          {/* Page not found — hidden on mobile */}
          <motion.span
            className='absolute right-0 top-0 left-[-20px] text-[16px] text-white whitespace-nowrap  items-center gap-2 hidden lg:flex'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Page not found{' '}
            <Image
              src='/line.svg'
              className='mt-[40px]'
              alt='dia'
              width={40}
              height={40}
            />
          </motion.span>
          <motion.span
            className='absolute right-0 bottom-0 text-[16px] text-white/70 whitespace-nowrap hidden lg:block'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Nothing to see here
          </motion.span>
        </motion.p>

        {/* Glowing circle image */}
        <motion.div
          className='mx-2 md:mx-4 relative'
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              ease: 'linear',
              duration: 20,
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          style={{
            mixBlendMode: 'color-dodge',
            willChange: 'transform, opacity',
          }}
        >
          <Image
            src='/404.png'
            width={200}
            height={200}
            alt='404 glowing circle'
            className='w-[120px] md:w-[260px] lg:w-[311px] h-auto'
            priority
          />
        </motion.div>

        {/* Second “4” */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className='relative text-[130px] md:text-[250px] lg:text-[327px] font-roboto-flex bg-gradient-to-b from-[#FFFFFF] to-[#7B747E] text-transparent bg-clip-text font-extralight'
        >
          4
          {/* Error + Oops — hidden on mobile */}
          <motion.span
            className='absolute right-0 top-[10px] -translate-y-1/2 text-[16px] text-white whitespace-nowrap hidden lg:block'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Error
          </motion.span>
          <motion.span
            className='absolute gap-3 bottom-0 text-[16px] text-white/70 whitespace-nowrap font-roboto-flex  items-center right-[-35px] hidden lg:flex'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Image
              src='/linebottom.svg'
              className='mb-[40px]'
              alt='dia'
              width={40}
              height={40}
            />
            Oops
          </motion.span>
        </motion.p>
      </div>

      {/* Back to Home button — stays visible */}
      <motion.div
        className='absolute bottom-[100px] lg:bottom-12 left-1/2 -translate-x-1/2 z-10'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(255,255,255,0.1)',
          }}
          whileTap={{ scale: 0.97 }}
          className='w-[140px] md:w-[171px] h-[50px] md:h-[60px] border border-white/60 flex items-center justify-center gap-[10px] cursor-pointer font-inter text-white transition text-sm md:text-base'
          onClick={() => (window.location.href = '/')}
        >
          <h3>Back to Home</h3>
          <Image
            src='/altArrowUp.svg'
            alt='arrow icon'
            width={20}
            height={20}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;
