import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <div className='relative  h-[685px] overflow-hidden flex items-start'>
            <div className='relative z-10 px-6 md:px-10 max-w-[600px]'>
                <Image src={'/singleLogo.png'} width={63} height={87} alt='logo' />
                <div className="relative mt-5">
                    <h1 className="text-[60px] md:text-[60px] text-transparent font-medium font-tektur leading-tight bg-clip-text bg-gradient-to-b from-[#7B747E] to-[#7B747E] animate-led">
                        Managed and <br />
                        Professional <br />
                        ICT Services Provider
                    </h1>
                </div>

            </div>
            <Image
                src={'/glass.png'}
                alt='glass'
                width={821}
                height={685}
                priority
                style={{
                    position: 'absolute',
                    top: -15,
                    left: 619,
                    mixBlendMode: 'color-dodge',
                    opacity: 1,
                }}
            />
        </div>
    )
}

export default Home