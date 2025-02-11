import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <section className='bg-gray-100  mx-auto'>
        <div className="w-[4px] mt-12 mx-auto h-24 bg-black/45">
            {/* Small rectangle div */}
        </div>
      
      <h4 className='text-3xl my-12 font-bold text-black/85 text-center'>
        Contact Us
      </h4>
  
      <div className='relative min-h-[50vh] bg-black/85 '>
          <Image
          src='/hero1.jpg'
          height={300}
          width={600}
          alt='car1'
          className='object-cover h-full w-full absolute opacity-30' />
      </div>
     
      <div className="flex">
            <div className=" p-12">
                
                <p className='text-lg'>For more information, contact us</p>
                <p className='text-lg'>Phone No: 08165124859</p>
                <p className='text-lg'>Email: benjaminchukwukaelo@gmail.com</p>
                <p className='text-lg'>Address: Moses street, off Okeafa, Ikeja, Lagos State</p>
                <div className='flex gap-4'>
                    <p className='text-lg'>Our Social Media:</p>
                    <div className='flex gap-3'>
                    <Link href="https://www.facebook.com/profile.php?id=61572529717909" target='_blank' >
                <Image height={100}
                width={100}
                alt='instagram'
                src='/assets/facebook.svg'
                className='w-8 h-8'
                />
                </Link>
                <Link href="https://www.instagram.com/ben.windowcleaning" target='_blank'>
                <Image height={100}
                width={100}
                alt='tiktok'
                src='/assets/instagram.svg'
                className='w-8 h-8 text-black'
                />
                </Link>
                    </div>
                    </div>
                
                </div>
      </div>
             
              
         
      </section>
  )
}

export default page
