import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Intro = () => {
  return (
    <section className='flex flex-col xl:flex-row mt-[50px] md:mt-[80px] lg:mt-[100px] items-center justify-center gap-[50px] md:gap-0 order-2 px-5'>
      
      {/* Text Section */}
      <motion.div
        className='md:w-[80%] lg:w-[45%] border-[0.05px] border-gray-200/50 order-2 md:order-0'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.3, // appears slightly after Hero
        }}
      >
        <p className='font-poppins text-[16px] lg:text-[16px] font-normal text-center md:text-start p-3 lg:p-8'>
          Established in 2023, B8 is a global team currently operating in
          Asia-Pacific Region. We specialize in Cloud Infrastructure and we have
          also expanded our team to provide on-premises solutions to our
          valuable clients. What makes B8 different from a typical service
          provider is the SLA we can guarantee and the instant response,
          whatever it is because of incident or just for a simple consultation.
          We currently have strong partnerships with rapidly growing startups in
          Southeast Asia, such as Dinger. If you are looking for the talent pool
          for whether end-to-end or managed services; with the intention of
          minimal disruption for your infrastructure, you are at the right
          place.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className='md:w-[50%] flex flex-col md:flex-row justify-center items-center gap-[44px]'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.1,
          ease: 'easeOut',
          delay: 0.8, // enters slightly after text
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: 'easeOut',
            delay: 1, // minor stagger for each logo
          }}
        >
          <Image
            src='/logo.png'
            alt='logo'
            width={300}
            height={300}
            priority
            className='z-[999] lg:w-[312px] lg:h-[312px]'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 1.2,
          }}
        >
          <Image
            src='/mobileAwsPartner.png'
            alt='AWS partner logo'
            width={300}
            height={300}
            priority
            className='lg:w-[290px] lg:h-[250px]'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
