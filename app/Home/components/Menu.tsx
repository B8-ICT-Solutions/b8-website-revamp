import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <div className='absolute right-[100px] h-[160px] font-roboto-flex font-medium flex flex-col justify-around top-[150px] bg-black/90 px-6 py-4 space-y-3 text-white text-sm z-20'>
      <Link href={'about-us'} className='hover:underline duration-300 cursor-pointer transform transition-all '>
        About us
      </Link>
      <p className='hover:underline duration-300 cursor-pointer transform transition-all '>
        Services
      </p>
      <p className='hover:underline duration-300 cursor-pointer transform transition-all '>
        Blogs
      </p>
    </div>
  );
};

export default Menu;
