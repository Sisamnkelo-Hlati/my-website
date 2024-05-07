import React from 'react'

function Contact() {
  return (
    <div className=' w-full flex flex-col items-center bg-[#243640] px-[1rem]  md:px-[10rem] '>
       <div className='md:max-w-[1190px] w-full mx-auto px-2 py-8 h-full '>
      <div className=''>
      <h2 className='mb-3 text-5xl text-gray-300 font-bold tracking-wider'>Contact</h2>
      </div>
      <div className='  w-full md:p-8'>
          
      <form action="" className='flex flex-col gap-3'>
        <input type="text" name='name' placeholder='Enter your name' className='bg-transparent w-full p-3 border border-gray-300 focus:outline-none text-white' />
        <input type="text" name='email' placeholder='Enter your email' className='bg-transparent w-full p-3 border border-gray-300 focus:outline-none text-white' />
        <textarea name="messeage"  rows="10" placeholder='Enter your messege' className='bg-transparent w-full border border-gray-300 text-white focus:outline-none p-3'/>
        <button className='text-white mt-3 bg-[#3E4C58]  capitalize mb-8 self-center h-[62px] w-[190px]'>Send</button>
      </form>
          
       
       
      </div>
      </div>
    </div>
  )
}

export default Contact
