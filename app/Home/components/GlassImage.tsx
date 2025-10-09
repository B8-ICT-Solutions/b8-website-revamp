import React from 'react'
import Image from 'next/image';


const GlassImage = () => {
  return (
    <Image
    src='/glass.png'
    alt='glass'
    width={821}
    height={685}
    priority
    style={{
      width: '821px',
      height: '685px',
      position: 'absolute',
      top: -72,
      left: 619,
      mixBlendMode: 'color-dodge',
      opacity: 1,
      zIndex: 5,
    }}
    className='border-l-[1px] border-white'
  />
  )
}

export default GlassImage