import React from 'react'
import {TbTimelineEventFilled} from 'react-icons/tb'
import {PiUserFocusFill} from 'react-icons/pi'
import {MdLeaderboard} from 'react-icons/md'
import {IoBusiness} from 'react-icons/io5'



function About() {
  return (
    <div className='w-full h-full  bg-[#3E4C58] '>
        <div className='md:max-w-[1190px] w-full mx-auto px-2 h-full'>
            <div className='bg-[#1c2a33]'>
           <div >
          
           <div className='md:flex md:flex-col text-center md:items-center md:max-w-[700px] md:mx-auto md:p-8 md:px-20'>
             <h2 className='mb-3 text-3xl md:text-4xl text-gray-300 font-bold tracking-wider uppercase'>About Me</h2>
             <p className=' w-full  text-gray-300 text-center '> Currently serving in the role of Econometrics and Data science Analyst at Outflow Petroleum Insights
              </p>

           </div>
           </div>
           <div className='md:px-20'>
           <div className=' grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-16 mt-4 mb-5 '>
            <div className='flex items-start gap-3'>
                <li className='text-gray-300 text-7xl md:text-base mb-2 flex items-center gap-x-2'><TbTimelineEventFilled className='text-5xl text-gray-300'/> </li>
                <div className=' w-[400px]'>
                    <h2 className='mb-3 text-2xl text-gray-300 font-bold tracking-wider uppercase'>Project Highlights</h2>
                    <p className='text-gray-300  '>Developed a standard fuel reconciliation application for the bp retail network of over 470 sites.</p>
                    <p className='text-gray-300  '>Piloted the solution to approximately 10% of the network over three months, conducting site visits to gather real-time feedback on the tool for continuous improvement and data accuracy. </p>
                    <p className='text-gray-300  '>Facilitated handover process and training of RBMs, Ops Excellence team</p>
                    
                </div>

            </div>
            <div className='flex items-start gap-3'>
                <li className='text-gray-300 text-7xl md:text-base mb-2 flex items-center gap-x-2'><PiUserFocusFill className='text-5xl text-gray-300'/> </li>
                <div className=' w-[400px]'>
                    <h2 className='mb-3 text-2xl text-gray-300 font-bold tracking-wider uppercase'>Consulting Focus</h2>
                    <p className='text-gray-300  '>Development of a wet stock reconciliation solution in support of client's requirements to standardize and instill daily reconciliation rigor at sites.</p>
                    <p className='text-gray-300  '>Application of PowerBI and related data analysis and visualization tools to consolidate the site reconciliation submission process at head office and to improve compliance levels thereof.</p>
                    
                </div>

            </div>
            <div className='flex items-start gap-3'>
                <li className='text-gray-300 text-7xl md:text-base mb-2 flex items-center gap-x-2'><MdLeaderboard className='text-5xl text-gray-300'/> </li>
                <div className=' w-[400px]'>
                    <h2 className='mb-3 text-2xl text-gray-300 font-bold tracking-wider uppercase'>Leadership exposure</h2>
                    <p className='text-gray-300  '>Presented in the RBM hookup forcums</p>
                    <p className='text-gray-300  '>Developed solutions with senior business manager (Ops excellence, HSSE, Logistics and GBS teams)</p>
                    
                </div>

            </div>
            <div className='flex items-start gap-3'>
                <li className='text-gray-300 text-7xl md:text-base mb-2 flex items-center gap-x-2'><IoBusiness className='text-5xl text-gray-300'/> </li>
                <div className=' w-[400px]'>
                    <h2 className='mb-3 text-2xl text-gray-300 font-bold tracking-wider uppercase'>Company exposure</h2>
                    <p className='text-gray-300  '>bp Southern Africa.</p>
                    <p className='text-gray-300  '>Engen.</p>
                    
                </div>

            </div> 
        
          </div>

          </div>
          <img className='  h-64 w-full object-cover object-center ' src="/assets/cleaning2.jpg" alt="" />

           </div>
           
          

      </div> 

    </div>
  )
}

export default About
