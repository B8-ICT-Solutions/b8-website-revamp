// app/sitemap.ts
import { MetadataRoute } from 'next'

// Example: fetch or import your blog slugs
const blogSlugs = ['amazon-rds-101', 'aws-s3-101', 'aws-r53-101','aws-ec2-101','micro-service']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: 'https://b8-website-revamp.vercel.app', lastModified: new Date() },
    { url: 'https://b8-website-revamp.vercel.app/about-us', lastModified: new Date() },
    { url: 'https://b8-website-revamp.vercel.app/services', lastModified: new Date() },
    { url: 'https://b8-website-revamp.vercel.app/blogs', lastModified: new Date() },
    { url: 'https://b8-website-revamp.vercel.app/contact-us', lastModified: new Date() },
  ]

  const blogPages = blogSlugs.map(slug => ({
    url: `https://b8-website-revamp.vercel.app/blogs/${slug}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...blogPages]
}
