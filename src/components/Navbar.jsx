import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='fixed top-0 left-0 w-full h-16  px-4 z-50    backdrop-blur-sm  flex items-center justify-between'>
            <NavLink to='/' className='w-10 h-10 bg-white  rounded-lg  items-center justify-center flex  font-bold shadow-md'>
                <p className='bg-gradient-to-l from-blue-300 via-blue-500 to-sky-400 bg-clip-text text-transparent'>GK</p>
            </NavLink>
            <nav>
                <ul className='flex space-x-7 md:mr-6 items-center justify-center h-full'>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-lg ${isActive ? 'text-blue-500 font-semibold' : 'text-black'} hover:text-gray-900`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `text-lg ${isActive ? 'text-blue-500 font-semibold' : 'text-black'} hover:text-gray-900`
                        }
                    >
                        Project
                    </NavLink>
                   
                </ul>
            </nav>
        </header>
    )
}

export default Navbar