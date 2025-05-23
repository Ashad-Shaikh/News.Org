import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div>
      <div className='py-40 bg-black/95 text-center text-white px-4'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-boldmb-5 font-[Poppins]'>Explore News</h1>
      </div>
      {/* all Blogs */}

      <div className='max-w-7xlmx-auto'>
        <BlogPage category='science'/>
      </div>


    </div>
  )
}

export default Blogs
