import React from 'react'
import { useState, useEffect } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const DarkBtn = () => {

    const [theme, setTheme] = useState(null);

    const text = () =>{
        if(theme === 'dark'){
            return <h2>Light</h2>
        }
        else if(theme === 'light'){
            return <h2>Dark</h2>
        }
    }

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
        }
        else {
        setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

  return (
    <>
        <button onClick={handleThemeSwitch} className=''>
            <div className='icon w-fit flex justify-center items-center'><WiMoonAltWaningCrescent4 size={35}/>
            <div>{theme === 'dark' ? (
                <h2 className='text-primary w-fit font-medium text-1xl pl-2'>Light</h2>   
            ):(
                <h2 className='text-secondary w-fit font-medium text-1xl pl-2'>Dark</h2>
            )}
            </div>
            </div>
        </button>
    </>
  )
}

export default DarkBtn