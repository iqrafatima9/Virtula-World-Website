import { Menu, X} from "lucide-react";
import { useState } from 'react';
import React from 'react';
import { navItems } from '../Constants';

const Navbar = () => {
  const[ mobileDrawerOpen, setMobileDrawerOpen ] = useState(false);
  const toggleNavbar=()=>{
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <>
    <div>
    <nav className="fixed top-0  left-0 right-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
      <div className="flex justify-between items-center ">
        <div className="flex items-center flex-shrink-0">
          <img className='h-10 w-10 mr-2' src="src/assets/logo.png" alt="" />
          <span className="text-xl tracking-tight py-2">VirturalR World</span>
        </div >
        <ul className="hidden lg:flex ml-14  space-x-12   justify-between text-center">
          {navItems.map((x,index)=>
          <li key={index}>
            <a href='{x.href}'>{x.lable}</a>
          </li>
           )}
            </ul>
        <div className="hidden lg:flex space-x-3 justify-center items-center">
          <a href='#'className='py-2 px-3 border rounded-md'>
            Sign In
          </a>
          <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
            Create The Account
          </a>

        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X/>:<Menu/>}
          </button>
        </div>
       </div>
       {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex-col justify-center text-center lg:hidden">
          <ul> 
            {navItems.map((x,index)=>(
              <li key={index} className="py-4">
                   <a href={x.href}>{x.lable}</a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6">
            <a href="#" className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-900">
              Sign In
            </a>
            <a href="#" className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-900 border rounded-md">
              Create The Account
            </a>
          </div>
        </div>
       )}
    </div>
    </nav>
        

       

      
    </div>
    </>
  )
}

export default Navbar
