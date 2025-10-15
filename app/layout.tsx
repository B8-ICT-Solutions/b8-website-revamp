import type { Metadata } from 'next';
import { Tektur, Roboto_Flex, Inter, Poppins } from 'next/font/google';
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
  description: 'B8 ICT Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${tektur.variable} ${robotoFlex.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
