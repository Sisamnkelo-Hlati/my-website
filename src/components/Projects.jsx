import React from 'react'

function Projects() {
  return (
    <div className=' w-full flex flex-col  md:px-[1rem]   bg-[#243640] border-b border-gray-400'>
       <div className='md:max-w-[1190px] w-full mx-auto px-2 py-8 h-full '>
      <div className=' px-5'>
      <h2 className='mb-3 text-5xl text-gray-300 font-bold tracking-wider'>Gallary</h2>
      </div>
      <div className=' grid grid-cols-1 place-items-center px-[1rem] w-full'>
        <div className='mb-10  text-start w-full pl-4'>
          <p className='text-gray-300 text-start  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse quae nemo.</p>

        </div>
        <div className='grid sm:grid-cols-2  md:grid-cols-4 gap-4 md:pl-4 w-full'>
            <img className='  h-64 sm:col-span-1 md:col-span-2 rounded-lg w-full  object-cover object-center' src="/assets/cleaning2.jpg" alt="" />
            <img className='  h-64 sm:col-span-1 md:col-span-2 rounded-lg w-full object-cover object-center' src="/assets/cleaning2.jpg" alt="" />
            <img className='  h-64 w-full object-cover object-center rounded-lg' src="/assets/cleaning2.jpg" alt="" />
            <img className='  h-64 sm:col-span-1 md:col-span-2 w-full object-cover object-center rounded-lg' src="/assets/cleaning2.jpg" alt="" />
            <img className='  h-64  w-full object-cover object-center rounded-lg' src="/assets/cleaning2.jpg" alt="" />
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Projects

