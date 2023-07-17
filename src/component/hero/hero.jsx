import React from 'react'
import illustrator from "..//../component/hero/images/illustration-working.svg";


const Hero = () => {
  return (
    <div className=' flex flex-col flex-col-reverse mx-8 lg:ml-18 xl:ml-32 xl:pt-16 xl:flex xl:flex-row    '>
     <div className=' items-center text-center xl:basis-1/2 xl:text-left '>
     <h1 className=' text-6xl text-dark-violet py-4 px-1 font-bold xl:text-8xl   '>More than just shorter links</h1>
     <p className='font-normal text-xl text-gray px-4 lg:px-1 xl:px-2 '>Build your brand's recognition and get detailed insights on how your links are performing</p>
     <button className=' mt-4 font-medium rounded-full px-10  py-4  bg-cyan text-white hover:bg-teal-200 xl:px-6 xl:py-2 xl:item-left xl:mt-8 xl:justify-self-start '>Get Started</button>
     </div>
     
     <div className='basis-1/2  flex justify-end '>
        <img src={illustrator} alt="illustrator"/>
     </div>
    </div>
  )
}

export default Hero;