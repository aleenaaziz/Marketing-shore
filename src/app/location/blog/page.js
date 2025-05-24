import React from 'react'
import BlogBanner from "@/components/Banners/BlogBanner";
import BlogCard from "@/components/BlogCard";
import { CustomButton } from "@/components/button";

const Blog = () => {
  return (
    <div>
        <BlogBanner />
        <BlogCard imageUrl="/images/blogImages/blog-1.png" />
        <BlogCard imageUrl="/images/blogImages/blog-2.png" />
        <BlogCard imageUrl="/images/blogImages/blog-3.png" />
        <BlogCard imageUrl="/images/blogImages/blog-4.png" />
        <BlogCard imageUrl="/images/blogImages/blog-5.png" />
      <div className='flex float-right -mt-10 pr-16'>
        <span className='mt-2 '>Page 1 to 6</span>
        <CustomButton text={"Next Page"} variant={"primary"} isBold={true} classes={"w-36 h-10 ml-5"}/>
      </div>
    </div>
  )
}

export default Blog
