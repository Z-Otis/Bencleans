import Image from 'next/image'
import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div className='c-space' id='about' >
        <div className="w-[4px] mx-auto h-24 bg-black/45 ">
          {/* Small rectangle div */}
    </div>
      <h4 className='text-3xl font-bold text-black/85 mt-12 text-center'>
        About Us
      </h4>

      <div className='flex flex-col md:flex-row gap-4 md:gap-12 mt-6'>
      <div>
        <div className='relative h-96 w-80 border-4 border-black/45'>
       
            <Image
            src='/about1.jpeg'
            alt='car1'

            width={500}
            height={300}
            className='rounded-lg object-cover h-96 w-80 absolute z-20 right-[-60px] bottom-[-48px]  '
            />
        </div>
      </div>
       
        <div className='flex flex-col min-h-[80vh] p-12 justify-center items-center '>
            <div className=' space-y-8 flex flex-col justify-center items-center '>
            <h4 className='text-2xl font-bold text-black/85 text-center'>
            Dirty Windows & Panels? We’ve Got It Covered!
            </h4>
            <p className='text-center text-black/45 '>
            At Ben Services, we specialize in professional window and solar panel cleaning, ensuring crystal-clear views and maximum energy efficiency. Our dedicated team pays meticulous attention to detail, leaving no streaks or residue behind. Whether for homes, businesses, or industrial properties, we provide top-tier cleaning solutions designed to enhance aesthetics and performance. Committed to excellence, we go above and beyond to deliver exceptional results, outstanding customer service, and competitive pricing. Experience the Ben Services difference—where clarity meets quality!
            </p>
            <Button name='Learn More' containerClass='bg-black text-white mt-12 shadow-md' href='/about' />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default About
