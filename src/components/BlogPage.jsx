import React, { useState, useEffect } from 'react';
import BlogCards from './BlogCards';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Sidebar from './Sidebar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9; // blogs per page
  const [totalPages, setTotalPages] = useState(1); // To handle pagination limits
  const [selectedCategory, setSelectedCategory] = useState("general"); // Default category

  useEffect(() => {
    async function fetchBlogs(page = 1) {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=5ae44486ef854949864f8f72da2d4093&page=${page}&pageSize=${pageSize}`;
        const response = await fetch(url);
        const data = await response.json();
        let parsedData = data.articles;
        setBlogs(parsedData);
        setTotalPages(Math.ceil(data.totalResults / pageSize)); // Calculate total pages
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }
    fetchBlogs(currentPage);
  }, [currentPage, selectedCategory]); // Re-fetch blogs when page or category changes

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleSelect = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  return (
    <div className='mx-auto'>
      {/* Category Section */}
      <div className="max-w-[1500px] py-2 px-8 flex flex-col mx-auto">
        <h1 className='my-3 text-orange-500 font-bold font-[Poppins] text-lg'>Select Your Desired Category</h1>
        <select
          className="px-2 py-1 text-black outline-none w-auto border-2 border-black focus:outline-none font-[Poppins]"
          onChange={handleSelect}
          value={selectedCategory}
        >
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>


      {/* BlogCard Section */}
      <div className='flex flex-col lg:flex-row gap-8 max-w-[1500px] mx-auto mt-4'>
        <BlogCards blogs={blogs} />
        <div>
        <Sidebar/>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="max-w-[1500px] flex items-center justify-between p-4 mx-auto">
        <button
          disabled={currentPage <= 1}
          onClick={handlePreviousClick}
          className={`bg-orange-500 px-4 py-2 text-white border text-md font-[Poppins] rounded-sm hover:bg-white hover:text-orange-500 hover:border-orange-500 transition-all flex items-center gap-2 ${
            currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <span>
            <FaLongArrowAltLeft />
          </span>
          <span className="hidden md:block">Previous</span>
        </button>
        <button
          disabled={currentPage >= totalPages}
          onClick={handleNextClick}
          className={`bg-orange-500 px-4 py-2 text-white border text-md font-[Poppins] rounded-sm hover:bg-white hover:text-orange-500 hover:border-orange-500 transition-all flex items-center gap-2 ${
            currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <span className="hidden md:block">Next</span>
          <span>
            <FaLongArrowAltRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
