import React from 'react'
import { portofolio } from '../../data'

const Portofolio = () => {
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0'>
            <div className=''>
                <h1 className='text-secondary dark:text-primary text-9xl font-extrabold fontM absolute top-20 titleP left-[500px] pb-4 title dark:shadowNone'>Behind</h1>
                <h1 className='text-secondary dark:text-primary text-9xl font-black fontM absolute top-[570px] right-[210px] flex flex-col title dark:shadowNone'><span className='text-7xl font-extrabold'>the</span>SCENES</h1>
            </div>
            <div className=' bg-primary dark:bg-secondary w-full grid grid-cols-2 gap-1 justify-center justify-items-center p-24 pr-32'>
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