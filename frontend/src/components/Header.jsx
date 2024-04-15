import  { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {
  
  FaPhoneAlt ,
  FaTiktok
 
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' ,link:"/"},
    { id: 2, text: 'About',link:"/About" },
    { id: 3, text: 'Places' ,link:"/Places"},
    { id: 4, text: 'Clients',link:"/Clients" },
    { id: 5, text: 'Contact',link:"/Contact" },
  ];

  return (
  <>
    <div className='lg:container bg-orange-400 md:flex justify-between items-center px-8 mx-auto'>
    <div className='flex items-center space-x-2 text-slate-100'>< FaPhoneAlt /> <span >+212 662252627</span></div>
    <div className='flex items-center space-x-2 text-slate-100'><SiGmail/> <span>sihamabouelaoula@gmail.com</span></div>
    <div className='flex items-center space-x-2 text-slate-100'><FaTiktok/> <span>zaktransport</span></div>
  </div>
    <div className="mx-auto sticky top-0 z-50">
      {/* Logo */}
     

      <div className='lg:container shadow-md w-full flex justify-between items-center h-16 px-4 bg-white'>
        <h2 className='w-full text-sm font-bold '><span className='text-[#FF9F1C] font-custom'>ZAK-TRANSPORT</span > <br /><span className='font-Whisper text-2xl '>Touristique VIP</span></h2>
        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-3 hover:bg-[#ffa01c91]  rounded-xl m-7 cursor-pointer duration-300 hover:text-black font-customA font-semibold text-l text-zinc-500'
            >
                <Link to={item.link}>{item.text}</Link>
              {/* <a href="{item.link}" >{item.text}</a> */}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r bg-[#FF9F1C] ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <h1 className='w-full text-2xl font-bold text-[#23190a93]'>ZAK-Transport VIP</h1>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 border-b rounded-xl hover:bg-[#ad804173] duration-300 hover:text-white cursor-pointer border-gray-600'
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;





