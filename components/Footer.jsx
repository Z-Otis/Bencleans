import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='min-h-20  bg-black text-white md:p-6 p-2 '>
        <div className="flex justify-between items-center gap-2 md:gap-4 md:mx-32 mx-2">
            <div className='pt-6 w-[32%]'>
                <h4 className='text-white text-center text-2xl mb-3'>Ben<span className='text-neutral-500'>Cleans</span></h4>
                <p className='text-center'>Window and Solar Panel cleaning services</p>
            </div>
            <div className='mx-1 w-[3px] h-12 bg-white'>
               
               </div>
            <div className='pt-6 w-[32%]'>
                <h4 className='text-center mx-1 md:mx-12'>Moses street, off Okeafa rd Ikeja, Lagos State</h4>
           
            </div>
            <div className='mx-1 w-[3px] h-12 bg-white'>
               
            </div>
            
            <div className='text-center pt-6 flex flex-col w-[32%]'>
               
                <h4>+234 0704 963 0635</h4>
                <h4>Opening hours: 8am - 6pm</h4>
                <h4>Monday - Saturday</h4>

           
            </div>
        </div>
        <div className="bg-black/45 text-white flex justify-center gap-5 items-center ">
            <h5>© 2025 BENX. Created by Web Hub</h5>
            <div className="flex gap-4 ">
                <Link href="https://www.facebook.com/profile.php?id=61572529717909" target='_blank' >
                <Image height={100}
                width={100}
                alt='instagram'
                src='/assets/facebook.svg'
                className='w-4 h-4'
                />
                </Link>
                <Link href="https://www.instagram.com/ben.windowcleaning" target='_blank'>
                <Image height={100}
                width={100}
                alt='tiktok'
                src='/assets/instagram.svg'
                className='w-4 h-4 text-pink-500'
                />
                </Link>
                </div>
        </div>
    <div className='flex justify-center gap-4 text-sm items-center text-white/35'>
        <p>Terms and conditions</p>
        <p>Disclaimer</p>
        <p>Privacy policy</p>
        <p>Cookies policy</p>
        <p>FAQ</p>
        <p>Booking and cancellation Policy</p>
    
    </div>
    </section>
  )
}

export default Footer
