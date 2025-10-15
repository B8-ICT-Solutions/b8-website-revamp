'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


import { fadeInUp } from '@/app/utils/animations'
import CTitle from '@/app/components/common/CTitle'
import CLineCardContainer from '@/app/components/common/CLineCardContainer'
import { cardsData, ManagedcardsData } from '@/app/utils/mock'

const ServicesSection = () => {
  return (
    <section className="pt-[80px] md:pt-[123px] text-center">
      {/* ===== Section Header ===== */}
      <motion.h3
        className="text-[24px] md:text-3xl font-roboto-flex font-normal"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={0}
        viewport={{ once: true }}
      >
        Services
      </motion.h3>

      <CTitle title="Professional Services" />

      {/* ===== First Card Section ===== */}
      <CLineCardContainer cardsData={cardsData} />

      {/* ===== Managed Services Section ===== */}
      <div className="mt-[61px]">
        <CTitle title="Managed Services" />
        <CLineCardContainer cardsData={ManagedcardsData} />
      </div>

      {/* ===== "More" Arrow Animation ===== */}
      <motion.h3
        className="mt-[80px] text-[30px] font-roboto-flex hidden  md:flex items-center justify-center gap-2.5 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        More
        <motion.div
          animate={{ x: [0, 5, 0], opacity: [1, 0.4, 1] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
        >
          <Image src="/arrow.svg" alt="arrow" height={22} width={8} />
        </motion.div>
      </motion.h3>
    </section>
  )
}

export default ServicesSection
