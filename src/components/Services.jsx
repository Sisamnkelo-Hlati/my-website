import React from 'react'





function Services() {
  return (
    <div name='services' className='w-full h-full bg-[#3E4C58] '>
        <div className='md:max-w-[1190px] w-full mx-auto px-2 h-full '>
          <div className='bg-[#243640] pt-5 md:pt-0'>
        <div
           
           className='md:flex md:flex-col text-center md:items-center md:max-w-[700px] md:mx-auto md:p-8 md:px-20'>
             <h2 className='mb-3 text-3xl md:text-4xl text-gray-400 font-bold tracking-wider uppercase'>Knowledge Areas</h2>
             <p className=' w-full  text-gray-500 text-center px-2 md:px-0'> While working for Outflow, I have utilised my skills in the following areas, namely PowerBI, Advanced Microsoft excel, Visual Basice For Application and Software development
              </p>

           </div>
        
         <div className='grid sm:grid-cols-2 sm:gap-3 mt-4 md:px-20'>
              <div className=' bg-[#3E4C58] mb-3 mt-2 flex items-center justify-center flex-col md:mb-5 p-5  rounded-md  '>
            <div className='w-[50px] h-[50px]  bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src="/assets/cleaning2.jpg" className='w-full h-full object-cover object-center  rounded-full border border-blue-700' alt="" />
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
            <h2 className=' text-xl text-gray-400 font-bold tracking-wide  mb-3 uppercase'>Data Analystics</h2>
              <p  className='text-gray-500 max-w-[280px] mx-auto'>
                Application of PowerBI and related analytical tools (VBA, Excel, MS forms etc.) to consolidate the site reconciliation submission process at head office and improve compliance levels thereof.  </p>
            </div>
              </div>
              <div className=' bg-[#3E4C58] mb-3 mt-2 flex items-center justify-center flex-col md:mb-5 p-5  rounded-md  '>
            <div className='w-[50px] h-[50px]  bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src="/assets/cleaning2.jpg" className='w-full h-full object-cover object-center  rounded-full border border-blue-700' alt="" />
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
            <h2 className=' text-xl text-gray-400 font-bold tracking-wide  mb-3 uppercase'>Software Development</h2>
              <p  className='text-gray-500 max-w-[280px] mx-auto'>Application of Javascript (React, Tailwindcss, nodejs, expressjs, mongoDB ect.) to inhence the site reconciliation submission process at head office and improve compliance levels thereof. </p>
            </div>
              </div>
              
   
            
           
          </div>

          
          </div>

        </div>
       
      
    </div>
  )
}

export default Services
