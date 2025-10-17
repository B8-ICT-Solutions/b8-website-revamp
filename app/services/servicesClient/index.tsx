'use client';

import CCursor from '@/app/components/common/CCursor';
import CGradientBackground from '@/app/components/common/CGradientBackground';
import CHeader from '@/app/components/common/CHeader';
import CMobileHeader from '@/app/components/common/CMobileHeader';
import CVdBackground from '@/app/components/common/CVdBackground';
import React from 'react';
import Hero from '../components/Hero';
import ServicesMarquee from '@/app/Home/components/Marquee';
import ServicesSection from '../components/Services';
import CloudComputing from '../components/CloudComputing';
import CFooter from '@/app/components/common/CFooter';

const ServicesClient = () => {
  return (
    <>
      <CGradientBackground />
      <CVdBackground />
      <CHeader />
      <CMobileHeader />
      <CCursor />

      <Hero />

      <ServicesMarquee />

      <ServicesSection />

      <CloudComputing />

      <CFooter />
    </>
  );
};

export default ServicesClient;
