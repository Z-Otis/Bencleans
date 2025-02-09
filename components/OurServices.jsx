import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/constants.js'
 
const OurServices = () => {
  return (<>
    
   <section className='bg-gray-100 c-space mx-auto'>
   <div className="w-[4px] mx-auto h-24 bg-black/45">
          {/* Small rectangle div */}
    </div>
    
    <h4 className='text-3xl font-bold text-black/85 text-center mt-12'>
      Our Services
    </h4>
    <div className='flex flex-col md:flex-row gap-12 md:gap-28 mt-6 md:mt-16 md:ms-1'>
      <div >

          <Image
            src='/service1.png'
            alt='car1'
            width={500}
            height={300}
            className='rounded-lg object-cover min-h-[80vh] w-fit '
          />
        
      </div>
      <div className='flex flex-col min-h-[80vh] justify-center items-center'>
        <div className=' flex flex-col mx-auto md:ms-8 '>
         {services.map(({id, title, desc, src, alt, href}) => (
            <div key={id} className='flex flex-col mb-6 items-center justify-center'>
                <Image 
                src={src}
                height={80}
                width={80}
                alt={alt}
                className='w-20 h-20'
                />
            <Link href={href}>

            <h4 className='text-2xl font-bold text-blue-700 underline cursor-pointer'>
               {title}
             </h4>
            </Link>
            
             <p className='text-center mx-20 '>
               {desc}
             </p>
           </div>


            ))}
          
        </div>
      </div>
    </div>
   </section>
   </>
  )
}

export default OurServices
