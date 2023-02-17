import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import DarkBtn from "../../common/btn/DarkBtn";


const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="flex items-center justify-between z-50 border-b border-gray-400 py-8 desktop:displayNone bg-primary dark:bg-secondary">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden p-4">
          <div className="HAMBURGER-ICON space-y-2 absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen((prev) => !prev)} >
            <span className="block h-0.5 w-8 bg-secondary dark:bg-primary"></span>
            <span className="block h-0.5 w-8 bg-secondary dark:bg-primary"></span>
            <span className="block h-0.5 w-8  bg-secondary dark:bg-primary"></span>
          </div>
          <div className='absolute top-7 left-6'><DarkBtn/></div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div  onClick={() => setIsNavOpen(false)} >
              <div className="absolute top-0 right-0 px-8 py-8">
              <svg
                className="h-8 w-8 text-secondary dark:text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              </div>
                <ul className="flex flex-col items-center justify-center h-screen">
                    <li className='nav-list text-secondary dark:text-primary'><Link to='/'>Home</Link></li>
                    <li className='nav-list text-secondary dark:text-primary'><Link to='/about'>About</Link></li>
                    <li className='nav-list text-secondary dark:text-primary'><Link to='/services'>Services</Link></li>
                    <li className='nav-list text-secondary dark:text-primary'><Link to='/portofolio'>Portofolio</Link></li>
                    <li className='nav-list text-secondary dark:text-primary'><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
        </section>
      </nav>
    </section>
  );
}

export default Hamburger