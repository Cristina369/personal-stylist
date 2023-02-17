import React from 'react'
import { services } from '../../data'


const Services = () => {
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0 mobile:w-full desktop:w-10/12'>
            <div className='bg-white dark:bg-black pt-28 pl-3'>
                {services.map((val, index)=>(
                    index % 2 ?(
                    <div className='flex flex-row justify-between items-center px-44 pb-28 mobile:flex-col desktop:flex-row mobile:px-0 desktop:px-44'>
                        <div className='w-5/12 mobile:displayNone desktop:displayInit' key={index}>
                            <img className='w-[400px]' src={val.image} alt='services'/>
                        </div>
                        <div className='w-7/12 pr-10 pl-14 pt-16 mobile:w-full desktop:w-7/12 mobile:pl-2 desktop:pl-14 mobile:pr-2 desktop:pr-10'>
                            <h1 className='text-secondary dark:text-primary font-extrabold text-5xl pb-10 flex flex-row justify-between relative z-20 mobile:invisible desktop:visible'>0{val.id}<span className='text-right mobile:visible'>{val.price}$</span></h1>
                            <h1 className='text-primary shadow font-black text-[110px] -ml-32 -mt-48 pb-7 dark:text-secondary dark:title mobile:text-7xl desktop:text-[110px] mobile:ml-0 desktop:-ml-32  mobile:-mt-32 desktop:-mt-48 mobile:pb-16'>{val.title}</h1>
                            <p className='text-secondary dark:text-primary text-lg border-l-2 border-gray-300 pl-5'>{val.desc}</p>
                            <button className='px-5 py-3 border border-secondary fontM  mt-14  dark:text-primary dark:border-primary'>I'm interested</button>
                        </div>
                    </div>):(
                    <div className='flex flex-row-reverse justify-between items-center px-44 pb-28 mobile:flex-col desktop:flex-row-reverse mobile:px-0 desktop:px-44'>
                        <div className='w-5/12 mobile:displayNone desktop:displayInit' key={index}>
                            <img className='w-[400px]' src={val.image} alt='services'/>
                        </div>
                        <div className='w-7/12 pr-10 pt-16 mobile:w-full desktop:w-7/12 mobile:pl-2 desktop:pl-14 mobile:pr-2 desktop:pr-10'>
                            <h1 className='text-secondary dark:text-primary font-extrabold text-5xl pb-10 flex flex-row justify-between relative z-20 mobile:invisible desktop:visible'>0{val.id}<span className='text-right mobile:visible'>{val.price}$</span></h1>
                            <h1 className='text-primary shadow font-black text-[110px] -ml-32 -mt-48 pb-7 dark:text-secondary dark:title mobile:text-7xl desktop:text-[110px] mobile:ml-0 desktop:-ml-32  mobile:-mt-32 desktop:-mt-48 mobile:pb-16'>{val.title}</h1>
                            <p className='text-secondary dark:text-primary text-lg border-l-2 border-gray-300 pl-5'>{val.desc}</p>
                            <button className='px-5 py-3 border border-secondary fontM  mt-14 dark:text-primary dark:border-primary'>I'm interested</button>
                        </div>
                    </div>)
                ))}
            </div>
        </section>
    </>
  )
}

export default Services