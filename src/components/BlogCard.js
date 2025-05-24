import React from 'react'
import { CustomButton } from './button'
const BlogCard = ({ imageUrl }) => {
  return (
    <>
     <div className='flex justify-between  mr-9'>
        <img src={imageUrl} alt="blog" width={600}  />
        <div className='mt-20'>
            <div className='text-sm'>Jan 28,2024</div>
            <div className='text-3xl font-bold text-yellow-600 mt-10 mb-6'>SEO vs SEM: What's the Difference?</div>
            <div className='pr-10 text-sm'>SEO vs. SEM – Let’s break down the difference between each, how they work and when to use them. Giving you insight into the best way to implement these strategise into your business.8 minutes read</div>
            <CustomButton text={"See More"} variant={"primary"} isBold={true} classes={"mt-10 w-40 h-10"}/>
        </div>
    </div>
    </>
   
  )
}

export default BlogCard
