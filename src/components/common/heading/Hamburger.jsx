import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'


const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="flex items-center justify-between border-b border-gray-400 py-8 desktop:displayNone">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden p-4">
          <div
            className="HAMBURGER-ICON space-y-2 absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-secondary"></span>
            <span className="block h-0.5 w-8 bg-secondary"></span>
            <span className="block h-0.5 w-8  bg-secondary"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
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
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className='nav-list text-secondary dark:text-primary'><Link to='/'>Home</Link></li>
                <li className='nav-list text-secondary dark:text-primary'><Link to='/about'>About</Link></li>
                <li className='nav-list text-secondary dark:text-primary'><Link to='/services'>Services</Link></li>
                <li className='nav-list text-secondary dark:text-primary'><Link to='/portofolio'>Portofolio</Link></li>
                <li className='nav-list text-secondary dark:text-primary'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </section>
      </nav>
    </section>
  );
}

export default Hamburger