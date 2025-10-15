import React from 'react';
import BlogCard from '../BlogCard';

const BlogContainer = () => {
  return (
    <div className="mt-[75px] container mx-auto px-6 md:px-10 h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-0">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogContainer;
