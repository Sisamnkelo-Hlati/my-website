import React from 'react'

function Projects() {
  return (
    <div className=' w-full flex flex-col  md:px-[1rem]   bg-gray-100 '>
      <div className=''>
        <h1 className='text-gray-900 text-3xl  md:pl-8 underline mb-4'>My Projects</h1>
      </div>
      <div className=' grid grid-cols-1 place-items-center px-[1rem] w-full'>
        <div className='mb-10  text-start w-full pl-4'>
          <p className='text-gray-800 text-start  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse quae nemo.</p>

        </div>
        <div className='grid sm:grid-cols-2  md:grid-cols-4 gap-4 pl-4 w-full'>
            <img className='  h-64 sm:col-span-1 md:col-span-2 rounded-lg w-full  object-cover object-center' src="/assets/face-1.jpg" alt="" />
            <img className='  h-64 sm:col-span-1 md:col-span-2 rounded-lg w-full object-cover object-center' src="/assets/dashboard.jpg" alt="" />
            <img className='  h-64 w-full object-cover object-center rounded-lg' src="/assets/web-1.jpg" alt="" />
            <img className='  h-64 sm:col-span-1 md:col-span-2 w-full object-cover object-center rounded-lg' src="/assets/web-1.jpg" alt="" />
            <img className='  h-64  w-full object-cover object-center rounded-lg' src="/assets/11888.jpg" alt="" />
      </div>
      </div>
     
      
    </div>
  )
}

export default Projects

