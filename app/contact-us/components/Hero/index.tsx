'use client';

import CGlassButton from '@/app/components/common/CGlassButton';
import CTitle from '@/app/components/common/CTitle';
import React from 'react';
import ContactForm from '../ContactForm';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const textVariant:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const containerVariant:Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariant}
      className="mt-[120px] pb-[100pb]  container mx-auto px-5 lg:min-h-[80svh] lg:flex justify-center items-center"
    >
      <div className="flex items-start flex-col gap-[60px] xl:flex-row xl:items-center  lg:gap-[20px] xl:gap-[100px]">
        {/* Left Text Section */}
        <motion.div
          variants={textVariant}
          className="flex items-start flex-col"
        >
          <motion.div variants={textVariant} custom={0}>
            <CGlassButton title="Contact Us" className="flex" />
          </motion.div>

          <motion.div variants={textVariant} custom={1}>
            <CTitle
              title="Send a message to contact us!"
              className="text-[30px] mb-0"
            />
          </motion.div>

          <motion.p
            variants={textVariant}
            custom={2}
            className="mt-[20px] font-roboto-flex"
          >
            Have a project in mind or just want to say hello? We’d love to hear
            it from you.
          </motion.p>

          {/* Contact Info (Desktop) */}
          <motion.div
            variants={textVariant}
            custom={3}
            className="hidden xl:flex flex-col items-start lg:mt-[50px]"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/glassIconPhone.png"
                alt="phoneicon"
                width={225}
                height={225}
                priority
                className="w-[35px] h-[35px]"
              />
              <p className="text-[12px] font-poppins">
                +95 9448831872, +66 661648029
              </p>
            </div>
            <div className="flex items-center gap-3 mt-[15px]">
              <Image
                src="/glassIconLocation.png"
                alt="iconlocation"
                width={205}
                height={205}
                priority
                className="w-[35px] h-[35px]"
              />
              <p className="text-[12px] font-poppins w-[300px]">
                Shop Building-34, No 7-8, Kabar Aye Pagoda Road, The Central
                Boulevard, Yankin Township, Yangon, Myanmar
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form with subtle entry animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        {/* Contact Info (Mobile) */}
        <motion.div
          variants={textVariant}
          custom={4}
          className="xl:hidden"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/glassIconPhone.png"
              alt="phoneicon"
              width={225}
              height={225}
              priority
              className="w-[35px] h-[35px]"
            />
            <p className="text-[12px] font-poppins">
              +95 9448831872, +66 661648029
            </p>
          </div>
          <div className="flex items-center gap-3 mt-[15px]">
            <Image
              src="/glassIconLocation.png"
              alt="iconlocation"
              width={205}
              height={205}
              priority
              className="w-[35px] h-[35px]"
            />
            <p className="text-[12px] font-poppins">
              Shop Building-34, No 7-8, Kabar Aye Pagoda Road, The Central
              Boulevard, Yankin Township, Yangon, Myanmar
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
