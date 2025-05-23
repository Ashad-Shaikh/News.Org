import React from 'react'

const About = () => {
  return (
    <div>
        <div className='py-40 bg-black/95 text-center text-white px-4'>
        <h1 className='text-5xl lg:text-7xl leading-snug mb-5 font-[Poppins] font-bold'>About Us</h1>
        <p className='font-[Poppins] my-5 text-center md:max-w-full lg:w-3/5 mx-auto px-8'>"At News.Org, we deliver trusted, up-to-date news and stories that matter to you. Our mission is to inform, engage, and inspire with accuracy and integrity."</p>
      </div>

      
      <div className='max-w-[1300px] mx-auto p-24'>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
          <div className='w-[350px] md:w-[600px]'>
            <img className='w-full max-w-[600px] object-contain object-center drop-shadow-2xl' src="https://webbizsolutions.in/images/about-us.png" alt="" />
          </div>

          <div className='font-[Poppins] w-[350px] md:w-[600px]'>
            <h1 className='text-3xl font-semibold my-4'>About Us</h1>
            <p className='font-medium text-lg'>
            "At News.Org, we are dedicated to delivering trusted, up-to-date news that keeps you informed. Our team of passionate journalists works tirelessly to bring you stories that matter most. With a commitment to accuracy, integrity, and transparency, we aim to be your go-to source for reliable information."</p>
            <button className='hover:shadow-md rounded-md bg-orange-500 text-white hover:bg-black py-3 px-8 text-base font-[Poppins] font-semibold outline-none hover:text-orange-500 transition-colors duration-300 my-5'>Learn More</button>
          </div>
        </div>
      </div>



    </div>
  )
}

export default About
