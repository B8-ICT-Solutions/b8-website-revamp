'use client';
import React from 'react';

import CMobileHeader from '../components/common/CMobileHeader';
import CGradientBackground from '../components/common/CGradientBackground';
import CVdBackground from '../components/common/CVdBackground';
import CFooter from '../components/common/CFooter';
import Hero from './components/Home';
import Intro from './components/Intro';
import Team from './components/Team';
import CHeader from '../components/common/CHeader';
import OurServices from './components/OurServices';
import CoreValues from './components/CoreValues';
import CCursor from '../components/common/CCursor';

const AboutUs = () => {
  return (
    <div className='pt-[100px]'>
      {/* Background Gradient (pale, behind everything) */}
      <CCursor/>

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
    </div>
  );
};

export default AboutUs;
