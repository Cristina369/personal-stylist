import React from 'react'
import { portofolio } from '../../data'

const Portofolio = () => {
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0'>
            <div>
                <h1>Behind the scenes</h1>
            </div>
            <div className='grid grid-cols-2'>
                {portofolio.map((val, index)=>(
                    <div className='' key={index}>
                        <img className='h-96' src={val.image} alt={val.title}/>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Portofolio