import React from 'react'


function Projects() {
  return (
    <div className=' w-full flex flex-col  md:px-[1rem]   bg-[#3E4C58]'>
       <div className='md:max-w-[1190px] w-full mx-auto px-2 h-full  '>
        <div className='bg-[#1c2a33] pt-5 md:pt-0 pb-7'>
       <div
           
           className='md:flex md:flex-col items-center text-center md:max-w-[700px] md:mx-auto md:p-8 md:px-20'>
             <h2 className='mb-3 text-3xl md:text-4xl text-gray-300 font-bold tracking-wider uppercase'>Gallery</h2>
             <p className=' w-full  text-gray-300 text-center '>  Our services cater for both residential and commercial clients
              </p>

          </div>
      <div className=' grid grid-cols-1 place-items-center  w-full mt-4 md:px-20'>
      
        <div className='grid sm:grid-cols-2  md:grid-cols-4 gap-6 md:gap-2 md:pl-4 w-full'>

          <div className=' h-64 sm:col-span-1 md:col-span-2 rounded-md w-full relative'>
            <div className='absolute bg-black/40 top-0 left-0 w-full h-full z-10 rounded-md flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
              <h1 className=' text-2xl md:text-4xl text-red-600 font-bold '>Social Media application</h1>
              
             
              </div>
             
            </div>
          <img className='   w-full h-full object-cover object-left-top rounded-md' src="/assets/face-1.jpg" alt="" />

          </div>
          <div className=' h-64 sm:col-span-1 md:col-span-2  rounded-md relative'>
          <div className='absolute bg-black/40 top-0 left-0 w-full h-full z-10 rounded-md flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
              <h1 className='text-2xl md:text-4xl text-red-600 font-bold '>Field Service Management </h1>
              
              
              </div>
             
          </div>
          <img className='  h-full w-full  object-cover object-left-top rounded-md' src="/assets/ui2.jpg" alt="" />

          </div>
          <div className=' h-64 w-full rounded-md relative'>
          <div className='absolute bg-black/40 top-0 left-0 w-full h-full z-10 rounded-md flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
              <h1 className='text-2xl md:text-4xl text-red-600 font-bold '> Dasboard</h1>
              
             
              </div>
             
            </div>
          <img className='   w-full h-full object-cover object-left-top rounded-md' src="/assets/secnd-1.jpg" alt="" />

          </div>
          <div className=' h-64 sm:col-span-1 md:col-span-2 w-full rounded-md relative'>
          <div className='absolute bg-black/40 top-0 left-0 w-full h-full z-10 rounded-md flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
              <h1 className='text-2xl md:text-4xl text-red-600 font-bold '>Fuel Recons System</h1>
              
             
              </div>
             
            </div>
          <img className='   w-full h-full object-cover object-left-top rounded-md' src="/assets/d6.jpg" alt="" />

          </div>
          <div className=' h-64  w-full rounded-md relative'>
          <div className='absolute bg-black/50 top-0 left-0 w-full h-full z-10 rounded-md flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
              <h1 className='text-2xl md:text-4xl text-red-600 font-bold '>Website</h1>
            
             
              </div>
             
          </div>
          <img className='   w-full h-full object-cover object-center rounded-md' src="/assets/first-1.jpg" alt="" />

          </div>

          
      </div>
      </div>
      
      </div>
      </div>
      
    </div>
  )
}

export default Projects

