import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return(
        <div className='bg-white'>
            <div className='max-w-screen-xl pt-24 mx-auto py-12'>
                <div className='items-center justify-center  md:justify-evenly md:flex'>
                    <img src="https://i.ibb.co/5BCcDYB/Remote2.png" className='mx-auto h-60 md:h-72 md:mx-0' alt="image" />
                    <div className='text-center mt-12 md:mt-0 md:text-left'>
                        <h1 className='text-4xl font-bold py-1'>Download Now</h1>
                        <h1 className='text-2xl font-semibold pb-6 '>Lorem Ipsum</h1>
                        <Link className='text-right bg-orange-400 duration-300 rounded-lg mt-6 px-4 py-3 pb-4  font-semibold text-white hover:shadow-lg'>
                        Download Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;