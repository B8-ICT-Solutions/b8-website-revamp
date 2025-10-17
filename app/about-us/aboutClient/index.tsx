'use client';
import CCursor from '@/app/components/common/CCursor';
import CGradientBackground from '@/app/components/common/CGradientBackground';
import CHeader from '@/app/components/common/CHeader';
import CMobileHeader from '@/app/components/common/CMobileHeader';
import CVdBackground from '@/app/components/common/CVdBackground';
import React from 'react';
import Hero from '../components/Home';
import Intro from '../components/Intro';
import Team from '../components/Team';
import CoreValues from '../components/CoreValues';
import OurServices from '../components/OurServices';
import CFooter from '@/app/components/common/CFooter';

const AboutClient = () => {
  return (
    <>
      {/* Background Gradient (pale, behind everything) */}
      <CCursor />

      <CGradientBackground />

      {/* Background Video */}
      <CVdBackground />
      <CHeader />
      <CMobileHeader />
      <Hero />
      <Intro />
      <Team />
      <CoreValues />

      <OurServices />

      <CFooter />
    </>
  );
};

export default AboutClient;
