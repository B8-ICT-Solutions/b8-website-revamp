import CTitle from '@/app/components/common/CTitle'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const OurServices = () => {
  return (
    <div className='lg:my-[193px] my-[150px] px-3 flex flex-col justify-center items-center'>
       <div className='text-center max-w-[888px] mx-auto '>
       <CTitle title='Your trusted partner in ICT solutions. We provide comprehensive cloud services, software development, and DevOps solutions.' className='font-medium text-[20px] lg:text-[34px]'/>
       </div>
       <Link  href={'/services'} className='w-[171px] font-inter h-[60px] border border-white/60 flex items-center justify-center gap-[10px] cursor-pointer'>
        <h3>Our Services</h3>
        <Image src='/altArrowUp.svg' alt='dia' width={24} height={24} />
       </Link>
    </div>
  )
}

export default OurServices