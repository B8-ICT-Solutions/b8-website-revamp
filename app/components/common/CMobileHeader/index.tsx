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
      setIsScrolled(window.scrollY > 75);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="xl:hidden fixed left-0 right-0 top-[10px] z-[9999]">
      {/* Header Bar */}
      <div
        className={`transition-colors duration-300 glass-bg rounded-full bg-transparent ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="h-[65px] px-5 flex items-center justify-between">
          <Image
            src="/b8MobileLogo.png"
            alt="logo"
            width={40}
            height={40}
            priority
          />

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
      </div>

      {/* Dropdown menu (placed outside header to fix blur stacking) */}
      {isMenuOpen && (
        <div className="absolute right-5 top-[75px] flex flex-col items-start text-white py-4 px-6 space-y-3 font-roboto-flex font-medium text-sm border border-white/10 rounded-xl w-[200px] shadow-lg glass-bg">
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
          <Link
            href="/services"
            className="hover:underline duration-300 cursor-pointer transition-all"
          >
            Services
          </Link>
          <Link
            href="/blogs"
            className="hover:underline duration-300 cursor-pointer transition-all"
          >
            Blogs
          </Link>
          <Link
            href="/contact-us"
            className="hover:underline duration-300 cursor-pointer transition-all"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default CMobileHeader;
