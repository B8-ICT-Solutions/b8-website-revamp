import CTitle from '@/app/components/common/CTitle'
import React from 'react'
import Image from 'next/image';


const OurServices = () => {
  return (
    <div className='lg:my-[193px] my-[150px] px-3 flex flex-col justify-center items-center'>
       <div className='text-center max-w-[888px] mx-auto '>
       <CTitle title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' className='font-medium'/>
       </div>
       <button className='w-[171px] font-inter h-[60px] border-[0.1px] flex items-center justify-center gap-[10px] cursor-pointer'>
        <h3>Our Services</h3>
        <Image src='/altArrowUp.svg' alt='dia' width={24} height={24} />
       </button>
    </div>
  )
}

export default OurServices