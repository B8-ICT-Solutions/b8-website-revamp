import React from 'react'
import Image from 'next/image'

const CHeader = () => {
  return (
    <div className='container mx-auto  h-[90px] p-[10px] flex items-center justify-between'>
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      <button className='glass-button font-inter gap-[30px] flex items-center justify-between'>
      <span>Home</span>
      <span>About Us</span>
      <span>Services</span>
      <span>Blogs</span>
      </button>
      <button className='glass-button font-inter gap-2.5'>
       <Image src="/diamond.png" alt='dia' width={20} height={20}/>
        <span>Contact Us</span>
      </button>
    </div>
  )
}

export default CHeader