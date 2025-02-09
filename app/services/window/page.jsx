import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
   <section className='bg-gray-100  mx-auto'>
            <div className="w-[4px] mt-12 mx-auto h-28 bg-black/45">
                {/* Small rectangle div */}
          </div>
          
          <h4 className='text-3xl my-12 font-bold text-black/85 text-center'>
            Glass Window Cleaning
          </h4>
      
          <div className='relative min-h-[50vh] bg-black/85 '>
              <Image
              src='/solar-img1.jpeg'
              height={300}
              width={600}
              alt='car1'
              className='object-cover h-full w-full absolute opacity-30' />
   
   
      </div>

      <div className='flex flex-col md:flex-row space-x-4 md:gap-12 mt-6'>
            <div>
              <div className='relative h-96 w-80 border-4 border-black/65 mx-12'>
             
                  <Image
                  src='/hero1.jpg'
                  alt='car1'
      
                  width={500}
                  height={300}
                  className='rounded-lg object-cover h-96 w-80 absolute z-20 right-[-60px] bottom-[-48px]  '
                  />
              </div>
            </div>
             
              <div className='flex flex-col min-h-[80vh] p-12 justify-center items-center '>
                  <div className=' space-y-3 md:space-y-8 flex flex-col justify-center items-center '>
                 
                  <p className='text-center text-black/50'>
                  Our Window cleaning utilizes advanced equipment and professional techniques to remove dust, dirt, water spots, and streaks from glass surfaces. Using the latest water-fed pole systems, eco-friendly solutions, and high-reach cleaning technology, it ensures a spotless, streak-free finish for windows in homes, offices, and commercial buildings, enhancing clarity and curb appeal.
      
      
                  </p>
                  
                  </div>
                 
                  
              </div>
             
          </div>
          <h3 className='text-3xl font-bold text-black/85 text-center'>Some of Our Works</h3>
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
