import React from 'react'

function About() {
  return (
    <div className='bg-[#243640] w-full h-full flex flex-col items-center pt-[1rem] px-[1rem] border-b border-gray-400'>
        <div className='md:max-w-[1190px] w-full mx-auto px-2 py-3 h-full '>

    

      <div className=' grid grid-cols-1 md:grid-cols-2 gap-5  md:p-8'>
        
        
          
             <img className='  h-[350px]  w-[650px]  object-cover mb-3  rounded-lg' src="/assets/cleaning2.jpg" alt="" />

         
          
           <div className=' '>
           <h2 className='mb-3 text-5xl text-gray-300 font-bold tracking-wider'>About us</h2>
             <p className='text-gray-300  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rerum dolorum eveniet, aliquid libero id culpa laudantium similique. Perferendis sapiente molestias error nostrum exercitationem atque delectus dolores consequuntur repudiandae est.</p>
             <button className='text-white mt-5 bg-[#3E4C58] border-none capitalize mb-3 h-[62px] w-[190px]'>Learn more</button>

            </div>
          
       
       
      </div>
      </div> 

    </div>
  )
}

export default About
