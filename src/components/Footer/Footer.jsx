import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () =>{
    return(
        <footer className='bg-white'>
            <div className='mx-auto p-4 py-8 border-y border-slate-200 sm:flex sm:justify-between max-w-screen-xl'>
                <div className='flex items-center justify-center'>
                <Link to="/">
                    <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className=' h-12' alt="logo" />
                </Link>
                </div>
                <div className='mt-12 grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 sm:mt-2'>
                    <div className='text-center'>
                        <h2 className='text-sm uppercase'>Resources</h2>
                        <ul className='py-2'>
                            <li>
                                <Link to='/' className='py-2 text-sm text-gray-700'>
                                Home
                                </Link>
                            </li>
                            <li>
                                <Link to='about' className='py-2 text-sm text-gray-700'>
                               About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='text-center'>
                        <h2 className='text-sm uppercase'>Follow Us</h2>
                        <ul className='py-2'>
                            <li>
                                <Link to='/' className='py-2 text-sm text-gray-700'>
                                Github
                                </Link>
                            </li>
                            <li>
                                <Link to='about' className='py-2 text-sm text-gray-700'>
                               Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='text-center col-span-2 sm:col-span-1'>
                        <h2 className='text-sm uppercase'>Legal</h2>
                        <ul className='py-2'>
                            <li>
                                <Link to='/' className='py-2 text-sm text-gray-700'>
                                Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to='about' className='py-2 text-sm text-gray-700'>
                               Terms & Condition
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;