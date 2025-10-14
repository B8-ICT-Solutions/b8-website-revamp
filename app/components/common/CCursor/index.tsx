'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CCursor = () => {
  // Raw cursor position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Framer Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="pointer-events-none hidden lg:fixed top-0 left-0 w-6 h-6 bg-[#6817E5] rounded-full shadow-lg z-50 transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CCursor;
