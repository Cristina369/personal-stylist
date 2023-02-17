import React from 'react'
import { portofolio } from '../../data'

const Portofolio = () => {
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0 mobile:w-full desktop:w-10/12'>
            <div className='mobile:displayNone tablet:displayNone desktop:displayInit'>
                <h1 className='text-secondary dark:text-primary text-9xl font-extrabold fontM absolute top-20 titleP left-[500px] pb-4 title dark:shadowNone'>Behind</h1>
                <h1 className='text-secondary dark:text-primary text-9xl font-black fontM absolute top-[570px] right-[210px] flex flex-col title dark:shadowNone'><span className='text-7xl font-extrabold'>the</span>SCENES</h1>
            </div>
            <div className=' bg-primary dark:bg-secondary w-full grid grid-cols-2 gap-1 justify-center justify-items-center p-24 pr-32 mobile:p-5 mobile:gap-2 desktop:p-24 desktop:pr-32 desktop:gap-1'>
                {portofolio.map((val, index)=>(
                    <div className='' key={index}>
                        <img className='w-[500px]' src={val.image} alt={val.title}/>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Portofolio