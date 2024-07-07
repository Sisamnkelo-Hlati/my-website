import React from 'react'
import {FaFacebook} from 'react-icons/fa'

function About() {
  return (
    <div className='w-full h-full  bg-[#243640]'>
        <div className='md:max-w-[1190px] w-full mx-auto px-2 py-3 h-full'>
           <div >
          
           <div className='md:flex md:flex-col text-center md:items-center md:max-w-[700px] md:mx-auto md:p-8 md:px-20'>
             <h2 className='mb-3 text-3xl md:text-4xl text-gray-300 font-bold tracking-wider uppercase'>About Us</h2>
             <p className=' w-full  text-gray-300 text-center '>  Our services cater for both residential and commercial clients
              </p>

           </div>
           </div>
           <div className='md:px-20'>
           <div className=' grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-16 mt-4 mb-5 '>
            <div className='flex items-start gap-3'>
                <li className='text-gray-300 text-7xl md:text-base mb-2 flex items-center gap-x-2'><FaFacebook className='text-5xl text-gray-300'/> </li>
                <div className=' w-[400px]'>
                    <h2 className='mb-3 text-2xl text-gray-300 font-bold tracking-wider uppercase'>Learn about us</h2>
                    <p className='text-gray-300  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rerum dolorum eveniet, aliquid libero id culpa laudantium similique. Perferendis sapiente molestias error nostrum exercitationem atque delectus dolores consequuntur repudiandae est.</p>
                    
                </div>

            </div>
            <div className='flex items-start gap-3'>
                <li className='text-gray-300 text-7xl md:text-base mb-2 flex items-center gap-x-2'><FaFacebook className='text-5xl text-gray-300'/> </li>
                <div className=' w-[400px]'>
                    <h2 className='mb-3 text-2xl text-gray-300 font-bold tracking-wider uppercase'>Our mission</h2>
                    <p className='text-gray-300  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rerum dolorum eveniet, aliquid libero id culpa laudantium similique. Perferendis sapiente molestias error nostrum exercitationem atque delectus dolores consequuntur repudiandae est.</p>
                    
                </div>

            </div>
            <div className='flex items-start gap-3'>
                <li className='text-gray-300 text-7xl md:text-base mb-2 flex items-center gap-x-2'><FaFacebook className='text-5xl text-gray-300'/> </li>
                <div className=' w-[400px]'>
                    <h2 className='mb-3 text-2xl text-gray-300 font-bold tracking-wider uppercase'>Out objectives</h2>
                    <p className='text-gray-300  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rerum dolorum eveniet, aliquid libero id culpa laudantium similique. Perferendis sapiente molestias error nostrum exercitationem atque delectus dolores consequuntur repudiandae est.</p>
                    
                </div>

            </div>
            <div className='flex items-start gap-3'>
                <li className='text-gray-300 text-7xl md:text-base mb-2 flex items-center gap-x-2'><FaFacebook className='text-5xl text-gray-300'/> </li>
                <div className=' w-[400px]'>
                    <h2 className='mb-3 text-2xl text-gray-300 font-bold tracking-wider uppercase'>Our vision</h2>
                    <p className='text-gray-300  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rerum dolorum eveniet, aliquid libero id culpa laudantium similique. Perferendis sapiente molestias error nostrum exercitationem atque delectus dolores consequuntur repudiandae est.</p>
                    
                </div>

            </div> 
        
          </div>
          <img className='  h-64 w-full object-cover object-center rounded-lg' src="/assets/cleaning2.jpg" alt="" />

           </div>
          

      </div> 

    </div>
  )
}

export default About
