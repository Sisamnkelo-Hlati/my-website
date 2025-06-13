import React from 'react'

 function HeroSlider() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-red-500/30 md:bg-gray-900/85 py-8 '>
        
        <div className='flex flex-col gap-3 justify-center bg-[#1c2a33] rounded-2xl items-center px-20 py-5 md:max-w-[1000px] mx-auto   '>
            <h1 className='text-4xl md:text-6xl  text-gray-400 font-bold text-center uppercase md:leading-[60px]'>
                Data science analyst and a full stack developer
            </h1>
            <p className='text-base md:text-2xl font-medium  text-gray-400 text-center ' >Prior to joining Outflow, I have worked as a freelance software developer, Economics tutor and a petrol attendant at Engen.</p>
            
            <div className=' ' >
            <button className='text-white mt-4 bg-red-700  capitalize mb-8 h-[62px] w-[190px]'>Explore</button>
            </div>
            

           
           
        
        </div>
    </div>
  )
}

export default HeroSlider