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

const Home = () => {
  return (
    <div className='relative h-[685px]  pt-[72px]   '>
      {/* Background Gradient (pale, behind everything) */}
      <CGradientBackground />
      {/* Background Video */}
      <CVdBackground />

      {/* hero section */}
      <div className='container relative z-10 px-6 md:px-10 mx-auto'>
        <Content />
      </div>

      {/* Glass Image */}
      <GlassImage />
      <Menu />

      {/* Line under hero section */}
      <div className='mt-[135px] border-t border-white z-10 w-full relative'>
        <div className='container px-10 mx-auto relative'>
          <ContactButton />
        </div>

        {/* Move Image outside container so right-0 works */}
        <Image
          src={'/line7.svg'}
          width={300}
          height={100}
          alt='line'
          className='absolute right-0 top-[-55px] z-20'
        />
      </div>

      <Marquee />


      {/* Services */}
      <ServicesSection/>

      
    </div>
  );
};

export default Home;
