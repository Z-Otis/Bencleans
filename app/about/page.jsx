
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='bg-gray-100  mx-auto'>
      <div className="w-[4px] mt-12 mx-auto h-24 bg-black/45">
          {/* Small rectangle div */}
      </div>
    
    <h4 className='text-3xl my-12 font-bold text-black/85 text-center'>
      About Us
    </h4>

    <div className='relative min-h-[50vh] bg-black/85 '>
        <Image 
        src='/hero1.jpg'
        height={300}
        width={600}
        alt='car1'
        className='object-cover h-full w-full absolute opacity-30' />
    </div>
   
    <div className='text-white py-12  bg-black/85 '>
        <div className=' mx-12  flex gap-4 justify-center items-center'>
         
        
        <div className='flex flex-col gap-6 '>
           <h2 className='text-5xl'>50</h2> 
              <p className='text-xl'>Weekly bookings</p>
        </div>
        <div className='flex flex-col mx-4 gap-4'>
        <h2 className='text-5xl'>300+</h2>
        <p className='text-xl'>Satisfied clients</p>
        </div>
        <div className='flex flex-col gap-4'>
        <h2 className='text-5xl'>5</h2>
        <p className='text-xl'>Years of experience</p>
        </div>
        </div>
       
    </div>
    <div className='flex flex-col md:flex-row space-x-4 md:gap-12 mt-6'>
      <div>
        <div className='relative h-96 w-80 border-4 border-indigo-50 mx-12'>
       
            <Image
            src='/hero3.jpg'
            alt='car1'

            width={500}
            height={300}
            className='rounded-lg object-cover h-96 w-80 absolute z-20 right-[-60px] bottom-[-48px]  '
            />
        </div>
      </div>
       
        <div className='flex flex-col min-h-[80vh] p-12 justify-center items-center '>
            <div className=' space-y-3 md:space-y-8 flex flex-col justify-center items-center '>
           
            <p className='text-center'>
            At Ben Services, we pride ourselves on being a dedicated team of meticulous cleaners who prioritize attention to detail. Our mission is to ensure your home or office remains spotless, hygienic, and gleaming.

We offer a comprehensive array of cleaning services tailored to meet the needs of residential, commercial, and industrial clients. Our commitment is to surpass client expectations by delivering top-notch customer service and exceptional cleaning quality, all at highly competitive rates.


            </p>
            
            </div>
           
            
        </div>
       
    </div>
    </section>
  )
}

export default page
