import CTitle from '@/app/components/common/CTitle'
import React from 'react'

const Hero = () => {
  return (
    <div className='mt-[100px] text-center px-5 container mx-auto mb-[75px]'>
        <CTitle title='Our Services' className='text-[40px] mb-[20px] p-0'/>
        <p className='z-[999] text-white'>Delivering end-to-end technology solutions tailored to your business needs.</p>
    </div>
  )
}

export default Hero