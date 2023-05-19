import React from 'react'
import bgImage from ".//bg-img/bg-boost-desktop.svg";

const Section = () => {
  return (
        <div className="  bg-dark-violet bg-cover bg-no-repeat bg-center flex flex-col h-52 items-center justify-center"  style={{ backgroundImage: `url(${bgImage})` }} >
                 <span className='text-white font-bold text-2xl mb-4'>Boost your links today</span>
                 <button className='rounded-full px-6 py-2  bg-cyan text-white hover:bg- text-base hover:bg-teal-200'>Get Started</button> 
        
        </div>
  
  )
}

export default Section