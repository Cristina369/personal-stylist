import React from 'react'
import Image1 from './../../images/photo_3.jpg'

const Home = () => {
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0 flex flex-row-reverse mobile:w-full desktop:w-10/12'>
            <div className='w-6/12 h-auto flex flex-row justify-end pr-5'>
                {/* <div className=' -mr-40 z-10 pt-32'>
                    <img className='w-96 border-4 border-primary dark:border-secondary p-6' src={Image1} alt='Sofia Fashion'/>
                </div> */}
                <div>
                    <img className='h-screen z-0' src={Image1} alt='Sofia Fashion'/>
                </div>
            </div>
            <div className='w-6/12 flex flex-col justify-center items-center'>
                <div>
                    <h1 className='text-secondary dark:text-primary relative font-semibold text-[140px] text-right -mr-40 z-20 pl-40 tracking-wide'>Comfort in every outfit</h1>
                </div>
                <div>
                    <ul className='flex flex-row absolute bottom-16 left-11'>
                        <li className='services font-light text-2xl'>Stylization </li>
                        <li className='services font-light text-2xl pl-1'>| Wardrobe detox</li>
                        <li className='services font-light text-2xl pl-1'>| Create new outfits </li>
                        <li className='services font-light text-2xl pl-1'>| Photo sessions </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home