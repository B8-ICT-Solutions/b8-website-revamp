import React from 'react';
import Image from 'next/image';

const TeamCard = () => {
  return (
    <div className='relative '>
      <Image
        src='/teamFrame.png'
        alt='menu'
        width={1600}
        height={1600}
        className='w-full'
        priority
      />
       <Image
        src='/pm.png'
        alt='menu'
        width={1600}
        height={1600}
        className='w-full absolute top-0 left-0 bottom-0 right-0'
        priority
      />
      <div className='glass-bg font-roboto-flex flex flex-col items-start px-5 justify-center  h-[50px] md:h-[100px] w-full absolute bottom-[0px] left-0 right-0 rounded-none bg-[#FFFFFF1A] '>
        <h3 className='text-[12px] md:text-[20px]'>Phone Myint Thaw</h3>
        <p className='text-[10px] md:text-[12px]'>Project Manager</p>
      </div>
    </div>
  );
};

export default TeamCard;
