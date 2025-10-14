import React from 'react';
import CVdBackground from '../components/common/CVdBackground';
import CGradientBackground from '../components/common/CGradientBackground';
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
import CMobileHeader from '../components/common/CMobileHeader';
import CHeader from '../components/common/CHeader';
import CCursor from '../components/common/CCursor';
import { motion } from 'framer-motion';
import HeroText from './components/HeroText';

const Home = () => {
  return (
    <div className='relative  pt-[160px] '>
      {/* Background Gradient (pale, behind everything) */}

      <CHeader />
      <CMobileHeader />
      <CGradientBackground />
      <CCursor />

      {/* Background Video */}
      <CVdBackground />

      {/* hero.svg background */}
      <div className='absolute top-[-10px] left-[-8px] right-0  hidden  w-[100svw] h-[674px] 2xl:h-[900px]   md:block'>
        <Image
          src='/hero.svg'
          alt='hero background'
          fill
          priority
          style={{
            opacity: 0.9,
          }}
        />
      </div>

     <HeroText/>

      {/* Content */}
      <div className='container relative z-10 px-6 md:px-10 mx-auto'>
        <Content />
      </div>

      {/* Glass Image */}
      <GlassImage />

      {/* <div className='hidden md:block'>
        <Menu />
      </div> */}

      {/* Line under hero section */}
      <div className='md:mt-[135px] mt-[107px]  z-10 w-full relative  '>
        <div className='container px-10 md:mx-auto relative flex items-center justify-center md:justify-start'>
          <ContactButton />
        </div>
      </div>

      {/* Mobile Half Conar Box */}
      <MobileHalfConerIntro />

      <ScrollMore />

      <div className='mt-[200px]'>
        <Marquee />
      </div>
      <ServicesSection />
      <div className='container px-10 mx-auto relative'>
        <AboutB8 />
      </div>
      <CFooter />
    </div>
  );
};

export default Home;
