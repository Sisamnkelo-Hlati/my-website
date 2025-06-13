import React from 'react'

function Contact() {
  return (
    <div className=' w-full flex flex-col items-center  bg-[#3E4C58]'>
       <div className='md:max-w-[1190px] w-full mx-auto px-2 h-full '>
        <div className='bg-[#243640] pt-3 md:pt-0'>
       <div
           
           className='md:flex md:flex-col text-center md:items-center md:max-w-[700px] md:mx-auto md:p-8 md:px-20'>
             <h2 className='mb-3 text-3xl md:text-4xl text-gray-300 font-bold tracking-wider uppercase'>Contact</h2>
             <p className=' w-full  text-gray-300 text-center mb-3 md:mb-0 '>  Our services cater for both residential and commercial clients
              </p>

          </div>
      <div className='  w-full md:p-8'>
          
      <form action="" className='flex flex-col gap-3'>
        <input type="text" name='name' placeholder='Enter your name' className='bg-transparent w-full p-3 border border-gray-500 focus:outline-none text-white' />
        <input type="text" name='email' placeholder='Enter your email' className='bg-transparent w-full p-3 border border-gray-500 focus:outline-none text-white' />
        <textarea name="messeage"  rows="10" placeholder='Enter your messege' className='bg-transparent w-full border border-gray-500 text-white focus:outline-none p-3'/>
        <button className='text-white mt-3  bg-red-700 self-center h-[62px] w-[190px] border border-gray-500 uppercase font-bold tracking-wider'>Send</button>
      </form>
          
       
       
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
