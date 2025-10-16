import React from 'react';
import Image from 'next/image';
import CTitle from '@/app/components/common/CTitle';
import TechIcon, { IconType } from '@/app/components/TechIcon';
import Link from 'next/link';
import AnimateText from './AnimateText';

type BlogPost = {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  icons: IconType[];
  content: string;
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  const { title, description, category, date, readTime, slug, icons } = post;

  // Reusable crystal component that can render a TechIcon inside
  const MainCrystl = ({ icon }: { icon?: IconType }) => (
    <div className='relative flex items-center justify-center'>
      {/* Outer crystal */}
      <Image
        src='/crystal.png'
        width={37}
        height={40}
        alt='crystal-outline'
        className='drop-shadow-md'
      />

      {/* Inner icon (TechIcon or fallback) */}
      <div className='absolute flex items-center justify-center'>
        {icon ? (
          <TechIcon icon={icon} />
        ) : (
          <Image src='/kubu.png' width={16} height={16} alt='inner-crystal' />
        )}
      </div>
    </div>
  );

  return (
    <div className='border p-4 pb-6 border-white/50 relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:border-white flex flex-col h-full'>
      {/* Background image */}
      <Image
        src='/blogBg.png'
        alt='Blog background'
        fill
        className='absolute top-0 left-0 object-cover -z-10 opacity-50 lg:hidden'
      />

      {/* Header */}
      <div className='flex justify-between p-2 relative z-10'>
        <div className='w-[100px] h-[40px] border-white/30 border bg-white/10 flex items-center justify-center text-[12px] font-inter'>
          {category}
        </div>

        <div className='flex gap-3'>
          {icons.slice(0, 3).map((icon, index) => (
            <MainCrystl key={index} icon={icon} />
          ))}
          {icons.length > 3 && <MainCrystl />}
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex-1 flex flex-col mt-2'>
        <CTitle
          title={title}
          className='mb-2 md:text-[20px] lg:text-[30px] line-clamp-2'
        />

        <AnimateText description={description}/>
       

        {/* Footer */}
        <div className='flex justify-between items-center mt-4'>
          <div className='text-[12px] text-white/60 font-inter'>
            {date} • {readTime}
          </div>
          <Link
            href={`/blogs/${slug}`}
            className='text-[24px] font-roboto-flex flex gap-3 items-center cursor-pointer group-hover:translate-x-2 transition-transform duration-200'
          >
            <p>More</p>
            <Image src='/arrow.svg' alt='arrow' height={16} width={7} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
