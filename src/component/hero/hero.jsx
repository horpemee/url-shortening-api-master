import React from 'react'
import illustrator from "..//../component/hero/images/illustration-working.svg";


const Hero = () => {
  return (
    <div className='ml-32 pt-16 flex flex-row '>
     <div className=' basis-1/2 '>
     <h1 className='text-8xl font-bold text-dark-violet'>More than just shorter links</h1>
     <p className='font-medium text-xl text-gray '>Build your brand's recognition and get detailed <br/> insights on how your links are performing</p>
     <button className=' mt-8 font-medium rounded-full px-6  py-2  bg-cyan text-white hover:bg-teal-200'>Get Started</button>
     </div>
     
     <div className='basis-1/2  flex justify-end'>
        <img src={illustrator} alt="illustrator"/>
     </div>
    </div>
  )
}

export default Hero;