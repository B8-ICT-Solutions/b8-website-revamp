'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CMobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`xl:hidden z-[9999] fixed left-0 right-0 top-0 transition-colors duration-300 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      {/* Header bar */}
      <div className="h-[65px] px-5 flex items-center justify-between">
        <div>
          <Image
            src="/b8MobileLogo.png"
            alt="logo"
            width={40}
            height={40}
            priority
          />
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          <Image
            src={isMenuOpen ? '/close.svg' : '/hamburgerMenu.svg'}
            alt="menu"
            width={30}
            height={30}
            priority
          />
        </button>
      </div>

      {/* Dropdown menu (under header, aligned right) */}
      {isMenuOpen && (
        <div className="absolute right-5 top-[65px] flex flex-col items-start bg-black text-white py-4 px-6 space-y-3 font-roboto-flex font-medium text-sm border border-white/10 rounded-xl w-[200px] shadow-lg">
           <Link
            href="/"
            className="hover:underline duration-300 cursor-pointer transition-all"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="hover:underline duration-300 cursor-pointer transition-all"
          >
            About us
          </Link>
          <Link href={'/services'} className="hover:underline duration-300 cursor-pointer transition-all">
            Services
          </Link>
          <Link href={'/blogs'} className="hover:underline duration-300 cursor-pointer transition-all">
            Blogs
          </Link>
        </div>
      )}
    </div>
  );
};

export default CMobileHeader;
