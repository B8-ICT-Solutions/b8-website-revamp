'use client';
import React, { useState } from 'react';
import CCursor from '../components/common/CCursor';
import CGradientBackground from '../components/common/CGradientBackground';
import CVdBackground from '../components/common/CVdBackground';
import CHeader from '../components/common/CHeader';
import CMobileHeader from '../components/common/CMobileHeader';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import BlogContainer from './components/BlogContainer';
import CFooter from '../components/common/CFooter';
import OurServices from '../about-us/components/OurServices';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='lg:pt-[100px] pt-[20px]'>
      <CCursor />
      <CGradientBackground />
      <CVdBackground />
      <CHeader />
      <CMobileHeader />
      <Hero/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogContainer searchQuery={searchQuery} />
      <OurServices/>
      <CFooter/>
    </div>
  );
};

export default Blog;
