import React from 'react'
import Image2 from './../../images/photo_4.jpg'
import { experience } from '../../data'

const About = () => {
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0 mobile:w-full desktop:w-10/12 mobile:flex-col desktop:flex-row'>
            <div className='flex flex-row z-10 bg-primary dark:bg-secondary'>
              <div className='w-6/12 pl-28 mobile:w-full desktop:w-6/12 mobile:p-2 desktop:pl-28 mobile:flex mobile:justify-center desktop:relative'>
                      <img className='h-full mobile:h-96 desktop:h-full p-10 relative z-10' src={Image2} alt=''/>
                      <div className='absolute left-80 top-72 mobile:displayNone desktop:displayInit mobile:h-8/12 desktop:h-12/12 z-30'>
                        <div className='w-80 bg-secondary h-[2px] -mb-8 ml-[310px] dark:bg-primary'></div>
                        <h1 className=' font-semibold fontM text-6xl text-primary'>About ME</h1></div>
              </div>
              <div className='w-6/12 mobile:w-full desktop:w-6/12 bg-primary dark:bg-secondary'>
                <div className='absolute bottom-8 p-20 mobile:relative mobile:p-5 desktop:absolute desktop:bottom-8 desktop:p-20'>
                  <h1 className='font-bold text-2xl pb-6 dark:text-primary mobile:pt-7 desktop:pt-0'>Heyyy, I am SOFIA</h1>
                  <p className='font-normal text-lg pr-32 dark:text-primary mobile:pr-2 mobile:pl-2 desktop:pl-0 desktop:pr-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil, aliquam reprehenderit a soluta temporibus quaerat vero, pariatur perspiciatis, id dolore inventore odit voluptatibus repellendus consequuntur ipsa similique officia iusto?</p>
                </div>
              </div>
            </div>
            <div className='w-[900px] h-[690px] border-4 border-secondary dark:border-primary absolute top-96 left-[350px]'></div>
            <div className='w-full flex flex-row-reverse justify-center items-center bg-primary dark:bg-secondary z-10 -mt-3'>
              <div className='w-6/12'>
                <img className='w-10/12 mobile:h-96 desktop:h-full relative' src={Image2} alt=''/>
              </div>
              <div className='w-6/12 pt-5 pb-12 pl-5'>
                <h1 className='text-secondary dark:text-primary font-bold text-8xl fontM text-left px-4 pb-16 pt-16'>Experience</h1>
                {experience.map((val, index)=>(
                <div className='flex flex-row justify-start items-start' key={index} >
                    <div className=' flex flex-row justify-center items-center px-10 py-5'>
                      <h1 className='text-secondary dark:text-primary font-semibold text-5xl fontM pr-7'>{val.nr}</h1>
                      <div className='pl-7 border-l-2 border-gray-200 dark:border-primary w-full'>
                        <h2 className='text-secondary dark:text-primary font-semibold text-3xl fontM pr-5'>{val.title}</h2>
                        <h3 className='text-secondary dark:text-primary font-medium text-2xl fontM pr-5'>{val.subtitle}</h3>
                        <p className='text-secondary dark:text-primary text-xl fontM pr-5'>{val.desc}</p>
                      </div>
                    </div>
                </div>
                ))}
              </div>
            </div>
        </section>
    </>
  )
}

export default About