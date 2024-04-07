import React from 'react'

function About() {
  return (
    <div className='bg-gray-100 w-full h-full flex flex-col items-center pt-[1rem] px-[1rem] '>
    

      <div className=' grid grid-cols-1 md:grid-cols-2 gap-5  md:p-8'>
        
        
          
             <img className='  h-[350px]  w-[650px]  object-cover mb-3  rounded-lg' src="/assets/deal-1.jpg" alt="" />

         
          
           <div className=' '>
           <h1 className='text-gray-900 text-3xl underline mb-4 '>About Me</h1>
             <p className='text-gray-800  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rerum dolorum eveniet, aliquid libero id culpa laudantium similique. Perferendis sapiente molestias error nostrum exercitationem atque delectus dolores consequuntur repudiandae est.</p>
             <button className='text-white mt-5 bg-sky-500 border-none capitalize mb-3'>Contact me</button>

            </div>
          
       
       
      </div>

    </div>
  )
}

export default About
