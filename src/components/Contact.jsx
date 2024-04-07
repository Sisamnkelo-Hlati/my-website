import React from 'react'

function Contact() {
  return (
    <div className=' w-full flex flex-col items-center bg-gray-200 px-[1rem]  md:px-[10rem] '>
      <div className=''>
        <h1 className='text-gray-600 text-3xl text-center underline  py-3 mb-4 mt-5'>Contact</h1>
      </div>
      <div className='  w-full md:p-8'>
          
      <form action="" className='flex flex-col gap-3'>
        <input type="text" name='name' placeholder='Enter your name' className='bg-transparent w-full p-3 border border-gray-300 focus:outline-none text-white' />
        <input type="text" name='email' placeholder='Enter your email' className='bg-transparent w-full p-3 border border-gray-300 focus:outline-none text-white' />
        <textarea name="messeage"  rows="10" placeholder='Enter your messege' className='bg-transparent w-full border border-gray-300 text-white focus:outline-none p-3'/>
        <button className='text-gray-600 mt-3 bg-sky-500 border-none capitalize mb-8 self-end'>Send</button>
      </form>
          
       
       
      </div>
    </div>
  )
}

export default Contact
