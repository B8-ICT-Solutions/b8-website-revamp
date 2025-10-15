/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useEffect, useState } from 'react';
import CGradientBackground from './components/common/CGradientBackground';
import Image from 'next/image';
import { motion } from 'framer-motion';

const NotFound = () => {
  // Client-only circles for dark smoke effect
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 50 + Math.random() * 150,
      dx: -50 + Math.random() * 100,
      dy: -50 + Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.2,
      duration: 20 + Math.random() * 10,
    }));
    //@ts-ignore
    setCircles(generated);
  }, []);

  return (
    <div className="relative w-full h-[100svh] bg-gradient-to-b from-[#19013ece] to-[#1B082A00] overflow-hidden">
      <CGradientBackground />

      {/* Floating dark smoke circles */}
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#1A1A1A] rounded-full"
          style={{
             //@ts-ignore
            width: circle.size,
             //@ts-ignore
            height: circle.size, //@ts-ignore
            top: `${circle.y}%`,
             //@ts-ignore
            left: `${circle.x}%`,
            filter: 'blur(50px)',
          }}
          animate={{
             //@ts-ignore
            x: [0, circle.dx, 0],
             //@ts-ignore
            y: [0, circle.dy, 0],
             //@ts-ignore
            opacity: [circle.opacity, circle.opacity + 0.2, circle.opacity],
          }}
          transition={{
             //@ts-ignore
            duration: circle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="flex items-center justify-center h-full relative z-10">
        {/* Left 4 with glitch */}
        <motion.p
          className="text-[327px] font-roboto-flex text-[#E0E0E0] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          4
          <motion.span
            className="absolute top-0 left-0 text-[#FF004F] opacity-50"
            animate={{ x: [-5, 5, -5], y: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 0.3 }}
            initial={false}
          >
            4
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-[#00FFE7] opacity-50"
            animate={{ x: [5, -5, 5], y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 0.3 }}
            initial={false}
          >
            4
          </motion.span>
        </motion.p>

        {/* Rotating diamond */}
        <motion.div
          className="mx-4"
          initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          <Image
            src="/404.png"
            width={311}
            height={311}
            alt="diamond"
            className="w-[311px] h-[311px] drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
          />
        </motion.div>

        {/* Right 4 with glitch */}
        <motion.p
          className="text-[327px] font-roboto-flex text-[#E0E0E0] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          4
          <motion.span
            className="absolute top-0 left-0 text-[#FF004F] opacity-50"
            animate={{ x: [-5, 5, -5], y: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 0.3 }}
            initial={false}
          >
            4
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-[#00FFE7] opacity-50"
            animate={{ x: [5, -5, 5], y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 0.3 }}
            initial={false}
          >
            4
          </motion.span>
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
