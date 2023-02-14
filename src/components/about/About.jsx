import React from 'react'
import Image2 from './../../images/photo_4.jpg'


const About = () => {
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0 flex flex-row'>
            <div className='w-6/12 pl-28'>
                    <img className='h-full' src={Image2} alt=''/>
                    <div className='absolute left-80 top-72'>
                      <div className='w-80 bg-secondary h-[2px] -mb-8 ml-[310px] dark:bg-primary'></div>
                      <h1 className=' font-semibold fontM text-6xl text-primary'>About ME</h1></div>
            </div>
            <div className='w-6/12'>
              <div className='absolute bottom-8 p-20'>
                <h1 className='font-bold text-2xl pb-6 dark:text-primary'>Heyyy, I am SOFIA</h1>
                <p className='font-normal text-lg pr-32 dark:text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil, aliquam reprehenderit a soluta temporibus quaerat vero, pariatur perspiciatis, id dolore inventore odit voluptatibus repellendus consequuntur ipsa similique officia iusto?</p>
                <ul className='pl-8 pt-6'>
                  <li className='fontM text-xl py-2 dark:text-primary'>4 years of experience</li>
                  <li className='fontM text-xl py-2 dark:text-primary'>+800 satisfied customers</li>
                  <li className='fontM text-xl py-2 dark:text-primary'>300 styles for brands</li>
                </ul>
              </div>
            </div>
        </section>
    </>
  )
}

export default About