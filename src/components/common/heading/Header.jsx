import React from 'react'
import { Link } from 'react-router-dom'
import DarkBtn from "../../common/btn/DarkBtn";

const Header = () => {
  return (
    <>
    <section className='bg-primary dark:bg-secondary w-2/12 h-screen fixed flex justify-center items-center border-r border-secondary dark:border-primary mobile:displayNone tablet:displayNone desktop:flex'>
        <header>
            <nav className=''>
                <div className='absolute top-24 font-medium text-5xl text-secondary dark:text-primary'>
                    <h2>Sofia</h2>
                </div>
                <div className='flex flex-col items-center justify-around'>
                    <ul className='flex flex-col justify-center'>
                        <li className='nav-list text-secondary dark:text-primary'><Link to='/'>Home</Link></li>
                        <li className='nav-list text-secondary dark:text-primary'><Link to='/about'>About</Link></li>
                        <li className='nav-list text-secondary dark:text-primary'><Link to='/services'>Services</Link></li>
                        <li className='nav-list text-secondary dark:text-primary'><Link to='/portofolio'>Portofolio</Link></li>
                        <li className='nav-list text-secondary dark:text-primary'><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className='absolute bottom-10 flex justify-center items-center pl-5 pr-11 py-3 border border-secondary rounded-full dark:border-primary'>
                    <DarkBtn/>
                </div>
            </nav>
        </header>
    </section>
    </>
  )
}

export default Header
