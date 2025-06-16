import React from 'react'

function Contact() {
  return (
    <div className=' w-full flex flex-col items-center  bg-[#3E4C58]'>
       <div className='md:max-w-[1190px] w-full mx-auto px-2 h-full '>
        <div className='bg-[#243640] pt-5 md:pt-0'>
       <div
           
           className='md:flex md:flex-col text-center md:items-center md:max-w-[700px] md:mx-auto md:p-8 md:px-20'>
             <h2 className='mb-3 text-3xl md:text-4xl text-gray-400 font-bold tracking-wider uppercase'>Contact</h2>
             <p className=' w-full  text-gray-500 text-center mb-3 md:mb-0 '>  Submit the form below to get in touch with me
              </p>

          </div>
      <div className='  w-full md:p-8'>
          
      <form action="https://getform.io/f/bjjoyrvb" method= "POST" className='flex flex-col gap-3'>
        <input type="text" name='name' placeholder='Enter your name' className='bg-transparent w-full p-3 border border-gray-500 focus:outline-none text-white' />
        <input type="text" name='email' placeholder='Enter your email' className='bg-transparent w-full p-3 border border-gray-500 focus:outline-none text-white' />
        <textarea name="messeage"  rows="10" placeholder='Enter your messege' className='bg-transparent w-full border border-gray-500 text-white focus:outline-none p-3'/>
        <button className='text-white mt-5 md:mt-3 mb-5 md:mb-0  bg-red-700 hover:bg-red-800 self-center h-[62px] w-[190px]  uppercase font-bold tracking-wider cursor-pointer'>Send</button>
      </form>
          
       
       
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
