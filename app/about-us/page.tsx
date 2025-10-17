import type { Metadata } from 'next';
import AboutClient from './aboutClient';

export const metadata: Metadata = {
  title: 'About Us | B8 ICT Solutions',
  description:
    'We are a team of passionate engineers dedicated to solving complex problems with innovative technology.',
  keywords: ['About us', 'Company', 'Mission', 'Vision'],
  metadataBase: new URL('https://b8-website-revamp.vercel.app'),
  openGraph: {
    title: 'About Us | B8 ICT Solutions',
    description:
      'We are a team of passionate engineers dedicated to solving complex problems with innovative technology.',
    url: 'https://b8-website-revamp.vercel.app/about-us',
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

export default function AboutUs() {
  return (
    <main className="pt-[100px]">
      <section>
        <AboutClient />
      </section>
    </main>
  );
}
