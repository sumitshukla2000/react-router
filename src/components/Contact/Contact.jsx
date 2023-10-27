import React from 'react'

const Contact = () => {
    return(
        <div className='bg-white py-12'>
            <div className='px-8 max-w-screen-xl'>
                <form className='px-4 rounded-md py-8 shadow-2xl bg-orange-300 flex flex-col justify-center items-center max-w-md mx-auto '>
                    <div className='py-2 w-full'>
                        <input type="text" className='bg-orange-100 focus:bg-white outline-slate-700 focus:outline invalid:border-red-500 invalid:border w-full py-2 rounded px-4' placeholder='Enter Name'/>
                    </div>
                    <div className='py-2 w-full'>
                        <input type="email" className='bg-orange-100 focus:bg-white invalid:outline-red-500 focus:outline outline-slate-500 w-full py-2 rounded px-4' placeholder='Enter Email'/>
                    </div>
                    <div className='bg-indigo-700 duration-300 px-4 py-2 p-4 rounded mt-4 hover:bg-indigo-600 text-white hover:shadow-lg hover:scale-105'>
                        <button className='uppercase font-semibold '>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;