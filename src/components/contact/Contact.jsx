import React from 'react'

const Contact = () => {
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0 p-56'>
            <div className='pr-44 pb-4'><h1 className='text-secondary text-7xl font-medium border-b-[1px] border-gray-200 py-4 pb-9 dark:text-primary'>Contact Us</h1></div>
            <div className='flex flex-row justify-between pt-11'>
                <div className='pr-5 w-5/12'>
                    <h2 className='text-secondary text-xl p-2 pb-5 dark:text-primary'>Get in touch</h2>
                    <p className='text-xl font-medium p-2 dark:text-primary'><span className='text-secondary text-lg font-bold dark:text-primary'>Email: </span>email@hmail.com</p>
                    <p className='text-xl font-medium p-2 dark:text-primary'><span className='text-secondary text-lg font-bold dark:text-primary'>Phone: </span>+085 375 23</p>
                    <p className='text-xl font-medium p-2 dark:text-primary'><span className='text-secondary text-lg font-bold dark:text-primary'>Adress: </span>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='w-7/12 pl-2'>
                    <form>
                        <div className="flex flex-row text-secondary">
                            <div className="relative w-6/12 m-2">
                                <input type="text" name="first_name" id="first_name" className="block py-3 px-2 w-full text-sm text-secondary bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer dark:text-primary  dark:border-primary" placeholder="First name" required />
                                <label for="first_name" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:text-primary">First name</label>
                            </div>
                            <div className="relative w-6/12 m-2">
                                <input type="text" name="last_name" id="last_name" className="block py-3 px-2 w-full text-sm text-secondary bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer dark:text-primary dark:border-primary" placeholder="Last name " required />
                                <label for="last_name" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:text-primary">Last name</label>
                            </div>
                        </div>
                        <div className="relative m-2">
                            <input type="email" name="email" id="email" className="block py-3 px-4 w-full text-sm text-secondary bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer dark:text-primary dark:border-primary" placeholder="Email address " required />
                            <label for="email" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:text-primary">Email address</label>
                        </div>
                        <div>
                            <div className="relative m-2">
                                <input type="text" name="message" id="message" className="block py-6 px-4 w-full h-20 text-sm text-secondary bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer p-2 dark:text-primary dark:border-primary" placeholder="Message " required />
                                <label for="message" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:text-primary">Message</label>
                            </div>
                        </div>
                        <div className='flex justify-end pr-2 pt-4'>
                            <button className='bg-transparent border-[1px] border-gray-300 px-6 py-3 dark:text-primary dark:border-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact