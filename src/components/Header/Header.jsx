import React , { useState } from 'react'
import { Link , NavLink } from 'react-router-dom';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const Header = (props) =>{
    
    return(
        <header className='shadow-lg fixed bg-white inset-x-0'>
            <nav className='py-4 px-6'>
                <div className='flex items-center justify-between mx-auto max-w-screen-xl'>
                <Link to="/" className='flex items-center'>
                <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className='h-6 md:h-12' alt="logo" />
                </Link>     

                <div className='flex items-center flex-col md:flex-row md:order-2'>
                    <Link to="#" className='text-md text-gray-600 py-2 px-4 font-bold'> 
                        Log In
                    </Link>
                    <Link to="#" className='text-sm p-1 md:py-2 md:px-4 font-bold bg-red-500 rounded text-white md:text-md'>
                        Get Started
                    </Link>
                </div>
                <div onClick={props.clicked} className='block font-bold order-1 md:hidden'>
                    <img src="https://w7.pngwing.com/pngs/267/362/png-transparent-computer-icons-encapsulated-postscript-others-miscellaneous-button-icon-burger-menu.png" className='h-8' alt="" />
                </div>
        <div className='hidden flex items-center md:flex'>
                <NavigationItems />
        {/* <ul className='flex items-center'>
            <li>
                <NavLink to="/react-router"
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
        </ul> */}
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;

