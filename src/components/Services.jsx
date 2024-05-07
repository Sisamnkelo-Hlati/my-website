import React from 'react'




function Services() {
  return (
    <div name='services' className='w-full h-full  bg-[#243640]'>
        <div className='md:max-w-[1190px] w-full mx-auto px-2 py-3 h-full '>
          <div
           
           className='md:flex md:flex-col md:items-center md:max-w-[700px] md:mx-auto md:p-8 md:px-20'>
             <h2 className='mb-3 text-5xl text-gray-300 font-bold tracking-wider'>Services</h2>
             <p className='leading-7 w-full  tracking-wide text-sm text-gray-300 '>The services
                  we offer include: construction, logistics and cleaning.
              </p>

          </div>
        
         <div
        
          className='grid sm:grid-cols-2 md:grid-cols-3 sm:gap-3 mt-16'>
         <div className=' bg-[#1B1B1B] mb-3 mt-5 flex items-center justify-center flex-col md:mb-5 p-5  rounded-md  '>
            <div className='w-[70px] h-[70px]  bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src="/assets/cleaning2.jpg" className='w-full h-full object-cover object-center  rounded-full border border-blue-700' alt="" />
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
            <h2 className=' text-xl text-gray-300 font-bold tracking-wide '>Cleaning</h2>
              <p  className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            </div>
          </div>
          <div className=' bg-[#1B1B1B] mb-3 mt-5 flex items-center justify-center flex-col md:mb-5 p-5  rounded-md  '>
            <div className='w-[70px] h-[70px]  bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src="/assets/cleaning2.jpg" className='w-full h-full object-cover object-center  rounded-full border border-blue-700' alt="" />
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
            <h2 className=' text-xl text-gray-300 font-bold tracking-wide '>Cleaning</h2>
              <p className='text-gray-300' >Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            </div>
          </div>
          <div className=' bg-[#1B1B1B] mb-3 mt-5 flex items-center justify-center flex-col md:mb-5 p-5  rounded-md '>
            <div className='w-[70px] h-[70px]  bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src="/assets/cleaning2.jpg" className='w-full h-full object-cover object-center  rounded-full border border-blue-700' alt="" />
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
            <h2 className=' text-xl text-gray-300 font-bold tracking-wide '>Cleaning</h2>
              <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            </div>
          </div>
     
         

         </div>


        </div>
       
      
    </div>
  )
}

export default Services
