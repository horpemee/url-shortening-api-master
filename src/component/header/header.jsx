/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import Logo from "./imagess/logo.svg"
import MenuSharpIcon from '@mui/icons-material/Menu';

const Header = () => {

  function handleClick(){
 
    // setShowMenu(true)

    {showMenu ?
       setShowMenu(false) : 
       setShowMenu(true)
    }
  
  };

  const [showMenu, setShowMenu] = useState(false)
  return (
    <div>  
        <header className="   flex row mx-8 my-8 items-center justify-between gap-14 text-gray font-medium lg:mx-18 lg:justify-normal xl:mx-32 lg:gap-6  xl:gap-10  "> 
        <div>
         <img src={Logo} alt="logo" />

        </div>
        <div className='items-end lg:items-start lg:hidden'>
          <MenuSharpIcon className='  text-gray  '  style={{ fontSize: '44px' }}  onClick={handleClick}
           />
        </div>
        


        <ul className= "hidden lg:gap-8 lg:flex lg:cursor-pointer lg:items-center lg:justify-between xl:gap-10">
          <li className='hover:text-very-dark-violet '>Features</li>
          <li className='hover:text-very-dark-violet'>Pricing</li>
          <li className='hover:text-very-dark-violet'>Resources</li>
        </ul>
      <ul className='hidden lg:flex lg: flex-grow lg:items-center xl:gap-10  lg:gap-8 lg:cursor-pointer lg:justify-end  '>
      <li className='hover:text-very-dark-violet'>Login</li>
       
       <li className='rounded-full px-6 py-2  bg-cyan text-white hover:bg-teal-200'>Sign Up</li>
      </ul>
     

      
       

        
         
      </header>
      {showMenu &&
      <ul className='  text-center text-2xl font-medium bg-dark-violet mx-8  py-6 rounded-md text-white xl:flex xl:gap-14 cursor-pointer'>
       <li className='py-4 xl:hover:text-very-dark-violet '>Features</ li>
       <li className='py-4 xl:hover:text-very-dark-violet '>Pricing</li>
       <li className='px-4 py-6 border-b mx-6 border-gray xl:hover:text-very-dark-violet '>Resources</li>
       <li className='py-6  '>Login</li>
       <li className='my-4 rounded-full  mx-6 py-3 bg-cyan hover:bg-teal-200'>Sign up</li>
      </ul>
    }
    
    </div>

         
     
  )
}

export default Header;