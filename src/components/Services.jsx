import React from 'react'




function Services() {
  return (
    <div name='services' className='w-full h-full  bg-[#243640]'>
        <div className='md:max-w-[1190px] w-full mx-auto px-2 py-3 h-full '>
        <div
           
           className='md:flex md:flex-col text-center md:items-center md:max-w-[700px] md:mx-auto md:p-8 md:px-20'>
             <h2 className='mb-3 text-3xl md:text-4xl text-gray-300 font-bold tracking-wider uppercase'>Our services</h2>
             <p className=' w-full  text-gray-300 text-center '>  Our services cater for both residential and commercial clients
              </p>

           </div>
        
         <div className='grid sm:grid-cols-2 md:grid-cols-3 sm:gap-3 mt-4 md:px-20'>
              <div className=' bg-[#3E4C58] mb-3 mt-2 flex items-center justify-center flex-col md:mb-5 p-5  rounded-md  '>
            <div className='w-[50px] h-[50px]  bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src="/assets/cleaning2.jpg" className='w-full h-full object-cover object-center  rounded-full border border-blue-700' alt="" />
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
            <h2 className=' text-xl text-gray-300 font-bold tracking-wide  mb-3 uppercase'>Rug and upholstery cleaning</h2>
              <p  className='text-gray-300 max-w-[280px] mx-auto'>Lorem dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit.  </p>
            </div>
              </div>
              <div className=' bg-[#3E4C58] mb-3 mt-2 flex items-center justify-center flex-col md:mb-5 p-5  rounded-md  '>
            <div className='w-[50px] h-[50px]  bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src="/assets/cleaning2.jpg" className='w-full h-full object-cover object-center  rounded-full border border-blue-700' alt="" />
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
            <h2 className=' text-xl text-gray-300 font-bold tracking-wide  mb-3 uppercase'>Rug and upholstery cleaning</h2>
              <p  className='text-gray-300 max-w-[280px] mx-auto'>Lorem dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit.  </p>
            </div>
              </div>
              <div className=' bg-[#3E4C58] mb-3 mt-2 flex items-center justify-center flex-col md:mb-5 p-5  rounded-md  '>
            <div className='w-[50px] h-[50px]  bg-blue-100 rounded-full flex justify-center items-center border border-blue-200'>
                <img src="/assets/cleaning2.jpg" className='w-full h-full object-cover object-center  rounded-full border border-blue-700' alt="" />
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
            <h2 className=' text-xl text-gray-300 font-bold tracking-wide  mb-3 uppercase'>Rug and upholstery cleaning</h2>
              <p  className='text-gray-300 max-w-[280px] mx-auto'>Lorem dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit.  </p>
            </div>
              </div>
   
            
           
          </div>


        </div>
       
      
    </div>
  )
}

export default Services
