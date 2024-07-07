import React from 'react'
import { FaPhone} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'


function Footer() {
  return (
    <div className='bg-[#1c2a33] w-full h-full flex flex-col items-center py-[1rem] px-[1rem] '>
     

     <div className='md:max-w-[1190px] w-full mx-auto px-2 py-8 h-full'>
      <div className='flex justify-between gap-3 flex-wrap md:px-20'>
      <div className='text-gray-300'>
          Logo  
        <p className='text-gray-300 font-semibold text-xl md:w-60 leading-7 tracking-wide'> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
       
       </div>
       <div className=''>
         <h1 className='text-xl text-gray-300 mb-3'>Navigations</h1>
       <ul className='md:flex flex-col gap-2 '>
            <li className='text-gray-300 text-sm  mb-2  cursor-pointer hover:text-gray-300 duration-500'>Home</li>
            <li className='text-gray-300 text-sm  mb-2  cursor-pointer hover:text-gray-300 duration-500'>Services</li>
            <li className='text-gray-300 text-sm  mb-2  cursor-pointer hover:text-gray-300] duration-500'>About</li>
            <li className='text-gray-300 text-sm   cursor-pointer hover:text-gray-300 duration-500'>Contact</li>
        </ul>
       </div>
       <div>
       <h1 className='text-xl text-gray-300 mb-3'>Contacts</h1>
       <ul className='md:flex flex-col  gap-2  text-base md:text-xl '>
            <li className='text-gray-300 text-sm md:text-base mb-2 flex items-center gap-x-2'><HiMail className='text-xl text-gray-300 '/> awekend.fabrics@gmail.com</li>
            <li className='text-gray-300 text-sm md:text-base mb-2 flex items-center gap-x-2'><FaPhone className='text-sm text-gray-300'/> +27 79356-5011</li>
            <li className='text-gray-300  text-sm md:text-base mb-2 flex items-center gap-x-2'><FaPhone className='text-sm text-gray-300'/> +27 768140-656</li>
        </ul>
      
        
       </div>
       
      </div>
      
    </div>

    </div>
  )
}

export default Footer
