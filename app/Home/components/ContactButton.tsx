import React from 'react'
import Image from 'next/image';


const ContactButton = () => {
  return (
    <button className='h-[60px] font-inter text-[16px] font-medium w-[171px] border border-white absolute bg-gradient-to-r from-[#2a0b58] to-[#3b1b74] z-30 top-[-40px] 2xl:top-[165px] flex items-center justify-center gap-2.5 overflow-hidden cursor-pointer group'>
      {/* Diamond Icon */}
      <div className='transition-transform duration-500 group-hover:rotate-180'>
        <Image src={'/diamond.png'} width={20} height={20} alt='diamond' />
      </div>
      <span className='relative z-10'>Contact Us</span>
      <span className='absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-white/0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none'></span>
    </button>
  )
}

export default ContactButton