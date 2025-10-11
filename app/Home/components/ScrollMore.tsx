'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const ScrollMore = () => {
  return (
    <div className='md:absolute flex justify-center my-[60px] right-[10%] top-[520px]  items-center gap-[15px] font-inter '>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      >
        Scroll for more
      </motion.p>

      {/* Arrow 1 */}
      <motion.div
        animate={{ x: [0, 5, 0], opacity: [1, 0.6, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image src='/arrow.svg' alt='arrow' height={22} width={7} />
      </motion.div>

      {/* Arrow 2 (slightly delayed for a wave effect) */}
      <motion.div
        animate={{ x: [0, 5, 0], opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <Image src='/arrow.svg' alt='arrow' height={22} width={7} />
      </motion.div>
    </div>
  )
}

export default ScrollMore
