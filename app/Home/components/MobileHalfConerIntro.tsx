import React from 'react'
import Image from 'next/image'

const MobileHalfConerIntro = () => {
  return (
    <div className="relative mt-[100px] h-[200px]  flex items-center justify-center md:hidden">
      <div className="relative w-full h-full">
        <Image
          src="/converHalfBox.svg"
          alt="intro"
          fill // 👈 makes the image fill its parent div
          className="object-contain" // 👈 keeps the image's aspect ratio
          priority
        />
      </div>
    </div>
  )
}

export default MobileHalfConerIntro
