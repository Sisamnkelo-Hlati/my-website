import React from 'react'

import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

export default function Header() {
  return (
    <div name='header' className='w-full h-full  bg-[#243640]'>
        <div className='md:max-w-[1190px] w-full mx-auto p-10 h-full  text-gray-300'>
          <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center'>
                <div className='text-xl md:text-3xl font-bold uppercase'>Awaken Fabrics Cleaning Solutions</div>
                <div className='text-base font-bold'>awekend.fabrics@gmail.com . +27 79356-5011 . +27 79356-5011 </div>
                
            </div>
            <div className='mt-2 flex flex-col justify-center items-center gap-3'>
            <p>Follow us on the following social media platforms</p>
                <ul className='flex gap-8 items-center  text-base md:text-xl '>
                    
                    <li className='text-gray-300 text-2xl md:text-base mb-2 flex items-center gap-x-2'><FaFacebook className='text-3xl text-gray-300'/> </li>
                    <li className='text-gray-300  text-sm md:text-base mb-2 flex items-center gap-x-2'><FaTwitter className='text-3xl text-gray-300'/> </li>
                    <li className='text-gray-300  text-sm md:text-base mb-2 flex items-center gap-x-2'><FaInstagram className='text-3xl text-gray-300'/> </li>
                </ul>
            </div>
            
          </div>
           
        </div>
    </div>
  )
}
