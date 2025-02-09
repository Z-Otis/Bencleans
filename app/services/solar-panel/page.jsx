import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='bg-gray-100  mx-auto'>
         <div className="w-[4px] mt-12 mx-auto h-24 bg-black/45">
             {/* Small rectangle div */}
       </div>
       
       <h4 className='text-3xl my-12 font-bold text-black/85 text-center'>
         Solar-Panel
       </h4>
   
       <div className='relative min-h-[50vh] bg-black/85 '>
           <Image
           src='/solar-img1.jpeg'
           height={300}
           width={600}
           alt='car1'
           className='object-cover h-full w-full absolute opacity-30' />


   </div>
   <div className='mt-12 c-space '>
    <h4 className='text-3xl font-bold text-black/85 text-center'>Keeping Your Solar Panel Clean and Efficient</h4>
    <p className=" text-black/50 mt-8">
    We are committed to providing the highest standard of solar panel cleaning. No matter the size or type of your solar installation, our professional cleaners possess the industry-specific expertise needed to ensure your panels are thoroughly cleaned and operating at peak efficiency.

Our team is trained in the latest safety and security protocols, ensuring that your solar panels are in safe hands. We prioritize delivering exceptional cleaning services while maintaining a secure environment. Trust us to keep your solar panels clean and efficient, maximizing their performance and longevity.
    </p>
   </div>
   <div className='c-space '>
   
    <div className='flex flex-col md:flex-row justify-center items-center md:gap-8'>
    <div>  
           
           <Image
           src='/solar-ba.jpeg'
           alt='car1'

           width={500}
           height={300}
           className='rounded-lg object-contain  h-[350px] w-[550px]  '
           />
       
</div>
  
  <div> 
  <p className='text-black/50'>Why you should clean your Solar panels regularly:</p>  
    <ul className='list-disc list-inside text-black/50 '>
   
      <li>Maximize Energy Production: Dirt, dust, and debris can block sunlight from reaching the solar cells, reducing their efficiency and energy output.</li>
      <li>Extend the Life of Your Solar Panels: Regular cleaning helps prevent damage from accumulated dirt and grime, which can degrade the panels over time.</li>
      <li>Protect Your Investment: Keeping your solar panels clean ensures they operate at their best, protecting the investment you've made in renewable energy.</li>
      <li>Improve the Appearance of Your Property: Clean solar panels enhance the overall look of your property, maintaining a professional and well-kept appearance.</li>
      <li>Ensure your solar panels are operating at peak efficiency</li>
      <li>Maintain Warranty Compliance: Some manufacturers require regular cleaning and maintenance to keep the warranty valid.</li>
    </ul>
    
   </div>
   </div>
   
       <div className='flex flex-col md:flex-row mt-12 mb-16 flex-wrap gap-4 justify-center items-center'>
        
         <Image
         src='/solar-img1.jpeg'
         width={500}
         height={300}
         alt='video'
         
         className='w-96 h-80'/>
         <Image
         src='/solar-img2.jpeg'
         width={500}
         height={300}
         alt='video'
          
         className='w-96 h-80'/>
         
         </div>
         </div>
   
      </section>
  )
}

export default page
