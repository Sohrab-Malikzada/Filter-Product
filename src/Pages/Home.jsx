// import React, { useState } from 'react'
import Liam from '../assets/Liam.jpg'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import Feuture from '../components/Feuture';
const Home = () => {
 
  return (
    <div>

    <div className='flex flex-col gap-10  justify-center items-center my-25 sm:justify-center lg:flex-row '>
      <div className=''>
        <h1 className='lg:text-[60px] font-bold sm:text-[30px] mb-5 ' >Minimalist design.<br />Maximum quality.</h1>
        <p className='mb-5'>Discover our curated collection of modern products created by talented vendors from around the     world.</p>
        <div className='flex gap-3  sm:flex-col py-1 md:flex-row'>
          <button className='bg-black  text-white p-1 rounded hover:bg-gray-200 hover:font-bold hover:text-black hover:border-1 hover:border-gray-400 hover:p-1 hover:rounded'>Shop Now</button>
          <button className='border-1 border-gray-400 text-black  p-1 rounded hover:bg-gray-200  hover:font-bold  hover:text-black hover:border-1 hover:border-gray-400 hover:p-1 hover:rounded'>Learn More</button>
        </div>
      </div>
      <div>
        <div className='w-100 h-90 relative z-20'>
          <div >
            <img
              className='w-90 h-100 -my-5'
             src={Liam} alt="Liam"
            />
          </div>
        </div>
        <div className='w-30 h-30 bg-gray-300 absolute z-15 mx-70 -my-10'></div>
        <div className='w-20 h-20 bg-black absolute z-10 mx-90 my-8'></div>
      </div>
    </div>
    <div>
      <Feuture/>
    </div>
    </div>
  )
}

export default Home
