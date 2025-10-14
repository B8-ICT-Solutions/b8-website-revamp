'use client'
import { motion } from 'framer-motion'
import React from 'react'

const HeroText = () => {
  return (
    <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
        className=' z-50 absolute top-[505px] 2xl:top-[700px] w-[370px] font-inter font-medium left-[43%] hidden md:block '
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam atque
        voluptatem tempora, neque repellendus minima vel quasi vitae reiciendis
        fugit distinctio nesciunt earum saepe! Molestiae in impedit amet optio
        explicabo.
      </motion.p>
  )
}

export default HeroText