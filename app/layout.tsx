import type { Metadata } from "next";
import { Tektur,Roboto_Flex,Inter } from "next/font/google";
import "./globals.css";
import CMobileHeader from "./components/common/CMobileHeader";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

const inter = Inter({
  variable:"--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "B8 ICT Solutions",
  description: "B8 ICT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tektur.variable} ${robotoFlex.variable} ${inter.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
