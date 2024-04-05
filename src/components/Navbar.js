import React, { useState } from 'react'
import travlogo from '../assets/travlogo.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaCaretDown} from 'react-icons/fa'
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu'


export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const Navbar = () => {

  const DropdownLinks = [
    {
      name: "Our Services",
      link: "/#services",
    },
    {
      name: "Top Brands",
      link: "/#mobile_brands",
    },
    {
      name: "Location",
      link: "/#location",
    },
  ];

  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md'>
        <div  className='bg-gradient-to-r from-primary to-secondary text-white'>
          <div className='container py-[2px] sm:block hidden '>
            <div className='flex justify-between '>
              <p>20% off on next booking</p>
              <p>Mobile no. +91-1234567890</p>
            </div>

          </div>
        </div>
        <div className='container py-3 sm:py-0'>
          <div className='flex justify-between items-center'>
            {/* logo secction */}
            <div>
              <Link to='/' onClick={()=>window.scrollTo(0, 0)}><img className='h-16' src={travlogo}></img></Link>
            </div>
            {/* NavLinks Section */}
             <div className='hidden md:block'>
                <ul className='flex items-center gap-6'>
                   <li className='py-4'>
                     <NavLink to='/' activeClassName='active' onClick={()=>{window.scrollTo(0, 0)}}>Home </NavLink>
                   </li>
                   <li className='py-4'>
                     <NavLink to='/blogs' activeClassName='active' onClick={()=>{window.scrollTo(0, 0)}}>Blogs </NavLink>
                   </li>
                   <li className='py-4'>
                     <NavLink to='/places' activeClassName='active' onClick={()=>{window.scrollTo(0, 0)}}>Best Places </NavLink>
                   </li>
                   <li className='py-4'>
                     <NavLink to='/about' activeClassName='active' onClick={()=>{window.scrollTo(0, 0)}}>About </NavLink>
                   </li>

                {/* Dropdown section */}
                <li className='py-4 relative group cursor-pointer'>
                    <div className='dropdown flex items-center'>
                      <span>Quick Links</span>
                      <span>
                        <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                      </span>
                    </div>
                    <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    </div>
                </li>
                
                </ul>
             </div>

            <div className='flex items-center gap-4'>
               <button className='bg-gradient-to-r from-primary to-secondary
               hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full'>
                Book Now
               </button>
               {/* mob hamburgerr */}
               <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>   
            
            </div>   
          </div>
        </div>
          <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
      
      </div>
    
    </>
  )
}

export default Navbar