'use client';
import { fadeInUp } from '@/app/utils/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface MobileCardData {
  title: string;
  description: string;
  number: string;
}

interface CLineMobileCardProps {
  cardsData: MobileCardData[];
}

const CLineMobileCard: React.FC<CLineMobileCardProps> = ({ cardsData }) => {
  return (
    <div className="flex flex-col bg-black overflow-hidden">
      {cardsData?.map((card, index) => {
        // determine if this card should have a top border
        const showTopBorder = index !== 1 && index !== cardsData.length - 1;

        return (
          <div
            key={index}
            className={`h-[380px] relative flex flex-col items-center justify-center border-b border-white ${
              showTopBorder ? 'border-t' : ''
            }`}
          >
            {/* Top line & title */}
            <div className="h-[62px] flex items-center justify-center border-b border-white absolute top-0 left-0 right-0">
              <motion.div
                className="flex justify-center items-center"
                variants={fadeInUp}
                custom={0.2}
              >
                <h3 className="text-[20px] font-tektur bg-gradient-to-t from-[#7B747E] to-[#FFFFFF] bg-clip-text text-transparent">
                  {card.title}
                </h3>
              </motion.div>
            </div>

            {/* Card content */}
            <div className="w-[257px] h-full relative px-3">
              {/* Side lines */}
              <Image
                src="/line16.png"
                alt="line"
                height={327}
                width={227}
                className="border-2 h-[380px] right-[-48px] w-[51px] bottom-0 top-0 absolute z-20"
              />
              <Image
                src="/line16.png"
                alt="line"
                height={327}
                width={227}
                className="border-2 h-[380px] left-[-5px] w-[51px] bottom-0 top-0 absolute z-20"
              />

              {/* Description */}
              <h3 className="mt-[82px] font-roboto-flex text-start text-[16px] leading-[30px]">
                {card.description}
              </h3>

              {/* Number */}
              <motion.h3
                className="text-[64px] absolute bottom-[-25px] right-[5px] font-roboto-flex font-extralight"
                variants={fadeInUp}
              >
                {card.number}
              </motion.h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CLineMobileCard;
