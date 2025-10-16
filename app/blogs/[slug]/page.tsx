'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CCursor from '@/app/components/common/CCursor';
import CGradientBackground from '@/app/components/common/CGradientBackground';
import CVdBackground from '@/app/components/common/CVdBackground';
import CHeader from '@/app/components/common/CHeader';
import CMobileHeader from '@/app/components/common/CMobileHeader';
import { blogPosts } from '@/app/data/blogData';
import Image from 'next/image';
import TechIcon from '@/app/components/TechIcon';
import CFooter from '@/app/components/common/CFooter';

const BlogDetailPage = () => {
  const router = useRouter();
  const params = useParams(); // Next.js dynamic route param
  const slug = params?.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className='container mx-auto px-4 py-8 text-center'>
        <h1 className='text-4xl font-bold my-16'>Blog Post Not Found</h1>
        <Link
          href='/blogs'
          className='text-[var(--color-primary)] hover:underline'
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className='lg:pt-[40px] pt-[0px]'>
      <CCursor />
      <CGradientBackground />
      <CVdBackground />
      <CHeader />
      <CMobileHeader />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='container mx-auto px-4 py-8'
      >
        <div className='max-w-4xl mx-auto'>
          <div className='pt-24 pb-12'>
            <Link
              href='/blogs'
              className='text-sm text-[var(--color-primary)] hover:underline flex items-center gap-2 mb-4'
            >
              <Image
                src='/move-left.svg'
                alt='glass'
                width={40}
                height={40}
                className='w-[16px] h-[16px] text-white'
                priority
              />{' '}
              Back to all posts
            </Link>

            <span className='text-md font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full'>
              {post.category}
            </span>

            <h1 className='text-4xl md:text-5xl font-black my-4'>
              {post.title}
            </h1>

            <div className='flex items-center gap-6 text-slate-400 text-sm'>
              <div className='flex items-center gap-2'>
                <span className='flex  items-center gap-3'>
                  <Image
                    src='/calendar.svg'
                    alt='glass'
                    width={40}
                    height={40}
                    className='w-[20px] h-[20px] text-white'
                    priority
                  />
                  {post.date}
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='flex items-center gap-3'>
                  <Image
                    src='/clock.svg'
                    alt='glass'
                    width={40}
                    height={40}
                    className='w-[20px] h-[20px] text-white'
                    priority
                  />
                  {post.readTime}
                </span>
              </div>
              <div className='flex items-center gap-2 ml-auto'>
                {post.icons?.map((icon, idx) => (
                   <TechIcon key={idx} icon={icon} />
                ))}
              </div>
            </div>
          </div>

          <div
            className='prose prose-invert prose-lg max-w-none text-slate-300 prose-h3:text-white'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </motion.div>
      <CFooter/>
    </div>
  );
};

export default BlogDetailPage;
