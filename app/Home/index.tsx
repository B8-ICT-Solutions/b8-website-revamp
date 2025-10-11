import React from 'react';
import CVdBackground from '../components/common/CVdBackground';
import CGradientBackground from '../components/common/CGradientBackground';
import Menu from './components/Menu';
import Content from './components/Content';
import GlassImage from './components/GlassImage';
import Image from 'next/image';
import ContactButton from './components/ContactButton';
import Marquee from './components/Marquee';
import ServicesSection from './components/services/ServicesSection';
import ScrollMore from './components/ScrollMore';
import AboutB8 from './components/aboutb8/aboutb8';
import CFooter from '../components/common/CFooter';
import MobileHalfConerIntro from './components/MobileHalfConerIntro';

const Home = () => {
  return (
    <div className='relative h-[685px] pt-[72px] '>
      {/* Background Gradient (pale, behind everything) */}
      <CGradientBackground />

      {/* Background Video */}
      <CVdBackground />

      {/* hero.svg background */}
      <div className='absolute top-0 left-0 w-full h-[673px] hidden md:block'>
        <Image
          src='/hero.svg'
          alt='hero background'
          fill
          className='object-cover'
          priority
        />
      </div>

      <p className=' z-50 absolute top-[520px] w-[370px] font-inter font-medium left-[43%] hidden md:block '>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam atque
        voluptatem tempora, neque repellendus minima vel quasi vitae reiciendis
        fugit distinctio nesciunt earum saepe! Molestiae in impedit amet optio
        explicabo.
      </p>

     

      {/* Content */}
      <div className='container relative z-10 px-6 md:px-10 mx-auto'>
        <Content />
      </div>

      {/* Glass Image */}
      <GlassImage />

      <div className='hidden md:block'>
      <Menu />
      </div>

      {/* Line under hero section */}
      <div className='md:mt-[135px] mt-[107px]  z-10 w-full relative  '>
        <div className='container px-10 md:mx-auto relative flex items-center justify-center md:justify-start'>
          <ContactButton />
        </div>
      </div>

      {/* Mobile Half Conar Box */}
      <MobileHalfConerIntro/>

      <ScrollMore />

      <Marquee />
      <ServicesSection />
      <div className='container px-10 mx-auto relative'>
      <AboutB8 />

     
      </div>
      <CFooter/>
     
    </div>
  );
};

export default Home;
