'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Reviews = () => {
    const slides = [
        {
            title: "Isaac Adeleke",
            description: "My Solar Panel has never been this efficient since the year I moved in. You guys did a great job! I'm impressed and I'm certainly referring you to my colleagues."
          },
          {
            title: "Chioma Grace",
            description: "The service was exceptional! The team was professional and efficient. I couldn't be happier with the results."
          },
          {
            title: "John Smith",
            description: "Absolutely fantastic! The attention to detail was amazing. I will definitely use your services again."
          },
          {
            title: "Hassan Danjuma",
            description: "Great job! The team was punctual and thorough. My Window looks spotless. Highly recommended!"
          }
      ];
  return (<>
    <h3 className='text-3xl font-bold text-black/85 text-center mt-12'> What Our Clients Say About Us</h3>
    <section className= " min-h-[60vh] flex justify-center items-center c-space">
       
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        navigation
        pagination
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            
              
              
              <div className=  " flex flex-col justify-center items-center md:mx-60 text-black/20 p-4">
               
                <p className="text-sm mt-2 mb-3 text-center">{slide.description}</p>
                <p className="text-base mb-4 font-bold">{slide.title}</p>
                
              </div>
                
            
          </SwiperSlide>
        ))}
      </Swiper>
     
    </section>
    </>
  )
}

export default Reviews
