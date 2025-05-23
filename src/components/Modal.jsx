import React from 'react'
import { ImCross } from "react-icons/im";

const Modal = ({isOpen, onClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen? "" : 'hidden'}`}>
      <div className='modal-container relative'>
        <div className='bg-black text-center p-5 h-96 lg:w-[500px] rounded-md shadow-orange-700 shadow-lg '>
        <ImCross onClick={onClose} className='text-xl text-white absolute top-5 right-5 cursor-pointer hover:text-orange-500 transition-colors duration-300'/>
            {/* modal content */}
            <h2 className='text-3xl text-white font-bold font-[Poppins] mb-5 mt-6'>Login</h2>
            <form className='px-4'>
                {/* email */}
                <div className='mb-5'>
                    <input type="email" placeholder='Enter your Email' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium font-[Poppins] text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md mb-5'/>

                    <input type="password" placeholder='Enter your Password' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium font-[Poppins] text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md'/>
                </div>
                <div className='mb-5'>
                    <button className='hover:shadow-md rounded-md bg-white hover:bg-orange-500 py-3 px-8 text-base font-[Poppins] font-semibold outline-none hover:text-white  transition-colors duration-300'>Login</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Modal