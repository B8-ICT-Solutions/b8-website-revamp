'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Content = () => {
  return (
    <div className='max-w-[600px] text-center md:text-start'>
      <Image src='/singleLogo.png' className='hidden md:block' width={63} height={87} alt='logo' />

      {/* mobile Logo */}
      <Image src='/b8MobileLogo.png' className='md:hidden block mx-auto' width={70} height={70} alt='logo' />
      
      <div className='relative mt-5 overflow-hidden'>
        <motion.h1
          className='text-[50px] md:text-[60px] text-transparent font-medium font-tektur leading-tight bg-clip-text bg-gradient-to-b from-[#7B747E] to-[#7B747E] animate-led'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
          }}
        >
          Managed and <br />
          Professional <br />
          ICT Services Provider
        </motion.h1>

      </div>
    </div>
  )
}

export default Content
