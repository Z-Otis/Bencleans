"use client"; // Required for Next.js 13+ App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroCarousel = () => {
    const slides = [
        {
          image: "/hero1.jpg",
          title: "Clear Windows, Clear Views, Clear Choice! 👀",
          description: "Book Your Sparkling Clean Today!"
        },
        {
          image: "/hero3.jpg",
          title: "We Make Your Windows Shine Like New! ✨",
          description: "Professional • Reliable • Affordable"
        },
        {
          image: "/hero4.jpg",
          title: "See the World Through Spotless Windows! 🏡✨",
          description: "Streak-Free, Hassle-Free, 100% Satisfaction Guaranteed!"
        },
        {
          image: "/hero2.jpeg",
          title: "Dirt Blocks Energy—We Bring the Shine! 🚿",
          description: "Keep Your Panels Clean & Your Bills Low!"
        }
      ];

  return (
    <div className="w-full relative min-h-screen mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
       
       
        autoplay={{ delay: 3000 }}
        loop={true}
        className="shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-lg" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-xl font-bold">{slide.title}</h2>
                <p className="text-sm mt-2">{slide.description}</p>
                
              </div>
                
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
};

export default HeroCarousel;
