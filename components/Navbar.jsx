'use client'
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";






const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
      };

     


  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black'>
     <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-2 mx-auto c-space">
        <a href="/" className=" font-bold text-xl hover:text-white transition-colors ">
        <Image 
        height={100}
        width={100}
        alt="logo-img"
        src="/logo.png"
        className="h-16 w-16 md:h-16 md:w-16"
        />
        </a>
        
        <nav className="sm:flex hidden">
        <ul className="nav-ul">
        
           <li className="nav-li">
                <a href="/" className="nav-li_a">Home</a>
            </li>
           <li className="nav-li">
                <a href="/about" className="nav-li_a">About</a>
            </li>
           <li className="nav-li">
           <div className="relative inline-block group">
      {/* Dropdown trigger link */}
      <a
        href="/services"
        className="nav-li_a"
      >
        Services
      </a>

      {/* Dropdown menu (visible on hover) */}
      <div className="absolute mt-2 bg-white border rounded shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
        <a
          href="/services/window"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Window Cleaning
        </a>
        <a
          href="/services/solar-panel"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Solar-Panel Cleaning
        </a>
       
      </div>
    </div>
            </li>
           <li className="nav-li">
                <a href="/contact" className="nav-li_a">Contact</a>
            </li>
      
  </ul>
        </nav>
        
        <div className="flex items-center space-x-1">
        <Button name="Book Now"
  containerClass="text-blue-950 bg-white hover:text-green-500" href="https://wa.me/+2348165124859" />
<button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="toggle menu">
  <Image src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} 
  height={24}
  width={24}
  alt="toggle"
   className="w-6 h-6" />
</button>

</div>

</div>
</div>
<div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
  <nav className="p-5">
  <ul className="nav-ul">
        
        <li className="nav-li">
             <a href="/" className="nav-li_a">Home</a>
         </li>
        <li className="nav-li">
             <a href="/about" className="nav-li_a">About</a>
         </li>
        <li className="nav-li">
        <div className="relative inline-block group">
   {/* Dropdown trigger link */}
   <a
     href="/services"
     className="nav-li_a"
   >
     Services
   </a>

   {/* Dropdown menu (visible on hover) */}
   <div className="absolute mt-2 bg-white border rounded shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
     <a
       href="/services/window"
       className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
     >
       Window Cleaning
     </a>
     <a
       href="/services/solar-panel"
       className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
     >
       Solar-Panel Cleaning
     </a>
    
   </div>
 </div>
         </li>
        <li className="nav-li">
             <a href="/contact" className="nav-li_a">Contact</a>
         </li>
   
</ul>
  </nav>
</div>
    </header>
  )
}

export default Navbar
