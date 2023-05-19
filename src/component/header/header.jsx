import React from 'react'
import Logo from "./imagess/logo.svg"

const Header = () => {
  return (
       <header className=" box-border flex row mx-32 my-10 items-center gap-14 text-gray font-medium  "> 
       <img src={Logo} alt="logo" />
        <ul className=' flex  flex-1 gap-14 cursor-pointer  '>
          <li className='hover:text-very-dark-violet '>Features</li>
          <li className='hover:text-very-dark-violet'>Pricing</li>
          <li className='hover:text-very-dark-violet'>Resources</li>

        </ul>
         
        <ul className='flex items-center gap-14 cursor-pointer '>
        <li className='hover:text-very-dark-violet'>Login</li>
        <li className='rounded-full px-6 py-2  bg-cyan text-white hover:bg-teal-200'>Sign Up</li>

        </ul>

       </header>
  )
}

export default Header;