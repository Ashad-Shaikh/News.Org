import React from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='bg-black/95 px-4 py-32 mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-[Poppins]'>Welcome to Our Blogs</h1>
        <p  className='text-gray-200 lg:w-3/5 mx-auto mb-5 mt-5'>Start your blog today and join our community of writers and readers who are passionate about sharing their stories and idea. We offer everything you need to get started</p>
        <div className='flex  items-center justify-center'>
          <Link to="/about" className='flex items-center group bg-orange-500 font-[Poppins] font-medium text-white px-5 py-2 rounded-md hover:bg-white hover:text-orange-500 hover:border border border-orange-500'>Learn More <FaArrowRight className='group-hover:text-orange-500 text-white text-sm ml-2'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
