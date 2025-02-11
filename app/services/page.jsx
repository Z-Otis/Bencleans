import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='bg-gray-100  mx-auto'>
         <div className="w-[4px] mt-12 mx-auto h-24 bg-black/45">
             {/* Small rectangle div */}
       </div>
       
       <h4 className='text-3xl my-12 font-bold text-black/85 text-center'>
         Our Services
       </h4>
   <div className='flex md:flex-row flex-col gap-16 justify-center items-center mb-12'>
    <div className='bg-black shadow-lg'>
      <Image src="/window-cleaning1.jpeg" 
      height={300}
      width={200}
      alt='service-img'
      className='h-80 md:h-[420px] md:w-96 w-60 object-cover' />

      <h4 className='text-white mt-8  font-bold text-center'>
       Window Cleaning

      </h4>
      <Button name='Learn More' containerClass='bg-white text-black/85 mb-8 mt-8 shadow-md' href='/services/window' />
    </div>
    <div className='bg-black shadow-lg'>
      <Image src="/hero2.jpeg" 
      height={400}
      width={300}
      alt='service-img'
      className='h-80 md:h-[420px] md:w-96 w-60' />

      <h4 className='text-white mt-8  font-bold text-center'>
       Solar Panel Cleaning

      </h4>
      <Button name='Learn More' containerClass='bg-white text-black/85 shadow-md mb-8 mt-8' href='/services/solar-panel' />
    </div>
   

   </div>

   <h3 className='text-3xl font-bold text-black/85 text-center'>Our Works</h3>
    <div className='flex flex-col md:flex-row mt-12 flex-wrap gap-4 justify-center items-center'>
      <video 
      src='/videos/window-vid1.mp4'
      width={500}
      height={300}
      alt='video'
      
       controls
      className='w-96 h-80'/>
      <video 
      src='/videos/window-vid2.mp4'
      width={500}
      height={300}
      
      alt='video'
       controls
      className='w-96 h-80'/>
      <video 
      src='/videos/window-vid3.mp4'
      width={500}
      height={300}
      alt='video'
      controls
      className='w-96 h-80'/>

      <Image
      src='/window-cleaning1.jpeg'
      width={500}
      height={300}
      alt='video'
      className='w-96 h-80'/>
      
      <Image
      src='/window-cleaning2.jpeg'
      width={500}
      height={300}
      alt='video'
      className='w-96 h-80'/>
      
      <Image
      src='/window-cleaning3.jpeg'
      width={500}
      height={300}
      alt='video'
      
       
      className='w-96 h-80'/>
      </div>

      
       </section>
  )
}

export default page
