import type { Metadata } from 'next';
import { Tektur, Roboto_Flex, Inter, Poppins } from 'next/font/google';
import Head from 'next/head';

import './globals.css';

const tektur = Tektur({
  variable: '--font-tektur',
  subsets: ['latin'],
});

const robotoFlex = Roboto_Flex({
  variable: '--font-roboto-flex',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'B8 ICT Solutions',
  description:
    'B8 helps to manage your technology infrastructure, from consultation to execution.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta name='keywords' content='B8' />
        <link rel='canonical' href='https://b8-website-revamp.vercel.app' />
        <meta property='og:title' content='B8 ICT Solutions' />
        <meta
          property='og:description'
          content='B8 helps to manage your technology infrastructure, from consultation to execution.'
        />

        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://b8-website-revamp.vercel.app'
        />
        <meta
          property='og:image'
          content='https://b8-website-revamp.vercel.app/logo.png'
        />
      </Head>

      <body
        className={`${tektur.variable} ${robotoFlex.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
