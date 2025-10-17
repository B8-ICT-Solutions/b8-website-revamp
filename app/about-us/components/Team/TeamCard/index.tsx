import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type TeamCardProps = {
  name: string;
  position: string;
  photo: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, position, photo }) => {
  return (
    <div className="relative overflow-hidden  shadow-lg">
      {/* Background Frame */}
      <Image
        src="/teamFrame.png"
        alt="Frame"
        width={1600}
        height={1600}
        className="w-full h-auto select-none pointer-events-none"
        priority
      />

      {/* Person Image Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={photo}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-none"
          priority
        />
      </motion.div>

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-center px-5 h-[60px] md:h-[100px] bg-[#FFFFFF1A] backdrop-blur-md font-roboto-flex text-white">
        <h3 className="text-[14px] md:text-[20px] font-semibold leading-tight">{name}</h3>
        <p className="text-[10px] md:text-[12px] opacity-80">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
