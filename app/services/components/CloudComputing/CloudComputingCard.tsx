import Image from 'next/image';
import CTitle from '@/app/components/common/CTitle';
import { motion } from 'framer-motion';
import React from 'react';

type CloudComputingCardProps = {
  title: string;
  description: string;
  innerCrystals: string[];
};

// --- Individual Card ---
const CloudComputingCard: React.FC<CloudComputingCardProps> = ({
  title,
  description,
  innerCrystals,
}) => {
    const servicesCrystal = (innerSrc: string, index: number) => (
        <motion.div
          key={index}
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
        >
          {/* --- Main crystal (fixed) --- */}
          <motion.div
            animate={{
              rotate: [0, 4, -4, 0],
              scale: [1, 1.02, 1, 1.02, 1],
            }}
            transition={{
              duration: 8, // slower = calmer
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <Image
              src="/crystal.png"
              width={42}
              height={45}
              alt="service-crystal"
              priority
            />
          </motion.div>
      
          {/* --- Inner crystal (mock array) --- */}
          <motion.div
            className="absolute"
            animate={{
              y: [0, -3, 0, 2, 0],
              opacity: [1, 0.85, 1],
              scale: [1, 1.03, 1],
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              duration: 6,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
              delay: index * 0.1, // gentle stagger for rhythm
            }}
          >
            <Image src={innerSrc} width={25} height={25} alt="inner-crystal" />
          </motion.div>
        </motion.div>
      );
      

  return (
    <motion.div
      className="
        w-full 
        h-full 
        border-[1px] border-white/20 
        p-3 lg:p-5 
        hover:border-white/30 
        transition-all duration-300 
        flex flex-col justify-between
      "
    >
      {/* Crystal Row */}
      <div
        className="
          flex justify-start items-center gap-3 mb-3 
          min-h-[50px] lg:min-h-[60px]
        "
      >
        {innerCrystals.map((src, i) => servicesCrystal(src, i))}
      </div>

      {/* Title */}
      <div className="min-h-[70px] lg:min-h-[90px] flex items-end">
        <CTitle
          title={title}
          className="font-roboto-flex mb-[14px] text-[28px] lg:text-[30px]"
        />
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="
          font-poppins
          text-[12px] lg:text-[16px] 
          text-[#968d9a]
          flex-grow
        "
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default CloudComputingCard;
