'use client';
import React, { useState } from 'react';
import BlogCard from '../BlogCard';
import { blogPosts } from '@/app/data/blogData';

interface BlogContainerProps {
  searchQuery: string;
}

const BlogContainer: React.FC<BlogContainerProps> = ({ searchQuery }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Filter posts by title
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-[75px] container mx-auto px-6 md:px-10 h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-0 transition-all duration-300">
      {filteredPosts.map((post, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`transition-all duration-300 ${
            hoveredIndex !== null && hoveredIndex !== index
              ? 'blur-[1px] scale-[0.98] opacity-90'
              : 'blur-none opacity-100'
          }`}
        >
          <BlogCard post={post} />
        </div>
      ))}

      {filteredPosts.length === 0 && (
        <p className="text-center font-roboto-flex col-span-full text-white/80 mt-10">
          No blogs found with this title.
        </p>
      )}
    </div>
  );
};

export default BlogContainer;
