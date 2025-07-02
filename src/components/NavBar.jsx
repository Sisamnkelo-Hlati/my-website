import React, { useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import {Link} from "react-scroll"

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
    <div className=' bg-[#3E4C58] w-full h-16 p-3 sticky  top-0 z-30'>
       <div className='w-[86%] ml-7 md:ml-28 md:w-[80%] flex justify-center'>
       
          
         <div className='flex items-center justify-between w-full h-full'>
          <h1 className='text-gray-400 text-4xl font-bold'>DZUDZU</h1>
          <div className= ' md:flex md:justify-center md:items-center hidden   '>
            <ul className= ' flex gap-3 items-center z-30 '>
               <Link to='hero' spy={true} smooth={true} offset={-200} duration={500}> <li className='text-base text-gray-400  cursor-pointer hover:text-gray-300 '>Home</li></Link>
               <Link to='services'  spy={true} smooth={true} offset={-65} duration={500}><li className='text-base text-gray-400  cursor-pointer hover:text-gray-300 '>Portfolio</li></Link> 
                <Link to='about'  spy={true} smooth={true} offset={-65} duration={500}><li className='text-base text-gray-400  cursor-pointer hover:text-gray-300 '>About</li></Link>
               <Link to='gallery'  spy={true} smooth={true} offset={-65} duration={500}> <li className='text-base text-gray-400  cursor-pointer hover:text-gray-300 ' >Gallery</li></Link>
               <Link to='contact'  spy={true} smooth={true} offset={-65} duration={500}> <li className='text-base text-gray-400   cursor-pointer hover:text-gray-300 '>Contact</li></Link>
            </ul>
          </div>

          <div className='w-full  flex justify-end items-center md:justify-center md:hidden'>
          <div className='border-2 border-gray-400 p-1 rounded-md mb-1 z-30 '>
          <HiMenuAlt2 onClick={handleNavBarClick} className='text-2xl font-bold text-gray-400 cursor-pointer '/>


          </div>
          </div>
       
        </div>

        </div>
         { nav && <div className= ' fixed top-0 left-0 w-full h-screen bg-black/90 flex justify-center items-center md:hidden'>
            <ul className={ nav ? ' flex flex-col gap-3 items-center z-20' : 'flex items-center gap-2'}>
               <Link to='hero' spy={true} smooth={true} offset={-200} duration={500} onClick={()=> setNav(!nav)} ><li className='text-xl text-gray-500 cursor-pointer '>Home</li></Link> 
                <Link to='services'  spy={true} smooth={true} offset={-65} duration={500} onClick={()=> setNav(!nav)}><li className='text-xl text-gray-500 cursor-pointer '>Portfolio</li></Link>
                <Link to='about'  spy={true} smooth={true} offset={-65} duration={500} onClick={()=> setNav(!nav)}><li className='text-xl text-gray-500 cursor-pointer '>About</li></Link>
               <Link to='gallery'  spy={true} smooth={true} offset={-65} duration={500} onClick={()=> setNav(!nav)}><li className='text-xl text-gray-500 cursor-pointer ' >Gallery</li></Link> 
                <Link to='contact'  spy={true} smooth={true} offset={-65} duration={500} onClick={()=> setNav(!nav)}><li className='text-xl text-gray-500 cursor-pointer '>Contact</li></Link>
            </ul>
          </div>
           }

    </div>
      
    
  )
}

export default NavBar
