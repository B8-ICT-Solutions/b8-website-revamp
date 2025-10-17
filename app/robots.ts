// app/robots.ts
import { MetadataRoute } from 'next'
import BASEDOMAIN from './utils/base'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASEDOMAIN}/sitemap.xml`,
  }
}
