import { Metadata } from 'next';
import BlogsClient from './blogsClient';
import BASEDOMAIN from '../utils/base';

export const metadata: Metadata = {
  title: 'Blogs | B8 ICT Solutions',
  description:
    ' Insights, case studies, and news from the B8 ICT Solutions team.',
  keywords: ['About us', 'Company', 'Mission', 'Vision'],
  metadataBase: new URL(BASEDOMAIN),
  openGraph: {
    title: 'Blogs | B8 ICT Solutions',
    description:
      ' Insights, case studies, and news from the B8 ICT Solutions team.',
    url: `${BASEDOMAIN}/blogs`,
    type: 'website',
    images: [
      {
        url: `${BASEDOMAIN}/logo.png`,
        width: 800,
        height: 600,
        alt: 'Company Logo',
      },
    ],
  },
};

const Blog = () => {
  return (
    <div className='lg:pt-[100px] pt-[20px]'>
      <BlogsClient />
    </div>
  );
};

export default Blog;
