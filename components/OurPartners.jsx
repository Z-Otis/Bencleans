import Image from 'next/image';
import React from 'react'

const OurPartners = () => {
  
  return (
    <section className='bg-gray-100'>
        <div className='w-[4px] mx-auto h-24 bg-black/45'>
            {/* Small rectangle div */}
        </div>
        <h4 className='text-3xl mt-12 font-bold text-black/85 text-center'>
            Our Partners
        </h4>

        <div className="overflow-hidden bg-transparent w-full py-4 h-[100px] mt-12">
      <div className="gap-4 animate-scroll">
    
          <Image
        
            src="/access.png"
            height={100}
            width={200}
           alt="slider-img"
            className="h-24 w-24 object-contain"
          />
          <Image
        
            src="/eagle.png"
            height={100}
            width={200}
           alt="slider-img"
           className="h-24 w-24 object-contain object-center"
          />
         
          <Image
            src="/flutter.png"
            height={100}
            width={200}
            alt="solar1-img" 
             className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/pix.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/uba.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/patricia.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/firstBank.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/cassina.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />

          {/* duplicate */}
          <Image
            src="/dangote.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
        
            src="/access.png"
            height={100}
            width={200}
           alt="slider-img"
            className="h-24 w-24 object-contain"
          />
          <Image
        
            src="/eagle.png"
            height={100}
            width={200}
           alt="slider-img"
           className="h-24 w-24 object-contain object-center"
          />
         
          <Image
            src="/flutter.png"
            height={100}
            width={200}
            alt="solar1-img" 
             className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/pix.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/uba.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/patricia.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/firstBank.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/cassina.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
          <Image
            src="/dangote.jpg"
            height={100}
            width={200}
            alt="solar1-img" 
              className="h-24 w-24 object-contain object-center"
          />
         
    
      </div>
    </div>
    <div className='min-h-[20vh] flex justify-center items-center c-space '>
        <h6 className=' text-black/45 text center' >Contact Us Now</h6>
    </div>

       
    </section>
  )
}

export default OurPartners
