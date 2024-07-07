import React from 'react'

 function HeroSlider() {
  return (
    <div className='w-full h-full bg-black/30 md:bg-black/20 '>
        
        <div className='flex flex-col justify-center items-center md:items-start px-20 py-3 md:max-w-[1190px] mx-auto h-screen  '>
            <h1 className='text-4xl md:text-6xl  text-gray-900 font-bold w-[350px] md:w-[500px] uppercase md:leading-[60px]'>
                For spick and span cleaning services
            </h1>
            <p className='text-base md:text-2xl font-medium  text-gray-800 w-[350px] md:w-[500px] ' >Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit .</p>
            
            <div className='w-[350px] ' >
            <button className='text-white mt-3 bg-[#202020]  capitalize mb-8 h-[62px] w-[190px]'>Explore</button>
            </div>
            

           
           
        
        </div>
    </div>
  )
}

export default HeroSlider