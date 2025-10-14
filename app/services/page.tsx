'use client';
import React from 'react';
import CGradientBackground from '../components/common/CGradientBackground';
import CVdBackground from '../components/common/CVdBackground';
import CMobileHeader from '../components/common/CMobileHeader';
import CHeader from '../components/common/CHeader';
import ServicesMarquee from '../Home/components/Marquee';
import Hero from './components/Hero';

import CFooter from '../components/common/CFooter';
import ServicesSection from './components/Services';
import CloudComputing from './components/CloudComputing';
import CCursor from '../components/common/CCursor';

const Services = () => {
  return (
    <div className=' pt-[20px] lg:pt-[100px]'>
      <CGradientBackground />
      <CVdBackground />
      <CHeader />
      <CMobileHeader />
      <CCursor/>

      <Hero />

      <ServicesMarquee />

      <ServicesSection />

      <CloudComputing />

      <CFooter />
    </div>
  );
};

export default Services;
