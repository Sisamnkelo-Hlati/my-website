import React from 'react'



function Hero() {
  return (
    <div className='w-full h-screen overflow-hidden relative bg-[#243640] border-b border-gray-400'>
   
    
    <div className='absolute top-0 left-0 w-full h-screen flex  justify-center items-center px-4 '>
      <div className='p-3 flex flex-col justify-center items-center w-full'>
        <h1 className=' font-bold pb-2 text-4xl md:text-7xl text-gray-300 max-w-[1900px] w-[75%] mb-5'>
         For spick and span cleaning services
        </h1>

        <button className='text-white font-bold bg-[#3E4C58] hover:text-black duration-500 h-[62px] w-[190px]'>Explore</button>
      </div>
    </div>
    </div>
  )
}

export default Hero
