import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Contact = () => {
    const [name, setName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [show, setShow] = useState(true);

    const handleChangeName = event => {
        setName( event.target.value);
    };
    const handleChangeLName= event => {
        setLName( event.target.value);
    };    
    const handleChangeEmail = event => {
        setEmail( event.target.value);
    };    
    const handleChangeMessage = event => {
        setMessage( event.target.value);
    };

    const form = useRef();

    const sendEmail = (event) => {
      console.log(name, lname, email, message);
      setShow(!show);
      event.preventDefault();

      emailjs.sendForm('service_sms3izg', 'template_bvxeaeh', form.current, 'cJq7vuqUxvTO9HxJB')
        .then((result) => {
            console.log(result.text);
            console.log("sent")
        }, (error) => {
            console.log(error.text);
            console.log("error")
        });
    };
  return (
    <>
        <section className='bg-white w-10/12 h-screen dark:bg-black absolute right-0 p-56 mobile:w-full desktop:w-10/12 mobile:p-5 desktop:p-56'>
            <div className='pr-44 pb-4 mobile:displayNone desktop:displayInit'><h1 className='text-secondary text-7xl font-medium border-b-[1px] border-gray-200 py-4 pb-9 dark:text-primary mobile:text-3xl desktop:text-7xl'>Contact Us</h1></div>
            <div className='flex flex-row justify-between pt-11 mobile:flex-col tablet:flex-col desktop:flex-row'>
                <div className='pr-5 w-5/12 mobile:pr-0 desktop:pr-5 mobile:w-full desktop:w-5/12'>
                    <h2 className='text-secondary text-xl p-2 pb-5 dark:text-primary'>Get in touch</h2>
                    <p className='text-xl font-medium p-2 dark:text-primary'><span className='text-secondary text-lg font-bold dark:text-primary'>Email: </span>email@hmail.com</p>
                    <p className='text-xl font-medium p-2 dark:text-primary'><span className='text-secondary text-lg font-bold dark:text-primary'>Phone: </span>+085 375 23</p>
                    <p className='text-xl font-medium p-2 dark:text-primary'><span className='text-secondary text-lg font-bold dark:text-primary'>Adress: </span>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='w-7/12 pl-2 mobile:w-full desktop:w-7/12 mobile:pt-8 mobile:pl-0 desktop:pl-2 desktop:pt-0'>
                    <form ref={form} onSubmit={sendEmail} className={ show ? 'visible' : 'invisible'}>
                        <div className="flex flex-row text-secondary">
                            <div className="relative w-6/12 m-2">
                                <input type="text" name="user_fname" value={name} onChange={handleChangeName} id="first_name" className="block py-3 px-2 w-full text-sm text-secondary bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer dark:text-primary  dark:border-primary" placeholder="First name" required />
                                <label for="first_name" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:text-primary">First name</label>
                            </div>
                            <div className="relative w-6/12 m-2">
                                <input type="text" name="user_lname" value={lname} onChange={handleChangeLName} id="last_name" className="block py-3 px-2 w-full text-sm text-secondary bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer dark:text-primary dark:border-primary" placeholder="Last name " required />
                                <label for="last_name" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:text-primary">Last name</label>
                            </div>
                        </div>
                        <div className="relative m-2">
                            <input type="email" name="user_email" value={email} onChange={handleChangeEmail} id="email" className="block py-3 px-4 w-full text-sm text-secondary bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer dark:text-primary dark:border-primary" placeholder="Email address " required />
                            <label for="email" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:text-primary">Email address</label>
                        </div>
                        <div>
                            <div className="relative m-2">
                                <input type="text" name="message" value={message} onChange={handleChangeMessage} id="message" className="block py-6 px-4 w-full h-20 text-sm text-secondary bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer p-2 dark:text-primary dark:border-primary" placeholder="Message " required />
                                <label for="message" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 dark:text-primary">Message</label>
                            </div>
                        </div>
                        <div className='flex justify-end pr-2 pt-4'>
                            <button type='submit' className='bg-transparent border-[1px] border-gray-300 px-6 py-3 dark:text-primary dark:border-primary'>Submit</button>
                        </div>
                        <div className={show ? "invisible" : "visible"} id="mess">
                            <div className='flex flex-row justify-center items-center -mt-72 mb-36 text-center'>
                                <i className='checkSvg'><AiOutlineCheckCircle size={30}/></i>
                                <h1 className='text-secondary font-medium text-2xl dark:text-primary'>Formular trimis cu succes</h1>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact