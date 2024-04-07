import React, { useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";

function NavBar() {
    const [nav, setNav] = useState(false)

    const handleNavBarClick = () => {
      setNav(!nav)
      if(!nav){
        document.body.style.overflow = 'hidden'
      } else{
        document.body.style.overflow = 'scroll'
      }
    }
  return (
    <div className=' bg-gray-100 w-full h-14 fixed py-2 top-0 z-10'>
       <div className='w-[86%] ml-7 md:ml-28 md:w-[80%] flex justify-between items-center py-2'>
          <h1 className='text-2xl font-bold text-gray-600 z-20'>DZUDZU</h1>
          <HiMenuAlt2 onClick={handleNavBarClick} className='text-2xl font-bold text-gray-500 cursor-pointer z-20 md:hidden'/>
          <div className= ' md:flex justify-center items-center hidden '>
            <ul className= ' flex gap-3 items-center z-20 '>
                <li className='text-xl text-gray-600 cursor-pointer hover:text-gray-700 '>Home</li>
                <li className='text-xl text-gray-600 cursor-pointer hover:text-gray-700 '>About</li>
                <li className='text-xl text-gray-600 cursor-pointer hover:text-gray-700 ' >Projects</li>
                <li className='text-xl text-gray-600  cursor-pointer hover:text-gray-700 '>Contact</li>
            </ul>
          </div>
         { nav && <div className= ' fixed top-0 left-0 w-full h-screen bg-black/90 flex justify-center items-center md:hidden'>
            <ul className={ nav ? ' flex flex-col gap-3 items-center z-20' : 'flex items-center gap-2'}>
                <li className='text-xl text-gray-300 cursor-pointer '>Home</li>
                <li className='text-xl text-gray-300 cursor-pointer '>About</li>
                <li className='text-xl text-gray-300 cursor-pointer ' >Projects</li>
                <li className='text-xl text-gray-300 cursor-pointer '>Contact</li>
            </ul>
          </div>
           }

       </div>
      
    </div>
  )
}

export default NavBar
