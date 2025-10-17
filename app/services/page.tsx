
import React from 'react';
import ServicesClient from './servicesClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | B8 ICT Solutions',
  description:
    'We are a team of passionate engineers dedicated to solving complex problems with innovative technology.',
  keywords: ['About us', 'Company', 'Services', 'Vision'],
  metadataBase: new URL('https://b8-website-revamp.vercel.app'),
  openGraph: {
    title: 'Services | B8 ICT Solutions',
    description:
      'We are a team of passionate engineers dedicated to solving complex problems with innovative technology.',
    url: 'https://b8-website-revamp.vercel.app/services',
    type: 'website',
    images: [
      {
        url: 'https://b8-website-revamp.vercel.app/logo.png',
        width: 800,
        height: 600,
        alt: 'Company Logo',
      },
    ],
  },
};

const Services = () => {
  return (
    <div className=' pt-[20px] lg:pt-[100px]'>
     <ServicesClient/>
    </div>
  );
};

export default Services;
