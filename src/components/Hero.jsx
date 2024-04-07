import React from 'react'



function Hero() {
  return (
    <div className='w-full h-screen overflow-hidden relative'>
    <img className=' absolute top-0 left-0 w-full h-screen object-cover object-center' src="/assets/Dzudzu.jpg" alt="" />
    <div className=' absolute top-0 left-0 bg-black/50 w-full h-screen'/>
    <div className='absolute top-0 left-0 w-full h-screen flex  justify-center items-center px-4 '>
      <div className='p-8 '>
        <h3 className='font-bold text-2xl md:text-6xl drop-shadow-2xl text-white max-w-[600px]'>Hi there! my name is Sisamnkelo Hlati.
        </h3>
       
        <p className=' text-1xl md:text-2xl text-sky-500 py-2 font-semibold'>
          Full stack software developer 
        </p>
        <p className=' font-bold pb-2 text-base text-gray-300 max-w-[1200px] w-[75%]'>
          I am a self trained software engineer, by profetion I am an economist based in Gqeberha.
        </p>

        <button className='text-white font-bold hover:bg-white hover:text-black duration-500'>Explore</button>
      </div>
    </div>
    </div>
  )
}

export default Hero
