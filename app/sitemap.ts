// app/sitemap.ts
import { MetadataRoute } from 'next';
import BASEDOMAIN from './utils/base';

// Example: fetch or import your blog slugs
const blogSlugs = [
  'amazon-rds-101',
  'aws-s3-101',
  'aws-r53-101',
  'aws-ec2-101',
  'micro-service',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASEDOMAIN, lastModified: new Date() },
    { url: `${BASEDOMAIN}/about-us`, lastModified: new Date() },
    { url: `${BASEDOMAIN}/services`, lastModified: new Date() },
    { url: `${BASEDOMAIN}/blogs`, lastModified: new Date() },
    { url: `${BASEDOMAIN}/contact-us`, lastModified: new Date() },
  ];

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASEDOMAIN}/blogs/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...blogPages];
}
