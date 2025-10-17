import type { Metadata } from 'next';
import AboutClient from './aboutClient';
import BASEDOMAIN from '../utils/base';

export const metadata: Metadata = {
  title: 'About Us | B8 ICT Solutions',
  description:
    'We are a team of passionate engineers dedicated to solving complex problems with innovative technology.',
  keywords: ['About us', 'Company', 'Mission', 'Vision'],
  metadataBase: new URL(BASEDOMAIN),
  openGraph: {
    title: 'About Us | B8 ICT Solutions',
    description:
      'We are a team of passionate engineers dedicated to solving complex problems with innovative technology.',
    url: `${BASEDOMAIN}/about-us`,
    type: 'website',
    images: [
      {
        url: `${BASEDOMAIN}/logo.png`,
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
