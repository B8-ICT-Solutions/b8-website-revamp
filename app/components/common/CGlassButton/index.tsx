'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

type CGlassButtonProps = {
    title?:string,
    className?:string
}

const CGlassButton:React.FC<CGlassButtonProps> = ({title,className}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.3,
    }}
    className={clsx(' md:flex justify-center',className)}
  >
    <button className='glass-button font-inter w-[172px] flex items-center justify-center gap-2.5 mb-[20px]'>
      <Image src='/diamond.png' alt='dia' width={20} height={20} />
      <span>{title}</span>
    </button>
  </motion.div>
  )
}

export default CGlassButton