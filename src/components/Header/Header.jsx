import React from 'react'
import { Link , NavLink } from 'react-router-dom';
const Header = () =>{
    return(
        <header className='shadow sticky'>
            <nav className='py-4 px-6'>
                <div className='flex items-center justify-between mx-auto max-w-screen-xl'>
                <Link to="/" className='flex items-center'>
                <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className='h-12' alt="logo" />
                </Link>     

                <div className='flex items-center md:order-2'>
                    <Link to="#" className='text-md text-gray-600 py-2 px-4 font-bold'> 
                        Log In
                    </Link>
                    <Link to="#" className='text-md py-2 px-4 font-bold bg-red-500 rounded text-white'>
                        Get Started
                    </Link>
                </div>
        <div className='hidden flex items-center order-1 md:flex'>
        <ul className='flex items-center'>
            <li>
                <NavLink to="/"
                className={({isActive})=>`py-2 px-4 block ${isActive ? "text-orange-700" : "text-gray-700"} font-semibold text-xl hover:text-orange-700`}>
            Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about"
                className={({isActive})=>`py-2 px-4 block ${isActive ? "text-orange-700" : "text-gray-700"} font-semibold text-xl hover:text-orange-700`}>
            About
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact"
                className={({isActive})=>`py-2 px-4 block ${isActive ? "text-orange-700" : "text-gray-700"} font-semibold text-xl hover:text-orange-700`}>
            Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/github"
                className={({isActive})=>`py-2 px-4 block ${isActive ? "text-orange-700" : "text-gray-700"} font-semibold text-xl hover:text-orange-700`}>
            Github
                </NavLink>
            </li>
        </ul>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;

