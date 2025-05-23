import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Correct import
import { FaArrowRight } from 'react-icons/fa';

const Sidebar = () => {
  const [popularNews, setPopularNews] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5ae44486ef854949864f8f72da2d4093")
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setPopularNews(data.articles.slice(0, 15)); // Access the articles array
        }
      })
      .catch((err) => console.error("Error fetching news:", err)); // Handle fetch errors
  }, []);

  return (
    <div className='hidden lg:block max-w-[250px] p-2 '>
      <div>
        <h3 className='text-2xl font-semibold font-[Poppins] px-2'>Latest News</h3>
        <div>
          {popularNews.slice(0, 3).map((blog, index) => (
            <div className='my-5 border-b-2 border-spacing-2 border-orange-500 px-4' key={index}> {/* Use index if there's no unique ID */}
              <h4 className='text-md font-normal font-[Poppins] py-2'>{blog.title ? blog.title.slice(0,50) + '...' : 'No Title'}</h4> {/* Handle missing title */}
              <Link target='_blank'
                to={blog.url}
                className='flex items-center group font-[Poppins] font-medium px-5 py-2 hover:bg-white hover:text-orange-500'
              >
                Read More
                <FaArrowRight className='group-hover:text-orange-500 text-sm ml-2' />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* popular */}
      <div >
        <h3 className='text-2xl font-semibold font-[Poppins] px-2 mt-12'>Popular News</h3>
        <div>
          {popularNews.slice(4, 7).map((blog, index) => (
            <div className='my-5 border-b-2 border-spacing-2 border-orange-500 px-4' key={index}> {/* Use index if there's no unique ID */}
              <h4 className='text-md font-normal font-[Poppins] py-2'>{blog.title ? blog.title.slice(0,50) + '...' : 'No Title'}</h4> {/* Handle missing title */}
              <Link target='_blank'
                to={blog.url}
                className='flex items-center group font-[Poppins] font-medium px-5 py-2 hover:bg-white hover:text-orange-500'
              >
                Read More
                <FaArrowRight className='group-hover:text-orange-500 text-sm ml-2' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
