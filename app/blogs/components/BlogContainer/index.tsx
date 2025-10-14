import React from 'react'
import BlogCard from '../BlogCard'

const BlogContainer = () => {
  return (
    <div className=' mt-[75px] lg:grid hidden h-full container mx-auto px-6 md:px-10 grid-cols-1 md:grid-cols-3'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>


    </div>
  )
}

export default BlogContainer