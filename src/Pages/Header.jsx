import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom'
import Home  from './Home'
import Contact from './Contact'
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const navigate = useNavigate()
  const handleSignIN =() => {
    navigate('/sign-in')
  }
  // const handleSignUP =() => {
  //   navigate('/sign-up')
  // } 
  return (
    <header className='bg-gray-100 h-12 flex items-center justify-center gap-122   sm:bg-gray-200 sm:px-[120px] md:bg-amber-300 lg:bg-blue-300 xl:bg-gray-200  2xl:bg-gray-300' >
      <span className='text-[24px] mr-10 font-bold hover:font-extrabold'>Commers</span>
      <nav>
        <NavLink className="hover:font-bold" to="/">
          Home
        </NavLink>
        <NavLink className="hover:font-bold" to="/Product">
          Products
        </NavLink>
      </nav>
      <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center border-1 border-gray-400 p-2 rounded-lg hover:bg-gray-100 cursor-pointer '>
          <IoCartOutline className='w-8 h-7'/>
        </div>
        <button onClick={handleSignIN}  className='w-23 h-8 flex items-center justify-center gap-3 bg-black rounded-lg hover:bg-gray-600 cursor-pointer'>
          <FaUser className='text-white ' />
          <span className='text-white '>Sign in</span>
        </button>
      </div>

      <nav className='block sm:hidden'>
        <div className='flex items-center justify-center px-3 py-2 rounded hover:bg-gray-200 cursor-pointer'>
          <RxHamburgerMenu />
        </div>
      </nav>
    </header>
  )
}

export default Header
