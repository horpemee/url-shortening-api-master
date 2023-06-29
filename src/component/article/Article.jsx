import React from 'react'
import Brand from "./icons/icon-brand-recognition.svg"
import Record from "./icons/icon-detailed-records.svg"
import Custom from "./icons/icon-fully-customizable.svg"

const Article = () => {

    const Tracks =  [
        {
            id : 0,
            img: Brand,
            title : 'Brand Recognition',
            description : 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.',
            style: 'h-[14rem]',

        },

        {
            id : 1,
            img: Record,
            title : 'Detailed Records',
            description : 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better situations',
            style: 'mt-8 h-[14rem]',

        },
        
        {
            id : 2,
            img: Custom,
            title : 'Fully Customization',
            description : 'Improve brand awareness and content discoverability through customizable links, supercharging audieence engagement.',
            style: 'mt-16 h-[14rem]',

        },
 
    ] 

  return (
    <div className='bg-slate-200 px-32 pt-52 flex flex-col text-center '>
        <h1 className='text-black text-4xl font-extrabold '>Advanced Statistics</h1>
        <p className='mt-4 text-grayish-violet text-lg  font-medium'>Track how your links are performing across the web with <br/> our advanced statistics dashboard</p>

        <div className='flex flex-row my-20 justify-between relative w-full   '>
        <>
        <div className='h-2 bg-cyan w-full absolute top-[50%] -translate-y-[50%] left-0'></div>
        {Tracks.map((track) => (
             <div key={track.id} className={`bg-white p-6 relative w-[30%]  rounded-md  ${track.style}`}>
              <img src = {track.img} alt="brand" className='bg-black rounded-full object-fit p-2  absolute left-[1.5rem] top-[-2rem]  '/>
              <h1 className='text-lg font-bold text-black flex  flex-col text-left my-2'>{track.title}</h1>
               <p className='text-left text-gray font-medium  '>{track.description}</p>
             </div>
            ))}
        </>
          


        </div>
      
    </div>
  )
}

export default Article