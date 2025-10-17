'use client'
import CCursor from '@/app/components/common/CCursor';
import CGradientBackground from '@/app/components/common/CGradientBackground';
import CHeader from '@/app/components/common/CHeader';
import CMobileHeader from '@/app/components/common/CMobileHeader';
import CVdBackground from '@/app/components/common/CVdBackground';
import React, { useState } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import BlogContainer from '../components/BlogContainer';
import OurServices from '@/app/about-us/components/OurServices';
import CFooter from '@/app/components/common/CFooter';

const BlogsClient = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <CCursor />
      <CGradientBackground />
      <CVdBackground />
      <CHeader />
      <CMobileHeader />
      <Hero />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogContainer searchQuery={searchQuery} />
      <OurServices />
      <CFooter />
    </>
  );
};

export default BlogsClient;
