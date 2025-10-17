import { bgFade, fadeInUp } from '@/app/utils/animations';
import { motion } from 'framer-motion';
import React from 'react';
import Image from "next/image";


type CLineCardProps = {
  title: string;
  description: string;
  number: string;
  image: null | string;
  delay: number;
};

const CLineCard: React.FC<CLineCardProps> = ({
  title,
  description,
  delay,
  number,
  image
}) => {
  return (
    <motion.div
      className='relative w-full h-full '
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background overlay with blur + black fade */}
      <motion.div
        className='absolute inset-0 w-full h-full'
        variants={bgFade}
        custom={delay}
      />

      {/* Image line */}
      {image && (
        <Image
          src={image}
          alt='line'
          height={564}
          width={300}
          className='border-2 h-[564px] opacity-50 right-[-48px] w-[51px] absolute z-20'
        />
      )}

      {/* Card content */}
      <div className='relative h-full flex flex-col justify-between z-10'>
        <motion.div
          className='h-[111px] flex justify-center items-center'
          variants={fadeInUp}
          custom={delay + 0.2}
        >
          <h3 className='text-[30px] font-tektur bg-gradient-to-t from-[#7B747E] to-[#FFFFFF] bg-clip-text text-transparent'>
            {title}
          </h3>
        </motion.div>

        <motion.div
          className='text-start  h-[453px] px-[71px] pt-[81px]'
          variants={fadeInUp}
          custom={delay + 0.4}
        >
          <h3 className='text-[18px]  leading-[40px] font-inter'>
            {description}
          </h3>
        </motion.div>

        <motion.h3
          className='text-[96px] absolute bottom-[-34px] right-[30px] font-roboto-flex font-extralight text-white/70 opacity-50'
          variants={fadeInUp}
          custom={delay + 0.6}
        >
          {number}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default CLineCard;
