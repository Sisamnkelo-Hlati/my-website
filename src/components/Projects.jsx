import React from 'react'

function Projects() {
  return (
    <div className=' w-full flex flex-col  md:px-[1rem]   bg-[#243640] '>
       <div className='md:max-w-[1190px] w-full mx-auto px-2 py-8 h-full '>
       <div
           
           className='md:flex md:flex-col items-center text-center md:max-w-[700px] md:mx-auto md:p-8 md:px-20'>
             <h2 className='mb-3 text-3xl md:text-4xl text-gray-300 font-bold tracking-wider uppercase'>Gallary</h2>
             <p className=' w-full  text-gray-300 text-center '>  Our services cater for both residential and commercial clients
              </p>

          </div>
      <div className=' grid grid-cols-1 place-items-center  w-full mt-4 md:px-20'>
      
        <div className='grid sm:grid-cols-2  md:grid-cols-4 gap-2 md:pl-4 w-full'>
            <img className='  h-64 sm:col-span-1 md:col-span-2 rounded-lg w-full  object-cover object-center' src="/assets/office.jpg" alt="" />
            <img className='  h-64 sm:col-span-1 md:col-span-2 rounded-lg w-full object-cover object-center' src="/assets/cleaning5.jpg" alt="" />
            <img className='  h-64 w-full object-cover object-center rounded-lg' src="/assets/window.jpg" alt="" />
            <img className='  h-64 sm:col-span-1 md:col-span-2 w-full object-cover object-center rounded-lg' src="/assets/cleaning2.jpg" alt="" />
            <img className='  h-64  w-full object-cover object-center rounded-lg' src="/assets/rug.jpg" alt="" />
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Projects

