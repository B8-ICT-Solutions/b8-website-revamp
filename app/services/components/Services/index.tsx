'use client';

import React from 'react';
import CTitle from '@/app/components/common/CTitle';
import CLineCardContainer from '@/app/components/common/CLineCardContainer';
import { cardsData } from '@/app/utils/mock';

const ServicesSection = () => {
  return (
    <section className='pt-[80px] md:pt-[123px] text-center'>
      <CTitle title='Professional Services' />

      {/* ===== First Card Section ===== */}
      <CLineCardContainer cardsData={cardsData} />

      {/* ===== Managed Services Section ===== */}
      <div className='mt-[61px]'>
        <CTitle title='Managed Services' />
        <CLineCardContainer cardsData={cardsData} />
      </div>
    </section>
  );
};

export default ServicesSection;
