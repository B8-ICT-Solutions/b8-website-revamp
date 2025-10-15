'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const CHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 75);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'hidden xl:flex fixed left-0 right-0 top-0 z-[999] h-[90px] items-center justify-between transition-colors duration-300 backdrop-blur-md bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-[20px]">
        {/* Left: Logo */}
        <div className="w-[33%] flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={140}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="w-[50%] flex items-center justify-center">
          <div className="glass-button font-inter gap-[5px] flex items-center justify-between px-2 py-1 rounded-full">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about-us' },
              { name: 'Services', path: '/services' },
              { name: 'Blogs', path: '/blogs' },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={clsx(
                  'px-[20px] py-[5px] rounded-full transition-all duration-300 hover:bg-black/60',
                  pathname === link.path && 'bg-black/60 text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right: Contact button */}
        <div className="w-[33%] flex items-center justify-end">
          <button className="glass-button font-inter gap-2.5 px-[20px] py-[6px] rounded-full flex items-center hover:bg-black/60 transition-all duration-300">
            <Image src="/diamond.png" alt="dia" width={20} height={20} />
            <Link href={'/contact-us'}>Contact Us</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CHeader;
