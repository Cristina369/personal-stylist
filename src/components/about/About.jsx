import React from 'react'
import Image1 from './../../images/back.gif'
import Image2 from './../../images/photo_4.jpg'


const About = () => {
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0 flex flex-row'>
            <div className='w-8/12 pl-20'>
                    <img className='h-screen' src={Image2} alt=''/>
                    {/* <img  className='' src={Image1} alt=''/> */}
            </div>
            <div className='w-4/12'>
                <h1 className=''>Heyyy, I am SOFIA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil, aliquam reprehenderit a soluta temporibus quaerat vero, pariatur perspiciatis, id dolore inventore odit voluptatibus repellendus consequuntur ipsa similique officia iusto?</p>
            </div>
        </section>
    </>
  )
}

export default About