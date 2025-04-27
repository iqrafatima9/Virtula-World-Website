import { Video } from 'lucide-react'
import React from 'react'


const Hero = () => {
  return (
    
      <div className="flex flex-col items-center mt-6 lg:mt-20">

         <h1 className="text-4xl sm:text-6xl lg:text-7xl  text-center tracking-wide  ">
          VirtualR build tools for 
          <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>
             {""}    the developers
          </span>
        </h1>
        <p className='mt-10 text-center text-lg text-neutral-500 max-w-4xl'>
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
        </p>
        <div className="felx justify-center my-10">
          <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-900 justify-center text-center py-3 px-4 mx-3 rounded-md'>
             Start for free
          </a>
          <a href='#' className='py-3 mx-3 px-4 border rounded-md'>
             Documentation          </a>
          
        </div>
        <div className='mt-10 justify-center flex h-96'>
         <video autoPlay muted loop className='rounded-lg w-1/2 border shadow-lg border-orange-700  shadow-orange-400 mx-2 my-4'>
         <source src='src/assets/6962343-hd_1920_1080_25fps.mp4'/>
         Your broswer doesnot support  the vedio tag.
         </video>
         <video autoPlay muted loop className='rounded-lg w-1/2 border shadow-lg border-orange-700  shadow-orange-400 mx-2 my-4'>
         <source src='src/assets/9071009-hd_1080_1920_25fps.mp4'/>
         Your broswer doesnot support  the vedio tag.
         </video>

        
          </div>
      </div>
      
   
  )
}

export default Hero
