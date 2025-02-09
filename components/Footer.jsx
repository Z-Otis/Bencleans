import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='min-h-20  bg-black/85 text-white'>
        <div className="flex justify-between items-center gap-2 md:gap-4 md:mx-32 mx-2">
            <div className='pt-6 w-[32%]'>
                <h5 className='text-white text-center text-2xl mb-3'>Ben<span className='text-white/45'>Cleans</span></h5>
                <p className='text-center text-sm'>Window and Solar Panel cleaning services</p>
            </div>
            <div className='mx-1 w-[3px] h-12 bg-white'>
               
               </div>
            <div className='pt-6 w-[32%] text-sm'>
                <p className='text-center mx-1 md:mx-12'> 26 Moses street Ajao estate, Off Okeafa, Lagos Nigeria</p>
           
            </div>
            <div className='mx-1 w-[3px] h-12 bg-white'>
               
            </div>
            
            <div className='text-center pt-6 flex flex-col w-[32%] text-sm'>
               
                <p>08165124859</p>
                <p>Opening hours: 8am - 6pm</p>
                <p>Monday - Saturday</p>

           
            </div>
        </div>
        <div className="bg-black/45 text-white flex justify-center gap-5 items-center ">
            <p>© 2025 Ben<span className='text-white/45'>Cleans.</span> Created by Web Hub</p>
            <div className="flex gap-4 ">
                <Link href="https://www.facebook.com/profile.php?id=61572529717909" target='_blank' >
                <Image height={100}
                width={100}
                alt='facebook'
                src='/assets/facebook.svg'
                className='w-4 h-4'
                />
                </Link>
                <Link href="https://www.instagram.com/ben.windowcleaning" target='_blank'>
                <Image height={100}
                width={100}
                alt='instagram'
                src='/assets/instagram.svg'
                className='w-4 h-4'
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
        <p>Booking Policy</p>
    
    </div>
    </section>
  )
}

export default Footer
